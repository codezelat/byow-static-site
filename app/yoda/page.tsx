import type { Metadata } from "next";
import CharacterLandingPage from "@/app/components/sections/character-landing/CharacterLandingPage";
import { yodaLandingContent } from "@/app/data/characterLanding";

const pageUrl = "https://byow.lk/yoda";

export const metadata: Metadata = {
  title: "Web Design Sri Lanka, Built With Clarity",
  description:
    "Purposeful web design and development for Sri Lankan businesses. BYOW combines UX, responsive engineering, performance and SEO into one clear build.",
  keywords: [
    "web design Sri Lanka",
    "website development Sri Lanka",
    "web design company Colombo",
    "responsive website design",
    "SEO web development Sri Lanka",
  ],
  alternates: { canonical: "/yoda" },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Web Design Sri Lanka, Built With Clarity | BYOW",
    description:
      "Strategy, UX, development, performance and SEO for a website that moves your business forward.",
    images: [
      {
        url: "/images/original-character-renders/space-sage-01.png",
        width: 1024,
        height: 1536,
        alt: "BYOW web design in Sri Lanka, wisdom edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design Sri Lanka, Built With Clarity | BYOW",
    description:
      "Purposeful website strategy, design and development from BYOW in Colombo.",
    images: ["/images/original-character-renders/space-sage-01.png"],
  },
  robots: { index: true, follow: true },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Website Design and Development in Sri Lanka",
  serviceType: [
    "Custom website design",
    "UX and UI design",
    "Responsive web development",
    "Website performance optimisation",
    "SEO-ready development",
  ],
  url: pageUrl,
  areaServed: { "@type": "Country", name: "Sri Lanka" },
  provider: {
    "@type": "ProfessionalService",
    name: "BYOW",
    url: "https://byow.lk",
    telephone: "+94727333577",
    email: "info@byow.lk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "345/35, RIT Alles Mw",
      addressLocality: "Colombo 08",
      addressCountry: "LK",
    },
  },
};

export default function YodaLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CharacterLandingPage content={yodaLandingContent} />
    </>
  );
}

