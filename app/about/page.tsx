import type { Metadata } from "next";
import MiddleContainerAbout from "@/app/components/sections/about/MiddleContainerAbout";
import YourSuccessSection from "@/app/components/sections/common/YourSuccessSection";

export const metadata: Metadata = {
  title: "About BYOW | Sri Lanka’s Custom Website Studio",
  description:
    "Learn how BYOW blends UX, content, and engineering to ship world-class websites for Sri Lankan brands and global teams.",
  alternates: {
    canonical: "/about",
  },
};

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
