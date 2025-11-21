import type { Metadata } from "next";

const faqs = [
  {
    question: "What makes BYOW different from template-based website builders?",
    answer:
      "We design and engineer every experience from scratch. That means brand-specific UX, modular components, and performance budgets tailored to your product—not the limitations of a preset template.",
  },
  {
    question: "Do you only work with Sri Lankan companies?",
    answer:
      "Our studio is based in Sri Lanka, but we collaborate with teams worldwide. We align around your timezone and communication stack to keep production smooth.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Discovery and strategy usually take 1–2 weeks, while design, engineering, and QA range from 3–12 weeks depending on scope. We share a milestone plan up front so you always know what’s next.",
  },
  {
    question: "Can you handle both design and development?",
    answer:
      "Yes. BYOW provides full-stack delivery: audits, UX/UI design, frontend, backend, and QA. You get a single partner accountable for every layer of the experience.",
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer:
      "We offer retainers for performance tuning, security updates, and new feature sprints. Most clients keep us on to ensure their site stays fast, accessible, and on brand.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We rely on modern stacks like Next.js, React, Node.js, Tailwind CSS, and headless CMS platforms. Our tooling is always chosen to match your goals and internal workflows.",
  },
  {
    question: "Do you help with SEO and analytics setup?",
    answer:
      "Your build includes technical SEO practices, structured data, metadata, sitemap, robots control, CWV optimization and we integrate analytics platforms so you can track every metric that matters.",
  },
  {
    question: "How do we kick off a project?",
    answer:
      "Send us a message via the contact page with your goals, timelines, and any reference material. We’ll arrange a workshop call, share a proposal, and lock milestones before production begins.",
  },
];

export const metadata: Metadata = {
  title: "FAQ | BYOW",
  description:
    "Answers to common questions about BYOW’s website design, development, maintenance, and partnership model.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <main className="text-white">
      <section className="relative overflow-hidden bg-transparent">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(129,51,241,0.35),_transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,0,18,0.75)_0%,rgba(6,0,18,0.35)_45%,transparent_100%)]" />
        <div className="relative z-10 mx-auto max-w-5xl space-y-5 px-3 py-18 text-center xs:px-4 sm:px-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">
            FAQ
          </p>
          <h1 className="text-3xl font-semibold text-balance sm:text-4xl md:text-5xl">
            Answers to how BYOW builds and maintains your digital flagship.
          </h1>
          <p className="mx-auto max-w-2xl text-sm text-white/80 sm:text-base">
            Browse the topics below or reach out if you need a tailored playbook. We’re happy to dig into specifics about timelines, tech choices, or onboarding.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-3 py-16 xs:px-4 sm:px-6">
        <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0B001B]/85 to-[#05000E]/85 px-4 py-6 shadow-[0_30px_70px_rgba(0,0,0,0.45)] sm:rounded-[32px] sm:px-8 md:px-10">
          <details className="group border-b border-white/5 last:border-none" open>
            <summary className="flex cursor-pointer items-start justify-between gap-3 py-4 text-lg font-semibold text-white sm:items-center">
              <span className="pr-6 text-left">How do I contact BYOW directly?</span>
              <span className="text-2xl font-light text-white/60 transition group-open:rotate-45">+</span>
            </summary>
            <div className="pb-4 text-sm leading-relaxed text-white/70 sm:text-base">
              Reach us via <a className="text-[#B78BFF] hover:text-white" href="mailto:info@byow.lk">info@byow.lk</a> or call <a className="text-[#B78BFF] hover:text-white" href="tel:+94727333577">+94 72 733 3577</a>. We respond within one business day.
            </div>
          </details>
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-white/5 last:border-none">
              <summary className="flex cursor-pointer items-start justify-between gap-3 py-4 text-base font-semibold text-white sm:items-center">
                <span className="pr-6 text-left">{faq.question}</span>
                <span className="text-2xl font-light text-white/60 transition group-open:rotate-45">+</span>
              </summary>
              <div className="pb-4 text-sm leading-relaxed text-white/70 sm:text-base">{faq.answer}</div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
