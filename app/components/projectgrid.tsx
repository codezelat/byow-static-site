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
      <div
        className="flex justify-center gap-10  p-1 rounded-4xl border border-transparent w-full"
        style={{
          borderImageSource: "linear-gradient(180deg, #8133F1 0%, #090909 100%)",
          borderImageSlice: 1,
        }}
      >
        {products.map((product) => (
          <ProjectCard
            key={product.id}
            product={product}
            isSelected={selectedProductId === product.id}
            onClick={() => onProductClick(product.id)}
          />
        ))}
      </div>
    );
  };

export default ProjectGrid;
