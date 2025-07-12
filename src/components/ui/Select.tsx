import type { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  options: { value: string; label: string }[];
}

export default function Select({
  className = "",
  options,
  ...props
}: Readonly<SelectProps>) {
  const baseClasses =
    "w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white";

  return (
    <select {...props} className={`${baseClasses} ${className}`}>
      <option value="">Selecione um herói</option>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
