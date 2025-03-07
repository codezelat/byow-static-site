"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const pathname = usePathname(); // Get current route
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(false); // State for mobile sidebar
  const [, setScreenSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  // Update screen size on resize
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      // Auto-close sidebar on larger screens
      if (window.innerWidth >= 640) {
        setSidebarVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <header className="container-wrapper bg-transparent text-white py-2 sm:py-4 shadow-md">
      <div className={`flex justify-between items-center px-2 sm:px-4 md:px-8 h-[60px] sm:h-[79px] space-x-2 sm:space-x-4 md:space-x-8`}>
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/images/byow-logo.svg"
            alt="header logo"
            width={161}
            height={79}
            className={`w-24 xs:w-28 sm:w-32 md:w-40`} // More responsive logo size gradations
            priority
          />
        </Link>

        {/* Mobile Sidebar Toggle */}
        <div className="fixed top-3 sm:top-4 right-3 sm:right-4 sm:hidden z-50">
          <button
            className="bg-[#8133F1] p-1.5 sm:p-2 rounded-lg shadow-lg hover:bg-[#6a1fc7] transition-colors duration-200"
            onClick={() => setSidebarVisible(!sidebarVisible)}
            aria-label={sidebarVisible ? "Close menu" : "Open menu"}
          >
            {sidebarVisible ? (
              <CloseIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            ) : (
              <MenuIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center rounded-full border gap-1 xs:gap-2 md:gap-4 lg:gap-8 border-[#2D2836] p-1 xs:p-2">
          <ul className="flex flex-row gap-1 xs:gap-2 md:gap-4 lg:gap-8">
              {["/", "/about", "/service", "/product"].map((path, index) => {
                const isActive = pathname === path; 
                const isHovered = hoveredLink === path; 

              return (
                 <li key={index}>
                    <motion.div
                      className="relative w-[70px] xs:w-[80px] sm:w-[90px] md:w-[116px] h-[40px] xs:h-[42px] sm:h-[45px] md:h-[56px] rounded-[36px] border border-[#2D2836] flex items-center justify-center overflow-hidden cursor-pointer"
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
                      className="relative z-10 text-white px-1 xs:px-2 md:px-4 py-1 xs:py-2 text-[10px] xs:text-xs md:text-sm whitespace-nowrap font-medium" // Further adjusted font size and padding
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
        <button className="hidden sm:flex bg-[#8133F1] items-center justify-center text-[14px] md:text-[16px] font-semibold text-white w-[120px] md:w-[150px] lg:w-[200px] h-[40px] md:h-[50px] lg:h-[60px] rounded-[36px] p-2 md:p-4 lg:p-5 transition gap-2 md:gap-3 lg:gap-5">
          <span className="whitespace-nowrap">BUILD NOW</span>
          <ArrowCircleRightOutlinedIcon className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 max-w-[80vw] h-full bg-[#090909] text-white p-5 transition-transform duration-300 z-40 ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        } overflow-y-auto`}
      >
        <div className="mt-12 sm:mt-16">
          <ul className="flex flex-col gap-6">
            {["/", "/about", "/service", "/product"].map((path, index) => {
              const isActive = pathname === path; // Check if current route matches

              return (
                <li key={index}>
                  <Link
                    href={path}
                    className={`relative z-10 text-white px-4 py-2 text-sm ${
                      isActive ? "font-bold text-[#8133F1]" : ""
                    }`}
                    onClick={() => setSidebarVisible(false)} // Close sidebar on link click
                  >
                    {path === "/"
                      ? "HOME"
                      : path.toUpperCase().replace("/", "")}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Build Now Button in Mobile Sidebar */}
          <button
            className="mt-6 bg-[#8133F1] flex items-center justify-center text-[14px] sm:text-[16px] font-semibold text-white w-full h-[45px] sm:h-[50px] rounded-[36px] p-3 sm:p-4 transition gap-2 sm:gap-3"
            onClick={() => setSidebarVisible(false)} // Close sidebar on button click
          >
            BUILD NOW
            <ArrowCircleRightOutlinedIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Overlay for Mobile Sidebar */}
      {sidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setSidebarVisible(false)} // Close sidebar on overlay click
        ></div>
      )}
    </header>
  );
}