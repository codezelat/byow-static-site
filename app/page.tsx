import type { NextPage } from "next";
import Image from "next/image";
import SectionCard from "./components/SectionCard";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] mt-20 sm:mt-32 md:mt-40 lg:mt-[250px] font-bold text-white">
        Why Stress Over Website Development?
      </h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-[16px] font-[400] text-white mt-4 max-w-2xl pt-10 sm:pt-20 md:pt-30 lg:pt-40">
        Frustrated with the Process? Scroll for a Simpler Solution
      </p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-[23px] w-full sm:w-[90%] md:w-[1328px] mt-10 sm:mt-16 md:mt-20">
        {[
          "Templates can't reflect your unique vision",
          "CMS tools promise freedom but hide limitations",
          "You shouldn't need to be a coder to realize ideas",
          "Updating your site shouldn't feel like a hassle",
        ].map((text, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-[45%] md:w-[314.75px] h-[200px] sm:h-[215px] rounded-2xl sm:rounded-[32px] border-[1px] p-6 sm:p-[50px] flex flex-col items-center justify-center text-center text-white backdrop-blur-[4px] relative"
            style={{
              borderImage:
                "linear-gradient(180deg, #8133F1 0%, #090909 100%) 1",
            }}
          >
            {/* Quotation mark */}
            <Image
              src="/images/image.png"
              alt="quotation mark"
              width={37.84}
              height={26.8}
              className="object-contain opacity-80 pb-5"
            />
            <p className="text-sm sm:text-base md:text-lg">{text}</p>
          </div>
        ))}
     
      </div>
      <div>
        <SectionCard />
      </div>
    </div>
  );
};

export default Home;