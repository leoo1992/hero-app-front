import { HiOutlineKey } from "react-icons/hi";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({
  className = "",
  ...props
}: Readonly<InputProps>) {
  const baseClasses = "w-full";
  return (
    <>
      <label className="input validator input-accent rounded-xl">
        <HiOutlineKey />
        <input
          type="password"
          autoComplete="current-password"
          placeholder="Senha"
          required
          {...props}
          className={`${baseClasses} ${className}`}
        />
      </label>
      <div className="validator-hint hidden">Digite sua senha</div>
    </>
  );
}
