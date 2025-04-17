import Image from "next/image";

const ResponsiveCardsSection = () => {
  const cards = [
    {
      img: "/images/cardSection1.png",
      title: "Feeling stuck with cookie-cutter templates?",
      text: "They do not capture your brand's soul—we can change that.",
    },
    {
      img: "/images/cardSection2.png",
      title: "Frustrated by tools that limit your creativity?",
      text: "If you can imagine it, we'll bring it to life.",
    },
    {
      img: "/images/cardSection3.png",
      title: "Wasting precious time on DIY platforms?",
      text: "Focus on your business while we handle the rest.",
    },
  ];

  return (
    <div className=" sm:px-6 lg:px-8 w-full max-w-[1440px] mx-auto py-8">
      <div className="grid px-10 grid-cols-1  lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 justify-items-center">
        {cards.map((card, index) => (
          <div
            key={index}
            className="w-full relative max-w-xs sm:max-w-sm md:w-full h-auto rounded-3xl flex flex-col p-4 sm:p-6 md:p-8 items-center text-center backdrop-blur-md overflow-hidden"
            style={{
              background: "black",
              border: "2px solid transparent",
              borderRadius: "24px",
              backgroundImage:
                "linear-gradient(black, black), linear-gradient(180deg, #8133F1, #090909)",
              backgroundOrigin: "border-box",
              backgroundClip: "padding-box, border-box",
            }}
          >
            <div className="relative w-16 h-16 mb-4">
              <Image
                src={card.img}
                alt={`card section image ${index + 1}`}
                layout="fill"
                objectFit="contain"
                priority
              />
            </div>
            <h1 className="font-bold text-[20px] leading-snug pb-2">
              {card.title}
            </h1>
            <p className="font-normal text-[16px] leading-snug">
              {card.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResponsiveCardsSection;
