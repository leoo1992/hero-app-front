export function limparLocalStorage() {
  const chaves = ["nome", "token", "email", "acesso", "refreshToken"];
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
}: {
  nome: string;
  token: string;
  email: string;
  acesso: string;
  refreshToken: string;
}) {
  window.localStorage.setItem("nome", nome);
  window.localStorage.setItem("token", token);
  window.localStorage.setItem("email", email);
  window.localStorage.setItem("acesso", acesso);
  window.localStorage.setItem("refreshToken", refreshToken);
}
