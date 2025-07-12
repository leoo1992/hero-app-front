import { Navigate } from "react-router-dom";
import { useContext, useEffect, useState, type ReactElement } from "react";
import AuthContext from "@/contexts/authContext";
import Loading from "@/components/ui/Loading";
import { verificaJWTService } from "@/services/verificaJWTService";

export default function RotasProtegidas({
  children,
}: {
  readonly children: ReactElement;
}) {
  const { carregando, logout, ehAutenticado } = useContext(AuthContext);
  const [verificando, setVerificando] = useState(true);
  const [autenticado, setAutenticado] = useState(false);

  useEffect(() => {
    async function verifica() {
      try {
        await verificaJWTService();
        setAutenticado(true);
      } catch {
        setAutenticado(false);
        logout();
      } finally {
        setVerificando(false);
      }
    }
    verifica();
  }, [logout]);

  if (carregando || verificando) return <Loading />;

  if (!autenticado || !ehAutenticado) return <Navigate to="/" replace />;

  return children;
}
