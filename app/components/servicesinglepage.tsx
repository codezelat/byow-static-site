"use client";

import Image from "next/image";
import Yoursuccess from "../components/yoursuccess";
import { serviceData } from "@/app/data/servicesingledata";

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
  const { service, tools, technologies } = serviceData;

  console.log("Selected service ID:", serviceId);

  return (
    <div className="py-6 pt-24 text-white">
      <div className="container-wrapper px-4 sm:px-6 md:px-8">
      {/* First Section - Image & Description */}
      <div className="flex flex-col  lg:flex-row gap-6 space-y-6 lg:space-y-0">
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
            Custom Website Design
          </h2>
          <div className="space-y-4 text-sm sm:text-base">
            <p>
              At BYOW, we believe your website is more than just a digital
              presence—it's the heart of your brand's story. Our Custom Website
              Design service is tailored to create unique, visually stunning,
              and highly functional websites that reflect your identity, values,
              and goals.
            </p>
            <p>
              From the initial concept to the final launch, our process is built
              on collaboration and innovation. We start by understanding your
              vision, target audience, and business objectives. Then, our team
              brings your ideas to life with cutting-edge design trends,
              intuitive navigation, and responsive layouts.
            </p>
            <p>
              What sets us apart is our commitment to creating websites that are
              not just beautiful but also purposeful, focusing on UX and
              performance optimization.
            </p>
          </div>
        </div>
      </div>

      {/* Extended Content */}
      <div className="space-y-4 text-sm sm:text-base text-start ">
        <p>
          Whether you need an e-commerce platform, a portfolio showcase, or a
          corporate website, we craft solutions that drive growth, build trust,
          and leave a lasting impression.
        </p>
        <p>
          We believe a great website is a living, evolving entity that grows
          with your business. That's why we offer ongoing support, updates, and
          maintenance. Whether a small change or full revamp — we're here for
          you.
        </p>
        <p>
          Let's build something great together. Your vision is unique, and your
          website should be too. Get in touch with us today and let's bring your
          ideas to life!
        </p>
      </div>

      {/* Tools */}
      <div className="mt-12 ">
        <h2 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-6 text-start">
          Tools
        </h2>
        <div className="p-6 md:p-10 border border-gradient rounded-lg">
          <div className="flex flex-wrap gap-6 justify-between">
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
          <div className="flex flex-wrap gap-6 justify-between">
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
        <Yoursuccess />
      </div>
    </div>
  );
}
