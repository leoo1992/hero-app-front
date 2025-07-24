import { GiBatMask } from "react-icons/gi";
import { useContext, useEffect, useState } from "react";
import AuthContext from "@/contexts/authContext";
import { getUsuarioLogado } from "@/services/authService";
import type { TUsuario } from "@/types/TUsuario.type";
import toTitleCase from "@/utils/toTitleCase";
import { getUsuarioFromLocalStorage } from "@/utils/getUserFromStorage";

export default function DashBoard() {
  const { usuario: usuarioContext } = useContext(AuthContext);
  const [usuario, setUsuario] = useState<TUsuario | null>(usuarioContext);

  useEffect(() => {
    const fetchUsuario = async () => {
      if (usuarioContext) {
        const user = await getUsuarioLogado();
        setUsuario(user);
      } else {
        const localUser = getUsuarioFromLocalStorage();
        if (localUser) setUsuario(localUser);
      }
    };

    fetchUsuario();
  }, [usuarioContext]);

  const nomeFormatado = usuario?.nome ? toTitleCase(usuario.nome) : "";

  return (
    <section className="h-full w-full p-2 sm:p-6 text-indigo-800">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between bg-white shadow-lg p-6 rounded-3xl">
          <div>
            <h1 className="text-3xl font-bold">
              Bem-vindo{nomeFormatado && ` ${nomeFormatado}`}!
            </h1>
            <p className="text-gray-600 mt-1">
              Prepare-se para uma nova missão. A Hero Force conta com você agora.
            </p>
          </div>
          <div className="text-5xl text-indigo-500 hidden opacity-40 sm:block sm:rotate-20 animate-pulse">
            <GiBatMask />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
          <div className="bg-emerald-100 rounded-xl p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Missoes em andamento</h2>
            <p className="text-gray-700 text-sm">Nenhuma missão encontrada.</p>
          </div>
          <div className="bg-indigo-100 rounded-xl p-4 shadow-md">
            <h2 className="text-xl font-semibold mb-2">Missões pendentes</h2>
            <p className="text-gray-700 text-sm">Nenhuma missão encontrada.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
