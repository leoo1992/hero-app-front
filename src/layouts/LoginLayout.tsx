import type { ReactNode } from "react";
import batman from "../assets/batman.webp";

export default function LoginLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <main className="relative h-screen w-full flex items-end justify-center overflow-hidden">
      <img
        src={batman}
        alt="Batman"
        className="absolute top-0 left-0 inset-0 w-full h-full object-cover opacity-80"
        style={{ zIndex: -1 }}
      />
      <section className="flex sm:justify-start sm: z-10 w-full max-w-sm sm:p-6">{children}</section>
    </main>
  );
}
