import type { Metadata } from "next";
import Script from "next/script";
import { Funnel_Sans } from "next/font/google";
import "./globals.css";
import BackgroundContent from "./components/layout/BackgroundContent";
import HeroVideo from "./components/layout/HeroVideo";
import LoadingScreen from "./components/LoadingScreen";

const siteUrl = "https://byow.lk";

const funnelSans = Funnel_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-funnel-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BYOW | Custom Website Design & Development in Sri Lanka",
    template: "%s | BYOW",
  },
  description:
    "BYOW is Sri Lanka’s boutique team for website design, website development, and digital product builds. We partner with founders and teams to launch premium, high-performing experiences.",
  keywords: [
    "website development Sri Lanka",
    "website design Sri Lanka",
    "custom websites",
    "BYOW",
    "web app development",
    "Next.js agencies Sri Lanka",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "BYOW | Custom Website Design & Development in Sri Lanka",
    description:
      "Launch premium, high-performing websites with BYOW. Tailored strategy, UX, and engineering for ambitious teams in Sri Lanka and beyond.",
    siteName: "BYOW",
    images: [
      {
        url: "/images/byow.png",
        width: 1200,
        height: 630,
        alt: "BYOW – Build Your Own Website",
      },
    ],
    locale: "en_LK",
  },
  twitter: {
    card: "summary_large_image",
    site: "@byowlk",
    creator: "@byowlk",
    title: "BYOW | Website Design & Development in Sri Lanka",
    description:
      "Strategy, UX, and development for modern websites and digital products. Built in Sri Lanka, shipped worldwide.",
    images: ["/images/byow.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  authors: [{ name: "BYOW" }],
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={funnelSans.variable}>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Handle chunk loading errors
              window.addEventListener('error', function(e) {
                if (e.message && (e.message.includes('Loading chunk') || e.message.includes('ChunkLoadError'))) {
                  console.warn('Chunk loading error detected, reloading page...');
                  window.location.reload();
                }
              });
            `,
          }}
        />
        <link
          rel="preconnect"
          href="https://www.googletagmanager.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://www.google-analytics.com"
          crossOrigin="anonymous"
        />
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-G3VDZC765B"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-G3VDZC765B');
          `}
        </Script>
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BYOW",
            url: siteUrl,
            logo: `${siteUrl}/images/byow-logo.svg`,
            sameAs: [
              "https://www.facebook.com/byow.lk",
              "https://www.instagram.com/byow.lk",
              "https://www.linkedin.com/showcase/byowlk/",
              "https://x.com/byowlk",
            ],
            contactPoint: [
              {
                "@type": "ContactPoint",
                telephone: "+94 72 733 3577",
                contactType: "customer service",
                availableLanguage: ["English", "Sinhala"],
              },
            ],
            address: {
              "@type": "PostalAddress",
              streetAddress: "345/35, RIT Alles Mw",
              addressLocality: "Colombo",
              addressCountry: "LK",
            },
          })}
        </Script>
      </head>
      <body
        className={`${funnelSans.className} antialiased relative w-full h-full min-h-screen font-sans`}
        suppressHydrationWarning
      >
        <LoadingScreen />

        {/* Video section - fixed height for hero area */}
        <div className="fixed top-0 left-0 w-full h-screen z-0 overflow-hidden bg-[#040010]">
          <HeroVideo
            src="/videos/background-video.mp4"
            poster="/images/bg-vid-cover.jpg"
          />
          {/* Gradient overlay for smooth transition */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#040010]" />
        </div>

        {/* Solid color section - starts after hero */}
        <div className="absolute top-[100vh] left-0 w-full min-h-screen bg-[#040010] z-0"></div>

        {/* Content wrapper that sits on top of both backgrounds */}
        <div className="relative z-10 w-full min-h-screen">
          <BackgroundContent>{children}</BackgroundContent>
        </div>
      </body>
    </html>
  );
}
