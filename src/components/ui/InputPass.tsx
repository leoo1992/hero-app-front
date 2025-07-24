import { useState } from "react";
import { HiOutlineKey,HiEye, HiEyeOff } from "react-icons/hi";
import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export default function Input({
  className = "",
  ...props
}: Readonly<InputProps>) {
  const [mostrarSenha, setMostrarSenha] = useState(false);

  const alternarVisibilidade = () => setMostrarSenha((prev) => !prev);

  const baseClasses = "w-full";

  return (
    <>
      <label className="input validator input-accent rounded-xl items-center gap-2">
        <HiOutlineKey />

        <input
          type={mostrarSenha ? "text" : "password"}
          placeholder="Senha"
          required
          maxLength={8}
          {...props}
          className={`${baseClasses} ${className}`}
        />

        <button
          type="button"
          onClick={alternarVisibilidade}
          className="text-xl text-primary focus:outline-none"
        >
          {mostrarSenha ? <HiEyeOff /> : <HiEye />}
        </button>
      </label>

      <div className="validator-hint hidden">Digite sua senha</div>
    </>
  );
}
