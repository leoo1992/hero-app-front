import { useContext } from "react";
import AuthContext from "@/contexts/authContext";

export default function Header() {
  const { ehAutenticado, logout, usuario } = useContext(AuthContext);
  const nomeLocalStorage = localStorage.getItem("nome");

  const nomeParaExibir = nomeLocalStorage ?? usuario?.nome ?? "";
  return (
    <header className="bg-gray-100 p-4 shadow flex justify-between items-center">
      <nav className="text-lg font-semibold">Navbar</nav>

      {ehAutenticado && (
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-700">Olá, {nomeParaExibir}</span>
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
          >
            Sair
          </button>
        </div>
      )}
    </header>
  );
}
