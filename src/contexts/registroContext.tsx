import {
  createContext,
  useState,
  type ReactNode,
  useCallback,
  useMemo,
} from "react";
import type {
  TRegistroUsuarioData,
  TAuthResposta,
  TRegistroContextData,
} from "@/types/index.type";
import { registroService } from "@/services/registroService";

const RegistroContext = createContext<TRegistroContextData>({} as TRegistroContextData);

export function RegistroProvider({
  children,
}: {
  readonly children: ReactNode;
}) {
  const [carregando, setCarregando] = useState(false);

  const registrar = useCallback(
    async (data: TRegistroUsuarioData): Promise<TAuthResposta> => {
      setCarregando(true);
      try {
        const response = await registroService(data);
        return response;
      } finally {
        setCarregando(false);
      }
    },
    []
  );

  const contextValue = useMemo(
    () => ({
      registrar,
      carregando,
    }),
    [registrar, carregando]
  );

  return (
    <RegistroContext.Provider value={contextValue}>
      {children}
    </RegistroContext.Provider>
  );
}

export default RegistroContext;
