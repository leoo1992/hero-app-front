import type { TAcesso } from "./TAceso.type";

export interface TUsuario {
  id: number;
  nome: string;
  email: string;
  heroi: string;
  acesso: TAcesso;
  criado: string;
  atualizado: string;
}
