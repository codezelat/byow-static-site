import SectionCard from "./components/SectionCard";
import StepBar from "./components/StepsBar";
import IndustriesSection from "./components/IndustriesSection";
import Yoursuccess from "./components/yoursuccess";
import InfiniteHorizontalScroll from "./components/infinite-horizontal";
import OurChallengesPage from "./components/our-challenges";
import HeroSection from "./components/home/HeroSection";
import PainPointsSection from "./components/home/PainPointsSection";
import BuildSquadSection from "./components/BuildSquadSection";
import DisableScrollRestoration from "./components/DisableScrollRestoration";

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
          <OurChallengesPage />
        </section>
        <section>
          <BuildSquadSection />
        </section>
        <section>
          <InfiniteHorizontalScroll />
        </section>
      </div>
      <section className="w-full">
        <Yoursuccess />
      </section>
    </main>
  );
}
