export type CharacterLandingTheme = "wisdom" | "mystery";

export interface CharacterFeature {
  number: string;
  title: string;
  line: string;
  description: string;
  image: string;
  alt: string;
}

export interface CharacterLandingContent {
  theme: CharacterLandingTheme;
  hero: {
    heading: string;
    body: string;
    primaryLabel: string;
    secondaryLabel: string;
    primaryHref: string;
    characters: Array<{ image: string; alt: string }>;
  };
  problem: {
    heading: string;
    intro: string;
    items: Array<{ title: string; body: string }>;
  };
  showcase: {
    heading: string;
    intro: string;
    items: CharacterFeature[];
  };
  process: {
    heading: string;
    intro: string;
    steps: Array<{ title: string; body: string }>;
  };
  services: {
    heading: string;
    intro: string;
  };
  local: {
    heading: string;
    body: string;
  };
  closing: {
    heading: string;
    body: string;
    button: string;
  };
}

const spaceImages = {
  sage: "/images/original-character-renders/space-sage-01.png",
  apprentice: "/images/original-character-renders/space-apprentice-02.png",
  guardian: "/images/original-character-renders/space-guardian-03.png",
  droid: "/images/original-character-renders/space-droid-04.png",
  sentinel: "/images/original-character-renders/space-sentinel-05.png",
};

const mysteryImages = {
  dog: "/images/original-character-renders/mystery-dog-01.png",
  investigator:
    "/images/original-character-renders/mystery-lanky-investigator-02.png",
  analyst: "/images/original-character-renders/mystery-analyst-03.png",
  explorer: "/images/original-character-renders/mystery-explorer-04.png",
  lead: "/images/original-character-renders/mystery-team-lead-05.png",
};

export const yodaLandingContent: CharacterLandingContent = {
  theme: "wisdom",
  hero: {
    heading: "A website worthy of your vision, build we shall.",
    body: "For ambitious teams in Sri Lanka, BYOW brings strategy, web design, development and SEO into one clear path. Confusion, we remove. Momentum, you gain.",
    primaryLabel: "BEGIN YOUR BUILD",
    secondaryLabel: "SEE THE PATH",
    primaryHref: "https://cal.com/codezela/",
    characters: [
      { image: spaceImages.sage, alt: "An original green cosmic sage" },
      {
        image: spaceImages.apprentice,
        alt: "An original young cosmic apprentice",
      },
      { image: spaceImages.droid, alt: "An original astro-mechanic robot" },
    ],
  },
  problem: {
    heading: "Clear the fog. Find the signal.",
    intro:
      "Most website problems begin before the build. We simplify the message, the journey and the next step.",
    items: [
      {
        title: "Too much noise",
        body: "If visitors must work out what you do, they leave.",
      },
      {
        title: "Built for one screen",
        body: "A desktop-only idea loses people on the device they use most.",
      },
      {
        title: "Pretty, but nowhere to go",
        body: "Design without a clear next step is only decoration.",
      },
    ],
  },
  showcase: {
    heading: "Five disciplines. One focused build.",
    intro:
      "Strategy, design, engineering, performance and launch discipline move together.",
    items: [
      {
        number: "01",
        title: "Strategy",
        line: "First, the right question.",
        description:
          "We map your audience, offer and strongest route to action before a screen is designed.",
        image: spaceImages.sage,
        alt: "Cosmic sage representing website strategy",
      },
      {
        number: "02",
        title: "UX & UI",
        line: "Clear, every path becomes.",
        description:
          "Structure, hierarchy and thoughtful interactions help people move with confidence.",
        image: spaceImages.apprentice,
        alt: "Cosmic apprentice representing UX and UI design",
      },
      {
        number: "03",
        title: "Development",
        line: "Reliable, the foundation must be.",
        description:
          "Responsive frontend and robust backend work are shaped as one production system.",
        image: spaceImages.guardian,
        alt: "Furred space guardian representing web development",
      },
      {
        number: "04",
        title: "Performance",
        line: "Fast is felt before it is measured.",
        description:
          "We tune media, code and interactions for quick, stable experiences on every device.",
        image: spaceImages.droid,
        alt: "Astro-mechanic robot representing website performance",
      },
      {
        number: "05",
        title: "SEO & launch",
        line: "Found, your best work should be.",
        description:
          "Semantic pages, useful content and careful launch checks give search engines a clear trail.",
        image: spaceImages.sentinel,
        alt: "Masked cosmic sentinel representing SEO and launch quality",
      },
    ],
  },
  process: {
    heading: "A calm path to launch.",
    intro: "Six clear moves. No mystery about what happens next.",
    steps: [
      { title: "Listen", body: "Goals, audience and constraints." },
      { title: "Map", body: "Pages, content and conversion paths." },
      { title: "Design", body: "A visual system for every screen." },
      { title: "Build", body: "Clean, responsive production code." },
      { title: "Test", body: "Devices, speed and accessibility." },
      { title: "Launch", body: "SEO checks, handover and support." },
    ],
  },
  services: {
    heading: "Web design in Sri Lanka, with purpose at every step.",
    intro:
      "Choose a focused service or bring the whole website. BYOW keeps the work connected.",
  },
  local: {
    heading: "Built in Colombo. Ready for wherever your customers are.",
    body: "Meet us in Colombo 08, call the team or send the brief. The first useful conversation starts with your goal, not a sales script.",
  },
  closing: {
    heading: "Ready, your next chapter is.",
    body: "Bring the idea. A clear website plan, together we will shape.",
    button: "TALK TO BYOW",
  },
};

export const scoobLandingContent: CharacterLandingContent = {
  theme: "mystery",
  hero: {
    heading: "A better website? Let’s crack the case.",
    body: "Slow, confusing or hard to find? BYOW brings strategy, design, development and SEO together for Sri Lankan businesses ready to grow.",
    primaryLabel: "SOLVE MY WEBSITE",
    secondaryLabel: "FOLLOW THE CLUES",
    primaryHref: "https://cal.com/codezela/",
    characters: [
      { image: mysteryImages.dog, alt: "An original mystery-solving Great Dane" },
      {
        image: mysteryImages.investigator,
        alt: "An original young mystery investigator",
      },
      {
        image: mysteryImages.analyst,
        alt: "An original mystery analyst",
      },
    ],
  },
  problem: {
    heading: "The clues are hiding in plain sight.",
    intro:
      "A website rarely fails for one dramatic reason. Small points of friction add up fast.",
    items: [
      {
        title: "The offer is buried",
        body: "People should understand your value before they start hunting for it.",
      },
      {
        title: "Mobile feels forgotten",
        body: "Thumbs, smaller screens and slower connections change the whole case.",
      },
      {
        title: "Visitors reach a dead end",
        body: "Every important page needs a clear and useful next move.",
      },
    ],
  },
  showcase: {
    heading: "Every strong website leaves clues.",
    intro:
      "We follow the trail from first click to final conversion, then fix what gets in the way.",
    items: [
      {
        number: "01",
        title: "Find the friction",
        line: "Sniff out what slows people down.",
        description:
          "We review your offer, content and current journey to find the moments that cost attention.",
        image: mysteryImages.dog,
        alt: "Mystery-solving Great Dane representing website discovery",
      },
      {
        number: "02",
        title: "Shape the story",
        line: "Keep the useful bits. Lose the waffle.",
        description:
          "A sharper message makes the right customer feel understood without reading a wall of copy.",
        image: mysteryImages.investigator,
        alt: "Investigator representing website content strategy",
      },
      {
        number: "03",
        title: "Design the route",
        line: "Make the next step obvious.",
        description:
          "Clear structure, sharp visuals and mobile-first decisions turn wandering visitors into confident customers.",
        image: mysteryImages.analyst,
        alt: "Analyst representing website UX and UI design",
      },
      {
        number: "04",
        title: "Build the proof",
        line: "Good ideas need solid code.",
        description:
          "We turn the approved direction into a responsive website that feels considered on every screen.",
        image: mysteryImages.explorer,
        alt: "Explorer representing website development",
      },
      {
        number: "05",
        title: "Test every door",
        line: "No loose ends before launch.",
        description:
          "We check content, devices, interactions, accessibility, performance and search readiness.",
        image: mysteryImages.lead,
        alt: "Team lead representing website quality assurance",
      },
    ],
  },
  process: {
    heading: "How we solve the case.",
    intro: "A practical trail from the first question to a live website.",
    steps: [
      { title: "Discover", body: "What matters and who it matters to." },
      { title: "Direct", body: "One sharp message and page plan." },
      { title: "Design", body: "Visuals that guide, not distract." },
      { title: "Develop", body: "Responsive, production-ready code." },
      { title: "Inspect", body: "Every screen, link and interaction." },
      { title: "Launch", body: "Search-ready and ready to share." },
    ],
  },
  services: {
    heading: "Website design in Sri Lanka, without the guesswork.",
    intro:
      "Start with one problem or hand us the full case. The right specialists stay connected.",
  },
  local: {
    heading: "Built in Colombo. Sharp on every screen.",
    body: "BYOW works from Colombo 08 with businesses in Sri Lanka and beyond. Call, email or book a conversation when you are ready to open the case.",
  },
  closing: {
    heading: "Ready to close the case?",
    body: "Bring us the messy brief. We will turn it into a website people understand and act on.",
    button: "START THE CONVERSATION",
  },
};

