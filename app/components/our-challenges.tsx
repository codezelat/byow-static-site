import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';

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
      description: "The Luxe Café wanted a website that mirrored their premium dining experience. DIY platforms left them stuck with bland templates that didn't capture their unique vibe.",
      tagline: "From Cookie-Cutter to One-of-a-Kind: The Luxe Cafe",
      videoSrc: "/videos/video-01.mp4",
      solution: "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month."
    },
    {
      id: 2,
      title: "Elite Builders",
      description: "As a construction company, Elite Builders struggled to showcase their impressive portfolio and win client trust online. Drag-and-drop tools weren't cutting it.",
      tagline: "Building Trust, Brick by Brick: Elite Builders & Co.",
      videoSrc: "/videos/video-02.mp4",
      solution: "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month."
    },
    {
      id: 3,
      title: "Vision Creative Studio",
      description: "Vision Creative Studio's site felt outdated and didn't reflect their innovative approach. They needed a website as bold as their ideas.",
      tagline: "Bold Ideas, Bigger Impact: Vision Creative Studio",
      videoSrc: "/videos/video-03.mp4",
      solution: "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month."
    },
    {
      id: 4,
      title: "EduQuest",
      description: "EduQuest wanted to expand its reach with an engaging platform for online courses, but their previous website was clunky and hard to navigate.",
      tagline: "Making Learning Accessible: EduQuest Academy",
      videoSrc: "/videos/video-04.mp4",
      solution: "BYOW created a sleek, custom design with mouth-watering visuals, dynamic menus, and an easy-to-use booking system. The result? A 30% boost in online reservations within the first month."
    }
  ];

  return (
    <div className="container-wrapper grid grid-cols-1 md:grid-cols-[1fr_auto] rounded-3xl" style={{ gap: '48px' }}>
      <div className="text-white p-6 sm:p-8" style={{ width: selectedSolution ? '600px' : '1151px', borderRadius: selectedSolution ? '32px 0 0 32px' : '32px', padding: '72px' }}>
        <h1 className="text-[#8133F1] text-2xl font-bold mb-2 text-start">The Challenges</h1>
        <hr className="border-[#8133F1] mb-6" />
        {challenges.map((challenge) => (
          <div key={challenge.id} className="mb-12">
            <p className="mb-4 text-start">
              {challenge.description}
              <br />
              <span className="text-sm text-[#a37ff0] mt-2 block">{challenge.tagline}</span>
            </p>
            <div className="flex justify-start">
              <button 
                onClick={() => setSelectedSolution(challenge.id)}
                className="bg-[#8133F1] text-white px-6 py-2 rounded-full mb-4 hover:bg-[#6325c5] transition"
              >
                View Solution
              </button>
            </div>
            <Image src={"/images/Arrow 1.png"} alt='arrow' width={10} height={10} />
          </div>
        ))}
      </div>

      <div
        className="text-white p-6 sm:p-8 flex flex-col items-center rounded-3xl transition-all duration-300"
        style={{
          width: selectedSolution ? '730px' : '100px',
          borderRadius: selectedSolution ? '0 32px 32px 0' : '0 32px 32px 0',
          padding: selectedSolution ? '72px 48px' : '72px 24px',
          background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
          overflow: 'hidden',
        }}
      >
        {selectedSolution ? (
          <>
            <div className="flex justify-between items-center mb-2 w-full">
              <h1 className="text-2xl font-bold">Our Solution</h1>
              <button onClick={() => setSelectedSolution(null)} className="text-white">
                <CloseIcon />
              </button>
            </div>
            <hr className="border-white mb-6 w-full" />
            <div className="bg-white rounded-[16px] overflow-hidden mb-6 w-full max-w-[90vw] sm:max-w-[634px] h-auto aspect-[3/4]">
              <video className="w-full h-full object-cover" autoPlay loop muted playsInline>
                <source src={challenges.find(c => c.id === selectedSolution)?.videoSrc} type="video/mp4" />
              </video>
            </div>
            <p className="text-white text-center px-4">
              {challenges.find(c => c.id === selectedSolution)?.solution}
            </p>
          </>
        ) : (
          <div className="flex justify-center items-center h-full">
            <span className="text-white text-sm rotate-90">Our Solution</span>
          </div>
        )}
      </div>
    </div>
  );
}