import type { ReactNode } from "react";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

export default function DefaultLaytout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <main className="flex flex-col h-screen w-full overflow-hidden">
      <Header />
      <section className="flex-grow overflow-y-auto">{children}</section>
      <Footer />
    </main>
  );
}
