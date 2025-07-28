import { GiBatMask } from "react-icons/gi";

interface WellcomeCardProps {
  readonly nomeFormatado?: string;
  readonly admin?: boolean;
}

export default function WellcomeCard({
  nomeFormatado,
  admin,
}: WellcomeCardProps) {
  return (
    <div className={`flex items-center justify-between bg-white shadow-lg p-6 
    rounded-3xl ${admin ? "text-red-400" : "text-indigo-500"}`}>
      <div className="w-full flex flex-col ">
        {admin && <span className="text-xs p-0 m-0 text-end font-bold text-red-500 animate-pulse">Modo ADM</span>}
        <h1 className="text-3xl font-bold">
          Bem-vindo{nomeFormatado && ` ${nomeFormatado}`}!
        </h1>
        {!admin && <p className="text-gray-600 mt-1">
          Prepare-se para uma nova missão. A Hero Force conta com você agora.
        </p>}
      </div>
      <div className={`text-5xl hidden opacity-40 sm:block sm:rotate-20 animate-pulse`}>
        <GiBatMask />
      </div>
    </div>
  );
}
