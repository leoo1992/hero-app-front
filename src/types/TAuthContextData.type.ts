import type { TLoginCredenciais } from "./TLoginCredenciais.type";
import type { TUsuario } from "./TUsuario.type";

export interface TAuthContextData {
  usuario: TUsuario | null;
  token: string | null;
  ehAutenticado: boolean;
  carregando: boolean;
  login: (credenciais: TLoginCredenciais) => Promise<void>;
  logout: () => void;
}
