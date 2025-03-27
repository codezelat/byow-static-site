import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
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
  const [selectedSolution, setSelectedSolution] = useState<number | null>(null);

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
        "BYOW delivered a visually striking design with animations, sleek transitions, and portfolio filters. The result? A website that’s just as creative as the studio itself, leading to a 40% rise in client inquiries.",
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

  return (
<div
  className="container-wrapper flex flex-col lg:flex-row relative rounded-3xl"
  style={{ maxWidth: "100%" }}
>
  {/* Challenges Section */}
  <div
    className={`text-white transition-all duration-300 lg:static  
    ${selectedSolution ? "lg:w-1/2" : "w-full lg:w-[1151px]"}
    h-[1044px] p-[72px]`}
    style={{
      background: "#000",
      zIndex: "10",
      borderTopLeftRadius: "24px",
      border: "2px solid transparent",
      backgroundImage:
        "linear-gradient(black, black), linear-gradient(180deg, #8133F1, #090909)",
      borderImageSlice: "1",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
    }}
  >
    <h1 className="text-[#8133F1] text-2xl font-bold mb-2 text-start">
      The Challenges
    </h1>
    <hr className="border-[#8133F1] mb-6" />

    {challenges.map((challenge) => (
      <div key={challenge.id} className="mb-8 sm:mb-12">
        <p className="mb-4 text-start text-sm sm:text-base">
          {challenge.description}
          <br />
          <span className="text-xs sm:text-sm text-[#a37ff0] mt-2 block">
            {challenge.tagline}
          </span>
        </p>
        <div className="flex justify-start items-center">
          <button
            onClick={() => setSelectedSolution(challenge.id)}
            className="max-w-[150px] w-full bg-[#8133F1] text-white px-6 py-2 rounded-full hover:bg-[#6325c5] transition"
          >
            View Solution
          </button>
          <div className="ml-2 hidden sm:block">
            <Image
              src="/images/Arrow 1.png"
              alt="arrow"
              width={856}
              height={25}
            />
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Solution Section */}
  <div
    className="text-white flex flex-col items-center rounded-3xl transition-all duration-300 overflow-hidden
    lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[730px] lg:border-l-2 lg:border-[#8133F1]
    mt-10 md:mt-16 lg:mt-0" /* This moves it down on mobile */
    style={{
      background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
      zIndex: 1,
      borderRadius: "0 32px 32px 0",
    }}
  >
    <div className="w-full h-full p-6 md:p-10">
      <div className="flex justify-between items-center mb-2 w-full">
        <h1 className="text-2xl font-bold">Our Solution</h1>
        <button
          onClick={() => setSelectedSolution(null)}
          className="text-white hover:text-gray-200 transition-colors"
          aria-label="Close solution"
        >
          <CloseIcon />
        </button>
      </div>
      <hr className="border-white mb-6 w-full" />

      {/* Video Section */}
      <div className="rounded-[16px] overflow-hidden sm:max-w-[634px] h-[668px] mx-auto">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          key={
            selectedSolution
              ? challenges.find((c) => c.id === selectedSolution)?.videoSrc
              : challenges[0]?.videoSrc
          }
        >
          <source
            src={
              selectedSolution
                ? challenges.find((c) => c.id === selectedSolution)?.videoSrc
                : challenges[0]?.videoSrc
            }
            type="video/mp4"
          />
        </video>
      </div>

      {/* Solution Paragraph */}
      <p className="text-white text-start px-4 mt-10">
        {selectedSolution
          ? challenges.find((c) => c.id === selectedSolution)?.solution
          : challenges[0]?.solution}
      </p>
    </div>
  </div>
</div>


  );
}