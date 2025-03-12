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
        className="w-auto h-56 flex items-center justify-center rounded-4xl cursor-pointer p-3 transition-all mb-10 mt-10"
        onClick={onClick}
      >
        <Image 
          src={product.logo}
          alt={product.id}
          width={800} 
          height={800} 
          className={`object-contain transition-all mb-10 mt-10 ${
            isSelected ? "grayscale-0" : "grayscale"
          }`}
        />
      </div>
    );
  };

  export default ProjectCard;
