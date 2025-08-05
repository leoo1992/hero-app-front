import {
  createContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import { useLoading } from "@/hooks/useLoading";
import {
  authService,
  getTokenFromDocumentCookie,
  logoutService,
  verificaJWTService,
} from "@/services/authService";
import type {
  TUsuario,
  TLoginCredenciais,
  TAuthResposta,
  TAuthContextData,
} from "@/types/index.type";
import {
  limparLocalStorage,
  limparCookies,
  salvarNoLocalStorage,
} from "@/utils/authUtils";

const AuthContext = createContext<TAuthContextData>({} as TAuthContextData);

export function AuthProvider({ children }: { readonly children: ReactNode }) {
  const [usuario, setUsuario] = useState<TUsuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [ehAutenticado, setEhAutenticado] = useState(true);
  const [carregando, setCarregando] = useState(true);

  const { showLoading, hideLoading } = useLoading();

  const iniciarCarregamento = useCallback(() => {
    setCarregando(true);
    showLoading();
  }, [showLoading]);

  const finalizarCarregamento = useCallback(() => {
    setCarregando(false);
    hideLoading();
  }, [hideLoading]);

  const resetarEstadoAuth = () => {
    setEhAutenticado(false);
    setUsuario(null);
    setToken(null);
  };

  const verificarTokenInicial = useCallback(async () => {
    iniciarCarregamento();
    try {
      const tokenLocal = await getTokenFromDocumentCookie("token");
      if (!tokenLocal) throw new Error("Token não encontrado");

      const user = await verificaJWTService(tokenLocal);
      if (!user) throw new Error("Usuário inválido");

      setUsuario(user);
      setToken(tokenLocal);
      setEhAutenticado(true);
    } catch (error) {
      console.error("Erro ao verificar JWT:", error);
      resetarEstadoAuth();
      limparLocalStorage();
    } finally {
      finalizarCarregamento();
    }
  }, [finalizarCarregamento, iniciarCarregamento]);

  useEffect(() => {
    verificarTokenInicial();
  }, [verificarTokenInicial]);

  const login = useCallback(
    async (credenciais: TLoginCredenciais) => {
      iniciarCarregamento();
      try {
        const {
          access_token,
          refresh_token,
          nome,
          acesso,
          email,
          usuario,
        }: TAuthResposta = await authService(credenciais);

        if (nome && email && acesso && access_token && refresh_token) {
          salvarNoLocalStorage({
            nome,
            token: access_token,
            email,
            acesso,
            refreshToken: refresh_token,
            usuario,
          });

          setUsuario(usuario || null);
          setToken(access_token);
          setEhAutenticado(true);
        }
      } finally {
        finalizarCarregamento();
      }
    },
    [finalizarCarregamento, iniciarCarregamento]
  );

  const logout = useCallback(async () => {
    iniciarCarregamento();
    try {
      await logoutService();
    } catch (error) {
      console.warn("Erro ao chamar logout no backend:", error);
    } finally {
      resetarEstadoAuth();
      limparLocalStorage();
      limparCookies();
      finalizarCarregamento();
    }
  }, [finalizarCarregamento, iniciarCarregamento]);

  const contextValue = useMemo<TAuthContextData>(
    () => ({
      usuario,
      token,
      ehAutenticado,
      carregando,
      login,
      logout: () => {
        void logout();
      },
      setCarregando,
    }),
    [usuario, token, ehAutenticado, carregando, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
