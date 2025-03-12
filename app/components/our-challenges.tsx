// import { useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import Image from "next/image";

// interface Challenge {
//   id: number;
//   title: string;
//   description: string;
//   tagline: string;
//   videoSrc: string;
//   solution: string;
// }

// export default function OurChallengesPage() {
//   const [selectedSolution, setSelectedSolution] = useState<number | null>(null);
//   const [isExpanded, setIsExpanded] = useState(false);

//   const challenges: Challenge[] = [
//     {
//       id: 1,
//       title: "The Luxe Café",
//       description:
//         "The Luxe Café wanted a website that mirrored their premium dining experience. DIY platforms left them stuck with bland templates that didn't capture their unique vibe.",
//       tagline: "From Cookie-Cutter to One-of-a-Kind: The Luxe Cafe",
//       videoSrc: "/videos/video-01.mp4",
//       solution:
//         "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month.",
//     },
//     {
//       id: 2,
//       title: "Elite Builders",
//       description:
//         "As a construction company, Elite Builders struggled to showcase their impressive portfolio and win client trust online. Drag-and-drop tools weren't cutting it.",
//       tagline: "Building Trust, Brick by Brick: Elite Builders & Co.",
//       videoSrc: "/videos/video-02.mp4",
//       solution:
//         "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month.",
//     },
//     {
//       id: 3,
//       title: "Vision Creative Studio",
//       description:
//         "Vision Creative Studio's site felt outdated and didn't reflect their innovative approach. They needed a website as bold as their ideas.",
//       tagline: "Bold Ideas, Bigger Impact: Vision Creative Studio",
//       videoSrc: "/videos/video-03.mp4",
//       solution:
//         "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month.",
//     },
//     {
//       id: 4,
//       title: "EduQuest",
//       description:
//         "EduQuest wanted to expand its reach with an engaging platform for online courses, but their previous website was clunky and hard to navigate.",
//       tagline: "Making Learning Accessible: EduQuest Academy",
//       videoSrc: "/videos/video-04.mp4",
//       solution:
//         "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month.",
//     },
//   ];

//   const handleSolutionClick = (id: number) => {
//     setSelectedSolution(id);
//     setIsExpanded(true);
//   };

//   const handleCloseClick = () => {
//     setIsExpanded(false);
//   };

//   return (
//     <div
//       className="container-wrapper relative overflow-hidden max-w-full rounded-3xl"
//       style={{
//         display: "flex",
//         maxWidth: "100%",
//         position: "relative",
//       }}
//     >
//       {/* Challenges panel */}
//       <div
//         className="text-white p-6 sm:p-8 relative z-10"
//         style={{
//           width: isExpanded ? "55%" : "90%",
//           maxWidth: isExpanded ? "600px" : "1151px",
//           borderRadius: isExpanded ? "32px 0 0 32px" : "32px",
//           padding: "72px",
//           transition: "all 0.3s ease-in-out",
//           flexShrink: 0,
//         }}
//       >
//         <h1 className="text-[#8133F1] text-2xl font-bold mb-2 text-start">
//           The Challenges
//         </h1>
//         <hr className="border-[#8133F1] mb-6" />
//         {challenges.map((challenge) => (
//           <div key={challenge.id} className="mb-8 sm:mb-12">
//             <p className="mb-4 text-start text-sm sm:text-base">
//               {challenge.description}
//               <br />
//               <span className="text-sm text-[#a37ff0] mt-2 block">
//                 {challenge.tagline}
//               </span>
//             </p>
//             <div className="flex justify-start">
//               <button
//                 onClick={() => handleSolutionClick(challenge.id)}
//                 className="bg-[#8133F1] text-white px-6 py-2 rounded-full mb-4 hover:bg-[#6325c5] transition"
//               >
//                 View Solution
//               </button>
//             </div>
//             <Image
//               src={"/images/Arrow 1.png"}
//               alt="arrow"
//               width={10}
//               height={10}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Solution panel */}
//       <div
//         className="text-white p-6 sm:p-8 flex flex-col items-center rounded-3xl transition-all duration-300"
//         style={{
//           width: "45%",
//           minWidth: "600px",
//           borderRadius: "0 32px 32px 0",
//           padding: "72px 48px",
//           background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
//           opacity: isExpanded ? 1 : 0.7,
//           position: "relative",
//           zIndex: isExpanded ? 10 : 5,
//           transition: "opacity 0.3s ease-in-out",
//         }}
//       >
//         {/* Solution content - always visible but may be overlapped */}
//         <div className="w-full">
//           <div className="flex justify-between items-center mb-2 ">
//             <h1 className="text-2xl font-bold">Our Solution</h1>
//             {isExpanded && (
//               <button onClick={handleCloseClick} className="text-white">
//                 <CloseIcon />
//               </button>
//             )}
//           </div>
//           <hr className="border-white mb-6 w-full" />

//           {selectedSolution && (
//             <>
//               <div className="bg-white rounded-[16px] overflow-hidden w-full mb-6 h-auto aspect-[3/4]">
//                 <video
//                   className="w-full h-full object-cover"
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                 >
//                   <source
//                     src={
//                       challenges.find((c) => c.id === selectedSolution)
//                         ?.videoSrc
//                     }
//                     type="video/mp4"
//                   />
//                 </video>
//               </div>
//               <p className="text-white text-center px-4 w-full">
//                 {challenges.find((c) => c.id === selectedSolution)?.solution}
//               </p>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

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
        "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month.",
    },
    {
      id: 3,
      title: "Vision Creative Studio",
      description:
        "Vision Creative Studio's site felt outdated and didn't reflect their innovative approach. They needed a website as bold as their ideas.",
      tagline: "Bold Ideas, Bigger Impact: Vision Creative Studio",
      videoSrc: "/videos/video-03.mp4",
      solution:
        "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month.",
    },
    {
      id: 4,
      title: "EduQuest",
      description:
        "EduQuest wanted to expand its reach with an engaging platform for online courses, but their previous website was clunky and hard to navigate.",
      tagline: "Making Learning Accessible: EduQuest Academy",
      videoSrc: "/videos/video-04.mp4",
      solution:
        "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month.",
    },
  ];

  return (
    <div
      className="container-wrapper relative rounded-3xl flex"
      style={{ maxWidth: "100%" }}
    >
      {/* Solution section always visible on the right */}
      <div
        className="text-white flex flex-col items-center rounded-3xl transition-all duration-300 overflow-hidden"
        style={{
          width: "730px",
          borderRadius: "0 32px 32px 0",
          background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
          position: "absolute",
          right: 0,
          top: 0,
          bottom: 0,
          zIndex: 1,
        }}
      >
        <div className="w-full h-full" style={{ padding: " 48px" }}>
          <>
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

            {/* Video section - always show a video */}
            <div className="bg-white rounded-[16px] overflow-hidden mb-6 w-full max-w-[90vw] sm:max-w-[634px] h-auto aspect-[3/4]">
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
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
            <p className="text-white text-center px-4">
              {selectedSolution
                ? challenges.find((c) => c.id === selectedSolution)?.solution
                : challenges[0]?.solution}
            </p>
          </>
        </div>
      </div>

      {/* Challenges section */}
      <div
        className={`text-white transition-all duration-300 lg:static ${
          selectedSolution ? "lg:w-1/2" : "w-full lg:w-[1151px]"
        } h-[1044px] p-[72px] rounded-l-[32px]`}
        style={{
          background: "#000",
          zIndex: "10",
          border: "1px solid",
          borderImageSource:
            "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
          borderImageSlice: "1",
          borderRight: selectedSolution ? "none" : "1px solid",
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
            <div className="flex justify-start">
              <button
                onClick={() => setSelectedSolution(challenge.id)}
                className="bg-[#8133F1] text-white px-6 py-2 rounded-full mb-4 hover:bg-[#6325c5] transition"
              >
                View Solution
              </button>
            </div>
            <div className="hidden sm:block">
              <Image
                src={"/images/Arrow 1.png"}
                alt="arrow"
                width={10}
                height={10}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
