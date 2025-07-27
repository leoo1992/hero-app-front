import type { SelectHTMLAttributes } from "react";
import { HEROES } from "@/types/THero.type";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export default function SelectHero({
  className = "",
  ...props
}: Readonly<SelectProps>) {
  const baseClasses = `
    select w-full border border-accent rounded-xl
    focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white
    text-xs sm:text-sm sm:text-base
  `;

  return (
    <select defaultValue="" {...props} className={`${baseClasses} ${className}`}>
      <option value="" disabled={true} className="rounded-xl">
        Selecione um herói
      </option>
      {HEROES.map(({ value, label }) => (
        <option key={value} value={value} className="rounded-xl">
          {label}
        </option>
      ))}
    </select>
  );
}
