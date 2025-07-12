import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({
  className = "",
  type,
  autoComplete,
  ...props
}: Readonly<InputProps>) {
  const baseClasses =
    "w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400";

  const autoCompleteFinal =
    type === "password" && !autoComplete ? "current-password" : autoComplete;

  return (
    <input
      type={type}
      autoComplete={autoCompleteFinal}
      {...props}
      className={`${baseClasses} ${className}`}
    />
  );
}
