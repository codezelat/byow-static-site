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
    <div className="w-full flex relative overflow-hidden">
      {/* Show the spinning image only on the Home page */}
      {isHomePage && (
        <div className="absolute lg:w-[843px] lg:h-[843px] xl:w-[843px] xl:h-[843px] w-[500px] h-[500px] md:w-[700px] md:h-[700px] md:mt-0 lg:pt-20  left-1/2 transform -translate-x-1/2 flex items-center justify-center">
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
      <div className="relative z-10 flex-col w-full">
        <Header />
        <main className="text-center text-white ">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
