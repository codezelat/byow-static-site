import type { FC } from "react";

const buildHighlights = [
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

const BuildSquadSection: FC = () => (
  <section className="relative px-3 xs:px-4 sm:px-6">
    <div className="mx-auto max-w-6xl">
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Complete build squad card */}
        <article className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8 text-left">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
            Complete build squad
          </p>
          <h2 className="mt-3 text-2xl font-semibold leading-snug sm:mt-4 sm:text-3xl">
            High-touch design + dev support that scales with you
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            No more context switching between freelancers. We pair strategists,
            designers, and engineers that stay in lockstep so launches are
            calmer and the end product looks like a million bucks.
          </p>
          <ul className="mt-6 space-y-4">
            {buildHighlights.map((highlight) => (
              <li key={highlight.title} className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[#CEB0FA]" />
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

        {/* Performance-first builds card */}
        <article className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-b from-[#1F0B33]/80 to-[#05010F] p-6 sm:p-8 text-left">
          <div className="pointer-events-none absolute -right-6 top-10 h-48 w-48 rounded-full bg-[#8133F1]/40 blur-[80px]" />
          <div className="pointer-events-none absolute -left-12 bottom-0 h-36 w-36 rounded-full bg-[#090909]/70 blur-[80px]" />
          <p className="relative text-sm font-semibold uppercase tracking-[0.25em] text-[#CEB0FA]">
            Performance-first builds
          </p>
          <h3 className="relative mt-4 text-2xl font-semibold leading-snug sm:text-3xl">
            Smooth interactions, featherweight load times
          </h3>
          <p className="relative mt-4 text-sm text-white/70 sm:text-base">
            We obsess over Core Web Vitals, minify the attack surface, and
            stress test scroll + tap animations so your hero section feels
            effortless even on older devices.
          </p>
          <div className="relative mt-6 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-wide text-white/80 sm:text-sm">
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
          <div className="relative mt-8 rounded-2xl border border-white/10 bg-black/30 p-4">
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
);

export default BuildSquadSection;
