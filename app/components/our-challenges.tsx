import { useState } from "react";
import Image from "next/image";

interface Challenge {
  id: number;
  title: string;
  description: string;
  tagline: string;
  videoSrc: string;
  solution: string;
}

export default function OurChallengesPage() {
  const challenges: Challenge[] = [
    {
      id: 1,
      title: "The Luxe Café",
      description:
        "The Luxe Café wanted a website that mirrored their premium dining experience. DIY platforms left them stuck with bland templates that didn't capture their unique vibe.",
      tagline: "From Cookie-Cutter to One-of-a-Kind: The Luxe Cafe",
      videoSrc: "/videos/video-01.mp4",
      solution:
        "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month.",
    },
    {
      id: 2,
      title: "Elite Builders",
      description:
        "As a construction company, Elite Builders struggled to showcase their impressive portfolio and win client trust online. Drag-and-drop tools weren't cutting it.",
      tagline: "Building Trust, Brick by Brick: Elite Builders & Co.",
      videoSrc: "/videos/video-02.mp4",
      solution:
        "BYOW designed an interactive portfolio with immersive project galleries and detailed case studies. Paired with an intuitive inquiry form, they saw a 50% increase in client leads.",
    },
    {
      id: 3,
      title: "Vision Creative Studio",
      description:
        "Vision Creative Studio's site felt outdated and didn't reflect their innovative approach. They needed a website as bold as their ideas.",
      tagline: "Bold Ideas, Bigger Impact: Vision Creative Studio",
      videoSrc: "/videos/video-03.mp4",
      solution:
        "BYOW delivered a visually striking design with animations, sleek transitions, and portfolio filters. The result? A website that's just as creative as the studio itself, leading to a 40% rise in client inquiries.",
    },
    {
      id: 4,
      title: "EduQuest",
      description:
        "EduQuest wanted to expand its reach with an engaging platform for online courses, but their previous website was clunky and hard to navigate.",
      tagline: "Making Learning Accessible: EduQuest Academy",
      videoSrc: "/videos/video-04.mp4",
      solution:
        "BYOW built an intuitive learning platform with streamlined navigation, integrated payment options, and mobile responsiveness. The academy saw a 25% increase in enrollments within three months.",
    },
  ];

  const [activeChallenge, setActiveChallenge] = useState<Challenge>(
    challenges[0]
  );

  return (
    <section className="px-4 pt-12 pb-10 xs:px-6 sm:px-8 md:pt-20 md:pb-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#CEB0FA]">
            See BYOW in Action
          </p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl md:text-[40px]">
            Smart, scalable builds our clients rely on
          </h2>
          <p className="mt-4 text-sm text-white/70 sm:text-base">
            Tap through the stories to see how we transform friction-heavy
            experiences into launch-ready products.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div className="hidden space-y-4 lg:block">
            {challenges.map((challenge) => {
              const isActive = activeChallenge.id === challenge.id;
              return (
                <button
                  key={challenge.id}
                  onClick={() => setActiveChallenge(challenge)}
                  className={`group w-full rounded-[28px] border px-5 py-6 text-left transition-all duration-300 ${
                    isActive
                      ? "border-white/40 bg-gradient-to-r from-[#1B0B2B] to-[#090909] shadow-[0_15px_80px_rgba(9,0,20,0.45)]"
                      : "border-white/5 bg-[#05010F]/60 hover:border-white/20"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#CEB0FA]">
                      {challenge.title}
                    </p>
                    <span
                      className={`ml-3 h-2 w-2 rounded-full transition ${
                        isActive ? "bg-[#CEB0FA]" : "bg-white/20"
                      }`}
                    />
                  </div>
                  <p className="mt-3 text-sm text-white/80 sm:text-base">
                    {challenge.description}
                  </p>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-white/60 sm:text-sm">
                    {challenge.tagline}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white">
                    View solution
                    <Image
                      src="/images/Arrow 1.png"
                      alt="arrow"
                      width={90}
                      height={16}
                      className="w-20 opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="lg:hidden">
            <p className="text-left text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Choose a project
            </p>
            <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
              {challenges.map((challenge) => {
                const isActive = activeChallenge.id === challenge.id;
                return (
                  <button
                    key={challenge.id}
                    onClick={() => setActiveChallenge(challenge)}
                    className={`whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-[#8133F1] text-white shadow-[0_12px_40px_rgba(129,51,241,0.35)]"
                        : "bg-white/5 text-white/70 hover:bg-white/10"
                    }`}
                  >
                    {challenge.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-[#8133F1]/20 via-[#090909] to-[#05010F] p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                  Our solution
                </p>
                <p className="mt-2 text-xl font-semibold sm:text-2xl">
                  {activeChallenge.title}
                </p>
              </div>
              <div className="rounded-full bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white/70">
                Case {String(activeChallenge.id).padStart(2, "0")}
              </div>
            </div>

            <div className="mt-6 overflow-hidden rounded-3xl border border-white/10">
              <video
                key={activeChallenge.id}
                className="h-[220px] w-full object-cover xs:h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={activeChallenge.videoSrc} type="video/mp4" />
              </video>
            </div>

            <p className="mt-6 text-sm text-white/80 sm:text-base">
              {activeChallenge.solution}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
