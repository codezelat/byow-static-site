import type { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function BackgroundContent({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex w-full overflow-hidden">
      <div className="relative z-10 w-full flex-col">
        <Header />
        <main className="text-center text-white">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
