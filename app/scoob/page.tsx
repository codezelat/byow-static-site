import type { Metadata } from "next";
import CharacterLandingPage from "@/app/components/sections/character-landing/CharacterLandingPage";
import { scoobLandingContent } from "@/app/data/characterLanding";

const pageUrl = "https://byow.lk/scoob";

export const metadata: Metadata = {
  title: "Website Design Sri Lanka, Mystery Solved",
  description:
    "A clear route to a better website. BYOW helps Sri Lankan businesses solve UX, mobile, ecommerce, performance and SEO problems through one connected team.",
  keywords: [
    "website design Sri Lanka",
    "web development company Sri Lanka",
    "web design agency Colombo",
    "ecommerce website Sri Lanka",
    "mobile friendly website design",
  ],
  alternates: { canonical: "/scoob" },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Website Design Sri Lanka, Mystery Solved | BYOW",
    description:
      "Follow the trail from website friction to a clear, responsive and search-ready experience.",
    images: [
      {
        url: "/images/original-character-renders/mystery-dog-01.png",
        width: 1224,
        height: 1285,
        alt: "BYOW website design in Sri Lanka, mystery edition",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Design Sri Lanka, Mystery Solved | BYOW",
    description:
      "Strategy, design, development and SEO for Sri Lankan businesses ready to grow.",
    images: ["/images/original-character-renders/mystery-dog-01.png"],
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
    "Ecommerce website development",
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

export default function ScoobLandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <CharacterLandingPage content={scoobLandingContent} />
    </>
  );
}
