"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

const industries = [
  {
    id: 1,
    name: "Retail & E-Commerce",
    description:
      "Immersive storefronts with rich merchandising and fast checkout paths.",
    image: "/images/Retail & E-commerce.svg",
    icon: "/images/shopping-bag (2).png",
    metricLabel: "Avg. commerce uplift",
    metricValue: "+38%",
  },
  {
    id: 2,
    name: "Corporate Services",
    description:
      "Executive-ready sites that build trust, clarify services, and convert leads.",
    image: "/images/Professional Services.svg",
    icon: "/images/cooparateimg.png",
    metricLabel: "Lead conversion increase",
    metricValue: "+62%",
  },
  {
    id: 3,
    name: "Travel & Hospitality",
    description:
      "Transportive storytelling with realtime booking flows and clear itineraries.",
    image: "/images/Travel & Hospitality.svg",
    icon: "/images/Luggage.png",
    metricLabel: "Booking uplift",
    metricValue: "+44%",
  },
  {
    id: 4,
    name: "Creative & Media",
    description:
      "Bold stage sets for agencies, studios, and creators who need their work to shine.",
    image: "/images/Creative & Media Agencies.svg",
    icon: "/images/creativity.png",
    metricLabel: "Portfolio engagement",
    metricValue: "+51%",
  },
  {
    id: 5,
    name: "Construction & Real Estate",
    description:
      "Portfolio-driven experiences with interactive listings and investor-ready insights.",
    image: "/images/Construction & Real Estate.svg",
    icon: "/images/blueprint.png",
    metricLabel: "Project win rate",
    metricValue: "+29%",
  },
  {
    id: 6,
    name: "Education & Learning",
    description:
      "Learning platforms and academies that make enrollment and content feel intuitive.",
    image: "/images/Education & Learning Platforms.svg",
    icon: "/images/scholorship.png",
    metricLabel: "Enrollment growth",
    metricValue: "+35%",
  },
  {
    id: 7,
    name: "Health, Beauty & Wellness",
    description:
      "Serene, high-touch experiences that mirror the care clients receive in person.",
    image: "/images/Health, Beauty & Wellness.svg",
    icon: "/images/cardiogram.png",
    metricLabel: "Appointment lift",
    metricValue: "+48%",
  },
  {
    id: 8,
    name: "Custom Products",
    description:
      "When your idea doesn’t fit a template, we craft a digital product from scratch.",
    image: "/images/Custom Product.svg",
    icon: "/images/Group.png",
    metricLabel: "Custom launches delivered",
    metricValue: "120+",
  },
];

const IndustryBox: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInitialMount, setIsInitialMount] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const activeIndustry = industries[activeIndex];
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const pillContainerRef = useRef<HTMLDivElement | null>(null);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % industries.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    if (isInitialMount) {
      setIsInitialMount(false);
      return;
    }
    const activeButton = buttonRefs.current[activeIndex];
    const container = pillContainerRef.current;

    if (activeButton && container) {
      const scrollLeft =
        activeButton.offsetLeft -
        container.offsetWidth / 2 +
        activeButton.offsetWidth / 2;

      container.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeIndex, isInitialMount]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const handleManualClick = (index: number) => {
    setActiveIndex(index);
    setIsPaused(true);
    if (resumeTimeoutRef.current) {
      clearTimeout(resumeTimeoutRef.current);
    }
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#080111] via-[#020007] to-[#000000] p-5 sm:p-8">
      <div className="pointer-events-none absolute -top-16 right-4 h-48 w-48 rounded-full bg-[#8133F1]/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-60px] h-72 w-72 rounded-full bg-[#0a1a40]/50 blur-[140px]" />

      <div className="relative z-10 space-y-6">
        <div className="relative flex min-h-[100px] flex-col overflow-hidden rounded-[40px] border border-white/10 bg-black/40">
            <div className="relative z-10 flex h-full flex-col justify-end gap-6 p-6 sm:p-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold leading-tight sm:text-3xl lg:text-4xl">
                {activeIndustry.name}
              </h3>
              <p className="mt-3 text-sm text-white/80 sm:text-base">
                {activeIndustry.description}
              </p>
            </div>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/30 px-4 py-3 text-xs font-semibold uppercase tracking-widest text-white/80 sm:px-5 sm:text-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40">
                {String(activeIndustry.id).padStart(2, "0")}
              </span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-[0.4em] text-white/50">
                  {activeIndustry.metricLabel}
                </p>
                <p className="text-lg text-white">
                  {activeIndustry.metricValue}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div
            ref={pillContainerRef}
            className="flex gap-3 overflow-x-auto pb-2 scrollbar-thin"
          >
            {industries.map((industry, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={industry.id}
                  ref={(el) => {
                    buttonRefs.current[index] = el;
                  }}
                  onClick={() => handleManualClick(index)}
                  className={`flex min-w-[180px] items-center gap-3 rounded-[24px] border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-[#CEB0FA] bg-gradient-to-r from-[#8133F1]/40 to-transparent shadow-[0_20px_60px_rgba(6,0,35,0.5)]"
                      : "border-white/10 hover:border-white/40"
                  }`}
                >
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${
                      isActive ? "bg-[#8133F1]/40" : "bg-white/10"
                    }`}
                  >
                    <Image
                      src={industry.icon}
                      alt={industry.name}
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-sm font-semibold ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                    >
                      {industry.name}
                    </p>
                    <p className="text-xs text-white/50">Tap to explore</p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[28px] border border-white/20 bg-white/5 p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Collaboration
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Strategy studio + build pod
              </p>
              <p className="mt-2 text-sm text-white/70">
                Dedicated multi-disciplinary team that stays with the engagement
                end-to-end.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/20 bg-white/5 p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Timeline
              </p>
              <p className="mt-2 text-lg font-semibold text-white">4-8 weeks</p>
              <p className="mt-2 text-sm text-white/70">
                Sprint planning tuned to your launch cadence, including QA +
                training.
              </p>
            </div>
            <div className="rounded-[28px] border border-white/20 bg-white/5 p-5 text-left">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Deliverables
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                UX · UI · Dev
              </p>
              <p className="mt-2 text-sm text-white/70">
                From research to production-grade builds, handed over with
                documentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryBox;
