"use client";

import { useState } from "react";
import products from "../data/product";
import ProjectDetails from "../components/projectdetails";
import ProjectGrid from "../components/projectgrid";

export default function ProductPage() {
  const [selectedProject, setSelectedProject] = useState<string>("athwela");

  // Function to handle card click
  const handleCardClick = (projectId: string) => {
    setSelectedProject(projectId);
  };

  // Get current product data
  const currentProduct = products[selectedProject] || null; // Fallback for undefined

  return (
    <div className=" container-wrapper">
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