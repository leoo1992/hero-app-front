import type { TRegistroUsuarioData, TAuthResposta, UpdateHeroDto } from "@/types/index.type";
import api from "@/lib/api";

export async function createHeroService(
  data: TRegistroUsuarioData
): Promise<TAuthResposta> {
  const response = await api.post<TAuthResposta>("/hero", data);
  return response.data;
}

export async function updateHeroService(id: number, dados: Partial<UpdateHeroDto>) {
  const response = await api.put(`/hero/${id}`, dados);
  return response.data;
}