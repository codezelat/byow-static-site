import DisableScrollRestoration from "./components/DisableScrollRestoration";
import HeroSection from "./components/sections/home/HeroSection";
import PainPointsSection from "./components/sections/home/PainPointsSection";
import SectionCard from "./components/sections/home/SectionCard";
import StepBar from "./components/sections/home/StepsBar";
import IndustriesSection from "./components/sections/home/IndustriesSection";
import ChallengesSection from "./components/sections/home/ChallengesSection";
import BuildSquadSection from "./components/sections/home/BuildSquadSection";
import InfiniteHorizontalScroll from "./components/sections/home/InfiniteHorizontalScroll";
import YourSuccessSection from "./components/sections/common/YourSuccessSection";

export default function Home() {
  return (
    <main className="text-white">
      <DisableScrollRestoration />
      <HeroSection />
      <PainPointsSection />

      <div className="space-y-16 px-4 pb-16 xs:px-6 sm:px-8 sm:pb-20 md:space-y-24 md:pb-28">
        <section>
          <SectionCard />
        </section>
        <section id="journey">
          <StepBar />
        </section>
        <section>
          <IndustriesSection />
        </section>
        <section>
          <ChallengesSection />
        </section>
        <section>
          <BuildSquadSection />
        </section>
        <section>
          <InfiniteHorizontalScroll />
        </section>
      </div>
      <section className="w-full">
        <YourSuccessSection />
      </section>
    </main>
  );
}
