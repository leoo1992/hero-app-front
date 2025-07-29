import type { TAcesso } from "./TAceso.type";
import type { THeroValue } from "./THero.type";

export interface TUsuario {
  id: number;
  nome: string;
  email: string;
  hero: THeroValue;
  acesso: TAcesso;
  criado: string;
  atualizado: string;
}
