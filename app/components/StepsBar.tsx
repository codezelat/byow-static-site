"use client";

import type { NextPage } from "next";
import { useState } from "react";

const steps = [
  {
    title: "Share Your Vision",
    description:
      "DIY platforms ask, 'What do you want?' but give you a blank canvas with zero guidance.",
    detail:
      "We don't just ask; we listen. Whether you have a clear idea or a rough sketch, we help shape your vision into something extraordinary.",
  },
  {
    title: "Watch Us Build",
    description:
      "Drag-and-drop builders are fine... until that custom feature you need is impossible.",
    detail:
      "Our product squad designs and engineers together, so even the 'one-off' interactions feel seamless across every breakpoint.",
  },
  {
    title: "Review & Perfect",
    description:
      "DIY tools make you tweak endlessly, but they never quite feel right.",
    detail:
      "We loop you in with review-ready previews and iterate fast so your site looks and feels exactly how you pictured it.",
  },
  {
    title: "Launch & Thrive",
    description:
      "With DIY platforms, launching is step one—then you're stuck with performance and SEO issues.",
    detail:
      "We deliver optimized, future-proof builds with training included so you can sustain the momentum long after launch.",
  },
];

const StepsBar: NextPage = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="px-4 pt-16 pb-10 xs:px-6 sm:px-8 md:pt-24 md:pb-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#CEB0FA]">
            How BYOW Simplifies Your Journey
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-[40px]">
            Helping you achieve more with less effort
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Swipe through the timeline on mobile or follow the vertical tracker on desktop to see how we partner from idea to launch.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10 lg:flex-row lg:items-start">
          {/* Desktop vertical tracker */}
          <div className="hidden lg:flex lg:w-1/4 lg:flex-col lg:items-center">
            <div className="relative w-px flex-1 bg-white/20">
              <div
                className="absolute w-1 bg-gradient-to-b from-[#8133F1] to-[#CEB0FA] rounded-full"
                style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              />
            </div>
            <div className="mt-6 space-y-3">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`flex items-center gap-3 text-left text-sm font-semibold uppercase tracking-[0.25em] transition ${
                    activeStep === index
                      ? "text-white"
                      : "text-white/40 hover:text-white/70"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full border text-base ${
                      activeStep === index
                        ? "border-[#8133F1] bg-[#8133F1]/20"
                        : "border-white/20"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {step.title}
                </button>
              ))}
            </div>
          </div>

          {/* Content cards */}
          <div className="flex-1">
            <div className="flex gap-4 overflow-x-auto lg:hidden">
              {steps.map((step, index) => (
                <button
                  key={step.title}
                  onClick={() => setActiveStep(index)}
                  className={`min-w-[180px] rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    activeStep === index
                      ? "border-[#8133F1] bg-white/10 text-white"
                      : "border-white/10 text-white/60"
                  }`}
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                    Step {index + 1}
                  </p>
                  <p className="mt-2 text-base">{step.title}</p>
                </button>
              ))}
            </div>

            <div className="mt-8 rounded-[32px] border border-white/10 bg-[#05010F]/80 p-6 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                Step {String(activeStep + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-white">
                {steps[activeStep].title}
              </h3>
              <p className="mt-4 text-sm text-white/80 sm:text-base">
                {steps[activeStep].description}
              </p>
              <p className="mt-4 text-sm text-white/60 sm:text-base">
                {steps[activeStep].detail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsBar;
