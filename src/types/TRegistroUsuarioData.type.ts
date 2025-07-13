import type { THero } from "./THero.type.ts";

export interface TRegistroUsuarioData {
  nome: string;
  email: string;
  senha: string;
  hero?: THero;
}
