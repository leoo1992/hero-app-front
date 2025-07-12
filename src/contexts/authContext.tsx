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
import { authService } from "@/services/authService";
import { verificaJWTService } from "@/services/verificaJWTService";

const AuthContext = createContext<TAuthContextData>({} as TAuthContextData);

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [usuario, setUsuario] = useState<TUsuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { showLoading, hideLoading } = useLoading();
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(async () => {
      showLoading();

      try {
        const tokenLocal = localStorage.getItem("token");
        if (!tokenLocal) throw new Error("Sem token");
        const user = await verificaJWTService();
        setUsuario(user);
        setToken(tokenLocal);
      } catch {
        setUsuario(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("nome");
      } finally {
        setCarregando(false);
        hideLoading();
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [hideLoading, showLoading]);

  const login = useCallback(
    async (credenciais: TLoginCredenciais) => {
      showLoading();
      try {
        const resposta: TAuthResposta = await authService(credenciais);
        setUsuario(resposta.usuario);

        const token = resposta.token || null;
        const nome = resposta.usuario.nome || null;

        if (token) {
          setToken(token);
          document.cookie = `token=${token}; path=/; max-age=900`;
          localStorage.setItem("token", token);

          if (nome) {
            localStorage.setItem("nome", nome);
          }
        }
      } finally {
        hideLoading();
      }
    },
    [hideLoading, showLoading]
  );

  const logout = useCallback(() => {
    showLoading();
    setUsuario(null);
    setToken(null);
    document.cookie = "";
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    hideLoading();
  }, [hideLoading, showLoading]);

  const contextValue = useMemo(
    () => ({
      usuario,
      token,
      ehAutenticado: !!usuario && !!token,
      carregando,
      login,
      logout,
    }),
    [usuario, token, carregando, login, logout]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export default AuthContext;
