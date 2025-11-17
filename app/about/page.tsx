import MiddleContainerAbout from "../components/sections/about/MiddleContainerAbout";
import YourSuccessSection from "../components/sections/common/YourSuccessSection";

export default function AboutPage() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative z-10 w-full  mx-auto bg-transparent text-white px-4 sm:px-6 md:px-8 pt-20">
        <MiddleContainerAbout />  
      </div>
      <YourSuccessSection />
    </div>
  );
}
