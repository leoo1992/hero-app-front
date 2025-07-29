import { useContext, useEffect, useState } from "react";
import AuthContext from "@/contexts/authContext";
import { getUsuarioLogado } from "@/services/authService";
import type { TUsuario } from "@/types/TUsuario.type";
import toTitleCase from "@/utils/toTitleCase";
import { useNavigate } from "react-router-dom";
import WellcomeCard from "@/components/ui/Cards/WellcomeCard";
import HeroCard from "@/components/ui/Cards/HeroCard";

export default function DashBoard() {
  const { usuario: usuarioContext } = useContext(AuthContext);
  const [usuario, setUsuario] = useState<TUsuario | null>(usuarioContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!usuarioContext) {
      const fetchUsuario = async () => {
        const user = await getUsuarioLogado();
        setUsuario(user);
      };
      fetchUsuario();
    } else {
      setUsuario(usuarioContext);
    }
  }, [usuarioContext]);

  useEffect(() => {
    if (usuario?.acesso === "ADMIN") {
      navigate("/dashboard/admin");
    } else {
      navigate("/dashboard/");
    }
  }, [navigate, usuario?.acesso]);

  const nomeFormatado = usuario?.nome ? toTitleCase(usuario.nome) : "";
  const admin = usuario?.acesso === "ADMIN";

  return (
    <section
      className="h-screen w-full
    lg:flex-row gap-6 overflow-y-auto"
    >
      <div className="w-full flex flex-col gap-6 p-2 sm:p-6">
        <WellcomeCard nomeFormatado={nomeFormatado} admin={admin} />
        {!admin && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <HeroCard />
            <div
              className="bg-emerald-100 rounded-xl p-4 shadow-md text-emerald-800 
            flex flex-col items-center justify-center min-h-40"
            >
              <h2 className="text-xl font-semibold mb-2 text-center">
                Missões em andamento
              </h2>
              <p className="text-gray-700 text-sm text-center">
                Nenhuma missão encontrada.
              </p>
            </div>

            <div className="bg-purple-200 rounded-xl p-4 shadow-md text-purple-800 flex flex-col 
            items-center justify-center min-h-40">
              <h2 className="text-xl font-semibold mb-2 text-center">
                Missões pendentes
              </h2>
              <p className="text-gray-700 text-sm text-center">
                Nenhuma missão encontrada.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
