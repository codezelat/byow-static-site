"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Header from "./Header";
import Footer from "./footer";

export default function BackgroundContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="w-full h-full min-h-screen flex flex-col relative">
      {/* Show the spinning image only on the Home page */}
      {isHomePage && (
        <div className="absolute top-[45px] left-1/2 transform -translate-x-1/2 flex items-center justify-center">
          <Image
            src="/images/Long Dashed Circle.png"
            alt="dashed circle"
            width={843}
            height={843}
            className="object-contain opacity-80 animate-spin-counterclockwise" // Updated class
          />
        </div>
      )}

      {/* Everything is placed over the image & video */}
      <div className="relative z-10 flex flex-col h-full w-full">
        <Header />
        <main className="flex-grow flex items-center justify-center text-center text-white px-6">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
