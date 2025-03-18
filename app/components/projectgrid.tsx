import { Product } from "../types/product";
import ProjectCard from "./projectcard";

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
  return (
    <div className="w-full flex justify-center">
      {/* Outer div with gradient border effect */}
      <div className="p-[2px] rounded-3xl bg-gradient-to-b from-[#8133F1] to-[#090909] w-full ">
        {/* Inner container with solid background and matching rounded corners */}
        <div className="flex justify-center gap-10 p-4 bg-[#111111] rounded-3xl w-full">
          {products.map((product) => (
            <ProjectCard
              key={product.id}
              product={product}
              isSelected={selectedProductId === product.id}
              onClick={() => onProductClick(product.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectGrid;
