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

const AuthContext = createContext<TAuthContextData>({} as TAuthContextData);

export function AuthProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [usuario, setUsuario] = useState<TUsuario | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const { showLoading, hideLoading } = useLoading();
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      showLoading();
      const localStorageUsuario = localStorage.getItem("@HeroForce:usuario");
      const localStorageToken = localStorage.getItem("@HeroForce:token");

      if (localStorageUsuario && localStorageToken) {
        setUsuario(JSON.parse(localStorageUsuario));
        setToken(localStorageToken);
      }
      setCarregando(false);
      hideLoading();
    }, 500);

    return () => clearTimeout(timer);
  }, [hideLoading, showLoading]);

  const login = useCallback(
    async (credenciais: TLoginCredenciais) => {
      showLoading();
      try {
        const resposta: TAuthResposta = await authService(credenciais);
        setUsuario(resposta.usuario);
        setToken(resposta.token);

        localStorage.setItem(
          "@HeroForce:usuario",
          JSON.stringify(resposta.usuario)
        );
        localStorage.setItem("@HeroForce:token", resposta.token);
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
    localStorage.removeItem("@HeroForce:usuario");
    localStorage.removeItem("@HeroForce:token");
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
