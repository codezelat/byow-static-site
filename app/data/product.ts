import { Product } from "@/app/types/product";

export const products: Record<string, Product> = {
  athwela: {
    id: "athwela",
    title: "Athwela – Your Ultimate Learning Companion",
    description:
      "Athwela blends adaptive learning plans with supportive community tools so students, pros, and lifelong learners can stay motivated from day one. Every touchpoint is tuned for clarity, speed, and accountability.",
    features: [
      "Personalized learning paths that adapt to strengths and focus areas",
      "Live dashboards showing study streaks, mastery scores, and reminders",
      "Guided practice with verified past papers and simplified solutions",
      "In-app communities where tutors and peers can collaborate in real time",
    ],
    benefits: [
      "Stay consistent with nudges that keep you on track even on busy weeks",
      "Learn confidently with curated resources mapped to each milestone",
      "Build habits faster through data visualizations anyone can understand",
      "Collaborate securely with mentors, study partners, or entire cohorts",
    ],
    audience: [
      "Students preparing for exams or competitive tests",
      "Professionals upskilling for certifications or career shifts",
      "Tutors and academies delivering structured hybrid programs",
    ],
    extraDescription:
      "Athwela is available on both app stores, giving every learner a polished mobile HQ. Download it, sync your goals, and let the platform orchestrate what to learn next.",
    mobileImage: "/images/athwalamobile.jpeg",
    logo: "/images/athwala.png",
    selectedLogo: "/images/athwalaSelected.svg",
    ctaText: "Download",
    appStore: true,
    googlePlay: true,
    subtitle: undefined,
    name: undefined,
  },
  tidal: {
    id: "tidal",
    title: "TIDAL – Premium Music Streaming Experience",
    description:
      "TIDAL delivers lossless sound, early artist drops, and a magazine-like discovery surface designed for people who want every listen to feel intentional.",
    features: [
      "HiFi, HiFi Plus, and Dolby Atmos tiers with studio-grade output",
      "Editorial playlists and mixes built by curators and artists",
      "Exclusive films, live sessions, and behind-the-music interviews",
      "Device handoff for speakers, cars, wearables, and consoles",
    ],
    benefits: [
      "Hear every detail with bit-perfect streaming regardless of device",
      "Follow artists more closely with premieres you cannot find elsewhere",
      "Let the algorithm learn your mood while editors keep it fresh",
      "Collect mixes offline so flights, commutes, or workouts stay immersive",
    ],
    audience: [
      "Audiophiles who expect better-than-CD fidelity",
      "Fans chasing exclusive content and merch drops",
      "Multi-device households that need seamless playback control",
      "Creators who appreciate platforms paying musicians fairly",
    ],
    extraDescription:
      "Cue up a listening session via TIDAL on iOS or Android, or start from the desktop app to fine-tune your queue with waveform-level accuracy.",
    mobileImage: "/images/tidal.png",
    logo: "/images/tidal.svg",
    selectedLogo: "/images/tidalSelected.png",
    ctaText: "Start Listening",
    appStore: true,
    googlePlay: true,
    subtitle: undefined,
    name: undefined,
  },
  databricks: {
    id: "databricks",
    title: "Databricks – Unified Data Analytics Platform",
    description:
      "Databricks unifies data engineering, BI, and ML so teams can experiment and deploy on the same collaborative Lakehouse workspace.",
    features: [
      "Managed Spark clusters that autoscale with workload demand",
      "Delta Lake reliability for streaming and batch pipelines",
      "Notebooks that mix SQL, Python, and visualization in one view",
      "MLflow tracking plus Model Serving for full lifecycle control",
    ],
    benefits: [
      "Shorter time-to-insight thanks to a shared, governed data layer",
      "Lower infrastructure overhead with autoscaling and cost controls",
      "Less context switching for data squads working across stacks",
      "Enterprise security baked into every workspace and artifact",
    ],
    audience: [
      "Data engineering teams orchestrating multi-cloud pipelines",
      "Analytics leaders who need governed self-serve insights",
      "ML engineers operationalizing models at scale",
      "Enterprises modernizing legacy data platforms",
    ],
    extraDescription:
      "Spin up a workspace, bring your preferred cloud, and collaborate live with product, research, or ops on the exact same notebook canvas.",
    mobileImage: "/images/databricks.png",
    logo: "/images/databricks.svg",
    selectedLogo: "/images/databricksSelected.png",
    ctaText: "Get Started",
    appStore: false,
    googlePlay: false,
    subtitle: undefined,
    name: undefined,
  },
  razorpay: {
    id: "razorpay",
    title: "Razorpay – Complete Payment Solution",
    description:
      "Razorpay stitches cards, UPI, wallets, and subscriptions into one modern payment stack so brands can launch, scale, and reconcile faster.",
    features: [
      "Unified checkout with 100+ domestic and international methods",
      "Smart routing plus dynamic retries to keep success rates high",
      "Billing engine for subscriptions, invoices, and payment links",
      "Realtime dashboard with chargeback alerts and payout controls",
    ],
    benefits: [
      "Boost conversions with a trusted UI tuned for sub-second response",
      "Go global immediately with localized currencies and tax logic",
      "Automate collections, refunds, and GST-ready reports",
      "Sleep better with fraud monitoring and PCI-compliant vaulting",
    ],
    audience: [
      "Ecommerce and D2C merchants who live on conversion rates",
      "SaaS and membership platforms managing recurring revenue",
      "Marketplaces splitting payouts between sellers and partners",
      "Finance teams who crave instant reconciliation and alerts",
    ],
    extraDescription:
      "Embed Razorpay via drop-in widgets or APIs, then manage every flow—from payouts to payroll—inside a single control center.",
    mobileImage: "/images/razorpay.png",
    logo: "/images/razorpay.svg",
    selectedLogo: "/images/razorpaySelected.png",
    ctaText: "Start Accepting Payments",
    appStore: false,
    googlePlay: false,
    subtitle: undefined,
    name: undefined,
  },
};

export default products;
