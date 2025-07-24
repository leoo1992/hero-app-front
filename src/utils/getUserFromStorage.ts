import type { TUsuario } from "@/types/TUsuario.type";

export const getUsuarioFromLocalStorage = (): TUsuario | null => {
  const nome = localStorage.getItem("nome");
  const email = localStorage.getItem("email");
  const acesso = localStorage.getItem("acesso");

  if (nome && email && acesso) {
    return {
      id: 0,
      nome,
      email,
      acesso: acesso as TUsuario["acesso"],
      heroi: "",
      criado: "",
      atualizado: "",
    };
  }

  return null;
};
