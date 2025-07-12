import type { TProjetoEstatisticas } from "./TProjetoEstatisticas.type";
import type { TProjetoStatus } from "./TProjetoStatus.type";
import type { TUsuario } from "./TUsuario.type";

export interface Projeto {
  id: number;
  nome: string;
  descricao: string;
  status: TProjetoStatus;
  estatisticas: TProjetoEstatisticas;
  responsavel: TUsuario;
  criado: string;
  atualizado: string;
}
