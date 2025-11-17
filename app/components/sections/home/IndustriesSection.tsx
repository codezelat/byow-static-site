import IndustryBox from "./IndustryBox";

const IndustriesSection = () => {
  return (
    <>
      <div className="container-wrapper">
        <h1 className="mb-6 text-start text-3xl font-semibold leading-tight text-white md:text-center md:text-[44px]">
          Industries We Empower with Bespoke Websites
        </h1>
        <p className="mb-12 max-w-3xl text-sm text-white/70 md:mx-auto md:text-center md:text-base">
          From commerce to culture, every build we take on gets a bespoke system, a dedicated
          pod, and outcomes tailored to the people who use it.
        </p>
      </div>

      <div className="container-wrapper">
        <IndustryBox />
      </div>
    </>
  );
};

export default IndustriesSection;
