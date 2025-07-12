import type { ReactNode } from "react";

export default function LoginLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-gray-50">
      {children}
    </main>
  );
}
