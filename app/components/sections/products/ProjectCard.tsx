import Image from "next/image";
import { Product } from "@/app/types/product";

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
  viewportSize,
}) => {
  const getWrapperStyles = () => {
    switch (viewportSize) {
      case "mobile":
        return "w-full aspect-square";
      case "tablet":
        return "w-full aspect-square";
      case "desktop":
        return "w-full aspect-square";
      default:
        return "w-full aspect-square";
    }
  };

  return (
    <div
      onClick={onClick}
      className={`
        ${getWrapperStyles()}
        cursor-pointer transition-all rounded-2xl flex items-center justify-center border ${isSelected ? "border-[#8133F1] shadow-[0_12px_40px_rgba(129,51,241,0.35)]" : "border-white/30 shadow-[0_8px_24px_rgba(0,0,0,0.25)]"} bg-white
      `}
    >
      <Image
        src={product.logo}
        alt={product.id}
        width={800}
        height={800}
        loading="lazy"
        quality={85}
        className={`
          h-full w-full object-contain p-1 transition duration-300 rounded-xl
          ${isSelected ? "grayscale-0" : "grayscale"}
        `}
      />
    </div>
  );
};

export default ProjectCard;
