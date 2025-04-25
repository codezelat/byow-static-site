"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PopupPage from "../popup/popup-page";

export default function Header() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setSidebarVisible(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById("mobile-sidebar");
      const toggleButton = document.getElementById("sidebar-toggle");
      if (
        sidebarVisible &&
        sidebar &&
        !sidebar.contains(event.target as Node) &&
        toggleButton &&
        !toggleButton.contains(event.target as Node)
      ) {
        setSidebarVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [sidebarVisible]);

  useEffect(() => {
    if (sidebarVisible || popupVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sidebarVisible, popupVisible]);

  const handleOpenPopup = () => {
    setPopupVisible(true);
    setSidebarVisible(false);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
  };

  return (
    <header className="md:container-wrapper bg-transparent text-white lg:pt-10 md:pt-10 shadow-md relative z-50">
      <div className="flex justify-between items-center xs:px-4 sm:px-5 lg:px-8 h-[50px] xs:h-[55px] sm:h-[70px] w-full">
        {/* Logo */}
        <Link href="/" className="text-2xl ml-5 font-bold flex-shrink-0">
          <Image
            src="/images/byow-logo.svg"
            alt="header logo"
            width={161}
            height={79}
            className="xs:w-[80px] w-[90px] h-[80px] md:w-[120px] lg:w-[140px]"
            priority
          />
        </Link>

        {/* Mobile Sidebar Toggle - Shows on 2xs, xs, sm, md */}
        {isMobile && (
          <div className="fixed pt-2 md:right-10 sm:right-3 xs:right-3 2xs:right-3  z-50">
            <button
              id="sidebar-toggle"
              className="bg-[#8133F1] p-1.5 xs:p-2 rounded-lg shadow-lg hover:bg-[#6a1fc7] transition-colors duration-200"
              onClick={() => setSidebarVisible(!sidebarVisible)}
              aria-label={sidebarVisible ? "Close menu" : "Open menu"}
            >
              {sidebarVisible ? (
                <CloseIcon className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
              ) : (
                <MenuIcon className="w-5 h-5 xs:w-6 xs:h-6 text-white" />
              )}
            </button>
          </div>
        )}

        {/* Desktop Navigation - Shows on lg and above */}
        <nav className="hidden lg:flex items-center rounded-full border border-[#2D2836] p-1 sm:p-1.5">
          <ul className="flex flex-row gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            {["/", "/about", "/service", "/product"].map((path, index) => {
              const isActive = pathname === path;
              const isHovered = hoveredLink === path;

              return (
                <li key={index}>
                  <motion.div
                    className="relative w-[60px] sm:w-[75px] md:w-[85px] lg:w-[90px] h-[32px] sm:h-[38px] md:h-[42px] lg:h-[45px] rounded-full border border-[#2D2836] flex items-center justify-center overflow-hidden cursor-pointer"
                    onHoverStart={() => setHoveredLink(path)}
                    onHoverEnd={() => setHoveredLink(null)}
                  >
                    <motion.div
                      className="absolute top-0 left-0 w-full h-full bg-[#8133F1]"
                      initial={{ width: "0%" }}
                      animate={{ width: isHovered || isActive ? "100%" : "0%" }}
                      transition={{ duration: 1.5, ease: "easeInOut" }}
                    />
                    <Link
                      href={path}
                      className="relative z-10 text-white text-[18px] sm:text-sm md:text-base font-medium px-1 sm:px-2 flex items-center justify-center w-full h-full"
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

        {/* Desktop Build Now Button - Shows on lg and above */}
        <button
          className="hidden lg:flex bg-[#8133F1] items-center justify-center text-xs sm:text-sm md:text-base font-semibold text-white w-[100px] md:w-[120px] lg:w-[160px] h-[32px] sm:h-[38px] md:h-[42px] lg:h-[50px] rounded-full p-2 transition gap-1 sm:gap-2 flex-shrink-0"
          onClick={handleOpenPopup}
        >
          <span className="whitespace-nowrap">BUILD NOW</span>
          <ArrowCircleRightOutlinedIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
        </button>
      </div>

      {/* Mobile Sidebar - Shows on 2xs, xs, sm, md */}
      {isMobile && (
        <div
          id="mobile-sidebar"
          className={`fixed top-0 right-0 w-56 xs:w-64 max-w-[80vw] h-full bg-[#090909] text-white p-4 xs:p-5 transition-transform duration-300 z-40 overflow-y-auto ${
            sidebarVisible ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="mt-12 xs:mt-14 sm:mt-16">
            <ul className="flex flex-col gap-5 xs:gap-6">
              {["/", "/about", "/service", "/product"].map((path, index) => {
                const isActive = pathname === path;

                return (
                  <li key={index}>
                    <Link
                      href={path}
                      className={`relative z-10 text-white px-3 xs:px-4 py-1.5 xs:py-2 text-sm ${
                        isActive ? "font-bold text-[#8133F1]" : ""
                      }`}
                      onClick={() => setSidebarVisible(false)}
                    >
                      {path === "/"
                        ? "HOME"
                        : path.toUpperCase().replace("/", "")}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Mobile Build Now Button */}
            <button
              className="mt-5 xs:mt-6 bg-[#8133F1] flex items-center justify-center text-xs xs:text-sm font-semibold text-white w-full h-[36px] xs:h-[40px] sm:h-[45px] rounded-full p-2 xs:p-3 transition gap-1.5 xs:gap-2"
              onClick={handleOpenPopup}
            >
              BUILD NOW
              <ArrowCircleRightOutlinedIcon className="w-4 h-4 xs:w-5 xs:h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Overlay for Mobile Sidebar */}
      {sidebarVisible && isMobile && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarVisible(false)}
        ></div>
      )}

      {/* Popup */}
      {popupVisible && <PopupPage onClose={handleClosePopup} />}
    </header>
  );
}
