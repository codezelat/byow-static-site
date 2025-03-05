import Image from "next/image";
import { Product } from "../types/product";

interface ProjectCardProps {
  product: Product;
  isSelected: boolean;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ product, isSelected, onClick }) => {
  return (
    <div
      className={`rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg flex items-center justify-center h-[225px] ${
        isSelected
          ? "border-[5px] border-[transparent] relative before:content-[''] before:absolute before:inset-[-5px] before:rounded-lg before:z-[-1] before:bg-gradient-to-b before:from-[#8133F1] before:to-[#090909]"
          : "filter grayscale"
      }`}
      onClick={onClick}
    >
      <Image 
        src={product.logo}
        alt={product.id}
        width={150}
        height={150}
        className="object-contain"
      />
    </div>
  );
};

export default ProjectCard;