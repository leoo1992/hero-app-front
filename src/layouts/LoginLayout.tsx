import type { ReactNode } from "react";
import batman from "../assets/batman.webp";

export default function LoginLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <div className="w-full h-full flex flex-col">
      <img
        src={batman}
        alt="Batman"
        className="absolute top-0 right-0 inset-0 w-full h-full object-cover opacity-80"
        style={{ zIndex: -1 }}
      />
      <main className="h-screen flex flex-col justify-end items-start overflow-hidden">
        <section className="z-10 m-2 sm:ml-16 sm:p-6">
          {children}
        </section>
      </main>
    </div>
  );
}
