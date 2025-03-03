"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export default function Header() {
  const pathname = usePathname(); // Get current route
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <header className="container-wrapper bg-transparent text-white py-4 shadow-md ">
      <div className="  flex justify-between items-center px-8 h-[79px]">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
           <Image src="/images/byow-logo.svg" alt="footer logo" width={161} height={79} />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center rounded-full border gap-8 border-[#2D2836] p-2">
          <ul className="flex gap-8">
            {["/", "/about", "/products", "/contact"].map((path, index) => {
              const isActive = pathname === path; // Check if current route matches
              const isHovered = hoveredLink === path; // Check hover state

              return (
                <li key={index}>
                  <motion.div
                    className="relative w-[116px] h-[56px] rounded-[36px] border border-[#2D2836] flex items-center justify-center overflow-hidden cursor-pointer"
                    onHoverStart={() => setHoveredLink(path)}
                    onHoverEnd={() => setHoveredLink(null)}
                  >
                    {/* Background Fill Animation */}
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-[#8133F1]"
                      initial={{ width: "0%" }}
                      animate={{ width: isHovered || isActive ? "100%" : "0%" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }} // Slower fill animation
                    />

                    {/* Link Text */}
                    <Link
                      href={path}
                      className="relative z-10 text-white px-4 py-2"
                    >
                      {path === "/"
                        ? "HOME"
                        : path.toUpperCase().replace("/", "")}
                    </Link>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Build Now Button */}
        <button className="bg-[#8133F1] flex items-center justify-center gap-2 text-[18px] font-semibold text-white w-[239px] h-[70px] rounded-[36px]  px-6 py-2   transition">
          BUILD NOW
          <ArrowCircleRightOutlinedIcon/>
        </button>
      </div>
    </header>
  );
}
