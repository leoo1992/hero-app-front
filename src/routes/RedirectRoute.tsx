import { Navigate } from "react-router-dom";
import { useContext } from "react";
import type { ReactElement } from "react";
import AuthContext from "@/contexts/AuthContext";

export default function RedirectRoute({
  children,
}: {
  readonly children: ReactElement;
}) {
  const { ehAutenticado } = useContext(AuthContext);

  return ehAutenticado ? <Navigate to="/dashboard" replace /> : children;
}
