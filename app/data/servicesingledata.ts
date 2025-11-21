import type { IconType } from "react-icons";
import {
  SiAdobephotoshop,
  SiAmazonwebservices,
  SiCloudflare,
  SiDocker,
  SiFigma,
  SiGoogledrive,
  SiGoogleanalytics,
  SiKubernetes,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiPaypal,
  SiPostgresql,
  SiReact,
  SiRedux,
  SiShopify,
  SiSlack,
  SiStripe,
  SiTailwindcss,
  SiVercel,
  SiWordpress,
  SiZapier,
  SiRabbitmq,
  SiStrapi,
} from "react-icons/si";

export interface ServiceDetail {
  title: string;
  heroParagraphs: string[];
  extendedCopy: string[];
  longFormSections?: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

type IconEntry = { name: string; image?: string; Icon?: IconType };

const defaultDetail: ServiceDetail = {
  title: "Custom Website Design",
  heroParagraphs: [
    "BYOW designs bespoke websites in Sri Lanka that feel premium, load fast, and convert. Every layout, headline, and interaction is engineered to match your brand story and drive inquiries.",
    "We run discovery workshops, competitive audits, and rapid prototypes so strategy, SEO, and visuals stay aligned from day one. No template lock-in, just intentional design tuned to your audience.",
    "Responsive polish matters. We refine typography, media, and motion for phones, tablets, and desktops so the experience looks world-class whether your visitors are in Colombo or California.",
  ],
  extendedCopy: [
    "Designers and engineers collaborate in the same sprint to keep pixel fidelity, accessibility, and performance on track. Nothing is thrown over the wall.",
    "We ship modular components, CMS controls, and documentation so your marketing team can launch pages quickly without breaking brand consistency.",
    "Post-launch, we review analytics, refine conversion paths, and roll out updates, keeping your flagship experience ranking and performing at the top of your market.",
  ],
  longFormSections: [
    {
      heading: "Why custom web design beats templates for Sri Lankan brands",
      paragraphs: [
        "In crowded markets, a template site is invisible. Custom web design lets us pair your positioning with unique layouts, photography direction, and microcopy tailored to how Sri Lankan buyers research and act. We avoid generic hero text and stock imagery, replacing them with proof points, social proof, and offers that resonate with your audience.",
        "A bespoke build also unlocks performance. We choose the right rendering strategy for each page type, inline critical CSS, and compress media at the sizes your analytics show. That keeps your Core Web Vitals healthy, improves dwell time, and reduces bounce rates—signals that search engines reward.",
      ],
      bullets: [
        "EEAT-driven storytelling with founder proof, client logos, and transparent process",
        "Conversion-first layouts tuned for high-intent visitors and remarketing audiences",
        "Performance budgets enforced at design time to protect speed and SEO",
        "Accessibility baked in to capture every visitor and meet compliance",
      ],
    },
    {
      heading: "Process that keeps design, engineering, and SEO aligned",
      paragraphs: [
        "We start with stakeholder interviews, analytics reviews, and SERP analysis to understand where you can win. Those insights shape information architecture, keyword-rich page outlines, and component systems before pixels are pushed.",
        "Design, content, and engineering work in the same sprint. We validate prototypes with users, refine copy for intent, and pair with developers to ensure interactions, animations, and assets are feasible without bloat. Every component ships with responsive states, ARIA labels, and guidance so your team can scale new pages safely.",
      ],
    },
    {
      heading: "Content that signals expertise and trust",
      paragraphs: [
        "Search engines reward depth and credibility. We weave founder POV, methodologies, case studies, and regional experience into your core pages so visitors see why you’re the safest choice. Clear service FAQs, transparent pricing ranges, and process diagrams reduce friction and keep readers engaged longer.",
        "We also implement schema for breadcrumbs, FAQ, and organization data so crawlers understand your authority. Combined with fast load times and meaningful internal links, your custom site becomes an EEAT-friendly asset that keeps climbing the rankings.",
      ],
    },
    {
      heading: "Built to scale with your marketing team",
      paragraphs: [
        "We deliver reusable page templates and CMS blocks so marketers can launch campaigns without waiting on developers. Each block comes with guidance on word counts, image ratios, and SEO tips to keep new pages consistent and performant.",
        "Documentation, component libraries, and a measured rollout plan ensure your team can iterate quickly—adding landing pages, webinars, or product updates—while preserving the polish that helps you outrank competitors.",
      ],
    },
    {
      heading: "Proof and measurement to protect your investment",
      paragraphs: [
        "Every engagement includes analytics tagging plans, conversion tracking, and privacy-first consent so data stays clean. We monitor how users scroll, tap, and convert, then re-rank sections and CTAs to keep KPIs trending upward.",
        "We ship comparison reports that quantify improvements in speed, lead quality, and organic visibility. That ongoing measurement ties design decisions back to revenue, making your custom website a compounding asset—not a one-time expense.",
      ],
    },
  ],
};

export const serviceDetails: Record<string, ServiceDetail> = {
  default: defaultDetail,
  "custom-design": defaultDetail,
  "ux-ui-design": {
    title: "UX/UI Design",
    heroParagraphs: [
      "We pair user research with analytics to map journeys and wireframes that keep customers moving. Interviews, heuristic audits, and funnels drive every UX/UI decision.",
      "Interactive prototypes let stakeholders in Sri Lanka and abroad test flows early, refine messaging, and validate conversions without heavy engineering cost.",
      "Design tokens, component libraries, and accessibility standards ensure every screen, modal, and micro-interaction feels consistent and inclusive.",
    ],
    extendedCopy: [
      "Accessibility is baked in from day zero—contrast, focus states, ARIA semantics, and keyboard flows are validated alongside the visuals.",
      "Handoffs include redlines, responsive behaviors, and component specs so developers can ship quickly with no guesswork.",
      "After launch we watch funnels, session replays, and support tickets to spot UX friction fast and iterate before it impacts revenue.",
    ],
    longFormSections: [
      {
        heading: "Research-backed UX that answers intent",
        paragraphs: [
          "Winning interfaces respond to what users actually want. We combine interviews, JTBD surveys, and funnel data to understand motivations and objections across Sri Lankan and global audiences. That research informs user journeys, navigation labels, and copy that speaks directly to decision-makers, not just algorithms.",
          "We prioritize high-intent paths—demo requests, booking, checkout, or lead capture—ensuring form fields, CTAs, and reassurance elements appear exactly when users need them. The result: lower drop-offs and higher conversions.",
        ],
        bullets: [
          "Voice-of-customer insights mapped to page sections and CTAs",
          "UX writing that balances clarity, trust, and keywords",
          "Persona-led journeys that keep stakeholders aligned",
        ],
      },
      {
        heading: "Prototype, validate, and refine quickly",
        paragraphs: [
          "Mid-fidelity and high-fidelity prototypes make it easy for stakeholders to react to flows before code. We run remote usability tests, card sorts, and task completion studies to prove the experience works on mobile and desktop.",
          "Each iteration pairs UX with SEO: headings use intent-led phrases, FAQs address real objections, and internal links guide crawlers as well as users. We iterate until both humans and search engines understand your value instantly.",
        ],
      },
      {
        heading: "Design systems that scale",
        paragraphs: [
          "We create token-based systems, pattern libraries, and accessibility checklists so your product and marketing teams ship at speed without breaking consistency. Every component includes states for hover, focus, loading, and error to keep the experience inclusive.",
          "Documentation covers spacing, typography, and content length guidance to prevent bloated pages and keep Core Web Vitals healthy. Engineers get Figma specs, redlines, and motion notes so build quality stays high.",
        ],
      },
      {
        heading: "Measurement and continuous improvement",
        paragraphs: [
          "EEAT thrives on proof. We surface testimonials, case studies, team bios, and process snapshots in the right places to build credibility. Post-launch, we monitor heatmaps, GA4 events, and INP/LCP metrics to spot friction.",
          "We run structured A/B tests on headlines, CTAs, and form designs to keep conversion rates climbing. Each win is documented so your team knows why it worked and how to replicate the pattern elsewhere.",
        ],
      },
      {
        heading: "Local relevance for Sri Lankan and regional audiences",
        paragraphs: [
          "We tailor messaging, visuals, and CTAs to the regions you target—whether you’re closing enterprise projects in Colombo or selling direct to consumers across APAC. Multilingual considerations, currency cues, and trust badges are placed where they matter most.",
          "Location-based schema, Google Business Profile alignment, and clear contact pathways reinforce local credibility while keeping content competitive for global searches.",
        ],
      },
    ],
  },
  "responsive-web-design": {
    title: "Responsive Web Design",
    heroParagraphs: [
      "Your audience jumps between devices. We design responsive systems that reflow intelligently instead of simply shrinking the desktop layout.",
      "Fluid grids, adaptive imagery, and tuned typography keep content legible and compelling from 320px phones to ultrawide monitors.",
      "Touch-friendly targets, sensible gestures, and optimized assets keep interactions smooth even on slower mobile networks common across Sri Lanka.",
    ],
    extendedCopy: [
      "We prototype breakpoints early so navigation, hero messaging, and CTAs stay strong across every screen size.",
      "Performance budgets dictate how fonts, media, and scripts load to protect Core Web Vitals and mobile SEO.",
      "We test on real hardware—from older Android devices to recent iPhones—so layout shifts are caught before your visitors see them.",
    ],
    longFormSections: [
      {
        heading: "Mobile-first strategy with real-world devices",
        paragraphs: [
          "Responsive design is more than fluid columns. We start mobile-first, planning navigation, hero copy, and lead forms for thumb reach and small viewports that dominate Sri Lankan traffic. Content hierarchy is rewritten to surface proof, pricing cues, and CTAs without forcing endless scroll.",
          "We validate on actual devices—budget Android phones, tablets, and iPhones—so tap targets, text contrast, and media playback feel trustworthy everywhere. That reduces bounce rates and improves time-on-page, helping your rankings.",
        ],
        bullets: [
          "Viewport-specific copy lengths to avoid truncation and orphan lines",
          "Thumb-friendly menus, sticky CTAs, and lightweight animations",
          "Optimized image srcsets and AVIF/WebP for fast delivery",
        ],
      },
      {
        heading: "Performance baked into the layout",
        paragraphs: [
          "We pair layout decisions with performance budgets: critical CSS is inlined, heavy assets are deferred, and above-the-fold content stays lean to protect LCP. Scripts are scheduled to keep INP and TBT healthy.",
          "Typography scales with clamp() and fluid spacing so pages stay elegant without loading extra font weights. This discipline means your responsive experience looks refined and remains lightning fast.",
        ],
      },
      {
        heading: "Accessibility and SEO alignment",
        paragraphs: [
          "Accessible responsive design is non-negotiable. We ensure sufficient contrast, visible focus, ARIA labels, and logical heading structure so screen readers and crawlers understand your content.",
          "Intent-led headings, FAQ sections, and internal links guide search engines while giving users quick answers. Structured data (FAQ, Breadcrumbs, Organization) strengthens EEAT signals across devices.",
        ],
      },
      {
        heading: "Content governance and handoff",
        paragraphs: [
          "We document how each component should be populated: ideal word counts, image ratios, and do/don’t examples. Editors get CMS blocks that already contain responsive rules, so newly published pages stay polished.",
          "Design and engineering handoffs include breakpoint notes, spacing scales, and fallbacks if third-party scripts fail. That resilience keeps your site usable during traffic spikes or flaky networks.",
        ],
      },
      {
        heading: "Local signals that lift rankings",
        paragraphs: [
          "We align responsive layouts with local SEO basics: clickable phone numbers, map embeds, and location schema where it’s relevant. Fast mobile experiences matter most to Sri Lankan visitors, so we keep image weights low and interactions snappy.",
          "Social proof, press mentions, and compliance cues are positioned near conversion points, helping skeptics trust you whether they find you via Google or social ads.",
        ],
      },
    ],
  },
  "frontend-development": {
    title: "Frontend Development",
    heroParagraphs: [
      "We build component-driven frontends in Next.js and React that stay faithful to design while shipping fast, reliable experiences.",
      "Semantic HTML, accessible patterns, and modern CSS keep the UI inclusive and search-friendly from the start.",
      "Animations and micro-interactions are used sparingly to reinforce story beats without hurting performance scores.",
    ],
    extendedCopy: [
      "Design tokens, Storybook libraries, and automated tests make future releases safer and faster for your team.",
      "We pair closely with backend teams so API responses map cleanly to UI states—loading, error, and empty cases included.",
      "CI/CD, linting, and monitoring keep the interface resilient long after launch day.",
    ],
    longFormSections: [
      {
        heading: "Components engineered for speed and fidelity",
        paragraphs: [
          "We translate Figma into production-grade components with strict attention to spacing, typography, and motion. Design tokens keep colors, radii, and shadows consistent across every page so brand polish never slips.",
          "Performance is guarded at build time: tree-shaking, code splitting, and route-level chunks keep bundles light. We prioritize visible content, defer non-critical scripts, and optimize images with modern formats.",
        ],
        bullets: [
          "Storybook libraries for reusable, documented UI",
          "Type-safe props and state to prevent regressions",
          "ARIA, focus states, and keyboard navigation in every component",
        ],
      },
      {
        heading: "Accessibility and SEO-first development",
        paragraphs: [
          "Semantic HTML and landmark roles ensure crawlers and assistive tech understand your pages. We enforce heading hierarchy, descriptive alt text, and sensible link copy to maintain EEAT-friendly clarity.",
          "Schema markup, meta tags, and social previews are baked into layouts so every new page your team publishes is optimized by default.",
        ],
      },
      {
        heading: "Resilient state and data handling",
        paragraphs: [
          "We use the right state tool for the job—React Query, SWR, or simple context—to manage loading, error, and empty states gracefully. Skeletons, optimistic updates, and retry logic keep the UI feeling fast even on variable networks.",
          "API contracts are defined early with backend teams so serialization, pagination, and filtering work predictably. That reduces QA cycles and protects user trust.",
        ],
      },
      {
        heading: "Tooling that lets teams move faster",
        paragraphs: [
          "Automated tests (unit, integration, and visual snapshots) keep releases safe. Linting, formatting, and Git hooks catch issues before they ship.",
          "CI/CD pipelines with preview deployments give stakeholders instant visibility. Observability (logs, metrics, tracing) means issues are found quickly and fixed before customers notice.",
        ],
      },
      {
        heading: "SEO and monetization support for the UI layer",
        paragraphs: [
          "We ensure metadata, structured data, and clean URL strategies are supported by the frontend so every page you publish is crawlable and compelling in search.",
          "Ad slots, affiliate placements, or lead-gen forms are integrated without harming Core Web Vitals, protecting both revenue and rankings.",
        ],
      },
    ],
  },
  "backend-development": {
    title: "Backend Development",
    heroParagraphs: [
      "We architect secure, scalable APIs and databases that keep pace with your traffic and product roadmap.",
      "Our Node and cloud-native stacks are structured for clarity, testing, and fast onboarding of new developers.",
      "Observability—logs, metrics, and tracing—is baked in so problems are surfaced before customers feel pain.",
    ],
    extendedCopy: [
      "Data models are planned for analytics, personalization, and integrations without constant refactoring.",
      "Authentication, RBAC, and audit trails are implemented to keep compliance and security teams confident.",
      "Documentation and runbooks ensure your internal team can operate and evolve the platform independently.",
    ],
    longFormSections: [
      {
        heading: "Architectures built for scale and clarity",
        paragraphs: [
          "We design APIs and services that are easy to reason about, test, and extend. Clear folder structures, typed contracts, and dependency boundaries make it painless for new engineers to onboard.",
          "We choose relational or NoSQL datastores based on your access patterns, ensuring indexes, sharding, and caching strategies are planned up front—not bolted on later.",
        ],
        bullets: [
          "REST or GraphQL designed with versioning and pagination from day one",
          "Caching layers (Redis/CDN) to reduce latency and offload hot paths",
          "Database migrations with rollbacks to keep releases safe",
        ],
      },
      {
        heading: "Security, compliance, and reliability",
        paragraphs: [
          "Authentication, authorization, and audit logging are implemented early to protect customer data and satisfy compliance. We enforce least privilege, rotate secrets, and monitor access.",
          "We add rate limiting, input validation, and WAF rules to stop bad actors before they reach core systems. Backups and disaster recovery plans are documented and tested.",
        ],
      },
      {
        heading: "Observability that catches issues first",
        paragraphs: [
          "Logs, metrics, and tracing are instrumented with meaningful fields so incidents can be diagnosed quickly. SLOs and alerts notify the right people before customers feel downtime.",
          "We simulate failure with chaos drills and load tests to prove the platform stays resilient during traffic spikes common to launches and campaigns.",
        ],
      },
      {
        heading: "Partnering with frontend and product",
        paragraphs: [
          "We align API shapes with frontend needs—clear error codes, consistent pagination, and predictable filtering—reducing rework and improving UX.",
          "Feature flags, staged rollouts, and blue/green deploys let product teams experiment safely while protecting conversion and SEO.",
        ],
      },
      {
        heading: "Compliance, data ownership, and locality",
        paragraphs: [
          "We document where data lives, how it’s encrypted, and how backups are handled, giving stakeholders a clear view of risk and governance. For Sri Lankan businesses handling regional data, we respect residency and privacy requirements.",
          "Internal teams get runbooks for incident response, access reviews, and key rotations so security posture stays strong even as the product evolves.",
        ],
      },
    ],
  },
  "full-stack-development": {
    title: "Full-Stack Development",
    heroParagraphs: [
      "Our squads cover strategy, design, frontend, and backend so you get a coordinated build partner from brief to launch.",
      "Modern stacks like Next.js, Node.js, and managed databases balance speed to market with future-proof architecture.",
      "Every milestone includes demos and QA to keep stakeholders aligned and eliminate surprises on delivery.",
    ],
    extendedCopy: [
      "Shared typings, API contracts, and reusable components keep frontend and backend perfectly in sync.",
      "Automated deployments, migrations, and infrastructure-as-code keep environments stable and repeatable.",
      "Post-launch, we monitor performance, iterate on features, and support your roadmap as an embedded partner.",
    ],
    longFormSections: [
      {
        heading: "Product squads that de-risk delivery",
        paragraphs: [
          "We embed strategy, design, and engineering into one squad so decisions happen fast and stay coherent. You get roadmaps with clear milestones, demos every sprint, and visibility on velocity so stakeholders in Sri Lanka and abroad stay aligned.",
          "Our collaboration model reduces handoff friction—design tokens, API schemas, and acceptance criteria live in one source of truth, making QA faster and releases predictable.",
        ],
        bullets: [
          "Weekly demos with clear acceptance criteria",
          "Roadmaps tied to revenue and operational KPIs",
          "Transparent burndowns and risk flags before they become blockers",
        ],
      },
      {
        heading: "Architecture tuned for scale and speed",
        paragraphs: [
          "We pick the right patterns—monorepos, shared libraries, API gateways—so features ship quickly without sacrificing long-term maintainability. Infrastructure-as-code keeps environments reproducible, and automated migrations make database changes safe.",
          "Caching layers, CDNs, and queueing are applied where they bring real benefit, not just complexity. This keeps costs predictable while protecting the experience during traffic spikes.",
        ],
      },
      {
        heading: "Quality and security by default",
        paragraphs: [
          "Test coverage (unit, integration, and E2E) plus static analysis reduce regressions. Feature flags and staged rollouts let you experiment safely on high-impact flows.",
          "Security controls—RBAC, secret rotation, audit trails—are implemented early. Observability with logs, metrics, and tracing means issues are detected and resolved before customers notice.",
        ],
      },
      {
        heading: "SEO and performance baked into the stack",
        paragraphs: [
          "We align rendering strategies (SSR/SSG/ISR) to page intent so Core Web Vitals stay strong and content is crawlable. Media is optimized with modern formats and CDNs to protect LCP.",
          "Content teams get structured components that preserve semantic markup, schema, and internal linking—helping every new page rank while keeping design consistent.",
        ],
      },
    ],
  },
  "single-page-applications": {
    title: "Single Page Applications (SPAs)",
    heroParagraphs: [
      "We build SPAs that feel instantaneous with client-side routing, smart caching, and predictable state management.",
      "Redux, Zustand, or context are chosen intentionally so complex flows stay stable and debuggable.",
      "Code splitting, lazy loading, and skeleton states keep bundles light and interactions snappy.",
    ],
    extendedCopy: [
      "We evaluate SSR or hybrid rendering to preserve SEO and social sharing where it matters.",
      "Offline support, background sync, and push messaging keep users engaged even on spotty networks.",
      "Monitoring by route shows performance regressions and informs iterative optimizations.",
    ],
    longFormSections: [
      {
        heading: "Fast, predictable SPA experiences",
        paragraphs: [
          "We architect SPAs with smart routing, route-based code splitting, and data prefetching so navigation feels instant. State is managed with the lightest tool that fits—Redux, Zustand, or React Query—keeping the app predictable and debuggable.",
          "Skeletons, optimistic UI, and retry logic mean your users stay productive even when connections dip, which is critical for mobile-heavy audiences.",
        ],
        bullets: [
          "Route-level performance budgets and lazy loading",
          "Error and empty states designed, not forgotten",
          "Telemetry per route to spot regressions quickly",
        ],
      },
      {
        heading: "SEO and sharing for SPA content",
        paragraphs: [
          "Where search and social matter, we use SSR/SSG hybrids or pre-render critical pages so metadata, Open Graph, and structured data are present at first response.",
          "Sitemaps, canonical tags, and breadcrumb schema ensure crawlers understand your app’s structure even when most navigation is client-side.",
        ],
      },
      {
        heading: "Offline-first and engagement",
        paragraphs: [
          "Service workers, caching strategies, and background sync keep key workflows running offline. Push notifications and in-app prompts are used thoughtfully to re-engage without spamming.",
          "We measure INP and responsiveness as carefully as raw speed, tuning interactions so the app feels native-light on slower devices.",
        ],
      },
      {
        heading: "Delivery and reliability",
        paragraphs: [
          "Type-safe APIs, contract tests, and visual regression testing reduce production surprises. CI/CD with preview deploys lets stakeholders validate before release.",
          "Monitoring, feature flags, and rollbacks keep launches calm. If a regression happens, we can revert quickly without downtime.",
        ],
      },
    ],
  },
  "ecommerce-website-development": {
    title: "E-Commerce Website Development",
    heroParagraphs: [
      "We build conversion-driven storefronts that blend brand storytelling with frictionless checkout flows.",
      "Inventory, fulfillment, and merchandising connect to your ERP/CRM so operations stay accurate in real time.",
      "Secure payments, fraud prevention, and compliance-friendly data handling are designed from day one.",
    ],
    extendedCopy: [
      "Upsells, loyalty, and personalization modules boost AOV without feeling pushy.",
      "Analytics dashboards track funnel drop-offs, cohorts, and merchandising so you know what to optimize next.",
      "We load-test seasonal peaks and drops to keep your Sri Lanka shoppers and global audiences moving quickly.",
    ],
    longFormSections: [
      {
        heading: "Conversion-first e-commerce for Sri Lanka and beyond",
        paragraphs: [
          "We tailor PDPs, PLPs, and checkout flows to your buyers—clear pricing, trust badges, and delivery/return policies localised for Sri Lanka build confidence fast.",
          "Product storytelling combines rich media with concise specs and FAQs that address objections. Cross-sells and bundles are placed based on intent, not guesswork.",
        ],
        bullets: [
          "Optimized add-to-cart and checkout flows with minimal friction",
          "Localized payment options (e.g., Stripe, PayPal, regional gateways) and currency cues",
          "Schema for products, reviews, and breadcrumbs to boost organic visibility",
        ],
      },
      {
        heading: "Operations and integrations that stay in sync",
        paragraphs: [
          "We integrate inventory, fulfillment, and CRM so stock, pricing, and promotions stay accurate across channels. Webhooks and queues prevent oversells and keep customers informed.",
          "Analytics are configured end-to-end—GA4, server-side tagging, and pixel hygiene—to keep ROAS and CAC data trustworthy.",
        ],
      },
      {
        heading: "Performance and reliability under load",
        paragraphs: [
          "We optimize media at scale with modern formats, CDN caching, and smart prefetching to protect LCP and INP during campaigns and flash sales.",
          "Load tests simulate peak events so your store stays fast and stable when demand surges. Observability and alerts help us respond before shoppers feel pain.",
        ],
      },
      {
        heading: "Retention and lifetime value",
        paragraphs: [
          "We design loyalty touchpoints—post-purchase journeys, reorder prompts, and personalized recommendations—to lift LTV without annoying customers.",
          "Email/SMS integrations, on-site messaging, and contextual FAQs reduce support load while keeping conversion odds high.",
        ],
      },
    ],
  },
  "cms-development": {
    title: "CMS Development",
    heroParagraphs: [
      "We craft CMS experiences that empower marketers instead of slowing them down—headless or traditional.",
      "Structured content models and reusable blocks keep campaigns, product pages, and SEO aligned.",
      "Workflows, permissions, and localization match how your team actually works, not how a template expects you to work.",
    ],
    extendedCopy: [
      "We integrate analytics, DAMs, and CRMs so editors can publish data-backed content quickly.",
      "Caching, RBAC, and audit logs protect performance and security at scale.",
      "Training, documentation, and sandboxes help your team ship confidently from day one.",
    ],
    longFormSections: [
      {
        heading: "CMS that lets marketers move fast",
        paragraphs: [
          "We model content so editors can build landing pages, blogs, and campaign hubs without developer help. Reusable blocks include guidance on length, media ratios, and SEO fields, keeping new pages consistent and fast.",
          "Headless or traditional, we ensure preview workflows, localization, and approvals match how your team actually works in Sri Lanka and abroad.",
        ],
        bullets: [
          "Structured content models that map to your sitemap and funnels",
          "Role-based permissions and drafts to protect brand quality",
          "SEO fields, Open Graph, and schema built into every entry type",
        ],
      },
      {
        heading: "Performance, security, and governance",
        paragraphs: [
          "Caching layers, CDN delivery, and image optimization keep content snappy. We enforce sensible media limits to protect Core Web Vitals on mobile.",
          "RBAC, audit logs, and backups are set up early. SSO and MFA keep access secure for distributed teams.",
        ],
      },
      {
        heading: "Integrations that keep content data-rich",
        paragraphs: [
          "We connect CMS entries to DAMs, CRMs, and analytics so editors can publish with the right assets and see how content performs. UTM hygiene and tracking plans keep reporting trustworthy.",
          "Forms, calculators, and interactive blocks are built to be reused without custom code each time, accelerating campaign velocity.",
        ],
      },
      {
        heading: "Onboarding and continuous improvement",
        paragraphs: [
          "We train editors with clear do/don’t examples, short Looms, and checklists so quality stays high even as the team scales.",
          "We monitor publishing velocity, page performance, and SEO wins to continuously refine the CMS setup and content playbooks.",
        ],
      },
    ],
  },
  "progressive-web-applications": {
    title: "Progressive Web Applications (PWAs)",
    heroParagraphs: [
      "PWAs give your brand an installable experience without app store friction—perfect for fast-moving Sri Lanka audiences.",
      "Service workers, smart caching, and background sync create resilient apps even when users are offline.",
      "Push notifications and home-screen icons keep engagement high with minimal overhead.",
    ],
    extendedCopy: [
      "We design PWAs to feel native with sensible gestures, navigation, and system-aware theming.",
      "Performance budgets keep bundles light, improving first load and repeat visits.",
      "Analytics reveal device patterns and guide where to invest next—native, hybrid, or deeper PWA features.",
    ],
    longFormSections: [
      {
        heading: "Native-feel without the app store friction",
        paragraphs: [
          "We craft PWAs that install to home screens, launch fast, and feel native with gesture-aware navigation and offline resilience. Ideal for Sri Lankan audiences who want speed without app store downloads.",
          "Icons, splash screens, and theming are tuned for multiple devices so the experience feels polished everywhere.",
        ],
        bullets: [
          "Service workers for offline support and background sync",
          "Push notifications implemented with opt-in best practices",
          "Lightweight bundles to protect LCP/INP on mobile data",
        ],
      },
      {
        heading: "Engagement and retention built in",
        paragraphs: [
          "We design onboarding, re-engagement nudges, and contextual prompts that respect users’ time while lifting retention. Messaging is localized where it matters to increase opt-ins and repeat visits.",
          "Analytics track cohorts, device types, and engagement so we can tune features for the audiences that matter most.",
        ],
      },
      {
        heading: "Infrastructure and observability",
        paragraphs: [
          "We set up CI/CD, error tracking, and real-user monitoring to keep PWAs stable. Feature flags and staged rollouts allow experimentation without risking the core experience.",
          "Security (HTTPS enforcement, CSP, safe storage) is configured to keep data protected even when working offline.",
        ],
      },
      {
        heading: "SEO and discoverability",
        paragraphs: [
          "Where your PWA includes crawlable content, we use SSR/SSG for critical pages, ensuring metadata, schema, and sitemaps stay intact.",
          "Clear linking structures and breadcrumbs help both users and crawlers discover key content even when most navigation is client-side.",
        ],
      },
    ],
  },
  "website-maintenance": {
    title: "Website Maintenance Services",
    heroParagraphs: [
      "High-performing sites need consistent care. We handle updates, fixes, and polish so your team can focus on growth.",
      "Uptime, integrations, and content workflows are monitored to catch issues before customers do.",
      "You get monthly reports, action plans, and optimizations aligned to your KPIs.",
    ],
    extendedCopy: [
      "We maintain staging environments for safe testing, QA, and rollbacks.",
      "Security patches, dependency upgrades, and accessibility sweeps run on a predictable cadence.",
      "We collaborate with marketing and product leads to prioritize enhancements that actually move the needle.",
    ],
    longFormSections: [
      {
        heading: "Proactive maintenance that protects revenue",
        paragraphs: [
          "We operate your site like a product—not a one-off build. Monitoring, uptime checks, and alerting catch issues early so customers in Sri Lanka and abroad never hit broken flows.",
          "We schedule updates against a clear calendar: core CMS patches, dependency bumps, and performance sweeps that keep scores high and regressions rare.",
        ],
        bullets: [
          "Monthly QA on critical paths: forms, checkout, lead capture, login",
          "Performance spot checks on LCP/INP/CLS to preserve SEO",
          "Security patches and backup drills to keep risk low",
        ],
      },
      {
        heading: "Content and campaign support",
        paragraphs: [
          "We help your marketers launch pages safely—reviewing copy, media weights, and SEO fields so new campaigns don’t tank Core Web Vitals.",
          "Reusable blocks come with guidance on length, alt text, and linking so every new page stays on-brand and compliant.",
        ],
      },
      {
        heading: "Reporting with action, not vanity",
        paragraphs: [
          "You get concise reports with root causes and fixes, not just graphs. We track speed, uptime, accessibility, and conversion health so you see how maintenance impacts KPIs.",
          "We maintain a backlog of improvements and quick wins, prioritized by impact, so you always know what’s next.",
        ],
      },
      {
        heading: "Safe releases and predictable change",
        paragraphs: [
          "Staging environments, visual regression tests, and feature flags make releases calm. If something slips, rollbacks are fast and documented.",
          "Runbooks and checklists mean anyone on your team can ship routine updates without fear—keeping the site fresh and reliable.",
        ],
      },
    ],
  },
  "website-security": {
    title: "Website Security Enhancements",
    heroParagraphs: [
      "We harden your stack end-to-end—DNS, hosting, application, and data—so threats are neutralized early.",
      "WAF rules, firewalls, and rate limiting protect critical systems and customer data.",
      "Incident response runbooks and monitoring keep recovery swift and transparent if issues occur.",
    ],
    extendedCopy: [
      "We audit authentication, authorization, and storage to close weak points fast.",
      "Pen tests and vulnerability scans surface issues proactively rather than after an incident.",
      "Clear reports outline remediation, timelines, and owners so fixes never slip through.",
    ],
    longFormSections: [
      {
        heading: "Full-stack hardening from DNS to data",
        paragraphs: [
          "We secure your domain, hosting, CDN, and application layers so attacks are stopped before they reach customer data. WAF rules, rate limiting, and bot mitigation keep bad traffic out.",
          "Storage and secrets are encrypted, rotated, and audited. Access is least-privilege by default, with MFA/SSO where possible.",
        ],
        bullets: [
          "Auth and session security with proper lifetimes and refresh flows",
          "RBAC and audit trails to satisfy compliance and stakeholder confidence",
          "Backups, DR plans, and tabletop exercises to prove recovery",
        ],
      },
      {
        heading: "Testing and monitoring that finds issues first",
        paragraphs: [
          "We run vulnerability scans and periodic pen tests to surface weaknesses proactively. Dependency checks keep libraries patched.",
          "SIEM, alerts, and dashboards highlight anomalies early. Clear runbooks guide incident response so teams act fast under pressure.",
        ],
      },
      {
        heading: "Education and governance",
        paragraphs: [
          "We document security posture, data flow diagrams, and ownership so everyone knows their role. Playbooks cover onboarding/offboarding, key rotations, and vendor reviews.",
          "For Sri Lankan businesses handling regional data, we respect residency and privacy expectations while keeping performance high.",
        ],
      },
    ],
  },
  "performance-optimization": {
    title: "Performance Optimization",
    heroParagraphs: [
      "Speed builds trust. We diagnose and fix performance bottlenecks across frontend, backend, and infrastructure.",
      "Critical rendering paths, media, and queries are tuned to hit top Core Web Vitals scores.",
      "We benchmark improvements so you see measurable gains in conversions and SEO.",
    ],
    extendedCopy: [
      "Code splitting, image optimization, and caching reduce payloads dramatically for mobile visitors.",
      "Server profiling and database indexing remove the bottlenecks that only appear at scale.",
      "Dashboards and alerts catch regressions quickly so performance wins stick.",
    ],
    longFormSections: [
      {
        heading: "Diagnose, prove, and fix the real bottlenecks",
        paragraphs: [
          "We audit your stack end-to-end—critical rendering paths, image strategy, third-party scripts, API latency, and database queries. Each issue is prioritized by impact on LCP, INP, CLS, and conversion.",
          "Synthetic and field data (CrUX, GA4) guide the roadmap so we fix what users feel, not just what lab tools flag.",
        ],
        bullets: [
          "Media strategy with AVIF/WebP, proper sizing, and lazy loading",
          "Script budgeting, defer/async, and code splitting to trim JS",
          "Edge caching and CDN tuning to reduce TTFB globally",
        ],
      },
      {
        heading: "Implementation without breaking UX",
        paragraphs: [
          "We balance performance with brand moments—keeping hero visuals, motion, and richness while trimming overhead. Skeletons, prefetching, and strategic hints maintain perceived speed.",
          "Backend improvements (DB indexing, query optimization, caching) pair with frontend wins so gains hold under real traffic.",
        ],
      },
      {
        heading: "Guardrails to keep you fast",
        paragraphs: [
          "We add dashboards, alerts, and budgets per page template. New releases are checked against vitals so regressions are caught before ranking drops.",
          "Documentation gives marketers and engineers clear guidelines on media, embeds, and third-party tools to prevent bloat creeping back.",
        ],
      },
    ],
  },
  "core-web-vitals": {
    title: "Core Web Vitals Optimisation",
    heroParagraphs: [
      "Ranking and revenue depend on Core Web Vitals. We target LCP, CLS, and INP with data-backed fixes.",
      "Field data, lab tests, and session replays show where to win first and what to tackle next.",
      "Design, engineering, and content teams get clear playbooks for each metric.",
    ],
    extendedCopy: [
      "We optimize media loading, font delivery, and third-party scripts without losing brand moments.",
      "Script scheduling, hydration strategies, and input tweaks improve interaction readiness.",
      "Dashboards track vitals over time so improvements survive new releases.",
    ],
    longFormSections: [
      {
        heading: "LCP, CLS, INP tuned for real users",
        paragraphs: [
          "We map your key templates and measure real-user vitals to prioritize which pages and devices need fixes first. Hero media, fonts, and third-party tags are optimized to deliver strong LCP without sacrificing brand.",
          "Cumulative Layout Shift is eliminated with proper sizing, reserving space for ads/media, and deferring non-critical UI. INP is improved through input readiness, task scheduling, and minimizing main-thread blocking.",
        ],
        bullets: [
          "Font strategy (preload, fallback, unicode-range) to speed first render",
          "Predictable layouts with eager sizing and container queries",
          "Input responsiveness fixes: splitting long tasks, hydration strategy, and priority hints",
        ],
      },
      {
        heading: "Measurement that sticks",
        paragraphs: [
          "We set up RUM to monitor vitals by page and device, with alerts when thresholds slip. Synthetic checks catch regressions before campaigns go live.",
          "We document playbooks for your team so new pages, embeds, or scripts are added safely without degrading vitals.",
        ],
      },
      {
        heading: "SEO and content wins together",
        paragraphs: [
          "Improved vitals pair with schema, internal linking, and intent-led copy so search engines see both quality and speed. That combination is what keeps rankings rising and bounce rates falling.",
          "We surface proof elements and FAQs near CTAs to increase engagement, reinforcing positive behavioral signals alongside technical wins.",
        ],
      },
    ],
  },
  "web-hosting-setup": {
    title: "Web Hosting Setup",
    heroParagraphs: [
      "We choose hosting on Vercel, AWS, or Cloudflare based on your traffic profile and roadmap.",
      "Infrastructure-as-code keeps environments reproducible, secure, and easy to recover.",
      "CDNs, SSL, caching, and monitoring are configured so launches stay calm and predictable.",
    ],
    extendedCopy: [
      "Cost visibility helps you scale efficiently without overprovisioning.",
      "Backups, failovers, and alerts give stakeholders confidence around uptime.",
      "Documentation and handover empower your internal team to operate the stack independently.",
    ],
    longFormSections: [
      {
        heading: "Hosting matched to your growth plan",
        paragraphs: [
          "We evaluate Vercel, AWS, and Cloudflare against your traffic patterns, geography (including Sri Lanka), and roadmap. The goal: fast TTFB, simple scaling, and predictable costs.",
          "Caching, edge delivery, and the right rendering mode (SSG/SSR/ISR) are chosen per page type to balance freshness and speed.",
        ],
        bullets: [
          "IaC for reproducible environments and quick recovery",
          "CDN and image optimization pipelines to protect LCP",
          "Monitoring and alerts wired from day one",
        ],
      },
      {
        heading: "Reliability and security built in",
        paragraphs: [
          "We configure SSL, WAF, and DDoS protections to keep the perimeter safe. Backups and failover plans are tested, not just documented.",
          "Cost controls and autoscaling policies are set to avoid surprises during campaigns or seasonal spikes.",
        ],
      },
      {
        heading: "Handover your team can own",
        paragraphs: [
          "Runbooks, dashboards, and access controls make it easy for your internal team to operate the platform. We keep ownership clear so you don’t depend on hidden expertise.",
          "We align alerts and escalation paths so the right people act fast when something goes off-script.",
        ],
      },
    ],
  },
  "third-party-integrations": {
    title: "Third-Party Integrations",
    heroParagraphs: [
      "CRMs, payments, and analytics should feel seamless. We stitch third-party tools into one smooth experience.",
      "Data flows are mapped carefully so information stays synced, secure, and reliable.",
      "Middleware and webhooks keep integrations flexible as your stack changes.",
    ],
    extendedCopy: [
      "We validate rate limits, retries, and error handling to guarantee resilience.",
      "Admins get logs and status so integration health is visible at a glance.",
      "When partners change APIs, we adjust quickly to keep your experience stable.",
    ],
    longFormSections: [
      {
        heading: "Integrations that feel invisible",
        paragraphs: [
          "We map data flows carefully so CRMs, payments, analytics, and marketing tools stay in sync. Users see consistent status and fewer errors, increasing trust and conversion.",
          "Middleware and webhooks are hardened with retries, idempotency keys, and clear logging so issues are easy to trace and fix.",
        ],
        bullets: [
          "Rate-limit aware design to prevent throttling",
          "Observability on each integration: logs, alerts, dashboards",
          "Versioning and fallbacks for API changes",
        ],
      },
      {
        heading: "Security and compliance for shared data",
        paragraphs: [
          "PII handling respects privacy and regional expectations. Secrets are stored and rotated securely, and scopes are limited to the minimum required.",
          "Audit trails show who changed what and when, satisfying governance while keeping the system maintainable.",
        ],
      },
      {
        heading: "Business outcomes, not just connections",
        paragraphs: [
          "We measure the impact of integrations—lead quality, payment success, campaign ROAS—so you know which tools earn their keep.",
          "Documentation and enablement help your team operate integrations safely, add new ones, or replace underperformers without chaos.",
        ],
      },
    ],
  },
  "microservices-architecture": {
    title: "Microservices Architecture",
    heroParagraphs: [
      "We help you decompose monoliths into microservices thoughtfully so scale doesn’t come at the cost of reliability.",
      "Standardized tooling, CI/CD, and observability keep autonomous teams aligned.",
      "Versioned, documented APIs ensure each service plays nicely with the rest of the platform.",
    ],
    extendedCopy: [
      "We implement service discovery, circuit breakers, and message queues where they add resilience.",
      "Data consistency strategies—event sourcing, CDC, or contracts—are planned up front.",
      "Lightweight governance keeps independence from devolving into chaos.",
    ],
    longFormSections: [
      {
        heading: "Decomposition with a clear business lens",
        paragraphs: [
          "We identify domains and seams that make sense to split, avoiding premature or accidental complexity. Services are designed with clear ownership, SLAs, and contracts that align to business capabilities.",
          "APIs are versioned, documented, and secured so services can evolve independently without breaking others.",
        ],
        bullets: [
          "Service discovery, load balancing, and health checks baked in",
          "Circuit breakers and retries tuned to avoid cascading failures",
          "Event-driven patterns where they simplify, not complicate",
        ],
      },
      {
        heading: "Data consistency and observability",
        paragraphs: [
          "We plan data strategies—event sourcing, CDC, or shared contracts—based on your consistency needs. Snapshots, reconciliation jobs, and alerts keep data honest across services.",
          "Centralized logging, tracing, and metrics make it easy to debug cross-service flows and keep SLOs visible.",
        ],
      },
      {
        heading: "Operate and scale with confidence",
        paragraphs: [
          "CI/CD pipelines, canary releases, and blue/green deploys reduce risk. Feature flags let you roll out changes gradually and safely.",
          "Runbooks, incident playbooks, and on-call guidance keep the team calm during incidents. Governance stays lightweight so teams move fast without chaos.",
        ],
      },
    ],
  },
  "seo-ready-development": {
    title: "SEO-Ready Development",
    heroParagraphs: [
      "Technical SEO is built into our code. We ship semantic markup, clean URLs, and fast pages that rank.",
      "Structured data, Open Graph tags, and automated sitemaps help crawlers understand your content instantly.",
      "Localization, multi-language support, and canonical logic keep global experiences indexed correctly.",
    ],
    extendedCopy: [
      "We collaborate with SEO partners to prioritize improvements that move rankings and revenue.",
      "Health dashboards flag issues before they impact traffic or conversions.",
      "Editors get reusable components and guidelines so optimization is effortless for every new page.",
    ],
    longFormSections: [
      {
        heading: "Technical SEO wired into every template",
        paragraphs: [
          "Semantic HTML, clean URL structures, and intent-led heading hierarchies make your content easy to crawl and understand. We implement schema (FAQ, Product, Breadcrumb, Organization) where it lifts visibility.",
          "Open Graph, Twitter cards, and image guidelines ensure your links look great when shared, boosting click-through and dwell time.",
        ],
        bullets: [
          "XML sitemaps, robots directives, and canonical logic handled correctly",
          "Image, video, and file optimization to protect LCP and CLS",
          "Internal link strategies and nav structures that reinforce topical authority",
        ],
      },
      {
        heading: "Content operations with SEO guardrails",
        paragraphs: [
          "We build CMS components with fields for meta, schema, and internal linking so editors publish optimized pages by default. Guidance on word counts, media ratios, and FAQs keeps new content consistent.",
          "A lightweight QA checklist catches blocked crawls, missing alt text, or slow assets before pages go live.",
        ],
      },
      {
        heading: "Measurement, iteration, and EEAT",
        paragraphs: [
          "We monitor rankings, clicks, and engagement by template so we know where to focus improvements. Heatmaps and scroll depth show if content truly answers intent.",
          "EEAT signals—author bios, case studies, testimonials, and transparent process—are placed where they build trust and reduce pogo-sticking.",
        ],
      },
      {
        heading: "Local and global visibility",
        paragraphs: [
          "For Sri Lankan queries, we align with Google Business Profile, local schema, and location cues to strengthen relevance. For global, we tune hreflang and multilingual support where needed.",
          "Technical hygiene plus genuinely useful, fast content keeps you ranking even as competitors chase the same keywords.",
        ],
      },
    ],
  },
  "custom-web-applications": {
    title: "Custom Web Applications",
    heroParagraphs: [
      "When templates fail, custom software wins. We design web apps around your workflows, permissions, and KPIs.",
      "User research shapes dashboards, forms, and automation so every feature solves a real pain point.",
      "We architect for scale so new modules and business lines drop in without rework.",
    ],
    extendedCopy: [
      "Audit logs, access control, and data governance come standard so enterprises trust the solution.",
      "Roadmap workshops keep stakeholders aligned on priorities and releases.",
      "Engagement stays flexible—from full squads to enablement for your internal developers.",
    ],
    longFormSections: [
      {
        heading: "Built around your workflows, not the other way around",
        paragraphs: [
          "We design dashboards, forms, and automation that mirror how your teams actually work—sales, ops, finance, support. That alignment reduces training time and drives adoption.",
          "User research and stakeholder workshops clarify edge cases, permissions, and reporting needs so the first release solves real pains.",
        ],
        bullets: [
          "Role-aware interfaces that keep data secure and relevant",
          "Task flows with validation, autosave, and error recovery to cut friction",
          "Audit trails and exportable reports to satisfy leadership and compliance",
        ],
      },
      {
        heading: "Scalable, resilient architecture",
        paragraphs: [
          "We pick frameworks and databases based on your scale and integrations, ensuring APIs, queues, and caching are planned, not patched. Testing and CI/CD keep releases steady.",
          "Observability and feature flags allow safe experimentation and fast rollback if needed.",
        ],
      },
      {
        heading: "Onboarding, training, and ongoing improvement",
        paragraphs: [
          "We provide training materials, short Looms, and in-app guides to get teams productive quickly. Documentation keeps usage patterns consistent.",
          "Feedback loops—analytics, surveys, and support tickets—inform the roadmap so the app evolves with your business, not against it.",
        ],
      },
      {
        heading: "Security and data stewardship",
        paragraphs: [
          "RBAC, encryption, and secure storage policies protect sensitive data. Backups and recovery plans are tested so the business can operate confidently.",
          "Data governance, PI handling, and regional considerations are respected for Sri Lankan and global stakeholders.",
        ],
      },
    ],
  },
};

const designTools: IconEntry[] = [
  { name: "Figma", Icon: SiFigma },
  { name: "Photoshop", Icon: SiAdobephotoshop },
  { name: "Notion", Icon: SiNotion },
  { name: "Slack", Icon: SiSlack },
];

const devTools: IconEntry[] = [
  { name: "VS Code", image: "/images/vs-code.svg" },
  { name: "Notion", Icon: SiNotion },
  { name: "Figma", Icon: SiFigma },
];

const coreStack: IconEntry[] = [
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "React", Icon: SiReact },
  { name: "Tailwind", Icon: SiTailwindcss },
  { name: "Node.js", Icon: SiNodedotjs },
];

export const serviceToolsMap: Record<string, IconEntry[]> = {
  default: designTools,
  "custom-design": designTools,
  "ux-ui-design": designTools,
  "responsive-web-design": designTools,
  "frontend-development": [
    { name: "VS Code", image: "/images/vs-code.svg" },
    { name: "Figma", Icon: SiFigma },
    { name: "Notion", Icon: SiNotion },
  ],
  "backend-development": [
    { name: "VS Code", image: "/images/vs-code.svg" },
    { name: "Notion", Icon: SiNotion },
    { name: "Google Drive", Icon: SiGoogledrive },
  ],
  "full-stack-development": devTools,
  "single-page-applications": [
    { name: "VS Code", image: "/images/vs-code.svg" },
    { name: "Figma", Icon: SiFigma },
    { name: "Notion", Icon: SiNotion },
  ],
  "ecommerce-website-development": [
    { name: "Figma", Icon: SiFigma },
    { name: "Notion", Icon: SiNotion },
    { name: "Slack", Icon: SiSlack },
  ],
  "cms-development": [
    { name: "Figma", Icon: SiFigma },
    { name: "Google Drive", Icon: SiGoogledrive },
    { name: "Notion", Icon: SiNotion },
  ],
  "progressive-web-applications": [
    { name: "VS Code", image: "/images/vs-code.svg" },
    { name: "Figma", Icon: SiFigma },
    { name: "Notion", Icon: SiNotion },
  ],
  "website-maintenance": [
    { name: "Notion", Icon: SiNotion },
    { name: "VS Code", image: "/images/vs-code.svg" },
    { name: "Google Drive", Icon: SiGoogledrive },
  ],
  "website-security": [
    { name: "VS Code", image: "/images/vs-code.svg" },
    { name: "Slack", Icon: SiSlack },
    { name: "Google Drive", Icon: SiGoogledrive },
  ],
  "performance-optimization": [
    { name: "VS Code", image: "/images/vs-code.svg" },
    { name: "Figma", Icon: SiFigma },
    { name: "Notion", Icon: SiNotion },
  ],
  "core-web-vitals": [
    { name: "VS Code", image: "/images/vs-code.svg" },
    { name: "Figma", Icon: SiFigma },
    { name: "Notion", Icon: SiNotion },
  ],
  "web-hosting-setup": [
    { name: "VS Code", image: "/images/vs-code.svg" },
    { name: "Notion", Icon: SiNotion },
    { name: "Google Drive", Icon: SiGoogledrive },
  ],
  "third-party-integrations": [
    { name: "Zapier", Icon: SiZapier },
    { name: "Stripe", Icon: SiStripe },
    { name: "Slack", Icon: SiSlack },
  ],
  "microservices-architecture": [
    { name: "VS Code", image: "/images/vs-code.svg" },
    { name: "Notion", Icon: SiNotion },
    { name: "Slack", Icon: SiSlack },
  ],
  "seo-ready-development": [
    { name: "Google Analytics", Icon: SiGoogleanalytics },
    { name: "Notion", Icon: SiNotion },
    { name: "Figma", Icon: SiFigma },
  ],
  "custom-web-applications": devTools,
};

export const serviceTechnologiesMap: Record<string, IconEntry[]> = {
  default: [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
  ],
  "custom-design": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
  ],
  "ux-ui-design": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
  ],
  "responsive-web-design": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
  ],
  "frontend-development": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Redux", Icon: SiRedux },
  ],
  "backend-development": [
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "PostgreSQL", Icon: SiPostgresql },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Docker", Icon: SiDocker },
  ],
  "full-stack-development": [
    ...coreStack,
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Docker", Icon: SiDocker },
  ],
  "single-page-applications": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Redux", Icon: SiRedux },
  ],
  "ecommerce-website-development": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Shopify", Icon: SiShopify },
    { name: "WordPress", Icon: SiWordpress },
  ],
  "cms-development": [
    { name: "WordPress", Icon: SiWordpress },
    { name: "Strapi", Icon: SiStrapi },
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Node.js", Icon: SiNodedotjs },
  ],
  "progressive-web-applications": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Node.js", Icon: SiNodedotjs },
  ],
  "website-maintenance": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "WordPress", Icon: SiWordpress },
    { name: "Cloudflare", Icon: SiCloudflare },
  ],
  "website-security": [
    { name: "Cloudflare", Icon: SiCloudflare },
    { name: "AWS", Icon: SiAmazonwebservices },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Docker", Icon: SiDocker },
  ],
  "performance-optimization": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Cloudflare", Icon: SiCloudflare },
  ],
  "core-web-vitals": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Google Analytics", Icon: SiGoogleanalytics },
  ],
  "web-hosting-setup": [
    { name: "Vercel", Icon: SiVercel },
    { name: "AWS", Icon: SiAmazonwebservices },
    { name: "Cloudflare", Icon: SiCloudflare },
  ],
  "third-party-integrations": [
    { name: "Stripe", Icon: SiStripe },
    { name: "PayPal", Icon: SiPaypal },
    { name: "Zapier", Icon: SiZapier },
  ],
  "microservices-architecture": [
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "Docker", Icon: SiDocker },
    { name: "Kubernetes", Icon: SiKubernetes },
    { name: "RabbitMQ", Icon: SiRabbitmq },
  ],
  "seo-ready-development": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Tailwind", Icon: SiTailwindcss },
    { name: "Google Analytics", Icon: SiGoogleanalytics },
  ],
  "custom-web-applications": [
    { name: "Next.js", Icon: SiNextdotjs },
    { name: "React", Icon: SiReact },
    { name: "Node.js", Icon: SiNodedotjs },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "Tailwind", Icon: SiTailwindcss },
  ],
};
