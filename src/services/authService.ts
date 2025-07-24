import type {
  TLoginCredenciais,
  TAuthResposta,
  TUsuario,
} from "@/types/index.type";
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

export async function logoutService(): Promise<{ message: string }> {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error: unknown) {
    console.error("Erro ao fazer logout:", error);
    throw new Error("Erro ao fazer logout");
  }
}

export async function getTokenFromDocumentCookie(
  nome: string
): Promise<string | null> {
  const regex = new RegExp(`(^| )${nome}=([^;]+)`);
  const match = regex.exec(document.cookie);

  if (match) {
    return decodeURIComponent(match[2]);
  }

  const tokenLocal = window.localStorage.getItem(nome);
  return tokenLocal ?? null;
}

export async function getUsuarioLogado(): Promise<TUsuario | null> {
  try {
    const response = await api.get<TUsuario>("/auth/me");
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    return null;
  }
}
