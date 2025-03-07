"use client";

import Image from "next/image";
import Yoursuccess from "../components/yoursuccess";
import { serviceData } from "@/app/data/servicesingledata";

// Update the prop type definition
interface ServiceSinglePageProps {
  serviceId: string;
}

export default function ServiceSinglePage({ serviceId }: ServiceSinglePageProps) {
  // Access the service data correctly based on your data structure
  // If serviceData is an object with service, tools, technologies properties
  const { service, tools, technologies } = serviceData;
  
  // You can use the serviceId to filter or choose specific content if needed
  console.log("Selected service ID:", serviceId);

  return (
    <div className="container mx-auto px-4">
      {/* Service Image with gradient border */}
      <div className="relative mb-6 inline-block">
        <div 
          className="absolute inset-0 p-1.5" 
          style={{
            border: "1.5px solid",
            borderImageSource: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
            borderImageSlice: "1"
          }}
        />
        <div className="relative">
          <Image 
            src={service.image} 
            alt="service" 
            width={542} 
            height={375}
            className="w-full h-auto"
          />
        </div>
      </div>

      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
      <div className="space-y-4 mb-8">
        {service.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Tools Section with gradient border */}
      <div 
        className="mb-8 p-6 relative" 
        style={{
          border: "1px solid",
          borderImageSource: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
          borderImageSlice: "1"
        }}
      >
        <h1 className="text-3xl font-bold mb-6">Tools</h1>
        <div className="flex flex-wrap gap-6 justify-start">
          {tools.map((tool, index) => (
            <Image 
              key={index}
              src={tool.image} 
              alt={tool.name} 
              width={72} 
              height={72} 
            />
          ))}
        </div>
      </div>

      {/* Technologies Section with gradient border */}
      <div 
        className="mb-8 p-6 relative" 
        style={{
          border: "1px solid",
          borderImageSource: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
          borderImageSlice: "1"
        }}
      >
        <h1 className="text-3xl font-bold mb-6">Technologies</h1>
        <div className="flex flex-wrap gap-6 justify-start">
          {technologies.map((tech, index) => (
            <Image 
              key={index}
              src={tech.image} 
              alt={tech.name} 
              width={72} 
              height={72} 
            />
          ))}
        </div>
      </div>

      <Yoursuccess/>
    </div>
    
  );
}