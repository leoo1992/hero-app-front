import { Link } from "react-router-dom";
import { GiBatMask } from "react-icons/gi";
import batman from "../assets/batman.webp";

export default function PaginaNaoEncontrada() {
  return (
    <div className="relative h-screen w-full flex items-center justify-center text-indigo-900 font-semibold 
    overflow-hidden">
      <img
        src={batman}
        alt="Batman"
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30"
        style={{ zIndex: -1 }}
      />

      <div className="relative z-10 flex flex-col items-center text-center max-w-md px-6 bg-accent p-6 
      rounded-3xl opacity-80">
        <div className="text-6xl pt-4 text-blue-700 animate-bounce">
          <GiBatMask />
        </div>
        <h1 className="text-5xl font-bold text-base-950">404</h1>
        <p className="mt-3 text-lg text-base-950">
          O Batman investigou e... não encontrou essa página.
        </p>
        <p className="text-sm text-base-950 mt-1 mb-6">
          Mas não se preocupe, você ainda pode salvar o dia!
        </p>
        <Link
          to="/"
          className="bg-blue-700 text-white px-6 py-3 rounded-full shadow hover:bg-blue-800 transition"
        >
          Voltar para o início
        </Link>
      </div>
    </div>
  );
}
