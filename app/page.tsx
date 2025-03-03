import type { NextPage } from "next";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-[64px] mt-[250px] font-bold text-white">
        Why Stress Over Website Development?
      </h1>
      <p className="text-[16px] font-[400] text-white mt-4 max-w-2xl pt-40">
        Frustrated with the Process? Scroll for a Simpler Solution
      </p>

      {/* Cards Container */}
      <div className="flex flex-wrap justify-center gap-[23px] w-[1328px] mt-20">
        {[
          "Templates can't reflect your unique vision",
          "CMS tools promise freedom but hide limitations",
          "You shouldn't need to be a coder to realize ideas",
          "Updating your site shouldn't feel like a hassle",
        ].map((text, index) => (
          <div
            key={index}
            className="w-[314.75px] h-[215px] rounded-[32px] border-[1px] p-[50px] flex flex-col items-center justify-center text-center text-white backdrop-blur-[4px] relative"
            style={{
              borderRadius: "32px",
              borderStyle: "solid",
              borderWidth: "1px",
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
            <p>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
