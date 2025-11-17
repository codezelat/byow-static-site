"use client";

import { useState } from "react";
import products from "../data/product";
import ProjectDetails from "../components/sections/product/ProjectDetails";
import ProjectGrid from "../components/sections/product/ProjectGrid";

export default function ProductPage() {
  const [selectedProject, setSelectedProject] = useState<string>("athwela");

  // Function to handle card click
  const handleCardClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  // Get current product data
  const currentProduct = products[selectedProject] || null; // Fallback for undefined

  return (
    <div className="relative z-10 container-wrapper px-4 sm:px-6 md:px-8 mx-auto pt-20">
      {/* Header */}
      <div className="flex flex-col pb-6 sm:pb-8 md:pb-16 gap-4 sm:gap-5 md:gap-6">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#8133F1] leading-[120%]">
          Explore Our Work
        </h1>
        <p className="max-w-[892px] mx-auto font-normal text-xs sm:text-sm md:text-base text-center text-white leading-[140%]">
          Reinforces BYOW’s mission of helping clients bring their visions to
          life
        </p>
      </div>

      {/* Project Cards Grid */}
      <ProjectGrid
        products={Object.values(products)} // Convert products object to an array
        selectedProductId={selectedProject}
        onProductClick={handleCardClick}
      />

      {/* Selected Project Details */}
      {currentProduct && <ProjectDetails product={currentProduct} />}
    </div>
  );
}
