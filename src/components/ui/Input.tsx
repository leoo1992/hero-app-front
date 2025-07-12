import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({
  className = "",
  ...props
}: Readonly<InputProps>) {
  const baseClasses =
    "w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400";

  return <input {...props} className={`${baseClasses} ${className}`} />;
}
