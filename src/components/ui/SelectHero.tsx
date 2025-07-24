import type { SelectHTMLAttributes } from "react";
import { HEROES } from "@/types/THero.type"; // importa o array fixo de heróis

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export default function SelectHero({
  className = "",
  ...props
}: Readonly<SelectProps>) {
  const baseClasses =
    "w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white";

  return (
    <select {...props} className={`${baseClasses} ${className}`}>
      <option value="">Selecione um herói</option>
      {HEROES.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
