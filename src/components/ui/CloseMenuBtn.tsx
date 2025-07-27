import { FaTimes } from "react-icons/fa";

export default function CloseMenuBtn() {
  return (
    <div className="flex text-end justify-end w-full mb-3 pr-3 text-indigo-800">
      <label
        htmlFor="my-drawer"
        className="btn close-btn btn-square rotate-10 btn-primary 
        hover:-rotate-10 transition-transform ease-in-out hover:scale-105
        hover:bg-accent hover:text-primary"
      >
        <FaTimes className="text-lg" />
      </label>
    </div>
  );
}
