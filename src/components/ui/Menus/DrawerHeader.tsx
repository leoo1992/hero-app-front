import CloseMenuBtn from "../Buttons/CloseMenuBtn";
import ThemeChanger from "./ThemeChanger";

export default function DrawerHeader() {
  return (
    <div className="flex justify-end w-full mb-2 pr-3 text-indigo-800 gap-5">
      <ThemeChanger />
      <CloseMenuBtn />
    </div>
  );
}
