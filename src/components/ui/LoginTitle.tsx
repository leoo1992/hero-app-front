import { GiBatMask } from "react-icons/gi";
import clsx from "clsx";

export default function LoginTitle() {
  return (
    <div
      className="text-center lg:text-left p-4 sm:p-6 bg-white shadow-md rounded-2xl max-w-md
    w-full"
    >
      <div className="w-0 text-6xl text-blue-700 animate-pulse hidden md:block sm:-rotate-12 max-h-585:hidden">
        <GiBatMask />
      </div>
      <h1 className="text-xl xs:text-2xl sm:text-3xl md:text-3xl font-bold m-0 p-0 w-full">
        Bem-vindo a Hero Force!
      </h1>
      <p className={clsx("mt-4 text-gray-700 text-start max-h-515:hidden")}>
        Você está a um passo de entrar para a elite dos heróis digitais. Acesse
        sua conta e continue sua missão.
      </p>
    </div>
  );
}
