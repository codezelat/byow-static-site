"use client";

import type { NextPage } from "next";
import { useEffect, useRef, useState } from "react";

type Step = {
  title: string;
  description: string;
  detail: string;
};

const steps: Step[] = [
  {
    title: "Share Your Vision",
    description:
      "DIY platforms ask, 'What do you want?' but hand you a blank canvas with zero guidance.",
    detail:
      "We translate messy notes, moodboards, and references into an actionable roadmap so you always know the next move.",
  },
  {
    title: "Watch Us Build",
    description:
      "Drag-and-drop builders are fine until that one custom interaction becomes impossible.",
    detail:
      "Design and engineering work side by side, so animations, states, and content flows feel intentional on every device.",
  },
  {
    title: "Review & Perfect",
    description:
      "DIY tools make you tweak endlessly, but they never quite feel right.",
    detail:
      "We ship review links, gather feedback quickly, and iterate until the experience feels unmistakably yours.",
  },
  {
    title: "Launch & Thrive",
    description:
      "With DIY platforms, launch day is only the beginning of performance and SEO headaches.",
    detail:
      "We optimize, document, and train your team so post-launch feels calm and the site stays fast and future-proof.",
  },
];

const StepsBar: NextPage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const indexAttr = entry.target.getAttribute("data-step-index");
            const index = Number(indexAttr);
            if (!Number.isNaN(index)) {
              setActiveStep((prev) => (prev === index ? prev : index));
            }
          }
        });
      },
      {
        rootMargin: "-20% 0px -35% 0px",
        threshold: 0.35,
      }
    );

    stepRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const registerRef = (el: HTMLDivElement | null, index: number) => {
    stepRefs.current[index] = el;
  };

  return (
    <section className="px-3 pt-16 pb-12 xs:px-4 sm:px-6 md:pt-24 md:pb-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#CEB0FA]">
            How BYOW Simplifies Your Journey
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-[40px]">
            Helping you achieve more with less effort
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Follow the timeline to see how we move from raw ideas to a launch-ready experience without the usual friction.
          </p>
        </div>

        <div className="mt-12">
          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-white/10" />
            <div
              className="hidden lg:block absolute left-1/2 top-0 w-px -translate-x-1/2 bg-gradient-to-b from-[#8133F1] to-[#CEB0FA] transition-all duration-500"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
            />
            <div className="absolute left-3 top-0 bottom-0 w-px bg-white/10 lg:hidden" />
            <div
              className="absolute left-3 top-0 w-px bg-gradient-to-b from-[#8133F1] to-[#CEB0FA] transition-all duration-500 lg:hidden"
              style={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
            />

            <div className="space-y-12">
              {steps.map((step, index) => {
                const align = index % 2 === 0 ? "left" : "right";
                const isActive = activeStep === index;

                return (
                  <div
                    key={step.title}
                    className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_120px_minmax(0,1fr)] lg:items-start"
                  >
                    {align === "left" ? (
                      <>
                        <StepCard
                          step={step}
                          index={index}
                          align={align}
                          isActive={isActive}
                          registerRef={registerRef}
                        />
                        <DesktopNumber index={index} isActive={isActive} />
                        <div className="hidden lg:block" />
                      </>
                    ) : (
                      <>
                        <div className="hidden lg:block" />
                        <DesktopNumber index={index} isActive={isActive} />
                        <StepCard
                          step={step}
                          index={index}
                          align={align}
                          isActive={isActive}
                          registerRef={registerRef}
                        />
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const DesktopNumber = ({
  index,
  isActive,
}: {
  index: number;
  isActive: boolean;
}) => (
  <div className="hidden lg:flex flex-col items-center gap-4 pt-2">
    <span
      className={`flex h-14 w-14 items-center justify-center rounded-full border-2 text-sm font-semibold transition-all duration-300 ${
        isActive
          ? "border-[#8133F1] bg-[#8133F1]/10 text-white"
          : "border-white/20 text-white/50"
      }`}
    >
      {String(index + 1).padStart(2, "0")}
    </span>
  </div>
);

interface StepCardProps {
  step: Step;
  index: number;
  align: "left" | "right";
  isActive: boolean;
  registerRef: (el: HTMLDivElement | null, index: number) => void;
}

const StepCard = ({ step, index, align, isActive, registerRef }: StepCardProps) => {
  return (
    <div
      ref={(el) => registerRef(el, index)}
      data-step-index={index}
      className={`relative col-span-full lg:col-auto ${
        align === "left" ? "lg:justify-self-end lg:pr-6" : "lg:justify-self-start lg:pl-6"
      } pl-9 sm:pl-10 lg:pl-0`}
    >
      <span
        className={`absolute left-4 top-6 h-3 w-3 -translate-x-1/2 rounded-full border border-[#8133F1] lg:hidden transition ${
          isActive ? "bg-[#8133F1]" : "bg-[#05010F]"
        }`}
      />

      <div
        className={`w-full rounded-[24px] border px-4 py-5 sm:rounded-[28px] sm:px-6 sm:py-7 text-left transition-all duration-300 ${
          isActive
            ? "border-[#8133F1] bg-gradient-to-br from-[#1B0B2B] to-[#090909] shadow-[0_20px_80px_rgba(6,0,14,0.55)]"
            : "border-white/10 bg-[#05010F]/90"
        }`}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
          Step {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
          {step.title}
        </h3>
        <p className="mt-3 text-sm text-white/80 sm:text-base">{step.description}</p>
        <p className="mt-3 text-sm text-white/60 sm:text-base">{step.detail}</p>
      </div>
    </div>
  );
};

export default StepsBar;
