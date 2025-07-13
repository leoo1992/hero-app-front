import { AiOutlineMail } from "react-icons/ai";
import type { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  icon?: ReactNode
}

export default function Input({
  className = "",
  icon ,
  ...props
}: Readonly<InputProps>) {
  const baseClasses = "w-full";
  return (
    <>
      <label className="input input-accent validator rounded-xl">
       {icon || <AiOutlineMail />}
        <input
          type="email"
          autoComplete="username"
          required
          placeholder="Email"
        
          {...props}
          className={`${baseClasses} ${className}`}
        />
      </label>
      <div className="validator-hint hidden">Entre com seu e-mail</div>
    </>
  );
}
