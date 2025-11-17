import type { Metadata } from "next";
import Link from "next/link";

const sections = [
  {
    title: "1. Introduction",
    body: `This Privacy Policy explains how BYOW ("we", "our", "us") collects, uses, and protects your information when you visit byow.lk, engage our services, or communicate with our team.`,
  },
  {
    title: "2. Information We Collect",
    body: `We collect information you provide directly (contact information, project briefs, files) as well as data captured automatically (usage analytics, device information, cookies). We may also receive information from trusted partners when projects require it.`,
  },
  {
    title: "3. How We Use Your Information",
    body: `We use your information to respond to inquiries, provide proposals, deliver projects, improve the website, and meet legal obligations. We do not sell your data.`,
  },
  {
    title: "4. Sharing & Security",
    body: `Information is shared only with service providers or collaborators who need it to fulfill your request. We implement encryption, access controls, and regular audits to protect your data.`,
  },
  {
    title: "5. Cookies & Tracking",
    body: `We use cookies and similar technologies to understand site performance and improve our content. You can adjust browser settings to limit cookie usage.`,
  },
  {
    title: "6. Your Rights",
    body: `You can request access, updates, or deletion of your data by emailing info@byow.lk. We respond within one business day and comply with applicable regulations.`,
  },
  {
    title: "7. Contact",
    body: `Questions about privacy? Reach out via info@byow.lk or call +94 72 733 3577.`,
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy | BYOW",
  description:
    "Understand how BYOW collects, stores, and protects your information across strategy workshops, product builds, and marketing sites.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="text-white">
      <section className="bg-[#06001244]">
        <div className="container-wrapper space-y-6 py-20">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Legal</p>
          <h1 className="text-4xl font-semibold text-balance">Privacy Policy</h1>
        </div>
      </section>

      <section className="container-wrapper space-y-8 py-16">
        {sections.map((section) => (
          <article
            key={section.title}
            className="rounded-[28px] border border-white/10 bg-gradient-to-br from-[#0E0120] to-[#05000E] p-6"
          >
            <h2 className="text-2xl font-semibold text-white">{section.title}</h2>
            <p className="mt-3 text-white/70">{section.body}</p>
          </article>
        ))}
        <p className="text-sm text-white/60">
          Last updated: {new Date().toLocaleString("en-US", { month: "long", day: "numeric", year: "numeric" })}. For previous versions contact
          <Link href="mailto:info@byow.lk" className="ml-1 text-[#B78BFF] hover:text-white">
            info@byow.lk.
          </Link>
        </p>
      </section>
    </main>
  );
}
