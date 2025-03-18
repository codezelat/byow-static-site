import Image from "next/image";
import { Product } from "../types/product";

interface ProjectDetailsProps {
  product: Product;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ product }) => {
  return (
    <div className="bg-gradient-to-b from-[rgba(129,51,241,0.4)] to-[rgba(45,40,54,0.4)] rounded-2xl p-4 sm:p-6 mb-8 sm:mb-12">
      <div>
        {/* Project Image */}
        <div className="w-full mb-6 sm:mb-8 md:mb-10">
          <Image
            src={product.mobileImage}
            alt={`${product.id} mobile view`}
            width={600}
            height={400}
            className="rounded-2xl w-full object-cover"
            priority
          />
        </div>

        {/* Project Info */}
        <div className="w-full flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2 gap-4 sm:gap-2">
            <h2 className="text-lg sm:text-xl text-left font-bold text-white">{product.title}</h2>
            
            {/* App Store Badges */}
            {(product.appStore || product.googlePlay) && (
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {product.googlePlay && (
                  <Image
                    src="/images/googleplay.svg"
                    alt="Google Play"
                    width={120}
                    height={40}
                    className="w-32 sm:w-auto"
                  />
                )}
                {product.appStore && (
                  <Image
                    src="/images/appstore.svg"
                    alt="App Store"
                    width={120}
                    height={40}
                    className="w-32 sm:w-auto"
                  />
                )}
              </div>
            )}
          </div>

          <p className="text-gray-300 mb-4 text-left items-start text-sm sm:text-base">{product.description}</p>
        </div>
      </div>

      {/* Features and Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 text-left">Key Features</h3>
          <ul className="text-gray-300 list-disc list-inside space-y-1 text-left text-sm sm:text-base">
            {product.features.slice(0, 4).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 text-left">
            Why Choose {product.id.charAt(0).toUpperCase() + product.id.slice(1)}?
          </h3>
          <ul className="text-gray-300 list-disc list-inside space-y-1 text-left text-sm sm:text-base">
            {product.benefits.slice(0, 4).map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Target Audience */}
      <div className="mt-6 sm:mt-8">
        <h3 className="text-base sm:text-lg font-bold text-white mb-2 sm:mb-3 text-left">
          Who Is {product.id.charAt(0).toUpperCase() + product.id.slice(1)} For?
        </h3>
        <ul className="text-gray-300 list-disc list-inside space-y-1 text-left text-sm sm:text-base">
          {product.audience.map((audience, index) => (
            <li key={index}>{audience}</li>
          ))}
        </ul>
        {product.extraDescription && (
          <p className="mt-3 sm:mt-4 text-gray-300 text-left text-sm sm:text-base">{product.extraDescription}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectDetails;