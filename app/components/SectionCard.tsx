"use client";

import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";

type Issue = {
  id: number;
  label: string;
  summary: string;
  solution: string;
};

const issues: Issue[] = [
  {
    id: 1,
    label: "DIY platforms seem easy… until they're not",
    summary:
      "Builders promise limitless customization, but the exact feature you need is off-limits.",
    solution:
      "We design and ship production-ready builds, so you never fight a template again.",
  },
  {
    id: 2,
    label: "Templates aren’t your brand",
    summary:
      "Cookie-cutter layouts flatten your personality and make launches look identical.",
    solution:
      "Every BYOW project starts with a bespoke system tuned to your visuals, content, and product goals.",
  },
  {
    id: 3,
    label: "CMS tools hide costs",
    summary:
      "Plugins, hosting, and constant patchwork pile up into surprise expenses and tech debt.",
    solution:
      "We architect transparent stacks, optimize performance, and keep maintenance predictable.",
  },
  {
    id: 4,
    label: "DIY drains your time",
    summary:
      "Learning a new builder while running a business eats calendars and delays your launch.",
    solution:
      "Our sprint-based pods handle the heavy lifting so you can stay focused on strategy.",
  },
];

const SectionCard: NextPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeIssue = issues[activeIndex];

  return (
    <section className="relative w-full px-4 pt-14 pb-14 xs:px-6 sm:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[56px] border border-white/10 bg-gradient-to-br from-[#19042B] via-[#08010F] to-[#030008] px-6 py-10 sm:px-10 sm:py-14 md:px-14 md:py-16">
        <div className="pointer-events-none absolute -top-16 right-6 h-64 w-64 rounded-full bg-[#8133F1]/40 blur-[120px]" />
        <div className="pointer-events-none absolute bottom-0 left-[-50px] h-72 w-72 rounded-full bg-[#03062B]/70 blur-[140px]" />

        <div className="relative z-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#CEB0FA]">
            Problems we solve every week
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-[40px]">
            Slide through the friction, see how we fix it
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Pick the pain point that matches your world. Our solution tile updates in real
            time, so you can see how we respond.
          </p>
        </div>

        <div className="relative z-10 mt-12 space-y-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {issues.map((issue, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={issue.id}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex flex-col gap-3 rounded-[32px] border px-5 py-5 text-left transition-all duration-300 ${
                    isActive
                      ? "border-[#8133F1] bg-[#1F0533]/70 shadow-[0_30px_120px_rgba(6,0,20,0.65)]"
                      : "border-white/5 bg-white/5 hover:border-white/15"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                      0{issue.id}
                    </span>
                    <span
                      className={`h-2 w-2 rounded-full ${
                        isActive ? "bg-[#CEB0FA]" : "bg-white/20"
                      }`}
                    />
                  </div>
                  <p
                    className={`text-lg font-semibold ${
                      isActive ? "text-white" : "text-white/80"
                    }`}
                  >
                    {issue.label}
                  </p>
                  <p className="text-sm text-white/60">{issue.summary}</p>
                  <div className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-white/70">
                    See solution
                    <Image
                      src="/images/Arrow 1.png"
                      alt="arrow"
                      width={80}
                      height={14}
                      className="w-14 opacity-60 transition group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="rounded-[36px] border border-white/10 bg-black/30 p-6 sm:p-8 md:p-10 backdrop-blur-2xl">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  Solution playbook
                </p>
                <p className="mt-2 text-2xl font-semibold sm:text-3xl">
                  Pain point {String(activeIssue.id).padStart(2, "0")}
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
                {issues.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1 w-10 rounded-full transition ${
                      index <= activeIndex ? "bg-[#8133F1]" : "bg-white/10"
                    }`}
                  />
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5 sm:p-6 text-left">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  The blocker
                </p>
                <p className="mt-3 text-sm text-white/80 sm:text-base">
                  {activeIssue.summary}
                </p>
              </div>
              <div className="rounded-[28px] border border-[#8133F1]/40 bg-gradient-to-br from-[#8133F1]/35 to-[#2B0A4E] p-5 sm:p-6 text-left shadow-[0_25px_90px_rgba(8,0,30,0.55)]">
                <div className="flex items-center gap-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                    Our fix
                  </p>
                  <span className="h-px flex-1 bg-white/20" />
                  <Image
                    src="/images/Group (1).png"
                    alt="arrow"
                    width={60}
                    height={14}
                    className="h-4 w-auto opacity-80"
                  />
                </div>
                <p className="mt-4 text-base text-white sm:text-lg">
                  {activeIssue.solution}
                </p>
                <div className="mt-6 inline-flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-white/70">
                  <span className="rounded-full border border-white/20 px-4 py-1">
                    Strategy
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1">
                    Design
                  </span>
                  <span className="rounded-full border border-white/20 px-4 py-1">
                    Engineering
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionCard;
