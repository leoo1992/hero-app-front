import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  useMemo,
  useCallback,
} from "react";
import { useLoading } from "@/hooks/useLoading";

import type {
  TUsuario,
  TLoginCredenciais,
  TAuthResposta,
  TAuthContextData,
} from "@/types/index.type";
import {
  authService,
  getTokenFromDocumentCookie,
  logoutService,
} from "@/services/authService";
import { verificaJWTService } from "@/services/verificaJWTService";

const AuthContext = createContext<TAuthContextData>({} as TAuthContextData);

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [usuario, setUsuario] = useState<TUsuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { showLoading, hideLoading } = useLoading();
  const [carregando, setCarregando] = useState(true);
  const [ehAutenticado, setEhAutenticado] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      showLoading();
      setCarregando(true);
      try {
        const tokenLocal = await getTokenFromDocumentCookie("token");
        if (!tokenLocal) throw new Error("Sem token");
        const user = await verificaJWTService(tokenLocal);

        if (!user) throw new Error("Usuário não encontrado");
        setUsuario(user);
        setToken(tokenLocal);
        setEhAutenticado(true);
        setCarregando(false);
        hideLoading();
      } catch (error) {
        console.error("Erro ao verificar JWT:", error);
        setUsuario(null);
        setToken(null);
        window.localStorage.removeItem("nome");
        setEhAutenticado(false);
        setCarregando(false);
        hideLoading();
      } finally {
        setCarregando(false);
        hideLoading();
      }
      hideLoading();
    }, 500);

    return () => clearTimeout(timer);
  }, [hideLoading, showLoading]);

  const login = useCallback(
    async (credenciais: TLoginCredenciais) => {
      showLoading();
      setCarregando(true);
      try {
        const resposta: TAuthResposta = await authService(credenciais);
        setUsuario(resposta.usuario || null);

        const token = resposta.access_token || null;
        const refreshToken = resposta.refresh_token || null;
        const nome = resposta.nome || null;
        const acesso = resposta.acesso || null;
        const email = resposta.email || null;

        if (nome && email && acesso && token && refreshToken) {
          window.localStorage.setItem("nome", nome);
          window.localStorage.setItem("token", token);
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("acesso", acesso);
          window.localStorage.setItem("refreshToken", refreshToken);
          setToken(token);
        }
        setEhAutenticado(true);

        setCarregando(false);
        hideLoading();
      } finally {
        setCarregando(false);
        hideLoading();
      }
    },
    [hideLoading, showLoading]
  );

  const logout = useCallback(async () => {
    setCarregando(true);
    showLoading();

    try {
      await logoutService();
    } catch (error) {
      console.warn("Erro ao chamar logout no backend:", error);
    } finally {
      setEhAutenticado(false);
      setUsuario(null);
      setToken(null);

      document.cookie = "token=; path=/; Max-Age=0;";
      document.cookie = "refresh_token=; path=/; Max-Age=0;";

      window.localStorage.removeItem("nome");
      window.localStorage.removeItem("token");
      window.localStorage.removeItem("email");
      window.localStorage.removeItem("acesso");
      window.localStorage.removeItem("refreshToken");

      hideLoading();
      setCarregando(false);

      window.location.href = "/";
    }
  }, [hideLoading, showLoading]);

  const contextValue = useMemo(
    () => ({
      usuario,
      token,
      ehAutenticado,
      carregando,
      login,
      logout,
      setCarregando,
    }),
    [usuario, token, carregando, login, logout, setCarregando, ehAutenticado]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
