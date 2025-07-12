import type { TUsuario } from "./TUsuario.type";

export interface TAuthResposta {
  token: string;
  usuario: TUsuario;
}
