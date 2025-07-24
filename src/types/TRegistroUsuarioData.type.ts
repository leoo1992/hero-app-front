import type { THeroValue } from "./THero.type.ts";

export interface TRegistroUsuarioData {
  nome: string;
  email: string;
  senha: string;
  hero: THeroValue;
}
