import { GiBatMask } from "react-icons/gi";
export default function Drawer() {
  return (
    <div className="max-w-screen">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex items-center">
        <label
          htmlFor="my-drawer"
          className="btn -rotate-15 btn-circle btn-ghost drawer-button text-7xl hover:border-0 text-indigo-900 hover:bg-transparent hover:shadow-none"
        >
          <div className="flex items-center gap-1">
            <div className="tooltip tooltip-bottom tooltip-accent">
              <div className="tooltip-content rotate-30 ml-16 mt-12">
                <div className="text-indigo-900 rotate-2 text-2xl font-black">
                  Menu
                </div>
              </div>
              <GiBatMask />
            </div>
          </div>
        </label>
        <span className="ml-6 text-xl text-indigo-900 ">HeroForce</span>
      </div>

      <div className="drawer-side w-screen max-w-screen">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="bg-gradient-to-br from-purple-900 to-emerald-900 opacity-40 h-screen max-screen w-screen max-w-screen"
        ></label>
        <div className="max-w-56 bg-gradient-to-br from-emerald-300 to-purple-300 border-r-3 border-r-purple-300 text-base-content min-h-full w-80 p-4">
          <div className="bg-base-100 border-base-300 collapse border">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-purple-500 peer-checked:text-secondary-content">
              Perfil
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-purple-500 peer-checked:text-secondary-content">
              rota 1
            </div>
          </div>
          <div className="bg-base-100 border-base-300 collapse border">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              Estátisticas
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
              rota 1
            </div>
          </div>
          <div className="bg-base-100 border-base-300 collapse border">
            <input type="checkbox" className="peer" />
            <div className="collapse-title bg-primary text-primary-content peer-checked:bg-teal-600 peer-checked:text-secondary-content">
              Projetos
            </div>
            <div className="collapse-content bg-primary text-primary-content peer-checked:bg-teal-600 peer-checked:text-secondary-content">
              rota 1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
