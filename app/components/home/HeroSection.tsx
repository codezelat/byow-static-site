"use client";

import type { FC } from "react";

const heroStats = [
  { value: "120+", label: "Custom builds launched" },
  { value: "<1.5s", label: "Avg. first load time" },
  { value: "90+", label: "Lighthouse performance" },
  { value: "24/7", label: "Product team support" },
];

const HeroSection: FC = () => (
  <section className="relative isolate overflow-hidden pt-24 pb-16 xs:pt-28 sm:pt-32 sm:pb-20 md:pt-40 lg:pt-48">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 bg-[#8133F1]/30 blur-[120px]" />
      <div className="absolute right-10 top-16 h-48 w-48 rounded-full bg-[#2D2836]/70 blur-[90px]" />
      <div className="absolute bottom-0 left-4 h-64 w-64 rounded-full bg-[#090909] blur-[100px] opacity-80" />
    </div>

    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 xs:px-6 sm:px-8">
      <div className="max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#CEB0FA]">
          Build-Your-Own-Website
        </p>
        <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl lg:text-[64px]">
          smart brands get flawless and stunning sites
        </h1>
        <p className="mt-5 text-base text-white/70 sm:text-lg">
          Skip the fragile DIY stack. We blueprint, design, build, and optimize
          your entire experience so it feels premium on every device and
          actually ships on time.
        </p>
      </div>

      <div className="mt-8 flex w-full flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <a
          href="https://cal.com/codezela/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#8133F1] px-8 py-3 text-base font-semibold text-white transition hover:bg-[#6d1fe2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CEB0FA]"
        >
          Book a strategy call
        </a>
        <a
          href="#journey"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-3 text-base font-semibold text-white/90 backdrop-blur-sm transition hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30"
        >
          See how BYOW works
        </a>
      </div>

      <div className="mt-12 grid w-full grid-cols-2 gap-4 sm:grid-cols-4">
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-4 text-left sm:p-5"
          >
            <p className="text-2xl font-semibold sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-wide text-white/60 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
