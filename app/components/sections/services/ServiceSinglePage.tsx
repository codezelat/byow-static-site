"use client";

import Image from "next/image";
import Link from "next/link";
import YourSuccessSection from "../common/YourSuccessSection";
import {
  serviceDetails,
  serviceTechnologiesMap,
  serviceToolsMap,
} from "@/app/data/servicesingledata";

const mainImage = {
  src: "/images/servicesingleimage.jpeg",
  alt: "service",
  width: 542,
  height: 375,
};

interface ServiceSinglePageProps {
  serviceId: string;
}

export default function ServiceSinglePage({
  serviceId,
}: ServiceSinglePageProps) {
  const detail = serviceDetails[serviceId] || serviceDetails.default;
  const heroParagraphs =
    detail.heroParagraphs && detail.heroParagraphs.length > 0
      ? detail.heroParagraphs
      : serviceDetails.default.heroParagraphs;
  const extendedCopy =
    detail.extendedCopy && detail.extendedCopy.length > 0
      ? detail.extendedCopy
      : serviceDetails.default.extendedCopy;
  const formattedServiceName = serviceId
    .replace(/[-_]/g, " ")
    .split(" ")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
  const pageTitle = detail.title || formattedServiceName;
  const tools = serviceToolsMap[serviceId] || serviceToolsMap.default;
  const technologies =
    serviceTechnologiesMap[serviceId] || serviceTechnologiesMap.default;

  return (
    <div className="py-6 pt-24 text-white">
      <div className="mx-auto max-w-6xl px-3 xs:px-4 sm:px-6">
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
          >
            <span aria-hidden="true">&larr;</span> Back to services
          </Link>
        </div>
      {/* First Section - Image & Description */}
      <div className="flex flex-col lg:flex-row gap-6 space-y-6 lg:space-y-0">
        {/* Left - Image */}
        <div className="w-full lg:w-1/3 flex justify-center mb-10">
          <div
            className="w-full lg:h-80 max-w-md lg:max-w-none p-[1px] rounded-[16px] "
            style={{
              background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
            }}
          >
            <Image
              src={mainImage.src}
              alt={mainImage.alt}
              width={mainImage.width}
              height={mainImage.height}
              className="w-full h-[300px] rounded-[16px] object-cover"
              priority
            />
          </div>
        </div>

        {/* Right - Content */}
        <div className="w-full lg:w-2/3 space-y-4 text-start ">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-400">
            {pageTitle}
          </h2>
          <div className="space-y-4 text-sm sm:text-base">
            {heroParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>

      {/* Extended Content */}
      <div className="space-y-4 text-sm sm:text-base text-start ">
        {extendedCopy.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      {/* Tools */}
      <div className="mt-12 ">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-6 text-start">
          Tools
        </h2>
        <div className="p-6 md:p-10 border border-gradient rounded-lg">
          <div className="flex flex-wrap gap-6 justify-start sm:justify-between">
            {tools.map((tool, index) => (
              <Image
                key={index}
                src={tool.image}
                alt={tool.name}
                width={50}
                height={50}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Technologies */}
      <div className="mt-12 ">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-6 text-start">
          Technologies
        </h2>
        <div className="p-6 md:p-10 border border-gradient rounded-lg">
          <div className="flex flex-wrap gap-6 justify-start sm:justify-between">
            {technologies.map((tech, index) => (
              <Image
                key={index}
                src={tech.image}
                alt={tech.name}
                width={50}
                height={50}
                className="w-12 h-12 md:w-16 md:h-16"
              />
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* Success Section */}
      <div className="mt-12">
        <YourSuccessSection />
      </div>
    </div>
  );
}
