import { AiOutlineMail } from "react-icons/ai";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  placeholder?: string;
  icon?: ReactNode;
}

export default function Input({
  className = "",
  icon,
  placeholder = "Email",
  ...props
}: Readonly<InputProps>) {
  const baseClasses = "w-full text-indigo-800 bg-white text-indigo-800";
  return (
    <>
      <label className="input input-accent bg-white validator rounded-xl bg-white text-indigo-800">
        {icon || <AiOutlineMail />}
        <input
          type="email"
          required
          maxLength={50}
          placeholder={placeholder}
          {...props}
          className={`${baseClasses} ${className}`}
        />
      </label>
      <div className="validator-hint hidden">
        Digite o {placeholder.toLowerCase()}
      </div>
    </>
  );
}
