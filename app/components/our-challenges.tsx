import { useRef, useState } from "react";
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
  const challengeRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

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

  const handleViewSolution = (id: number) => {
    setSelectedSolution(id);
    if (window.innerWidth <= 768) {
      // Smooth scroll to solution section
      setTimeout(() => {
        solutionRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const handleBackToChallenges = () => {
    setSelectedSolution(null);
    if (window.innerWidth <= 768) {
      // Smooth scroll back to top
      setTimeout(() => {
        challengeRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <>
     <div className="flex flex-col md:pt-32 sm:pt-24  sm:pb-8 pb-6 px-4 sm:px-6 md:px-10 gap-4 sm:gap-6">
  <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-left md:text-center text-[#8133F1] leading-[120%]  mb-6">
        See BYOW in Action
  </h1>
  <p className="font-normal text-xs sm:text-sm md:text-base text-left md:text-center mb-14 text-white leading-[140%]">
  A Closer Look at How BYOW Elevates Businesses with Smart, Scalable Solutions
  </p>
</div>
        <div
      className="container-wrapper flex flex-col lg:flex-row relative rounded-3xl"
      style={{ maxWidth: "100%" }}
    >
      {/* Challenges Section */}
      <div
        ref={challengeRef}
        className={`text-white transition-all duration-300 relative
        ${selectedSolution ? "lg:w-1/2" : "w-full lg:w-[1151px]"}
        h-auto p-4 xs:p-6 md:p-[72px]`}
        style={{
          background: "#000",
          zIndex: selectedSolution ? "10" : "20",
          borderTopLeftRadius: "24px",
          borderTopRightRadius: "24px",
          borderBottomLeftRadius: selectedSolution ? "0" : "24px",
          borderBottomRightRadius: selectedSolution ? "0" : "24px",
          border: "2px solid transparent",
          backgroundImage:
            "linear-gradient(black, black), linear-gradient(180deg, #8133F1, #090909)",
          borderImageSlice: "1",
          backgroundOrigin: "border-box",
          backgroundClip: "padding-box, border-box",
        }}
      >
        <h1 className="text-[#8133F1] text-xl xs:text-2xl font-bold mb-2 text-start">
          The Challenges
        </h1>
        <hr className="border-[#8133F1] mb-4 md:mb-6" />

        {challenges.map((challenge) => (
          <div key={challenge.id} className="mb-6 md:mb-8 lg:mb-12">
            <p className="mb-3 md:mb-4 text-start text-xs xs:text-sm md:text-base">
              {challenge.description}
              <br />
              <span className="text-2xs xs:text-xs md:text-sm text-[#a37ff0] mt-1 xs:mt-2 block">
                {challenge.tagline}
              </span>
            </p>
            <div className="flex justify-start items-center">
              <button
                onClick={() => handleViewSolution(challenge.id)}
                className="max-w-[120px] xs:max-w-[150px] w-full bg-[#8133F1] text-white px-4 xs:px-6 py-1 xs:py-2 rounded-full hover:bg-[#6325c5] transition text-xs xs:text-sm md:text-base"
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
        ref={solutionRef}
        className={`text-white flex flex-col items-center transition-all duration-300 overflow-hidden
        ${
          selectedSolution
            ? "opacity-100 visible max-h-[5000px]"
            : "opacity-0 invisible max-h-0 lg:opacity-100 lg:visible lg:max-h-[5000px]"
        }
        lg:absolute lg:right-0 lg:top-0 lg:bottom-0 lg:w-[730px] lg:border-l-2 lg:border-[#8133F1]`}
        style={{
          background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
          zIndex: "15",
          borderRadius: "0 0 24px 24px",
          borderTopLeftRadius: "0",
          borderTopRightRadius: "0",
        }}
      >
        <div className="w-full h-full p-4 xs:p-6 md:p-10">
          <div className="flex justify-between items-center mb-2 w-full">
            <h1 className="text-xl xs:text-2xl font-bold">Our Solution</h1>
            <button
              onClick={handleBackToChallenges}
              className="lg:hidden animate-bounce"
              aria-label="Back to challenges"
            >
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full shadow-md"
                style={{
                  backgroundColor: "#5b28a3",
                  boxShadow: "0 0 12px rgba(91, 40, 163, 0.5)",
                }}
              >
                <img
                  src="/images/up-chevron.png"
                  alt="Back arrow"
                  className="w-5 h-5 object-contain"
                />
              </div>
            </button>

            <button
              onClick={() => setSelectedSolution(null)}
              className="text-white hover:text-gray-200 transition-colors hidden lg:block"
              aria-label="Close solution"
            >
              <CloseIcon />
            </button>
          </div>
          <hr className="border-white mb-4 md:mb-6 w-full" />

          {/* Video Section */}
          <div
            className="rounded-[16px] overflow-hidden sm:max-w-[634px] w-full h-[300px] xs:h-[350px] sm:h-[450px] md:h-[550px] lg:h-[668px] mx-auto"
            style={{ maxWidth: "634px" }}
          >
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
                    ? challenges.find((c) => c.id === selectedSolution)
                        ?.videoSrc
                    : challenges[0]?.videoSrc
                }
                type="video/mp4"
              />
            </video>
          </div>

          {/* Solution Paragraph */}
          <p className="text-white text-start px-2 xs:px-4 mt-6 xs:mt-8 md:mt-10 text-xs xs:text-sm md:text-base">
            {selectedSolution
              ? challenges.find((c) => c.id === selectedSolution)?.solution
              : challenges[0]?.solution}
          </p>
        </div>
      </div>
    </div>
    </>

  );
}
