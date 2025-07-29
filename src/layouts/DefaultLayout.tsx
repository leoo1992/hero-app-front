import type { ReactNode } from "react";
import Header from "./Header";

export default function DefaultLaytout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <main className="flex flex-col h-full w-full overflow-hidden p-3">
      <Header />
      <section className="flex flex-col h-full w-full overflow-hidden justify-center items-center">{children}</section>
    </main>
  );
}
