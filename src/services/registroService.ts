import type { TRegistroUsuarioData, TAuthResposta } from "@/types/index.type";
import api from "@/lib/api";

export async function registroService(
  data: TRegistroUsuarioData
): Promise<TAuthResposta> {
  const response = await api.post<TAuthResposta>("/hero", data);
  return response.data;
}
