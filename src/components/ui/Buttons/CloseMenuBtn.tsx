import { FaTimes } from "react-icons/fa";

export default function CloseMenuBtn() {
  return (
    <div className="tooltip tooltip-left tooltip-warning">
      <div className="tooltip-content -rotate-10 mt-10">
        <div className="text-indigo-900">Fechar menu</div>
      </div>
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
