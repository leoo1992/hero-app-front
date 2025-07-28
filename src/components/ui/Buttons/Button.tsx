import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  icon?: ReactNode;
  children: string,
  variant?: "primary" | "secondary" | "danger";
}

export default function Button({
  className = "",
  variant = "primary",
  children,
  icon,
  ...props
}: Readonly<ButtonProps>) {
  const base = "btn";

  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "btn-primary bg-blue-600",
    secondary: "btn-secondary bg-pink-500",
    danger: "btn-error bg-red-500",
  };

  const variantClasses = variants[variant];

  return (
    <button {...props} className={`${base} ${variantClasses} ${className}`} >
      {icon}{children}
    </button>
  );
}
