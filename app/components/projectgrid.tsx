import { Product } from "../types/product";
import ProjectCard from "./projectcard";
import { useRef, useState, useEffect } from "react";

interface ProjectGridProps {
  products: Product[];
  selectedProductId: string | null;
  onProductClick: (productId: string) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({
  products = [],
  selectedProductId,
  onProductClick,
}) => {
  const [viewportSize, setViewportSize] = useState<"mobile" | "tablet" | "desktop">("desktop");
  const sliderRef = useRef<HTMLDivElement>(null);

  // Check viewport size
  useEffect(() => {
    const checkViewportSize = () => {
      if (window.innerWidth <= 640) {
        setViewportSize("mobile");
      } else if (window.innerWidth <= 768) {
        setViewportSize("tablet");
      } else {
        setViewportSize("desktop");
      }
    };
    
    // Initial check
    checkViewportSize();
    
    // Add event listener for window resize
    window.addEventListener("resize", checkViewportSize);
    
    // Cleanup
    return () => window.removeEventListener("resize", checkViewportSize);
  }, []);

  // Scroll handling for mobile

  // Determine the appropriate layout class based on viewport size
  const getLayoutClass = () => {
    switch (viewportSize) {
      case "mobile":
        return "flex overflow-x-auto snap-x snap-mandatory scrollbar-hide";
      case "tablet":
        return "grid grid-cols-2 gap-4 p-4";
      case "desktop":
        return "flex justify-center gap-10 p-4";
      default:
        return "flex justify-center gap-10 p-4";
    }
  };

  // Determine item class based on viewport size
  const getItemClass = (id: string) => {
    switch (viewportSize) {
      case "mobile":
        return "snap-center min-w-full flex justify-center";
      case "tablet":
        return "flex justify-center";
      default:
        return "";
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Outer div with gradient border effect */}
      <div className="p-[2px] rounded-3xl bg-gradient-to-b from-[#8133F1] to-[#090909] w-full">
        {/* Inner container with solid background and matching rounded corners */}
        <div 
          ref={sliderRef}
          className={`bg-[#111111] rounded-3xl w-full ${getLayoutClass()}`}
        >
          {products.map((product) => (
            <div key={product.id} className={getItemClass(product.id)}>
              <ProjectCard
                product={product}
                isSelected={selectedProductId === product.id}
                onClick={() => onProductClick(product.id)}
                viewportSize={viewportSize}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;