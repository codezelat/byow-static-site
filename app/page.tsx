"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";
import SectionCard from "./components/SectionCard";
import StepBar from "./components/StepsBar";
import CardSection from "./components/CardSection";
import IndustriesSection from "./components/IndustriesSection";
import Yoursuccess from "./components/yoursuccess";
import InfiniteHorizontalScroll from "./components/infinite-horizontal";
import OurChallengesPage from "./components/our-challenges";

const Home: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

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
      description:
        "Content strategy, QA, and performance baked in-no handoff lag.",
    },
  ];

  const painPoints = [
    "Templates can't reflect your unique vision",
    "CMS tools promise freedom but hide limitations",
    "You shouldn't need to be a coder to realize ideas",
    "Updating your site shouldn't feel like a hassle",
  ];

  return (
    <main className="text-white">
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
              World-class custom sites, unbelievably smooth launches
            </h1>
            <p className="mt-5 text-base text-white/70 sm:text-lg">
              Skip the fragile DIY stack. We blueprint, design, build, and
              optimize your entire experience so it feels premium on every
              device and actually ships on time.
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
                <p className="text-2xl font-semibold sm:text-3xl">
                  {stat.value}
                </p>
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
                No more context switching between freelancers. We pair
                strategists, designers, and engineers that stay in lockstep so
                launches are calmer and the end product looks like a million
                bucks.
              </p>
              <ul className="mt-6 space-y-4">
                {heroHighlights.map((highlight) => (
                  <li key={highlight.title} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#CEB0FA]" />
                    <div>
                      <p className="text-sm font-semibold sm:text-base">
                        {highlight.title}
                      </p>
                      <p className="text-sm text-white/60">
                        {highlight.description}
                      </p>
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
                <span className="rounded-full bg-white/10 px-4 py-1">
                  Adaptive layouts
                </span>
                <span className="rounded-full bg-white/10 px-4 py-1">
                  Accessibility AA+
                </span>
                <span className="rounded-full bg-white/10 px-4 py-1">
                  Motion-safe modes
                </span>
              </div>
              <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="text-sm font-semibold text-white">
                  Deployment-ready checklist
                </p>
                <p className="mt-1 text-sm text-white/70">
                  Responsive QA, CDN optimization, and CMS training are handled
                  before we hand over the keys.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="px-4 pb-12 xs:px-6 sm:px-8 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#CEB0FA]">
              Frustrated with the process?
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-[40px]">
              Scroll for a simpler solution.
            </h2>
            <p className="mt-4 text-sm text-white/70 sm:text-base">
              These are the blockers we hear every day. We designed BYOW to
              remove them so you can stay in flow while we build.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {painPoints.map((text) => (
              <article
                key={text}
                className="relative overflow-hidden rounded-[32px] p-[1px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(129,51,241,0.8) 0%, rgba(9,9,9,0.9) 100%)",
                }}
              >
                <div className="relative flex h-full flex-col items-center justify-center rounded-[30px] bg-[#090909] px-6 py-10 text-center">
                  <Image
                    src="/images/image.png"
                    alt="quotation mark"
                    width={38}
                    height={27}
                    className="mb-4 h-6 w-8 opacity-80 sm:h-7 sm:w-10"
                  />
                  <p className="text-base text-white sm:text-lg">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Only render components if client-side mounted to avoid hydration issues */}
      {isMounted && (
        <div className="space-y-16 px-4 pb-16 xs:px-6 sm:px-8 sm:pb-20 md:space-y-24 md:pb-28">
          <section>
            <SectionCard />
          </section>
          <section id="journey">
            <StepBar />
          </section>
          <section>
            <CardSection />
          </section>
          <section>
            <IndustriesSection />
          </section>
          <section>
            <OurChallengesPage />
          </section>
          <section>
            <InfiniteHorizontalScroll />
          </section>
          <section>
            <Yoursuccess />
          </section>
        </div>
      )}
    </main>
  );
};

export default Home;
