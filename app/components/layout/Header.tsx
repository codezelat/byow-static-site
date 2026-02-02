"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import PopupPage from "../../popup/popup-page";

export default function Header() {
  const pathname = usePathname();
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
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
      <div className="flex justify-between items-center px-4 sm:px-5 lg:px-8 h-[70px] sm:h-[80px] lg:h-[90px] w-full">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold flex-shrink-0">
          <Image
            src="/images/byow-logo.svg"
            alt="header logo"
            width={161}
            height={79}
            className="w-[100px] sm:w-[120px] md:w-[130px] lg:w-[140px] h-auto"
            priority
          />
        </Link>

        {/* Mobile Hamburger Menu - Shows on mobile/tablet only */}
        {mounted && (
          <button
            id="sidebar-toggle"
            className="lg:hidden relative z-50 bg-[#8133F1] p-2 sm:p-2.5 rounded-lg shadow-lg hover:bg-[#6a1fc7] transition-all duration-200 active:scale-95"
            onClick={() => setSidebarVisible(!sidebarVisible)}
            aria-label={sidebarVisible ? "Close menu" : "Open menu"}
          >
            {sidebarVisible ? (
              <CloseIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            ) : (
              <MenuIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
            )}
          </button>
        )}

        {/* Desktop Navigation - Shows on lg and above */}
        <nav className="hidden lg:flex items-center rounded-full border border-[#2D2836] p-1 sm:p-1.5">
          <ul className="flex flex-row gap-1.5 sm:gap-2 md:gap-3 lg:gap-4">
            {["/", "/about", "/services", "/products"].map((path, index) => {
              const isActive = pathname === path;
              const isHovered = hoveredLink === path;

              return (
                <li key={index}>
                  <motion.div
                    className="relative w-[70px] sm:w-[85px] md:w-[100px] lg:w-[110px] h-[32px] sm:h-[38px] md:h-[42px] lg:h-[45px] rounded-full border border-[#2D2836] flex items-center justify-center overflow-hidden cursor-pointer"
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

      {/* Mobile Sidebar Menu */}
      {mounted && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: sidebarVisible ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden ${
              sidebarVisible ? "pointer-events-auto" : "pointer-events-none"
            }`}
            onClick={() => setSidebarVisible(false)}
          />

          {/* Sliding Menu Panel */}
          <motion.div
            id="mobile-sidebar"
            initial={{ x: "100%" }}
            animate={{ x: sidebarVisible ? 0 : "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 w-[280px] sm:w-[320px] h-full bg-gradient-to-b from-[#0a0a0a] to-[#040010] text-white shadow-2xl z-50 overflow-y-auto lg:hidden border-l border-[#8133F1]/20"
          >
            <div className="flex flex-col h-full p-6 sm:p-8">
              {/* Close Button */}
              <div className="flex justify-end mb-8">
                <button
                  onClick={() => setSidebarVisible(false)}
                  className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                  aria-label="Close menu"
                >
                  <CloseIcon className="w-6 h-6 text-white/70 hover:text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="flex flex-col gap-2">
                  {[
                    { path: "/", label: "HOME" },
                    { path: "/about", label: "ABOUT" },
                    { path: "/services", label: "SERVICES" },
                    { path: "/products", label: "PRODUCTS" },
                  ].map(({ path, label }, index) => {
                    const isActive = pathname === path;

                    return (
                      <motion.li
                        key={path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          href={path}
                          className={`block px-4 py-3 rounded-lg text-base sm:text-lg font-medium transition-all ${
                            isActive
                              ? "bg-[#8133F1] text-white shadow-lg shadow-[#8133F1]/30"
                              : "text-white/80 hover:bg-white/5 hover:text-white"
                          }`}
                          onClick={() => setSidebarVisible(false)}
                        >
                          {label}
                        </Link>
                      </motion.li>
                    );
                  })}
                </ul>
              </nav>

              {/* Build Now Button */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 bg-gradient-to-r from-[#8133F1] to-[#6a1fc7] flex items-center justify-center text-sm sm:text-base font-semibold text-white w-full h-[50px] rounded-full shadow-lg shadow-[#8133F1]/30 hover:shadow-[#8133F1]/50 transition-all gap-2 active:scale-95"
                onClick={handleOpenPopup}
              >
                BUILD NOW
                <ArrowCircleRightOutlinedIcon className="w-5 h-5" />
              </motion.button>

              {/* Optional: Contact Info */}
              <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm text-white/50">
                <p>Need help? Contact us</p>
              </div>
            </div>
          </motion.div>
        </>
      )}

      {/* Popup */}
      {popupVisible && <PopupPage onClose={handleClosePopup} />}
    </header>
  );
}
