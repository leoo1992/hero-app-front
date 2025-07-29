import type { THeroValue } from "@/types/THero.type";
import type { TUsuario } from "@/types/TUsuario.type";
import batman from "../../../assets/heros/batman.png";
import superman from "../../../assets/heros/superman.jpg";
import capitao_america from "../../../assets/heros/capitao-america.jpg";
import pantera_negra from "../../../assets/heros/pantera-negra.webp";
import homem_de_ferro from "../../../assets/heros/homem-de-ferro.jpg";
import mulher_maravilha from "../../../assets/heros/mulher-maravilha.png";
import AuthContext from "@/contexts/authContext";
import { useContext, useState } from "react";

export default function HeroCard()
{
  const { usuario: usuarioContext } = useContext(AuthContext);
  const [usuario] = useState<TUsuario | null>(usuarioContext);
  
  const heroImages: Record<THeroValue, string> = {
    Superman: superman,
    Batman: batman,
    "Mulher Maravilha": mulher_maravilha,
    "Homem de Ferro": homem_de_ferro,
    "Capitão América": capitao_america,
    "Pantera Negra": pantera_negra,
  };

  return (
    <div
      className="w-full sm:max-w-md flex flex-col items-center justify-center bg-sky-100 
            rounded-2xl shadow-md p-4"
    >
      <h2 className="text-xl font-semibold text-indigo-700">
        Herói selecionado
      </h2>
      <figure className="flex items-center justify-center w-full aspect-[3/2]">
        <img
          src={usuario?.hero ? heroImages[usuario.hero] : ""}
          alt={usuario?.hero ?? "Herói"}
          className="w-full max-w-72 h-full object-contain rounded-xl"
        />
      </figure>
      <h2 className="text-lg font-bold text-indigo-800 mb-2">
        {usuario?.hero}
      </h2>
      <button className="btn btn-primary w-26 m-0">Trocar</button>
    </div>
  );
}
