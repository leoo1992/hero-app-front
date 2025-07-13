import { GiBatMask } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
export default function Drawer() {
  return (
    <div className="max-w-full">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex items-center">
        <label
          htmlFor="my-drawer"
          className="btn -rotate-15 btn-circle btn-ghost drawer-button hover:border-0 text-indigo-900 hover:bg-transparent hover:shadow-none"
        >
          <div className="flex items-center gap-1">
            <div className="tooltip tooltip-bottom tooltip-accent">
              <div className="tooltip-content rotate-30 ml-16 mt-12">
                <div className="text-indigo-900 rotate-2 text-2xl font-black">
                  Menu
                </div>
              </div>
              <div className="text-5xl sm:text-5xl ">
                <GiBatMask />
              </div>
            </div>
          </div>
        </label>
        <span className="ml-6 text-xl text-indigo-900 ">Hero Force</span>
      </div>

      <div className="drawer-side w-screen h-screen">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="bg-gradient-to-br from-purple-900 to-emerald-900 opacity-40 w-screen h-screen"
        ></label>
        <div className="sm:max-w-56 bg-gradient-to-br from-emerald-300 to-purple-300 border-r-3 border-r-purple-300 text-base-content min-h-full w-80 p-4">
          <div className="flex text-end justify-end w-full mb-3 pr-3 text-indigo-800">
            <label
              htmlFor="my-drawer"
              className="btn close-btn btn-square rotate-10 btn-primary"
            >
              <FaTimes className="text-lg" />
            </label>
          </div>
          <div className="bg-base-100 border-base-300 collapse border">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-accent-content text-primary-content peer-checked:bg-purple-500 peer-checked:text-secondary-content">
              Perfil
            </div>
            <div className="collapse-content text-primary-content peer-checked:bg-purple-500 peer-checked:text-secondary-content">
              <ul className="space-y-1">
                <li>Selecionar Herói</li>
                <li>Editar Herói</li>
                <li>Excluir Herói</li>
              </ul>
            </div>
          </div>
          <div className="bg-base-100 border-base-300 collapse border">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-indigo-950 text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Ranking
            </div>
            <div className="collapse-content text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              <ul className="space-y-1">
                <li>Por Heróis</li>
                <li>Por Status</li>
              </ul>
            </div>
          </div>
          <div className="bg-base-100 border-base-300 collapse border">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-purple-950 text-primary-content peer-checked:bg-teal-600 peer-checked:text-secondary-content">
              Missões
            </div>
            <div className="collapse-content text-primary-content peer-checked:bg-teal-600 peer-checked:text-secondary-content">
              <ul className="space-y-1">
                <li>Iniciar Missão</li>
                <li>Cadastrar Missão</li>
                <li>Listar Missões</li>
                <li>Excluir Missão</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
