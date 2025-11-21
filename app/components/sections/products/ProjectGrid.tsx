import { Product } from "@/app/types/product";
import ProjectCard from "./ProjectCard";
import { useRef, useState, useEffect } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
  const [viewportSize, setViewportSize] = useState<
    "mobile" | "tablet" | "desktop"
  >("desktop");
  const [mounted, setMounted] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Check viewport size
  useEffect(() => {
    setMounted(true);
    const checkViewportSize = () => {
      if (window.innerWidth <= 425) {
        setViewportSize("mobile");
      } else if (window.innerWidth <= 768) {
        setViewportSize("tablet");
      } else {
        setViewportSize("desktop");
      }
    };

    checkViewportSize();
    window.addEventListener("resize", checkViewportSize);
    return () => window.removeEventListener("resize", checkViewportSize);
  }, []);

  // Scroll logic
  const handleScroll = (direction: "left" | "right") => {
    if (!sliderRef.current) return;
    const scrollAmount = 300;
    sliderRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const getLayoutClass = () => {
    switch (viewportSize) {
      case "mobile":
        return "grid grid-cols-2 gap-3 p-3 items-stretch";
      case "tablet":
        return "grid grid-cols-2 md:grid-cols-3 gap-4 p-4 items-stretch";
      case "desktop":
        return "grid grid-cols-3 lg:grid-cols-4 gap-5 p-5 items-stretch";
      default:
        return "";
    }
  };

  const getItemClass = () => "";

  return (
    <div className="w-full flex flex-col items-center relative">
      {/* Prev button */}
      {mounted && viewportSize === "mobile" && (
        <button
          onClick={() => handleScroll("left")}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#5b28a3] rounded-full p-2 shadow-lg"
        >
          <ChevronLeftIcon />
        </button>
      )}

      {/* Next button */}
      {mounted && viewportSize === "mobile" && (
        <button
          onClick={() => handleScroll("right")}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-[#5b28a3] rounded-full p-2 shadow-lg"
        >
          <ChevronRightIcon />
        </button>
      )}

      {/* Grid container */}
      <div className="p-[2px] rounded-3xl bg-gradient-to-b from-[#8133F1] to-[#090909] w-full mb-8">
        <div
          ref={sliderRef}
          className={`bg-[#111111] rounded-3xl w-full ${getLayoutClass()}`}
        >
          {products.map((product) => (
            <div key={product.id} className={getItemClass()}>
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
