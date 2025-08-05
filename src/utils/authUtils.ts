import type { TUsuario } from "@/types/TUsuario.type";

export function limparLocalStorage() {
  const chaves = [
    "nome",
    "token",
    "email",
    "acesso",
    "refreshToken",
    "id",
    "nome",
    "hero",
  ];
  chaves.forEach((chave) => window.localStorage.removeItem(chave));
}

export function limparCookies() {
  document.cookie = "token=; path=/; Max-Age=0;";
  document.cookie = "refresh_token=; path=/; Max-Age=0;";
}

export function salvarNoLocalStorage({
  nome,
  token,
  email,
  acesso,
  refreshToken,
  usuario,
}: {
  nome: string;
  token: string;
  email: string;
  acesso: string;
  refreshToken: string;
  usuario: TUsuario;
}) {
  window.localStorage.setItem("nome", nome);
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("email", email);
  window.localStorage.setItem("acesso", acesso);
  window.localStorage.setItem("refreshToken", refreshToken);
  window.localStorage.setItem("id", usuario?.id.toString());
  window.localStorage.setItem("nome", usuario?.nome);
  window.localStorage.setItem("hero", usuario?.hero);
}
