import { FaTimes } from "react-icons/fa";
import ThemeChanger from "./ThemeChanger";

export default function CloseMenuBtn() {
  return (
    <div className="flex justify-end w-full mb-2 pr-3 text-indigo-800 gap-5">
      <ThemeChanger />
      <label
        htmlFor="my-drawer"
        className="btn close-btn btn-square rotate-10 btn-primary bg-blue-700 opacity-100 
        hover:-rotate-10 transition-transform ease-in-out hover:scale-105 hover:opacity-100
        hover:bg-accent hover:text-blue-800"
      >
        <FaTimes className="text-lg" />
      </label>
    </div>
  );
}
