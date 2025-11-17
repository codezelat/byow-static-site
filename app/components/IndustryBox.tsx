"use client";

import Image from "next/image";
import type { NextPage } from "next";
import { useState } from "react";

const industries = [
  {
    id: 1,
    name: "Retail & E-Commerce",
    description:
      "Immersive storefronts that pair rich merchandising with fast checkout paths.",
    image: "/images/Retail & E-commerce.svg",
  },
  {
    id: 2,
    name: "Corporate & Professional Services",
    description:
      "Executive-ready sites that build trust, clarify services, and convert leads.",
    image: "/images/Professional Services.svg",
  },
  {
    id: 3,
    name: "Travel & Hospitality",
    description:
      "Transportive storytelling, realtime booking flows, and crystal clear itineraries.",
    image: "/images/Travel & Hospitality.svg",
  },
  {
    id: 4,
    name: "Creative & Media",
    description:
      "Bold stage sets for agencies, studios, and creators who need their work to shine.",
    image: "/images/Creative & Media Agencies.svg",
  },
  {
    id: 5,
    name: "Construction & Real Estate",
    description:
      "Portfolio-driven experiences with interactive listings and investor-ready insights.",
    image: "/images/Construction & Real Estate.svg",
  },
  {
    id: 6,
    name: "Education & Learning",
    description:
      "Learning platforms and academies that make enrollment and content feel intuitive.",
    image: "/images/Education & Learning Platforms.svg",
  },
  {
    id: 7,
    name: "Health, Beauty & Wellness",
    description:
      "Serene, high-touch experiences that mirror the care clients receive IRL.",
    image: "/images/Health, Beauty & Wellness.svg",
  },
  {
    id: 8,
    name: "Custom Products",
    description:
      "When your idea doesn’t fit a template, we craft a digital product from scratch.",
    image: "/images/Custom Product.svg",
  },
];

const IndustryBox: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIndustry = industries[activeIndex];

  return (
    <div className="relative overflow-hidden rounded-[48px] border border-white/10 bg-gradient-to-br from-[#0C051A] via-[#020008] to-[#010104] p-6 sm:p-10">
      <div className="pointer-events-none absolute -top-16 right-4 h-48 w-48 rounded-full bg-[#8133F1]/30 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-[-60px] h-72 w-72 rounded-full bg-[#0a1a40]/50 blur-[140px]" />

      <div className="relative z-10 grid gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
            Choose an industry
          </p>
          <div className="hidden flex-col gap-2 lg:flex">
            {industries.map((industry, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center justify-between rounded-[18px] border px-4 py-3 text-left transition ${
                    isActive ? "border-white/50 bg-white/10" : "border-white/10 hover:border-white/30"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold ${
                      isActive ? "text-white" : "text-white/70"
                    }`}
                  >
                    {industry.name}
                  </span>
                  <span
                    className={`h-2 w-2 rounded-full ${
                      isActive ? "bg-[#CEB0FA]" : "bg-white/20"
                    }`}
                  />
                </button>
              );
            })}
          </div>
          <div className="flex gap-3 overflow-x-auto lg:hidden">
            {industries.map((industry, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={industry.id}
                  onClick={() => setActiveIndex(index)}
                  className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide ${
                    isActive ? "bg-[#8133F1] text-white" : "bg-white/10 text-white/60"
                  }`}
                >
                  {industry.name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black/30 p-6 sm:p-10">
          <Image
            src={activeIndustry.image}
            alt={activeIndustry.name}
            fill
            sizes="(min-width: 1024px) 60vw, 90vw"
            className="object-cover opacity-30"
          />
          <div className="relative z-10">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              {activeIndustry.name}
            </p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
              {activeIndustry.name}
            </h3>
            <p className="mt-4 text-sm text-white/80 sm:text-base">
              {activeIndustry.description}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Collaboration
                </p>
                <p className="mt-2 text-lg font-semibold text-white">Strategy + Build</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Timeline
                </p>
                <p className="mt-2 text-lg font-semibold text-white">4-8 weeks</p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/5 p-4 text-left">
                <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                  Deliverables
                </p>
                <p className="mt-2 text-lg font-semibold text-white">UX, UI, Dev</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-10 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
        <span className="rounded-full border border-white/15 px-4 py-1">
          Commerce
        </span>
        <span className="rounded-full border border-white/15 px-4 py-1">
          Hospitality
        </span>
        <span className="rounded-full border border-white/15 px-4 py-1">
          Education
        </span>
        <span className="rounded-full border border-white/15 px-4 py-1">
          Custom stacks
        </span>
      </div>
    </div>
  );
};

export default IndustryBox;
