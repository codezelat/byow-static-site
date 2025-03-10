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
  const { service, tools, technologies } = serviceData;
  
  // You can use the serviceId to filter or choose specific content if needed
  console.log("Selected service ID:", serviceId);

  return (
    <>
      <div className="container-wrapper px-4 md:px-8 lg:px-12 max-w-7xl mx-auto mt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left side with image - 5 columns on large screens */}
          <div className="lg:col-span-5">
            <div className="relative mb-6 inline-block w-full">
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
                  src={service.image || "/images/service-default.jpg"} 
                  alt="Custom Website Design" 
                  width={542} 
                  height={375}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Right side with content - 7 columns on large screens */}
          <div className="lg:col-span-7 text-start">
            <h1 className="text-3xl font-bold mb-4 text-purple-600">Custom Website Design</h1>
            <div className="space-y-4 mb-8">
              <p>
                At BYOW, we believe your website is more than just a digital presence—its the heart of your brands story. Our Custom Website Design service is tailored to create unique, visually stunning, and highly functional websites that reflect your identity, values, and goals. Whether youre a startup, a growing business, or an established brand, we work closely with you to design a website that not only looks amazing but also delivers results.
              </p>
              <p>
                From the initial concept to the final launch, our process is built on collaboration and innovation. We start by understanding your vision, target audience, and business objectives. Then, our team of designers and developers brings your ideas to life with cutting-edge design trends, intuitive navigation, and responsive layouts that work seamlessly across all devices.
              </p>
              <p>
                What sets us apart is our commitment to creating websites that are not just beautiful but also purposeful. We focus on user experience (UX), ensuring every interaction is smooth and engaging, while optimizing for performance and search engine visibility. Whether you need an e-commerce platform, a portfolio showcase, or a corporate website, we craft solutions that drive growth, build trust, and leave a lasting impression.
              </p>
            </div>
          </div>
        </div>

        {/* Full width content section */}
        <div className="mt-8 mb-12 text-start">
          <p className="mb-4">
            But our work doesnt stop at launch. We believe that a great website is a living, evolving entity that grows with your business. Thats why we offer ongoing support, updates, and maintenance to keep your site fresh, secure, and ahead of the curve. Whether you need a small change or a complete overhaul, were here to help you every step of the way.
          </p>
          <p className="mb-4">
            At BYOW, were more than just a web design and development company—were your partners in growth. Were passionate about helping you succeed in the digital world, and were committed to delivering solutions that not only meet but exceed your expectations. Whether you are just starting out or looking to take your online presence to the next level, were here to help you create something that truly represents who you are.
          </p>
          <p>
            Lets build something great together. Your vision is unique, and your website should be too. Get in touch with us today, and lets bring your ideas to life!
          </p>
        </div>

        {/* Tools Section with gradient border */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-start text-[#8133F1]">Tools</h2>
          <div 
            className="mb-8 p-10 relative" 
            style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
              borderImageSlice: "1"
            }}
          >
            <div className="flex flex-wrap gap-15 justify-start">
              {tools.map((tool, index) => (
                <Image 
                  key={index}
                  src={tool.image} 
                  alt={tool.name} 
                  width={75} 
                  height={75} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Technologies Section with gradient border */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-start text-[#8133F1]">Technologies</h2>
          <div 
            className="mb-8 p-10 relative" 
            style={{
              border: "1px solid",
              borderImageSource: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
              borderImageSlice: "1"
            }}
          >
            <div className="flex flex-wrap gap-15 justify-start">
              {technologies.map((tech, index) => (
                <Image 
                  key={index}
                  src={tech.image} 
                  alt={tech.name} 
                  width={75} 
                  height={75} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      
     <div>
         <Yoursuccess/>
     </div>
    </>
  );
}