import type { TUsuario } from "@/types/index.type";
import api from "@/lib/api";

export async function verificaJWTService(token: string): Promise<TUsuario> {
  const resposta = await api.post<TUsuario>(
    "/auth/verify",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return resposta.data;
}
