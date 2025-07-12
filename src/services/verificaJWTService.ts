import type { TUsuario } from "@/types/index.type";
import api from "@/lib/api";

export async function verificaJWTService(): Promise<TUsuario> {
  const resposta = await api.get<TUsuario>("/auth/verifica");
  return resposta.data;
}
