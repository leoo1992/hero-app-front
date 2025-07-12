import { Navigate } from "react-router-dom";
import { useContext, type ReactElement } from "react";
import AuthContext from "@/contexts/AuthContext";
import Loading from "@/components/ui/Loading";

export default function RedirectRoute({
  children,
}: {
  readonly children: ReactElement;
}) {
  const { ehAutenticado, carregando } = useContext(AuthContext);

  if (carregando) return <Loading />;
  return ehAutenticado ? <Navigate to="/dashboard" replace /> : children;
}
