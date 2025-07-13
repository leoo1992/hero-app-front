import { FaDoorOpen } from "react-icons/fa";
import IconButton from "@/components/ui/IconButton";
import { useContext } from "react";
import AuthContext from "@/contexts/authContext";
import Drawer from "./Drawer";

export default function Header() {
  const { ehAutenticado, logout } = useContext(AuthContext);

  return (
    <header className="rounded-4xl bg-gradient-to-br from-emerald-200 to-purple-200 p-3 shadow flex justify-between items-center w-full">
      <nav className="text-lg font-semibold w-full">
        <Drawer />
      </nav>
      {ehAutenticado && (
        <div className="flex items-center gap-1">
          <div className="tooltip tooltip-left tooltip-accent">
            <div className="tooltip-content -rotate-20 mt-8 mr-0">
              <div className="text-indigo-900 -rotate-2 text-2xl font-black">
                Sair?
              </div>
            </div>
            <IconButton
              icon={<FaDoorOpen />}
              variant="secondary"
              onClick={logout}
            />
          </div>
        </div>
      )}
    </header>
  );
}
