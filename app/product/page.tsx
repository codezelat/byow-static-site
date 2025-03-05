// app/products/page.tsx (App Router)
"use client";

import { useState } from "react";
import products from "../data/product";
import ProjectCard from "../components/projectcard";
import ProjectDetails from "../components/projectdetails";

export default function ProductPage() {
 
  const [selectedProject, setSelectedProject] = useState<string>("athwela");

  // Function to handle card click
  const handleCardClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  // Get current product data
  const currentProduct = products[selectedProject];

  return (
    <div className="w-full overflow-hidden py-8 px-4 md:px-8 container-wrapper">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-[#8133F1] font-bold text-4xl md:text-3xl text-center">
          Crafting Digital Masterpieces: Explore Our Work
        </h1>
        <p className="text-center text-gray-400 mt-2">
        Reinforces BYOW’s mission of helping clients bring their visions to life
        </p>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        {Object.values(products).map((product) => (
          <ProjectCard
            key={product.id}
            product={product}
            isSelected={selectedProject === product.id}
            onClick={() => handleCardClick(product.id)}
          />
        ))}
      </div>

      {/* Selected Project Details */}
      <ProjectDetails product={currentProduct} />
    </div>
  );
}