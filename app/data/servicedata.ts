export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  services: Service[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "web-design",
    title: "Web Design Services",
    services: [
      {
        id: "custom-design",
        title: "Custom Website Design",
        description:
          "Tailor-made brand systems, immersive layouts, and responsive art direction built for every breakpoint.",
        icon: "/images/Browser.svg",
      },
      {
        id: "ux-ui-design",
        title: "UX/UI Design",
        description:
          "Research-driven prototypes, interaction patterns, and component libraries that feel intuitive from day one.",
        icon: "/images/ui_ux1.svg",
      },
      {
        id: "responsive-web-design",
        title: "Responsive Web Design",
        description:
          "Mobile-first grids, typography, and assets optimized for seamless experiences on any device.",
        icon: "/images/share.svg",
      },
    ],
  },
  {
    id: "development-services",
    title: "Web Development Services",
    services: [
      {
        id: "frontend-development",
        title: "Frontend Development",
        description:
          "Pixel-perfect React, Vue, or Next builds with motion, accessibility, and performance baked in.",
        icon: "/images/Code_Runtime.svg",
      },
      {
        id: "backend-development",
        title: "Backend Development",
        description:
          "Robust APIs, clean data models, and secure integrations powered by Node.js, Python, or PHP stacks.",
        icon: "/images/developer.svg",
      },
      {
        id: "full-stack-development",
        title: "Full-Stack Development",
        description:
          "Coordinated frontend and backend delivery using modern stacks like MERN, MEAN, or T3.",
        icon: "/images/full-stack-developer.svg",
      },
      {
        id: "single-page-applications",
        title: "Single Page Applications (SPAs)",
        description:
          "High-speed React or Angular SPAs with dynamic routing, state management, and seamless transitions.",
        icon: "/images/cloud-computing.svg",
      },
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    services: [
      {
        id: "ecommerce-website-development",
        title: "E-Commerce Website Development",
        description:
          "Custom storefronts, optimized checkout flows, and inventory orchestration for scaling brands.",
        icon: "/images/commerce.svg",
      },
      {
        id: "cms-development",
        title: "CMS Development",
        description:
          "WordPress, Headless, or bespoke CMS builds that empower teams to launch content quickly.",
        icon: "/images/software01.svg",
      },
      {
        id: "progressive-web-applications",
        title: "Progressive Web Applications (PWAs)",
        description:
          "Installable web apps with offline support, push notifications, and near-native performance.",
        icon: "/images/pwas.svg",
      },
    ],
  },
  {
    id: "maintenance",
    title: "Website Maintenance and Security",
    services: [
      {
        id: "website-maintenance",
        title: "Website Maintenance Services",
        description:
          "Continuous improvements, bug fixes, content refreshes, and proactive monitoring.",
        icon: "/images/web-repair.svg",
      },
      {
        id: "website-security",
        title: "Website Security Enhancements",
        description:
          "Hardened infrastructure, firewall policies, and forensic audits to keep threats at bay.",
        icon: "/images/lock.svg",
      },
      {
        id: "performance-optimization",
        title: "Performance Optimization",
        description:
          "Core Web Vitals tuning, asset compression, and CDN strategies for instant feedback.",
        icon: "/images/cogwheel.svg",
      },
      {
        id: "core-web-vitals",
        title: "Core Web Vitals Optimisation",
        description:
          "CLS, LCP, and INP improvements guided by lab data and field telemetry.",
        icon: "/images/globe.svg",
      },
    ],
  },
  {
    id: "hosting",
    title: "Hosting and Integrations",
    services: [
      {
        id: "web-hosting-setup",
        title: "Web Hosting Setup",
        description:
          "Cloud architecture, SSL provisioning, and deployment pipelines tailored to your stack.",
        icon: "/images/setting.svg",
      },
      {
        id: "third-party-integrations",
        title: "Third-Party Integrations",
        description:
          "Payments, CRMs, analytics, and bespoke APIs wired into a unified product ecosystem.",
        icon: "/images/teamwork.svg",
      },
      {
        id: "microservices-architecture",
        title: "Microservices Architecture",
        description:
          "Modular services with independent deployment, observability, and resilience baked in.",
        icon: "/images/cloud.svg",
      },
    ],
  },
  {
    id: "other-services",
    title: "Other Services",
    services: [
      {
        id: "seo-ready-development",
        title: "SEO-Ready Development",
        description:
          "Schema, semantic markup, and lightning-fast pages that earn visibility from launch.",
        icon: "/images/seo.svg",
      },
      {
        id: "custom-web-applications",
        title: "Custom Web Applications",
        description:
          "Workflow platforms, portals, and internal tools designed specifically for your operations.",
        icon: "/images/project3 1.svg",
      },
    ],
  },
];
