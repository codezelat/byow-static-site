"use client";

import { useState } from "react";
import products from "@/app/data/product";
import ProjectDetails from "@/app/components/sections/products/ProjectDetails";
import ProjectGrid from "@/app/components/sections/products/ProjectGrid";

export default function ProductPageContent() {
  const [selectedProject, setSelectedProject] = useState<string>("athwela");

  const handleCardClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const currentProduct = products[selectedProject] || null;

  return (
    <div className="relative z-10 mx-auto max-w-6xl px-3 sm:px-5 md:px-6 pt-16 sm:pt-20">
      <div className="flex flex-col pb-6 sm:pb-8 md:pb-16 gap-4 sm:gap-5 md:gap-6">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-[#8133F1] leading-[120%]">
          Explore Our Work
        </h1>
        <p className="max-w-[892px] mx-auto font-normal text-xs sm:text-sm md:text-base text-center text-white leading-[140%]">
          Reinforces BYOW’s mission of helping clients bring their visions to
          life
        </p>
      </div>

      <ProjectGrid
        products={Object.values(products)}
        selectedProductId={selectedProject}
        onProductClick={handleCardClick}
      />

      {currentProduct && <ProjectDetails product={currentProduct} />}
    </div>
  );
}
