"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "flowbite";
import { motion } from "framer-motion";
import { Service, serviceCategories } from "../data/servicedata";
import ServiceSinglePage from "./servicesinglepage";


export default function ServicePage() {
  const initialized = useRef(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    // Only import and initialize Flowbite once
    const initFlowbite = async () => {
      const flowbite = await import("flowbite");
      
      // Initialize all accordion elements on the page
      if (!initialized.current) {
        const accordionElements = document.querySelectorAll('[data-accordion="collapse"]');
        accordionElements.forEach(() => {
          flowbite.initAccordions();
        });
        initialized.current = true;
      }
    };

    initFlowbite();

    // Re-initialize when component unmounts and remounts
    return () => {
      initialized.current = false;
    };
  }, []);

  // If a service is selected, show the ServiceSinglePage
 // From your ServicePage component
if (selectedService) {
  return (
    <div>
      <button 
        onClick={() => setSelectedService(null)}
        className="mb-4 flex items-center text-[#8133F1] hover:underline"
      >
        <svg 
          className="w-4 h-4 mr-2" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
        </svg>
        Back to Services
      </button>
      <ServiceSinglePage serviceId={selectedService} />
    </div>
  );
}

 return (
    <div 
      className="relative w-full"

    >
      <div className="container-wrapper p-6">
        <h1 className="text-[#8133F1] font-bold text-4xl md:text-3xl text-center mb-4">
          Expert Digital Services Tailored for Your Success
        </h1>
        <p className="text-gray-400 text-center mb-6">
          At BYOW, we craft websites that go beyond templates, delivering tailored designs, seamless functionality, and a unique online presence that truly represents your brand.
        </p>

        <div id="accordion-collapse" data-accordion="collapse" className="max-w-4xl mx-auto space-y-4">
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
                setSelectedService={setSelectedService}
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

const AccordionItem = ({ id, title, children }: AccordionItemProps) => (
  <>
    <h2 id={`accordion-heading-${id}`}>
      <button
        type="button"
        className="flex items-center justify-between w-full p-5 font-medium text-white rounded-4xl bg-[#080709] gap-3"
        data-accordion-target={`#accordion-body-${id}`}
        aria-expanded="false"
        aria-controls={`accordion-body-${id}`}
      >
        <span>{title}</span>
        <svg
          data-accordion-icon
          className="w-3 h-3 rotate-180 shrink-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
        </svg>
      </button>
    </h2>
    <div id={`accordion-body-${id}`} className="hidden" aria-labelledby={`accordion-heading-${id}`}>
      <div className="p-5">{children}</div>
    </div>
  </>
);

// Service Grid Component
interface ServiceGridProps {
  services: Service[];
  hoveredCard: string | null;
  setHoveredCard: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedService: React.Dispatch<React.SetStateAction<string | null>>;
}

const ServiceGrid = ({ services, hoveredCard, setHoveredCard, setSelectedService }: ServiceGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {services.map((service) => (
        <ServiceCard
          key={service.id}
          id={service.id}
          title={service.title}
          description={service.description}
          icon={service.icon}
          isHovered={hoveredCard === service.id}
          setHoveredCard={setHoveredCard}
          setSelectedService={setSelectedService}
        />
      ))}
    </div>
  );
};

// Service Card Component
interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  isHovered: boolean;
  setHoveredCard: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedService: React.Dispatch<React.SetStateAction<string | null>>;
}

const ServiceCard = ({ 
  id, 
  title, 
  description, 
  icon, 
  isHovered, 
  setHoveredCard,
  setSelectedService 
}: ServiceCardProps) => (
  <motion.div
    className="relative p-4 rounded-xl border bg-[#080709] border-gray-700 overflow-hidden cursor-pointer"
    onHoverStart={() => setHoveredCard(id)}
    onHoverEnd={() => setHoveredCard(null)}
    onClick={() => setSelectedService(id)}
  >
    {/* Background Fill Animation */}
    <motion.div
      className="absolute top-0 left-0 w-full h-full bg-[#8133F1]"
      initial={{ width: "0%" }}
      animate={{ width: isHovered ? "100%" : "0%" }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    />
    
    {/* Content with relative positioning to appear above the background */}
    <div className="relative z-10">
      <Image src={icon} alt={title} width={30} height={30} className="mb-3" />
      <h3 className="font-semibold text-white text-start">{title}</h3>
      <p className="text-gray-400 text-sm text-start">{description}</p>
    </div>
  </motion.div>
  
);