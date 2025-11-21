import type { Metadata } from "next";
import Link from "next/link";
import YourSuccessSection from "@/app/components/sections/common/YourSuccessSection";
import { contactInfo } from "@/app/data/footerdata";

export const metadata: Metadata = {
  title: "Contact BYOW | Website Design & Development Sri Lanka",
  description:
    "Email, call, or message BYOW to discuss website design, development, and maintenance projects in Sri Lanka. Expect a reply within one business day.",
  alternates: { canonical: "/contact" },
};

const deriveMeta = (info: string) => {
  if (info.includes("@")) {
    return {
      label: "Email",
      helper: "Answers within one business day",
      href: `mailto:${info}`,
      cta: "Send an email",
    };
  }

  if (info.trim().startsWith("+")) {
    const tel = info.replace(/\s+/g, "");
    return {
      label: "Call",
      helper: "Available 9am – 6pm LK time",
      href: `tel:${tel}`,
      cta: "Give us a call",
    };
  }

  return {
    label: "Visit",
    helper: "Book an appointment before you stop by",
    href: `https://maps.google.com/?q=${encodeURIComponent(info)}`,
    cta: "Open in Maps",
  };
};

const contactDetails = contactInfo
  .map((item) => ({
    ...item,
    ...deriveMeta(item.info),
  }))
  .filter((detail) => detail.label !== "Visit");

export default function ContactPage() {
  return (
    <main className="text-white">
      <section className="relative overflow-hidden bg-[#080014]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,51,241,0.35),_transparent_55%)]" />
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-3 py-20 text-start xs:px-4 sm:px-6 sm:text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            Contact
          </p>
          <h1 className="text-4xl font-semibold text-balance sm:text-5xl">
            Let&apos;s turn your next idea into a live experience.
          </h1>
          <p className="mx-auto max-w-2xl text-base text-white/80">
            Prefer email, calls, or an in-person workshop? All of our channels
            are open. Reach out with project details, partnership requests, or
            anything in between.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              href={
                contactDetails.find((detail) => detail.label === "Email")
                  ?.href || "mailto:info@byow.lk"
              }
              className="inline-flex items-center justify-center rounded-full bg-[#8133F1] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#6A22C8]"
            >
              Start with email
            </Link>
            <Link
              href={"https://cal.com/codezela/"}
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/90 transition hover:border-white hover:text-white"
            >
              Schedule a call
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-3 py-16 xs:px-4 sm:px-6">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          {contactDetails.map(({ id, label, helper, info, href, cta }) => (
            <div
              key={id}
              className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#14002C] to-[#05000F] p-6 shadow-[0_30px_80px_rgba(0,0,0,0.4)]"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                {label}
              </p>
              <p className="mt-3 text-2xl font-semibold text-white">{info}</p>
              <p className="mt-2 text-sm text-white/60">{helper}</p>
              <Link
                href={href}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#B78BFF] hover:text-white"
              >
                {cta}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <YourSuccessSection />
    </main>
  );
}
