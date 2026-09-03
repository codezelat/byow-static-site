import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    href: "/yoda",
    title: "Build with clarity",
    description: "A calm path from the first question to a confident launch.",
    image: "/images/original-character-renders/space-sage-01.png",
    alt: "Original cosmic sage for BYOW's clarity-led web design story",
    color: "#B9C778",
  },
  {
    href: "/scoob",
    title: "Crack the website case",
    description: "Follow the clues from hidden friction to a stronger customer journey.",
    image: "/images/original-character-renders/mystery-dog-01.png",
    alt: "Original mystery-solving dog for BYOW's investigative web design story",
    color: "#39D2CA",
  },
];

export default function CharacterStoriesSection() {
  return (
    <section className="px-4 py-20 xs:px-6 sm:px-8 md:py-28" aria-labelledby="character-stories-title">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl text-left">
          <h2
            id="character-stories-title"
            className="text-3xl font-semibold leading-tight text-white sm:text-4xl md:text-[48px]"
          >
            Pick a story. See how BYOW builds.
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
            Two playful routes. The same strategy, design and development team behind both.
          </p>
        </div>

        <div className="mt-12 grid border-y border-white/10 md:grid-cols-2">
          {stories.map((story, index) => (
            <Link
              key={story.href}
              href={story.href}
              className={`group relative grid min-h-[360px] overflow-hidden px-5 py-7 transition-colors hover:bg-white/[0.04] sm:min-h-[420px] sm:px-8 sm:py-9 ${
                index === 1 ? "border-t border-white/10 md:border-l md:border-t-0" : ""
              }`}
            >
              <div className="relative z-10 max-w-[19rem]">
                <h3 className="text-2xl font-semibold text-white sm:text-3xl">
                  {story.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/65 sm:text-base">
                  {story.description}
                </p>
              </div>

              <div className="absolute inset-x-[22%] bottom-0 top-[34%] transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-[1.03] sm:inset-x-[26%]">
                <Image
                  src={story.image}
                  alt={story.alt}
                  fill
                  sizes="(max-width: 767px) 60vw, 30vw"
                  className="object-contain object-bottom drop-shadow-[0_24px_40px_rgba(0,0,0,0.55)]"
                />
              </div>

              <span
                className="relative z-10 mt-auto inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em]"
                style={{ color: story.color }}
              >
                Open the story
                <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
