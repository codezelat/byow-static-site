import type { FC } from "react";

const painPoints = [
  {
    title: "Templates can't reflect your unique vision",
    description:
      "Rigid sections and theme locks make it impossible to tell your story the way you want.",
  },
  {
    title: "CMS tools promise freedom but hide limitations",
    description:
      "Plugins, version locks, and surprise maintenance windows keep you from shipping confidently.",
  },
  {
    title: "You shouldn't need to be a coder to realize ideas",
    description:
      "Every tweak requires a ticket, slowing your launches and draining creative momentum.",
  },
  {
    title: "Updating your site shouldn't feel like a hassle",
    description:
      "Teams lose time fighting UI quirks instead of improving the customer experience.",
  },
];

const PainPointsSection: FC = () => (
  <section className="relative w-full overflow-hidden py-16 sm:py-24">
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 xs:px-6 sm:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#CEB0FA]">
          Frustrated with the process?
        </p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[48px]">
          Let&apos;s remove the roadblocks.
        </h2>
        <p className="mt-3 text-sm text-white/70 sm:text-base">
          These pain points stall momentum. We design workflows that keep your
          launches moving without scroll traps or awkward interactions.
        </p>
      </div>

      <div className="grid grid-cols-1 items-stretch gap-4 sm:gap-6 md:grid-cols-2">
        {painPoints.map((point) => (
          <article
            key={point.title}
            className="relative flex h-full flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[0_20px_60px_-35px_rgba(0,0,0,0.8)] transition hover:border-white/20 hover:bg-white/8"
          >
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white/5 via-transparent to-white/5 opacity-60" />
            <div className="space-y-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/60">
                Pain point
              </p>
              <h3 className="text-lg font-semibold leading-tight text-white sm:text-xl">
                {point.title}
              </h3>
              <p className="text-sm text-white/70 sm:text-base">
                {point.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default PainPointsSection;
