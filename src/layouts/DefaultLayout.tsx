import type { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function DefaultLaytout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <main className="flex flex-col h-screen w-full overflow-hidden p-3">
      <Header />
      <section className="flex-grow overflow-y-auto">{children}</section>
      <Footer />
    </main>
  );
}
