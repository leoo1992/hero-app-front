import { GiBatMask } from "react-icons/gi";
export default function OpenMenuBtn() {
  return (
    <div className="drawer-content flex items-center">
      <label
        htmlFor="my-drawer"
        className="btn -rotate-15 btn-circle btn-ghost drawer-button hover:border-0 text-indigo-900 hover:bg-transparent hover:shadow-none"
        aria-label="Open menu"
      >
        <div className="flex items-center gap-1">
          <div className="tooltip tooltip-bottom tooltip-accent">
            <div className="tooltip-content rotate-30 ml-8 mt-12">
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
  );
}
