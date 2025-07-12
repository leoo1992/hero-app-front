import {
  createContext,
  useState,
  useEffect,
  type ReactNode,
  useMemo,
  useCallback,
} from "react";

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
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("@HeroForce:user");
    const storedToken = localStorage.getItem("@HeroForce:token");

    if (storedUser && storedToken) {
      setUsuario(JSON.parse(storedUser));
      setToken(storedToken);
    }

    setCarregando(false);
  }, []);

  const login = useCallback(async (credenciais: TLoginCredenciais) => {
    setCarregando(true);
    try {
      const response: TAuthResposta = await authService(credenciais);
      setUsuario(response.usuario);
      setToken(response.token);

      localStorage.setItem("@HeroForce:user", JSON.stringify(response.usuario));
      localStorage.setItem("@HeroForce:token", response.token);
    } finally {
      setCarregando(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUsuario(null);
    setToken(null);
    localStorage.removeItem("@HeroForce:user");
    localStorage.removeItem("@HeroForce:token");
  }, []);

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
