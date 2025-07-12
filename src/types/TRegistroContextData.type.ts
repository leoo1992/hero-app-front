import type { TRegistroUsuarioData, TAuthResposta } from "./index.type";

export interface TRegistroContextData {
  registrar: (data: TRegistroUsuarioData) => Promise<TAuthResposta>;
  carregando: boolean;
}
