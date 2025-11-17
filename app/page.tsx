"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import SectionCard from "./components/SectionCard";
import StepBar from "./components/StepsBar";
import IndustriesSection from "./components/IndustriesSection";
import Yoursuccess from "./components/yoursuccess";
import InfiniteHorizontalScroll from "./components/infinite-horizontal";
import OurChallengesPage from "./components/our-challenges";
import HeroSection from "./components/home/HeroSection";
import PainPointsSection from "./components/home/PainPointsSection";
import BuildSquadSection from "./components/BuildSquadSection";

const Home: NextPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // Prevent auto-scroll on page load
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <main className="text-white">
      <HeroSection />
      <PainPointsSection />

      {/* Only render components if client-side mounted to avoid hydration issues */}
      {isMounted && (
        <>
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
        </>
      )}
    </main>
  );
};

export default Home;
