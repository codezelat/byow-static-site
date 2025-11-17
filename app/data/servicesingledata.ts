export interface ServiceDetail {
  title: string;
  heroParagraphs: string[];
  extendedCopy: string[];
}

const defaultDetail: ServiceDetail = {
  title: "Custom Website Design",
  heroParagraphs: [
    "At BYOW, every site is treated like a flagship experience. We shape bespoke layouts, typographic systems, and motion cues so your audience immediately understands who you are and what you stand for.",
    "Discovery workshops, audits, and rapid prototypes keep strategy and execution in sync. We translate insights into visual languages that feel premium yet are simple for your team to maintain.",
    "From art direction to responsive fine-tuning, we make sure your brand feels intentional across phones, tablets, desktops, and the surfaces that have yet to launch.",
  ],
  extendedCopy: [
    "Our designers work side-by-side with engineers to ensure pixel-perfect fidelity, accessible interactions, and performant assets. Nothing is handed off blindly.",
    "We obsess over decisions that compound over time: modular components, intuitive CMS controls, and documentation that lets your team move quickly.",
    "When the build goes live, we stay close with analytics reviews and iterative enhancements, turning the site into a living product rather than a one-and-done deliverable.",
  ],
};

export const serviceDetails: Record<string, ServiceDetail> = {
  default: defaultDetail,
  "custom-design": defaultDetail,
  "ux-ui-design": {
    title: "UX/UI Design",
    heroParagraphs: [
      "We conduct interviews, heuristic audits, and data reviews to understand the behaviors driving your product. That research fuels user journeys and flows before a single pixel is committed.",
      "Interactive prototypes and motion studies help teams preview the experience early, align stakeholders, and run usability sessions without heavy engineering investment.",
      "UI kits, token systems, and documentation ensure that every screen, modal, or micro-interaction feels like it belongs to the same polished ecosystem.",
    ],
    extendedCopy: [
      "We champion accessibility from day zero, checking color, contrast, focus states, and screen-reader semantics while the designs are still evolving.",
      "Handoffs include component specs, redlines, and responsive annotations so developers can move quickly without guesswork.",
      "Post-launch, we track funnels and qualitative feedback to identify the next round of UX experiments, keeping the interface continuously tuned.",
    ],
  },
  "responsive-web-design": {
    title: "Responsive Web Design",
    heroParagraphs: [
      "Your audience lives across devices, and our responsive systems make sure every breakpoint feels intentional rather than simply shrinking the desktop layout.",
      "We design with flexible grids, fluid typography, and adaptive imagery so content remains legible and compelling from the narrowest viewport to ultrawide monitors.",
      "Touch-friendly targets, device-specific gestures, and offline-friendly assets keep interactions smooth even on variable networks.",
    ],
    extendedCopy: [
      "We prototype breakpoint behavior early, allowing stakeholders to validate how hero sections, navigation, and key conversions adapt as screens change.",
      "Performance budgets guide how we load fonts, videos, and scripts so mobile visitors never feel penalized.",
      "Testing spans real hardware—from older Android phones to high-density tablets—to catch layout shifts before your users do.",
    ],
  },
  "frontend-development": {
    title: "Frontend Development",
    heroParagraphs: [
      "Our frontend engineers translate polished designs into component-driven systems using React, Next.js, or Vue while honoring the exact details your brand relies on.",
      "Accessibility, semantic HTML, and modern CSS techniques are woven into every build so the experience is inclusive and robust.",
      "We integrate animations and micro-interactions responsibly, enhancing story beats without compromising performance.",
    ],
    extendedCopy: [
      "Design tokens, Storybook libraries, and testing frameworks come standard, making future updates faster and safer.",
      "We pair with backend teams to ensure API responses map cleanly to UI states, handling loading, error, and empty cases gracefully.",
      "Deployment pipelines, linting, and monitoring keep the interface resilient long after launch.",
    ],
  },
  "backend-development": {
    title: "Backend Development",
    heroParagraphs: [
      "Secure, scalable services power unforgettable experiences. We architect APIs and databases that keep pace with your growth.",
      "Whether the stack is Node, Python, or PHP, we structure codebases for clarity, testing, and easy onboarding.",
      "We prioritize observability—logs, metrics, and tracing—so issues can be diagnosed before they impact customers.",
    ],
    extendedCopy: [
      "Data models are designed to support analytics, personalization, and downstream integrations without constant rework.",
      "We implement robust authentication, role management, and compliance-ready audit trails.",
      "Documentation and runbooks prepare your team to operate the platform confidently post-handoff.",
    ],
  },
  "full-stack-development": {
    title: "Full-Stack Development",
    heroParagraphs: [
      "Our product squads span strategy, design, frontend, and backend, giving you a coordinated build partner from ideation to launch.",
      "Using stacks like MERN, MEAN, or modern Next.js/Node pairings, we balance speed to market with future-ready architecture.",
      "We approach every milestone with demos, QA, and stakeholder alignment so there are no surprises at delivery.",
    ],
    extendedCopy: [
      "Reusable components, shared typing, and API contracts keep frontend and backend teams synchronized.",
      "We automate deployments, migrations, and infrastructure-as-code so environments stay predictable.",
      "After launch we monitor performance, iterate on features, and support your roadmap as an embedded team.",
    ],
  },
  "single-page-applications": {
    title: "Single Page Applications (SPAs)",
    heroParagraphs: [
      "We build SPAs that feel instantaneous thanks to client-side routing, caching, and smart data fetching.",
      "State management with tools like Redux, Zustand, or Vuex keeps complex interactions predictable.",
      "Code splitting, lazy loading, and skeleton states ensure the experience still feels lightweight.",
    ],
    extendedCopy: [
      "We evaluate when SSR or hydration hybrids are needed to support SEO-heavy pages.",
      "Offline capabilities, background sync, and push messaging keep users engaged even when connectivity is spotty.",
      "Monitoring tracks route performance and user flows, informing optimizations after launch.",
    ],
  },
  "ecommerce-website-development": {
    title: "E-Commerce Website Development",
    heroParagraphs: [
      "We craft storefronts that marry storytelling with conversion science, guiding shoppers from discovery to checkout effortlessly.",
      "Inventory, fulfillment, and merchandising workflows integrate tightly with your internal systems.",
      "We implement secure payment flows and compliance-friendly data handling from day one.",
    ],
    extendedCopy: [
      "Upsell modules, loyalty integrations, and personalized recommendations increase AOV without feeling intrusive.",
      "Analytics dashboards surface the metrics that matter: funnel drop-offs, cohort performance, and merchandising insights.",
      "We stress-test peak events like drops or seasonal sales to ensure the experience stays fast when demand surges.",
    ],
  },
  "cms-development": {
    title: "CMS Development",
    heroParagraphs: [
      "Content teams need freedom, not bottlenecks. We build CMS experiences—headless or traditional—that empower editors.",
      "Structured content models and reusable blocks keep marketing, product, and brand aligned.",
      "Custom workflows, permissions, and localization tools fit your organization's reality rather than forcing new habits.",
    ],
    extendedCopy: [
      "We integrate analytics, DAMs, and CRM data so content decisions are informed and measurable.",
      "Performance and security are safeguarded with caching, role-based access, and audit logs.",
      "Training, documentation, and sandbox environments help your team launch confidently on day one.",
    ],
  },
  "progressive-web-applications": {
    title: "Progressive Web Applications (PWAs)",
    heroParagraphs: [
      "PWAs let your audience install your brand on any device without app store friction.",
      "Service workers, caching strategies, and background sync create resilient experiences even offline.",
      "Push notifications and home-screen icons keep engagement high with minimal technical overhead.",
    ],
    extendedCopy: [
      "We design PWAs to feel native, respecting gesture patterns, navigation, and system settings.",
      "Performance budgets ensure the bundle remains light, improving first load and subsequent visits.",
      "Analytics reveal usage patterns across devices, guiding the roadmap for native or hybrid investments.",
    ],
  },
  "website-maintenance": {
    title: "Website Maintenance Services",
    heroParagraphs: [
      "Great sites deserve ongoing care. We handle updates, bug fixes, and polish so your team can focus on strategy.",
      "Our team monitors uptime, integrations, and content workflows to catch issues before customers do.",
      "Each month you receive clear reports, action plans, and optimizations tailored to your KPIs.",
    ],
    extendedCopy: [
      "We maintain staging environments for safe testing and rollbacks.",
      "Security patches, dependency updates, and accessibility sweeps happen on a predictable cadence.",
      "We partner with your marketing and product leads to prioritize enhancements that move the needle.",
    ],
  },
  "website-security": {
    title: "Website Security Enhancements",
    heroParagraphs: [
      "We secure the full stack—DNS, hosting, application, and data—so threats are neutralized before they escalate.",
      "Firewalls, WAF rules, and rate limiting keep malicious traffic away from critical systems.",
      "Incident response plans and monitoring ensure that if something happens, recovery is swift and transparent.",
    ],
    extendedCopy: [
      "We audit authentication flows, permissions, and storage to eliminate weak points.",
      "Regular penetration testing and vulnerability scans surface issues proactively.",
      "Reports outline remediation steps, timelines, and owner assignments so nothing slips.",
    ],
  },
  "performance-optimization": {
    title: "Performance Optimization",
    heroParagraphs: [
      "Latency kills trust. We diagnose and resolve performance bottlenecks across frontend, backend, and infrastructure.",
      "From critical rendering paths to database queries, each layer is tuned for speed.",
      "We benchmark improvements so teams can see tangible gains in Core Web Vitals and conversions.",
    ],
    extendedCopy: [
      "Code splitting, image optimization, and caching strategies reduce payloads dramatically.",
      "Server profiling and database indexing remove bottlenecks that only surface at scale.",
      "We enable ongoing observability so regressions are caught the moment they appear.",
    ],
  },
  "core-web-vitals": {
    title: "Core Web Vitals Optimisation",
    heroParagraphs: [
      "Search visibility and user satisfaction rely on CWV. We focus on LCP, CLS, and INP with a data-backed approach.",
      "We analyze field data, synthetic tests, and session recordings to prioritize impactful fixes.",
      "Design, engineering, and content teams receive actionable playbooks for each metric.",
    ],
    extendedCopy: [
      "We optimize media loading, font delivery, and third-party scripts without sacrificing brand moments.",
      "Interaction readiness improves through script scheduling, hydration strategies, and input responsiveness tweaks.",
      "Dashboards show ongoing vitals performance so wins are preserved release after release.",
    ],
  },
  "web-hosting-setup": {
    title: "Web Hosting Setup",
    heroParagraphs: [
      "We evaluate hosting providers, cloud platforms, and deployment strategies based on your traffic profile and roadmap.",
      "Infrastructure is automated with IaC, making environments reproducible and secure.",
      "We configure CDN layers, SSL, and monitoring so launches are calm rather than chaotic.",
    ],
    extendedCopy: [
      "Cost insights help you scale efficiently without overprovisioning.",
      "Backup policies, failovers, and alerting keep stakeholders confident.",
      "We document everything, empowering your internal team to operate the stack independently.",
    ],
  },
  "third-party-integrations": {
    title: "Third-Party Integrations",
    heroParagraphs: [
      "Whether it's a CRM, payment gateway, or analytics platform, we stitch disparate systems into one smooth experience.",
      "We map data flows carefully so information is synchronized securely and reliably.",
      "Custom middleware and webhooks keep integrations flexible as your stack evolves.",
    ],
    extendedCopy: [
      "We validate rate limits, error handling, and retries to guarantee resilience.",
      "Admin interfaces and logs reveal integration health at a glance.",
      "As partners change APIs, we keep your experience stable with proactive maintenance.",
    ],
  },
  "microservices-architecture": {
    title: "Microservices Architecture",
    heroParagraphs: [
      "Microservices unlock scale when executed intentionally. We help you decompose monoliths into manageable services.",
      "Standardized tooling, CI/CD, and observability keep autonomous teams aligned.",
      "APIs are versioned, documented, and secured so each service plays nicely with the rest.",
    ],
    extendedCopy: [
      "We implement service discovery, circuit breakers, and message queues where needed.",
      "Data consistency strategies—event sourcing, CDC, or shared contracts—are planned up front.",
      "Governance frameworks ensure independence never devolves into chaos.",
    ],
  },
  "seo-ready-development": {
    title: "SEO-Ready Development",
    heroParagraphs: [
      "Technical SEO starts with thoughtful engineering. We ship semantic markup, clean URL structures, and lightning-fast pages.",
      "Structured data, Open Graph tags, and sitemap automation help crawlers understand your content instantly.",
      "Localization, multi-language setups, and canonical logic keep global experiences indexed correctly.",
    ],
    extendedCopy: [
      "We collaborate with your SEO partners to prioritize rolling improvements based on impact.",
      "Site health dashboards flag issues before they cost traffic.",
      "Content editors receive guidelines and reusable components that make optimization effortless.",
    ],
  },
  "custom-web-applications": {
    title: "Custom Web Applications",
    heroParagraphs: [
      "Some problems deserve software built from scratch. We design web applications tailored to your workflows, permissions, and KPIs.",
      "User research shapes dashboards, forms, and automation so every feature solves a real pain point.",
      "We plan for scale, ensuring new modules or business lines can slot into the platform gracefully.",
    ],
    extendedCopy: [
      "Audit logs, access control, and data governance come standard so enterprises can trust the solution.",
      "Roadmap workshops keep stakeholders aligned on priorities and releases.",
      "We offer flexible engagement models—from full product squads to enablement for your internal dev team.",
    ],
  },
};

export const serviceTools = [
  { name: "figma", image: "/images/figma-logo.svg" },
  { name: "photoshop", image: "/images/adobe-photoshop.svg" },
  { name: "notion", image: "/images/notion-logo.svg" },
  { name: "google-doc", image: "/images/google-docs.svg" },
  { name: "vscode", image: "/images/vs-code.svg" },
];

export const serviceTechnologies = [
  { name: "next", image: "/images/nextjs.svg" },
  { name: "react", image: "/images/react.svg" },
  { name: "tailwind", image: "/images/tailwind.svg" },
  { name: "wordpress", image: "/images/wordpress.svg" },
  { name: "mongodb", image: "/images/mongodb.svg" },
  { name: "nodejs", image: "/images/nodejs.svg" },
];
