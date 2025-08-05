import { useContext, useEffect, useState } from "react";
import AuthContext from "@/contexts/authContext";
import type { TUsuario } from "@/types/TUsuario.type";
import toTitleCase from "@/utils/toTitleCase";
import { useNavigate } from "react-router-dom";
import WellcomeCard from "@/components/ui/Cards/WellcomeCard";
import HeroCard from "@/components/ui/Cards/HeroCard";
import MissionsStartedCard from "@/components/ui/Cards/MissionsStartedCard";
import MissionsPendingCard from "@/components/ui/Cards/MissionsPendingCard";

export default function DashBoard() {
  const { usuario: usuarioContext } = useContext(AuthContext);
  const [usuario, setUsuario] = useState<TUsuario | null>(usuarioContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (usuarioContext) {
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
            <HeroCard
              usuario={usuario}
              onHeroUpdate={(novoUsuario) => setUsuario(novoUsuario)}
            />

            <MissionsStartedCard />
            <MissionsPendingCard />
          </div>
        )}
      </div>
    </section>
  );
}
