import type { TAcesso } from "./TAceso.type";
import type { Projeto } from "./TProjeto.type";

export type THeroValue =
  | "Superman"
  | "Batman"
  | "Mulher Maravilha"
  | "Homem de Ferro"
  | "Capitão América"
  | "Pantera Negra";

export interface THero {
  value: THeroValue;
  label: string;
}

export const HEROES: THero[] = [
  { value: "Superman", label: "Superman" },
  { value: "Batman", label: "Batman" },
  { value: "Mulher Maravilha", label: "Mulher Maravilha" },
  { value: "Homem de Ferro", label: "Homem de Ferro" },
  { value: "Capitão América", label: "Capitão América" },
  { value: "Pantera Negra", label: "Pantera Negra" },
];

export interface UpdateHeroDto {
  nome?: string;
  email?: string;
  senha?: string;
  hero?: THeroValue;
  acesso?: TAcesso;
  projects?: Projeto[];
}
