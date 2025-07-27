import { useEffect, useState } from "react";
import { handleThemeChange } from "@/utils/themeChange";
import { BiMoon, BiSun } from "react-icons/bi";

export default function ThemeChanger() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme === "dark") {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDark(e.target.checked);
    handleThemeChange(e);
  };

  return (
    <label
      aria-label="Alternar tema"
      className="swap swap-rotate rounded-full mr-6 hover:-rotate-15 transition-transform ease-in-out"
    >
      <input
        type="checkbox"
        className="theme-controller"
        value="dark"
        onChange={handleChange}
        checked={isDark}
      />
      <div className="scale-115 flex items-center justify-center swap-off text-3xl text-orange-500 bg-sky-100 rounded-full p-1">
        <BiSun />
      </div>
      <div className="scale-115 flex items-center justify-center swap-on text-3xl text-white bg-sky-900 rounded-full p-1">
        <BiMoon />
      </div>
    </label>
  );
}
