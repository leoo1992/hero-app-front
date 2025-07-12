import type { TLoginCredenciais, TAuthResposta } from "@/types/index.type";
import api from "@/lib/api";

export async function authService(
  credenciais: TLoginCredenciais
): Promise<TAuthResposta> {
  const response = await api.post<TAuthResposta>("/auth/login", credenciais);
  return response.data;
}
