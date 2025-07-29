import type { THeroValue } from "@/types/THero.type";
import type { TUsuario } from "@/types/TUsuario.type";
import batman from "../../../assets/heros/batman.png";
import superman from "../../../assets/heros/superman.jpg";
import capitao_america from "../../../assets/heros/capitao-america.jpg";
import pantera_negra from "../../../assets/heros/pantera-negra.webp";
import homem_de_ferro from "../../../assets/heros/homem-de-ferro.jpg";
import mulher_maravilha from "../../../assets/heros/mulher-maravilha.png";
import SelectHero from "../Selects/SelectHero";
import Button from "../Buttons/Button";
import { useState } from "react";

interface HeroCardProps {
  readonly usuario: TUsuario | null;
}

export default function HeroCard({ usuario }: HeroCardProps) {
  const [editando, setEditando] = useState(false);
  const heroImages: Record<THeroValue, string> = {
    Superman: superman,
    Batman: batman,
    "Mulher Maravilha": mulher_maravilha,
    "Homem de Ferro": homem_de_ferro,
    "Capitão América": capitao_america,
    "Pantera Negra": pantera_negra,
  };

  function handleTrocarClick() {
    setEditando(true);
  }

  function handleSalvarClick() {
    setEditando(false);
  }

  return (
    <div
      className="card bg-gradient-to-br from-sky-100 to-indigo-300 rounded-2xl shadow-xl hover:shadow-2xl
     transition-shadow p-4 flex flex-col items-center justify-between"
    >
      <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center justify-center w-full">
        Herói selecionado
      </h2>

      <figure className="aspect-[3/2] w-full flex items-center justify-center mb-4">
        <img
          src={usuario?.hero ? heroImages[usuario.hero] : ""}
          alt={usuario?.hero ?? "Herói"}
          className="w-full max-w-60 h-full object-contain rounded-xl"
        />
      </figure>

      <h3 className="text-lg font-semibold text-indigo-700 mb-4">
        {usuario?.hero}
      </h3>

      <div className="transition-all duration-900 ease-in-out">
        {!editando ? (
          <Button className="w-28 rounded-2xl transition-all duration-900 ease-in-out" onClick={handleTrocarClick}>
            Trocar
          </Button>
        ) : (
          <div className="flex gap-3">
            <SelectHero />
            <Button className="w-28 rounded-2xl transition-all duration-900 ease-in-out" onClick={handleSalvarClick}>
              Salvar
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
