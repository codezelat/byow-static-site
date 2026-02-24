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
  preload: true,
  fallback: ["system-ui", "-apple-system", "sans-serif"],
  adjustFontFallback: true,
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
        <script src="/clear-sw.js" defer></script>
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
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
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
        {/* Catch chunk loading errors before React hydration and avoid permanent loader lock */}
        <Script
          id="chunk-error-recovery"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var RETRY_KEY = 'chunk-reload-attempts';
                var MAX_RETRIES = 2;

                function removeLoadingScreen() {
                  var loader = document.getElementById('app-loading-screen');
                  if (!loader) return;
                  loader.style.opacity = '0';
                  loader.style.pointerEvents = 'none';
                  setTimeout(function() {
                    if (loader.parentNode) loader.parentNode.removeChild(loader);
                  }, 700);
                }

                function showChunkErrorUI() {
                  removeLoadingScreen();
                  if (document.getElementById('chunk-error-fallback')) return;

                  var fallback = document.createElement('div');
                  fallback.id = 'chunk-error-fallback';
                  fallback.style.cssText = 'position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#040010;color:#fff;z-index:10000;padding:20px;font-family:system-ui,-apple-system,sans-serif;text-align:center;';
                  fallback.innerHTML = '<div><h2 style="font-size:24px;margin:0 0 12px">Unable to Load Latest Version</h2><p style="margin:0 0 24px;color:rgba(255,255,255,0.75)">Please refresh to fetch the newest website assets.</p><button id="chunk-error-refresh" style="background:#8133F1;color:#fff;border:none;border-radius:9999px;padding:12px 24px;font-size:14px;font-weight:600;cursor:pointer">Refresh Page</button></div>';
                  document.body.appendChild(fallback);

                  var refreshButton = document.getElementById('chunk-error-refresh');
                  if (refreshButton) {
                    refreshButton.addEventListener('click', function() {
                      sessionStorage.removeItem(RETRY_KEY);
                      window.location.reload();
                    });
                  }
                }

                function retryChunkLoad() {
                  var retries = Number(sessionStorage.getItem(RETRY_KEY) || '0');
                  if (retries >= MAX_RETRIES) {
                    sessionStorage.removeItem(RETRY_KEY);
                    showChunkErrorUI();
                    return;
                  }

                  sessionStorage.setItem(RETRY_KEY, String(retries + 1));
                  var nextUrl = new URL(window.location.href);
                  nextUrl.searchParams.set('v', Date.now().toString());
                  window.location.replace(nextUrl.toString());
                }

                window.addEventListener('error', function(e) {
                  var isChunkScriptError = e.target && 
                    e.target.tagName === 'SCRIPT' && 
                    e.target.src && 
                    e.target.src.includes('/_next/static/chunks/') &&
                    !e.target.src.includes('gtag');

                  if (isChunkScriptError) {
                    e.preventDefault();
                    retryChunkLoad();
                  }
                }, true);

                window.addEventListener('unhandledrejection', function(e) {
                  var reason = e.reason && e.reason.message ? e.reason.message : '';
                  var isChunkRejection = reason.includes('Loading chunk') || reason.includes('ChunkLoadError');
                  if (isChunkRejection) {
                    e.preventDefault();
                    retryChunkLoad();
                  }
                });

                window.addEventListener('load', function() {
                  sessionStorage.removeItem(RETRY_KEY);
                });

                // Last-resort loader safety when React fails before hydration
                setTimeout(function() {
                  removeLoadingScreen();
                }, 8000);

                if (document.readyState === 'complete') {
                  sessionStorage.removeItem(RETRY_KEY);
                }
              })();
            `,
          }}
        />
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
