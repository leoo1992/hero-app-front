import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  label?: string;
  className?: string;
  variant?: "primary" | "secondary" | "danger";
}

export default function IconButton({
  icon,
  className = "",
  variant = "primary",
  ...props
}: Readonly<IconButtonProps>) {
  const base = "btn btn-circle btn-lg";

  const variants: Record<NonNullable<IconButtonProps["variant"]>, string> = {
    primary: "btn-primary",
    secondary: "btn-accent text-indigo-900",
    danger: "btn-error bg-red-400 text-red-800",
  };

  return (
    <button
      type="button"
      {...props}
      className={`${base} ${variants[variant]} ${className}`}
    >
      <strong className="text-3xl font-bold">{icon}</strong>
    </button>
  );
}
