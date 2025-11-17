"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "flowbite";
import { motion } from "framer-motion";
import { Service, serviceCategories } from "@/app/data/servicedata";
import { useRouter } from "next/navigation";

// Card Component
interface CardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  isHovered: boolean;
  setHoveredCard: React.Dispatch<React.SetStateAction<string | null>>;
  onSelect: (serviceId: string) => void;
}
const Card = ({
  id,
  title,
  description,
  icon,
  isHovered,
  setHoveredCard,
  onSelect,
}: CardProps) => (
  <div
    className="relative w-full max-w-[430px] h-auto min-h-[221px] p-[1px] rounded-[28px] overflow-hidden cursor-pointer mx-auto transition-transform hover:-translate-y-1"
    style={{
      background: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
    }}
    onMouseEnter={() => setHoveredCard(id)}
    onMouseLeave={() => setHoveredCard(null)}
    onClick={() => onSelect(id)}
  >
    {/* Inner content container */}
    <motion.div className="relative w-full h-full rounded-[27px] bg-[#0C090D] p-4 md:p-6 overflow-hidden">
      {/* Background Fill Animation */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full bg-[#8133F1]"
        initial={{ width: "0%" }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10">
        <Image
          src={icon}
          alt={title}
          width={57}
          height={57}
          className="mb-3 h-14 w-14 object-contain transition-all duration-500 ease-out"
          style={{
            filter: isHovered
              ? "brightness(0) saturate(100%) invert(1)"
              : "none",
          }}
        />
        <h3 className="font-semibold text-white text-start">{title}</h3>
        <p className="text-gray-400 text-sm text-start">{description}</p>
      </div>
    </motion.div>
  </div>
);

export default function ServicePage() {
  const initialized = useRef(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const initFlowbite = async () => {
      const flowbite = await import("flowbite");

      if (!initialized.current) {
        const accordionElements = document.querySelectorAll(
          '[data-accordion="collapse"]'
        );
        accordionElements.forEach(() => {
          flowbite.initAccordions();
        });
        initialized.current = true;
      }
    };

    initFlowbite();

    return () => {
      initialized.current = false;
    };
  }, []);

  const handleSelect = (serviceId: string) => {
    router.push(`/services/${serviceId}`);
  };

  return (
    <div
      className="relative w-full h-fit mt-10 bg-cover bg-center"
      style={{
        backgroundImage: 'url("/images/service_background.png")',
      }}
    >
      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px] z-0" />

      {/* Content container */}
      <div className="relative container-wrapper z-10 mx-auto px-4 pb-10 md:pb-20 pt-10">
        <div className="flex flex-col pb-6 sm:pb-8 md:pb-16 gap-4 sm:gap-5 md:gap-6">
          <p className="uppercase tracking-[0.35em] text-xs text-white/60 text-start sm:text-center">
            Services
          </p>
          <h1 className="font-bold text-[32px] sm:text-[32px] md:text-[40px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px] 3xl:text-[48px] text-start sm:text-start md:text-center text-[#8133F1] leading-[120%] text-balance">
            Digital Services Tailored for Business Growth
          </h1>
          <p className="font-normal text-[16px] lg:px-10 text-start sm:text-start md:text-center text-white/80 leading-[160%] text-balance">
            At BYOW, we craft websites that go beyond templates, delivering
            tailored designs, seamless functionality, and a unique online
            presence that truly represents your brand.
          </p>
        </div>

        <div
          id="accordion-collapse"
          data-accordion="collapse"
          className="space-y-4 "
        >
          {serviceCategories.map((category, index) => (
            <AccordionItem
              key={category.id}
              id={(index + 2).toString()}
              title={category.title}
            >
              <ServiceGrid
                services={category.services}
                hoveredCard={hoveredCard}
                setHoveredCard={setHoveredCard}
                onSelect={handleSelect}
              />
            </AccordionItem>
          ))}
        </div>
      </div>
    </div>
  );
}

// Accordion Item Component
interface AccordionItemProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const AccordionItem = ({ id, title, children }: AccordionItemProps) => {
  return (
    <>
      <h2 id={`accordion-heading-${id}`}>
        <button
          type="button"
          className="flex w-full items-center justify-between rounded-[36px] border border-[#2D2836] bg-[#080709] px-4 py-4 text-sm text-white transition hover:border-[#8133F1]/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8133F1] md:text-lg md:px-8 md:py-6"
          data-accordion-target={`#accordion-body-${id}`}
          aria-expanded="false"
          aria-controls={`accordion-body-${id}`}
        >
          <div className="flex-grow text-left">{title}</div>
          <svg
            data-accordion-icon
            className="w-3 h-3 rotate-180 shrink-0 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        id={`accordion-body-${id}`}
        className="hidden"
        aria-labelledby={`accordion-heading-${id}`}
      >
        <div className="p-2 md:p-5">{children}</div>
      </div>
    </>
  );
};

// Service Grid Component
interface ServiceGridProps {
  services: Service[];
  hoveredCard: string | null;
  setHoveredCard: React.Dispatch<React.SetStateAction<string | null>>;
  onSelect: (serviceId: string) => void;
}

const ServiceGrid = ({
  services,
  hoveredCard,
  setHoveredCard,
  onSelect,
}: ServiceGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
      {services.map((service) => (
        <Card
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
          isHovered={hoveredCard === service.id}
          setHoveredCard={setHoveredCard}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
