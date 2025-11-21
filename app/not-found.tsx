import Link from "next/link";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

export default function NotFound() {
  return (
    <section className="relative mx-auto min-h-[calc(100vh-140px)] w-full max-w-6xl px-4 pb-20 pt-16 text-white xs:px-6 sm:px-8">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-[#8133F1]/25 blur-[110px] md:h-80 md:w-80"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-56 w-56 rounded-full bg-[#24004E]/50 blur-[90px] md:h-72 md:w-72"
        aria-hidden
      />

      <div className="relative mx-auto flex max-w-5xl flex-col items-center gap-8 rounded-[32px] border border-white/10 bg-gradient-to-b from-[#0A001A]/90 via-[#0C001E]/90 to-[#040010]/90 p-6 text-center shadow-[0_25px_70px_rgba(6,0,20,0.65)] backdrop-blur sm:p-8 lg:p-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
            Off the map
          </p>
          <div className="space-y-3">
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              <span className="bg-gradient-to-r from-white via-[#CEB0FA] to-white bg-clip-text text-transparent">
                404: Page not found
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-base leading-relaxed text-white/75 sm:text-lg">
              The link you followed is drifting in deep space. Let&apos;s bring
              you back to the core experiences where BYOW designs, builds, and
              ships digital products that move brands forward.
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-2xl flex-col gap-3">
          <Link
            href="/"
            className="flex h-[56px] w-full items-center justify-center gap-2 rounded-full bg-[#8133F1] px-6 text-sm font-semibold uppercase tracking-wide transition hover:scale-[1.02] hover:bg-[#6a1fc7] sm:h-[56px] sm:text-base"
          >
            Back to home
            <ArrowCircleRightOutlinedIcon className="h-5 w-5" />
          </Link>
          <Link
            href="/services"
            className="flex h-[56px] w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-[#8133F1] hover:bg-white/10 sm:h-[56px] sm:text-base"
          >
            Explore services
          </Link>
        </div>

        <div className="w-full max-w-3xl">
          {[
            {
              title: "Talk with BYOW",
              copy: "Share what you’re building and we’ll tailor a launch-ready roadmap.",
              href: "/contact",
            },
          ].map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex w-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-[#0C001C] to-[#14002F] p-5 text-center transition hover:border-[#8133F1]/60 hover:shadow-[0_20px_60px_rgba(8,0,20,0.55)] sm:p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                {item.title}
              </p>
              <p className="text-sm leading-relaxed text-white/75 sm:text-base">
                {item.copy}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
