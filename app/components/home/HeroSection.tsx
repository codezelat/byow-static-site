"use client";

import type { FC } from "react";

const heroStats = [
  { value: "120+", label: "Custom builds launched" },
  { value: "<1.5s", label: "Avg. first load time" },
  { value: "90+", label: "Lighthouse performance" },
  { value: "24/7", label: "Product team support" },
];

const heroHighlights = [
  {
    title: "Mobile-first every time",
    description:
      "Layouts flex from 320px upward with no awkward jumps or hidden content.",
  },
  {
    title: "Real prototypes fast",
    description:
      "Design paired with production-ready builds so you can test what matters.",
  },
  {
    title: "Launch-ready ops",
    description: "Content strategy, QA, and performance baked in-no handoff lag.",
  },
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

      <div className="mt-12 grid w-full gap-6 md:grid-cols-[1.05fr_0.95fr]">
        <article className="rounded-[32px] border border-white/10 bg-white/5 p-6 sm:p-8 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Complete build squad
          </p>
          <h2 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
            High-touch design + dev support that scales with you
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            No more context switching between freelancers. We pair strategists,
            designers, and engineers that stay in lockstep so launches are
            calmer and the end product looks like a million bucks.
          </p>
          <ul className="mt-6 space-y-4">
            {heroHighlights.map((highlight) => (
              <li key={highlight.title} className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[#CEB0FA]" />
                <div>
                  <p className="text-sm font-semibold sm:text-base">
                    {highlight.title}
                  </p>
                  <p className="text-sm text-white/60">{highlight.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </article>
        <article className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-b from-[#1F0B33]/80 to-[#05010F] p-6 sm:p-8 text-left">
          <div className="pointer-events-none absolute -right-6 top-10 h-48 w-48 rounded-full bg-[#8133F1]/40 blur-[80px]" />
          <div className="pointer-events-none absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-[#090909]/70 blur-[80px]" />
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#CEB0FA]">
            Performance-first builds
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
            Smooth interactions, featherweight load times
          </h3>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            We obsess over Core Web Vitals, minify the attack surface, and
            stress test scroll + tap animations so your hero section feels
            effortless even on older devices.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-white/80 sm:text-sm">
            <span className="rounded-full bg-white/10 px-4 py-1">Adaptive layouts</span>
            <span className="rounded-full bg-white/10 px-4 py-1">Accessibility AA+</span>
            <span className="rounded-full bg-white/10 px-4 py-1">Motion-safe modes</span>
          </div>
          <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
            <p className="text-sm font-semibold text-white">Deployment-ready checklist</p>
            <p className="mt-1 text-sm text-white/70">
              Responsive QA, CDN optimization, and CMS training are handled before we
              hand over the keys.
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
);

export default HeroSection;
