import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  className = "",
  variant = "primary",
  ...props
}: Readonly<ButtonProps>) {
  const base = "w-full p-2 rounded font-semibold transition-colors";

  let variantClasses = "";

  switch (variant) {
    case "secondary":
      variantClasses = "bg-gray-300 text-gray-800 hover:bg-gray-400";
      break;
    case "danger":
      variantClasses = "bg-red-500 text-white hover:bg-red-600";
      break;
    default:
      variantClasses = "bg-blue-500 text-white hover:bg-blue-600";
      break;
  }

  return (
    <button {...props} className={`${base} ${variantClasses} ${className}`} />
  );
}
