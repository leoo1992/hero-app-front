import type { TLoginCredenciais, TAuthResposta } from "@/types/index.type";
import api from "@/lib/api";

export async function authService(
  credenciais: TLoginCredenciais
): Promise<TAuthResposta> {
  try {
    const response = await api.post<TAuthResposta>("/auth/login", credenciais);
    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log("Erro no login:", error);

    const mensagem =
      error?.response?.data?.erro || "Falha desconhecida no login";
    throw new Error(mensagem);
  }
}
