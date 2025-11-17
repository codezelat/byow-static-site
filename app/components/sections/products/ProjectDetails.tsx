import Image from "next/image";
import { Product } from "@/app/types/product";

interface ProjectDetailsProps {
  product: Product;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ product }) => {
  return (
    <div className="bg-gradient-to-b from-[rgba(129,51,241,0.4)] to-[rgba(45,40,54,0.4)] rounded-2xl p-3 sm:p-4 md:p-6 mb-6 sm:mb-8 md:mb-12 max-w-full overflow-hidden">
      <div>
{/* Project Image */}
<div className="w-full mb-4 sm:mb-6 md:mb-10">
  <Image
    src={product.mobileImage}
    alt={`${product.id} mobile view`}
    width={1264}
    height={648}
    className="rounded-xl sm:rounded-2xl w-full object-cover max-h-[648px]"
    priority
  />
</div>

        {/* Project Info */}
        <div className="w-full flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 sm:mb-3 gap-3 sm:gap-4">
            <h2 className="text-base sm:text-lg md:text-xl text-left font-bold text-white">{product.title}</h2>
            
            {/* App Store Badges */}
            {(product.appStore || product.googlePlay) && (
              <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {product.googlePlay && (
                  <Image
                    src="/images/googleplay.svg"
                    alt="Google Play"
                    width={120}
                    height={40}
                    className="w-28 sm:w-32 md:w-auto"
                  />
                )}
                {product.appStore && (
                  <Image
                    src="/images/appstore.svg"
                    alt="App Store"
                    width={120}
                    height={40}
                    className="w-28 sm:w-32 md:w-auto"
                  />
                )}
              </div>
            )}
          </div>

          <p className="text-gray-300 mb-4 text-left items-start text-xs sm:text-sm md:text-base">{product.description}</p>
        </div>
      </div>

      {/* Features and Benefits */}
      <div className="grid grid-cols-1 gap-4 sm:gap-6">
        <div>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 md:mb-3 text-left">Key Features</h3>
          <ul className="text-gray-300 list-disc list-inside space-y-1 text-left text-xs sm:text-sm md:text-base">
            {product.features.slice(0, 4).map((feature, index) => (
              <li key={index} className="pl-1">{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 md:mb-3 text-left">
            Why Choose {product.id.charAt(0).toUpperCase() + product.id.slice(1)}?
          </h3>
          <ul className="text-gray-300 list-disc list-inside space-y-1 text-left text-xs sm:text-sm md:text-base">
            {product.benefits.slice(0, 4).map((benefit, index) => (
              <li key={index} className="pl-1">{benefit}</li>
            ))}
          </ul>
        </div>

        {/* Target Audience */}
        <div>
          <h3 className="text-sm sm:text-base md:text-lg font-bold text-white mb-1 sm:mb-2 md:mb-3 text-left">
            Who Is {product.id.charAt(0).toUpperCase() + product.id.slice(1)} For?
          </h3>
          <ul className="text-gray-300 list-disc list-inside space-y-1 text-left text-xs sm:text-sm md:text-base">
            {product.audience.map((audience, index) => (
              <li key={index} className="pl-1">{audience}</li>
            ))}
          </ul>
          {product.extraDescription && (
            <p className="mt-2 sm:mt-3 md:mt-4 text-gray-300 text-left text-xs sm:text-sm md:text-base">{product.extraDescription}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
