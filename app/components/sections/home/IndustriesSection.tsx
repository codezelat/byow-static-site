import IndustryBox from "./IndustryBox";

const IndustriesSection = () => {
  return (
    <>
      <div className="mx-auto max-w-6xl px-3 xs:px-4 sm:px-6">
        <h1 className="mb-4 text-center text-2xl font-semibold leading-tight text-white sm:text-3xl md:mb-6 md:text-[44px]">
          Industries We Empower with Bespoke Websites
        </h1>
        <p className="mb-8 max-w-3xl text-sm text-white/70 sm:mb-12 md:mx-auto md:text-center md:text-base">
          From commerce to culture, every build we take on gets a bespoke system, a dedicated pod, and outcomes tailored to the people who use it.
        </p>
      </div>

      <div className="mx-auto max-w-6xl px-3 xs:px-4 sm:px-6">
        <IndustryBox />
      </div>
    </>
  );
};

export default IndustriesSection;
