import type { FC } from "react";
import Image from "next/image";

const heroStats = [
  { value: "120+", label: "Custom builds launched" },
  { value: "<1.5s", label: "Avg. first load time" },
  { value: "90+", label: "Lighthouse performance" },
  { value: "24/7", label: "Product team support" },
];

const HeroSection: FC = () => (
  <section className="relative isolate overflow-hidden pt-20 pb-14 xs:pt-24 xs:pb-16 sm:pt-28 sm:pb-20 md:pt-36 lg:pt-48">
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 bg-[#8133F1]/30 blur-[120px]" />
      <div className="absolute right-10 top-16 h-48 w-48 rounded-full bg-[#2D2836]/70 blur-[90px]" />
      <div className="absolute bottom-0 left-4 h-64 w-64 rounded-full bg-[#090909] blur-[100px] opacity-80" />
    </div>
    <div className="pointer-events-none absolute left-1/2 top-10 -z-20 -translate-x-1/2">
      <div className="relative h-[360px] w-[360px] xs:h-[420px] xs:w-[420px] sm:h-[520px] sm:w-[520px] md:h-[700px] md:w-[700px] lg:h-[843px] lg:w-[843px]">
        <Image
          src="/images/Long Dashed Circle.png"
          alt=""
          fill
          sizes="(max-width: 768px) 80vw, (max-width: 1280px) 60vw, 843px"
          priority
          fetchPriority="high"
          aria-hidden="true"
          className="object-contain opacity-80 motion-safe:animate-spin-counterclockwise"
        />
      </div>
    </div>

    <div className="mx-auto flex max-w-6xl flex-col items-center px-4 xs:px-6 sm:px-8">
      <div className="max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#CEB0FA] sm:text-xs">
          Build-Your-Own-Website
        </p>
        <h1 className="mt-5 text-[30px] font-bold leading-[1.15] sm:mt-6 sm:text-4xl sm:leading-tight md:text-5xl lg:text-[64px]">
          smart brands get flawless and stunning sites
        </h1>
        <p className="mt-4 text-sm text-white/70 sm:mt-5 sm:text-base">
          Skip the fragile DIY stack. We blueprint, design, build, and optimize
          your entire experience so it feels premium on every device and
          actually ships on time.
        </p>
      </div>

      <div className="relative z-10 mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center sm:gap-4">
        <a
          href="https://cal.com/codezela/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-[#8133F1] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#6d1fe2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#CEB0FA] sm:px-8 sm:text-base"
        >
          Book a strategy call
        </a>
        <a
          href="#journey"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/90 backdrop-blur-sm transition hover:border-white/40 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/30 sm:px-8 sm:text-base"
        >
          See how BYOW works
        </a>
      </div>

      <div className="relative z-10 mt-10 grid w-full grid-cols-2 gap-3 sm:mt-12 sm:gap-4 sm:grid-cols-4">
        {heroStats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left sm:p-5"
          >
            <p className="text-xl font-semibold sm:text-3xl">{stat.value}</p>
            <p className="mt-1 text-[11px] uppercase tracking-wide text-white/60 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroSection;
