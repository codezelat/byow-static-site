"use client";

import { useEffect } from "react";
import Image from "next/image";
import "flowbite";

export default function ServicePage() {
  useEffect(() => {
    import("flowbite");
  }, []);

  return (
    <div className="container-wrapper p-6">
      <h1 className="text-[#8133F1] font-bold text-4xl md:text-3xl text-center mb-4">
        Expert Digital Services Tailored for Your Success
      </h1>
      <p className="text-gray-400 text-center mb-6">
        At BYOW, we craft websites that go beyond templates, delivering tailored designs, seamless functionality, and a unique online presence that truly represents your brand.
      </p>

      <div id="accordion-collapse" data-accordion="collapse" className="max-w-4xl mx-auto space-y-4">
        {/* Web Development Services */}
        <AccordionItem id="2" title="Web Development Services">
          <ServiceGrid />
        </AccordionItem>

        {/* E-Commerce Solutions */}
        <AccordionItem id="3" title="E-Commerce Solutions">
          <ServiceGrid />
        </AccordionItem>

        {/* Website Maintenance and Security */}
        <AccordionItem id="4" title="Website Maintenance and Security">
          <ServiceGrid />
        </AccordionItem>

        {/* Hosting and Integrations */}
        <AccordionItem id="5" title="Hosting and Integrations">
          <ServiceGrid />
        </AccordionItem>

        {/* Other Services */}
        <AccordionItem id="6" title="Other Services">
          <ServiceGrid />
        </AccordionItem>
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
const ServiceGrid = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <ServiceCard
      title="Custom Website Design"
      description="Tailored designs based on client requirements. Fully responsive layout for desktop, tablet, and mobile devices."
      icon="/images/Browser.svg"
    />
    <ServiceCard
      title="UX/UI Design"
      description="User interface prototyping and wireframing. Heuristic and user behavior analysis to enhance usability."
      icon="/images/ui_ux1.svg"
    />
    <ServiceCard
      title="Responsive Web Design"
      description="Adaptive layouts optimized for various screen sizes. Mobile-first design approach."
      icon="/images/share.svg"
    />
    <ServiceCard
      title="Responsive Web Design"
      description="Adaptive layouts optimized for various screen sizes. Mobile-first design approach."
      icon="/images/share.svg"
    />
  </div>
);

// Service Card Component
interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => (
  <div className="p-4 rounded-xl border bg-[#080709] border-gray-700 hover:border-[#8133F1] transition-colors duration-300">
    <Image src={icon} alt={title} width={30} height={30} className="mb-3" />
    <h3 className="font-semibold text-white text-start">{title}</h3>
    <p className="text-gray-400 text-sm text-start">{description}</p>
  </div>
);