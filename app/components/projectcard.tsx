import Image from "next/image";
import { Product } from "../types/product";

interface ProjectCardProps {
  product: Product;
  isSelected: boolean;
  onClick: () => void;
  viewportSize: "mobile" | "tablet" | "desktop";
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  product, 
  isSelected, 
  onClick,
  viewportSize 
}) => {

  // Determine inner container styles based on viewport
  const getInnerContainerStyles = () => {
    switch (viewportSize) {
      case "mobile":
        return "w-full h-auto flex items-center justify-center rounded-4xl p-3";
      case "tablet":
        return "w-auto h-36 flex items-center justify-center rounded-4xl p-2";
      case "desktop":
        return "w-auto h-56 flex items-center justify-center rounded-4xl p-3 mb-10 mt-10";
      default:
        return "w-auto h-56 flex items-center justify-center rounded-4xl p-3 mb-10 mt-10";
    }
  };

  // Determine image styles based on viewport
  const getImageStyles = () => {
    const baseStyles = `object-contain transition-all`;
    
    switch (viewportSize) {
      case "mobile":
        return `${baseStyles} w-full h-auto max-h-56`;
      case "tablet":
        return `${baseStyles} w-auto h-auto max-h-32 max-w-full`;
      case "desktop":
        return `${baseStyles} mb-10 mt-10`;
      default:
        return `${baseStyles} mb-10 mt-10`;
    }
  };

  return (
    <div
      onClick={onClick}
      className={`
        ${getInnerContainerStyles()}
        ${isSelected ? "bg-[#111111]" : ""}
        cursor-pointer transition-all
      `}
    >
      <Image 
        src={isSelected  ? product.selectedLogo : product.logo}
        alt={product.id}
        width={800} 
        height={800} 
        className={`
          ${getImageStyles()} 
          ${isSelected ? "grayscale-0" : "grayscale"}
        `}
      />
    </div>
  );
};

export default ProjectCard;
