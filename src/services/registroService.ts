import type { TAuthResposta, TRegistroUsuarioData } from "@/types/index.type";

export async function registroService(
  data: TRegistroUsuarioData
): Promise<TAuthResposta> {
  const response = await fetch("http://localhost:3000/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Falha no registro");

  return response.json();
}
