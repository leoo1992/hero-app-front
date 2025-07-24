import type { TUsuario } from "./TUsuario.type";

export interface TAuthResposta {
  access_token: string;
  refresh_token: string;
  usuario: TUsuario;
  nome: string;
  acesso: string;
  email: string;
}
