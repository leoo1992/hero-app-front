import CloseMenuBtn from "./CloseMenuBtn";
import { useContext, useState } from "react";
import CollapseTitle from "./CollapseTitle";
import AuthContext from "@/contexts/authContext";

export default function MenuRouters() {
  const [active, setActive] = useState<string | null>(null);
  const { usuario } = useContext(AuthContext);

  const handleToggle = (id: string) => {
    setActive((prev) => (prev === id ? null : id));
  };

  return (
    <div className="drawer-side w-full h-full">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="bg-gradient-to-br from-purple-900 to-emerald-900 opacity-40 w-full h-full"
      ></label>
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="backdrop-blur-xs w-full h-full"
      ></label>
      <div
        className=" sm:max-w-72 sm:max-h-full bg-gradient-to-br from-emerald-300 to-purple-300 border-r-3 border-r-purple-300 
        text-base-content min-h-full w-80 p-4 flex flex-col gap-2"
      >
        <CloseMenuBtn />
        <div className="bg-base-100 collapse hover:scale-105">
          <CollapseTitle
            title="Perfil"
            active={active}
            handleToggle={handleToggle}
            bgCheck="bg-purple-500"
            bgcolor="bg-accent-content"
          />
          <div
            className="collapse-content text-primary-content peer-checked:bg-purple-500 
            peer-checked:text-secondary-content"
          >
            <ul className="flex flex-col p-1 gap-1">
              {usuario?.acesso !== "ADMIN" && (
                <li
                  className="hover:link transition-transform ease-in-out flex items-center
             hover:scale-105 sm:py-1"
                >
                  Meu herói
                </li>
              )}
              {usuario?.acesso === "ADMIN" && (
                <li
                  className="hover:link transition-transform ease-in-out flex items-center
             hover:scale-105 sm:py-1"
                >
                  Editar heróis
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="bg-base-100 collapse hover:scale-105">
          <CollapseTitle
            title="Ranking"
            active={active}
            handleToggle={handleToggle}
            bgCheck="bg-secondary"
            bgcolor="bg-indigo-950"
          />
          <div className="collapse-content text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
            <ul className="flex flex-col p-1 gap-1">
              {usuario?.acesso !== "ADMIN" && (
                <li
                  className="hover:link transition-transform ease-in-out flex items-center
             hover:scale-105 sm:py-1"
                >
                  Minha pontuação
                </li>
              )}
              {usuario?.acesso === "ADMIN" && (
                <>
                  <li
                    className="hover:link transition-transform ease-in-out flex items-center
             hover:scale-105 sm:py-1"
                  >
                    Por heróis
                  </li>
                  <li
                    className="hover:link transition-transform ease-in-out flex items-center
             hover:scale-105 sm:py-1"
                  >
                    Por status
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="bg-base-100 collapse hover:scale-105">
          <CollapseTitle
            title="Missões"
            active={active}
            handleToggle={handleToggle}
            bgCheck="bg-teal-600"
            bgcolor="bg-purple-900"
          />
          <div className="collapse-content text-primary-content peer-checked:bg-teal-600 peer-checked:text-secondary-content">
            <ul className="flex flex-col p-1 gap-1 ">
              {usuario?.acesso !== "ADMIN" && (
                <li
                  className="hover:link transition-transform ease-in-out flex items-center
             hover:scale-105 sm:py-1"
                >
                  Minhas missões
                </li>
              )}
              {usuario?.acesso === "ADMIN" && (
                <li
                  className="hover:link transition-transform ease-in-out flex items-center
             hover:scale-105 sm:py-1"
                >
                  Editar missões
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
