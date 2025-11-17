# BYOW Marketing Site

High-conversion marketing experience for Build-Your-Own-Website (BYOW). The project focuses on premium visuals, fast interactions, and carefully curated storytelling sections that highlight services, case studies, and conversion-focused CTAs.

## Tech Stack

- **Next.js App Router (TypeScript)** – hybrid rendering, metadata API, built-in routing
- **Tailwind CSS** – utility-first design system
- **Framer Motion & Swiper** – smooth animations and marquee experiences
- **Flowbite** – accessible accordions in the services catalog
- **Next Image / Video** – optimized media delivery with automatic sizing

## Project Structure

```
app/
├── layout.tsx               # Root layout with background video + analytics
├── page.tsx                 # Home page (server component) composed from sections
├── about/page.tsx           # About narrative + shared CTA
├── product/page.tsx         # Interactive portfolio carousel
├── service/page.tsx         # Accordion driven services catalog
├── components/
│   ├── DisableScrollRestoration.tsx
│   ├── layout/
│   │   ├── BackgroundContent.tsx   # Header + Footer wrapper
│   │   ├── Footer.tsx
│   │   └── Header.tsx
│   └── sections/
│       ├── about/MiddleContainerAbout.tsx
│       ├── common/YourSuccessSection.tsx
│       ├── home/[…section files]   # Hero, pain points, industries, etc.
│       ├── product/[…project components]
│       └── service/[…service catalog + single view]
├── data/
│   ├── footerdata.ts
│   ├── product.ts
│   ├── servicedata.ts
│   └── servicesingledata.ts
└── types/
    └── product.ts
```

### Key Practices

- **Server-first rendering.** All static sections remain server components while interactive pieces opt-in to `"use client"`, minimizing bundle size.
- **Scroll & animation safety.** `DisableScrollRestoration` enforces predictable load behavior and hero animations respect `prefers-reduced-motion`.
- **Image hygiene.** Every visual uses `next/image` with explicit `sizes`, preventing layout shifts and ensuring optimized delivery.
- **Reusable content blocks.** Sections live under `app/components/sections/<domain>` keeping per-page concerns organized and discoverable.
- **Accessible motion + overlays.** Mobile navigation, accordions, and popups manage focus, scrolling, and background locking for a11y.

## Getting Started

1. **Install dependencies**
   ```bash
   npm install
   ```
2. **Run the dev server**
   ```bash
   npm run dev
   # visit http://localhost:3000
   ```
3. **Lint**
   ```bash
   npm run lint
   ```
4. **Production build**
   ```bash
   npm run build
   npm run start   # serve the build locally
   ```

## Deployment

- Build output lives under `.next`. Any Node-compatible host (Vercel, Netlify, Render, etc.) can run `npm run build && npm run start`.
- Environment variables are not required right now. If you add any, prefer storing them via platform secrets and exposing only those prefixed with `NEXT_PUBLIC_` to the client.

## Contributing / Extending

- Keep new sections co-located under `app/components/sections/<page>` for discoverability.
- Favor server components until you need state, refs, or event listeners.
- When adding motion, gate long-running animations with `motion-safe:` utilities or `prefers-reduced-motion` checks.
- Always run `npm run lint` (and optionally `npm run build`) before opening a PR to catch hydration or type issues early.
