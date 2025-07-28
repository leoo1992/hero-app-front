import MenuRouters from "./MenuRouters";
import OpenMenuBtn from "../Buttons/OpenMenuBtn";
export default function Drawer() {
  return (
    <div className="max-w-full">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <OpenMenuBtn />
      <MenuRouters />
    </div>
  );
}
