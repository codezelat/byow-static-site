"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const pathname = usePathname(); // Get current route
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(false); // State for mobile sidebar

  return (
    <header className="container-wrapper bg-transparent text-white py-4 shadow-md">
      <div className="flex justify-between items-center px-4 sm:px-8 h-[79px] space-x-4 sm:space-x-8">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          <Image
            src="/images/byow-logo.svg"
            alt="header logo"
            width={161}
            height={79}
            className="w-32 sm:w-40" // Responsive logo size
          />
        </Link>

        {/* Mobile Sidebar Toggle */}
        <div className="fixed top-4 right-4 sm:hidden z-50">
          <button
            className="bg-[#8133F1] p-2 rounded-lg shadow-lg hover:bg-[#6a1fc7] transition-colors duration-200"
            onClick={() => setSidebarVisible(!sidebarVisible)}
          >
            {sidebarVisible ? (
              <CloseIcon className="w-6 h-6 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden sm:flex items-center rounded-full border gap-4 sm:gap-8 border-[#2D2836] p-2">
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {["/", "/about", "/service", "/product"].map((path, index) => {
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
                      className="relative z-10 text-white px-4 py-2 text-sm" // Adjusted font size
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
        <button className="hidden sm:flex bg-[#8133F1] items-center justify-center text-[16px] font-semibold text-white w-[150px] sm:w-[200px] h-[50px] sm:h-[60px] rounded-[36px] p-4 sm:p-5 transition gap-3 sm:gap-5">
          BUILD NOW
          <ArrowCircleRightOutlinedIcon />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-[#090909] text-white p-5 transition-transform duration-300 z-40 ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-6">
          {["/", "/about", "/service", "/product"].map((path, index) => {
            const isActive = pathname === path; // Check if current route matches

            return (
              <li key={index}>
                <Link
                  href={path}
                  className={`relative z-10 text-white px-4 py-2 text-sm ${
                    isActive ? "font-bold" : ""
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
          className="mt-6 bg-[#8133F1] flex items-center justify-center text-[16px] font-semibold text-white w-full h-[50px] rounded-[36px] p-4 transition gap-3"
          onClick={() => setSidebarVisible(false)} // Close sidebar on button click
        >
          BUILD NOW
          <ArrowCircleRightOutlinedIcon />
        </button>
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