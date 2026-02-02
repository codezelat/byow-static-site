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
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Aggressive chunk error recovery
              (function() {
                let chunkErrorCount = 0;
                const maxRetries = 3;
                
                window.addEventListener('error', function(e) {
                  const isChunkError = e.message && 
                    (e.message.includes('Loading chunk') || 
                     e.message.includes('ChunkLoadError') ||
                     e.filename && e.filename.includes('/_next/static/chunks/'));
                  
                  if (isChunkError) {
                    e.preventDefault();
                    chunkErrorCount++;
                    console.warn('Chunk error detected (attempt ' + chunkErrorCount + '/' + maxRetries + ')');
                    
                    if (chunkErrorCount <= maxRetries) {
                      // Clear caches and force hard reload
                      if ('caches' in window) {
                        caches.keys().then(function(names) {
                          names.forEach(function(name) {
                            caches.delete(name);
                          });
                        });
                      }
                      
                      // Force hard reload with cache bypass
                      setTimeout(function() {
                        window.location.href = window.location.href.split('#')[0] + '?t=' + Date.now();
                      }, 100);
                    } else {
                      // Max retries exceeded, show error UI
                      document.body.innerHTML = '<div style="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;background:#040010;font-family:system-ui;color:white;text-align:center;padding:20px"><div><h2 style="font-size:24px;margin-bottom:16px">Unable to Load Page</h2><p style="color:rgba(255,255,255,0.7);margin-bottom:32px">Please clear your browser cache and try again.</p><button onclick="window.location.reload(true)" style="background:#8133F1;color:white;border:none;border-radius:9999px;padding:12px 28px;font-size:14px;font-weight:600;cursor:pointer">Reload Page</button></div></div>';
                    }
                    return false;
                  }
                }, true);
                
                // Also catch unhandled promise rejections from dynamic imports
                window.addEventListener('unhandledrejection', function(e) {
                  if (e.reason && e.reason.message && 
                      (e.reason.message.includes('Failed to fetch') ||
                       e.reason.message.includes('Loading chunk'))) {
                    e.preventDefault();
                    console.warn('Chunk promise rejection detected');
                    window.location.href = window.location.href.split('#')[0] + '?t=' + Date.now();
                  }
                });
              })();
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

        {/* Service Worker Registration - Clean up old caches */}
        <Script id="service-worker-cleanup" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.getRegistrations().then(registrations => {
                registrations.forEach(registration => registration.unregister());
              });
            }
          `}
        </Script>
      </head>
      <body
        className={`${funnelSans.className} antialiased relative w-full h-full min-h-screen font-sans`}
        suppressHydrationWarning
      >
        {/* Critical: Catch chunk loading errors before React hydration */}
        <Script
          id="chunk-error-recovery"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var chunkFailures = 0;
                var MAX_RETRIES = 2;
                var hasReloaded = sessionStorage.getItem('chunk-reload');
                
                // Only intercept actual chunk loading errors (404s)
                window.addEventListener('error', function(e) {
                  // More specific detection - only catch script load failures
                  var isChunkError = e.target && 
                    e.target.tagName === 'SCRIPT' && 
                    e.target.src && 
                    e.target.src.includes('/_next/static/chunks/') &&
                    !e.target.src.includes('gtag');
                  
                  if (isChunkError && !hasReloaded) {
                    e.preventDefault();
                    chunkFailures++;
                    
                    console.warn('Chunk 404 detected - reloading...');
                    
                    // Mark that we're reloading to prevent infinite loops
                    sessionStorage.setItem('chunk-reload', '1');
                    
                    // Clear caches
                    if ('caches' in window) {
                      caches.keys().then(function(names) {
                        names.forEach(function(name) { caches.delete(name); });
                      });
                    }
                    
                    // Reload with cache bust after short delay
                    setTimeout(function() {
                      window.location.href = window.location.pathname + 
                        '?v=' + Date.now();
                    }, 300);
                  }
                }, true);
                
                // Clear reload flag after successful load
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    sessionStorage.removeItem('chunk-reload');
                  }, 2000);
                });
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
