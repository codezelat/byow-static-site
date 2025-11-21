import { Product } from "@/app/types/product";

export const products: Record<string, Product> = {
  athwela: {
    id: "athwela",
    title: "Athwela - Your Ultimate Learning Companion",
    description:
      "Athwela blends adaptive learning plans with supportive community tools so students, pros, and lifelong learners can stay motivated from day one. Every touchpoint is tuned for clarity, speed, and accountability.",
    features: [
      "Personalised learning paths that adapt to strengths and focus areas",
      "Live dashboards showing study streaks, mastery scores, and reminders",
      "Guided practice with verified past papers and simplified solutions",
      "In-app communities where tutors and peers can collaborate in real time",
    ],
    benefits: [
      "Stay consistent with nudges that keep you on track even on busy weeks",
      "Learn confidently with curated resources mapped to each milestone",
      "Build habits faster through data visualisations anyone can understand",
      "Collaborate securely with mentors, study partners, or entire cohorts",
    ],
    audience: [
      "Students preparing for exams or competitive tests",
      "Professionals upskilling for certifications or career shifts",
      "Tutors and academies delivering structured hybrid programmes",
    ],
    extraDescription:
      "Athwela is available on both app stores, giving every learner a polished mobile HQ. Download it, sync your goals, and let the platform orchestrate what to learn next.",
    mobileImage: "/images/athwalamobile.jpeg",
    logo: "/images/athwala.png",
    ctaText: "Download",
    appStore: true,
    googlePlay: true,
    subtitle: undefined,
    name: undefined,
  },

  bookmepro: {
    id: "bookmepro",
    title: "BookMePro - Global Coach Booking and Time Management",
    description:
      "BookMePro gives coaches a single place to manage bookings, track availability, and keep every client session on time, whether they work online, in person, or both.",
    features: [
      "Calendar and slot management for one-to-one and group sessions",
      "Location-aware scheduling for online, in-person, and hybrid coaching",
      "Personal coach profiles that highlight expertise, reviews, and packages",
      "Automated confirmations, reminders, and rescheduling flows for clients",
    ],
    benefits: [
      "Spend less time on admin and more time actually coaching",
      "Reduce no-shows with clear booking rules and automatic reminders",
      "Look professional with a clean, shareable booking link",
      "Grow your client base by making it easy to book you from anywhere",
    ],
    audience: [
      "Sports coaches, fitness trainers, and personal trainers",
      "Business, life, and performance coaches running solo practices",
      "Coaching academies and clubs coordinating multiple coaches",
    ],
    extraDescription:
      "BookMePro runs in the browser, so coaches can open it on laptop, tablet, or mobile without any extra installs. Share a single link and let clients choose a time that works for both sides.",
    mobileImage: "/images/bookmepro-banner.jpg",
    logo: "/images/bookmepro-logo.png",
    ctaText: "",
    appStore: false,
    googlePlay: false,
    subtitle: undefined,
    name: undefined,
  },

  ehakade: {
    id: "ehakade",
    title: "EhaKade - Smart, Yet Simple eCommerce System",
    description:
      "EhaKade was built to help neighbourhood shops and small retailers move their day-to-day selling online without needing a full-scale eCommerce team.",
    features: [
      "Straightforward product catalogues with stock and price management",
      "Flexible ordering flows tuned for groceries and daily essentials",
      "Support for bank deposits, local payment rails, and cash on delivery",
      "Order tracking views for both shop owners and customers",
    ],
    benefits: [
      "Keep sales running even when physical footfall drops",
      "Serve regular customers with convenient online ordering",
      "Launch quickly with an interface that matches how small shops already work",
      "Handle payments in ways that suit local customers and banks",
    ],
    audience: [
      "Mini-marts, groceries, and neighbourhood convenience stores",
      "Pharmacies and speciality retailers serving local communities",
      "Small regional brands piloting online sales without heavy investment",
    ],
    extraDescription:
      "During the COVID period in Sri Lanka, EhaKade helped small businesses keep their operations running by giving them a simple way to accept orders and payments online while deliveries and pick-ups continued safely.",
    mobileImage: "/images/ehakade-banner.jpg",
    logo: "/images/ehakade-logo.png",
    ctaText: "",
    appStore: false,
    googlePlay: false,
    subtitle: undefined,
    name: undefined,
  },

  skillscareers: {
    id: "skillscareers",
    title: "SkillsCareers - Award-winning and Innovative Job Portal",
    description:
      "SkillsCareers brings job seekers, employers, and assessors together in one digital space that focuses on real skills, not just job titles.",
    features: [
      "Searchable job listings matched to skills, experience, and interests",
      "Recruiter dashboards for posting roles, filtering applications, and shortlisting",
      "Assessment tools that help measure candidates beyond the CV",
      "Candidate profiles that highlight skills, portfolios, and achievements",
    ],
    benefits: [
      "Job seekers discover roles that genuinely fit their abilities and goals",
      "Employers hire faster with richer, skills-based filters",
      "Assessors and trainers can align their pathways directly with hiring needs",
      "Everyone gains clearer visibility of career growth options and next steps",
    ],
    audience: [
      "Early-career professionals and fresh graduates entering the job market",
      "HR teams and recruiters looking for better candidate pipelines",
      "Training providers and assessors aligning skills with real roles",
    ],
    extraDescription:
      "With a modern interface and data-led matching, SkillsCareers helps people move from training into meaningful work while giving organisations a clearer picture of the talent available.",
    mobileImage: "/images/skill-banner.jpg",
    logo: "/images/skill-logo.png",
    ctaText: "",
    appStore: false,
    googlePlay: false,
    subtitle: undefined,
    name: undefined,
  },
};

export default products;
