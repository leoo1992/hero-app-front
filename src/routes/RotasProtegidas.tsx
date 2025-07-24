import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState, type ReactElement } from "react";
import AuthContext from "@/contexts/authContext";
import Loading from "@/components/ui/Loading";
import {
  getTokenFromDocumentCookie,
  verificaJWTService,
} from "@/services/authService";

export default function RotasProtegidas({
  children,
}: {
  readonly children: ReactElement;
}) {
  const { carregando, setCarregando } = useContext(AuthContext);
  const [autenticado, setAutenticado] = useState<boolean | null>(null);

  useEffect(() => {
    async function verifica() {
      setCarregando(true);
      try {
        const token = await getTokenFromDocumentCookie("token");
        if (!token) {
          setAutenticado(false);
          return;
        }

        const verificacao = await verificaJWTService(token);
        if (!verificacao) throw new Error("Token inválido");

        setAutenticado(true);
      } catch (error) {
        console.log("ERROR :", error);
        setAutenticado(false);
      } finally {
        setCarregando(false);
      }
    }

    verifica();
  }, [setCarregando, autenticado]);

  if (carregando || autenticado === null) return <Loading />;
  if (!autenticado && !carregando) return <Navigate to="/" replace />;

  return children;
}
