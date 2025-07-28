import { useContext, useEffect, useState } from "react";
import AuthContext from "@/contexts/authContext";
import { getUsuarioLogado } from "@/services/authService";
import type { TUsuario } from "@/types/TUsuario.type";
import toTitleCase from "@/utils/toTitleCase";
import { useNavigate } from "react-router-dom";
import WellcomeCard from "@/components/ui/Cards/WellcomeCard";

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
    <section className="h-full w-full p-2 sm:p-6 text-indigo-800">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <WellcomeCard nomeFormatado={nomeFormatado} admin={admin} />
        {!admin && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
            <div className="bg-emerald-100 rounded-xl p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-2">
                Missoes em andamento
              </h2>
              <p className="text-gray-700 text-sm">
                Nenhuma missão encontrada.
              </p>
            </div>
            <div className="bg-indigo-100 rounded-xl p-4 shadow-md">
              <h2 className="text-xl font-semibold mb-2">Missões pendentes</h2>
              <p className="text-gray-700 text-sm">
                Nenhuma missão encontrada.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
