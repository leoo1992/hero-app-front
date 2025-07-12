import type { TLoginCredenciais, TAuthResposta } from "@/types/index.type";

export async function authService(
  credenciais: TLoginCredenciais
): Promise<TAuthResposta> {
  const response = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credenciais),
  });

  if (!response.ok) {
    throw new Error("Falha no login");
  }

  return response.json();
}
