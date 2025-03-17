import Image from "next/image";

export default function InfiniteHorizontalScroll() {
  // Brand logos data array
  const brands = [
    { id: 1, src: "/images/revlon-logo.svg", alt: "revlon" },
    { id: 2, src: "/images/tunein-logo.svg", alt: "tunein" },
    { id: 3, src: "/images/converse-logo.svg", alt: "converse" },
    { id: 4, src: "/images/obey-logo.svg", alt: "obey" },
    { id: 5, src: "/images/bose-logo.svg", alt: "bose" },
    { id: 6, src: "/images/honda-logo.svg", alt: "honda" },
    { id: 7, src: "/images/ray-ban-logo.svg", alt: "ray-ban" },
    { id: 8, src: "/images/prada-logo.svg", alt: "prada" },
    { id: 9, src: "/images/shoei.svg", alt: "shoei" },
    { id: 10, src: "/images/adidas-logo.svg", alt: "adidas" },
    { id: 11, src: "/images/porsche-logo.svg", alt: "porsche" },
    { id: 12, src: "/images/the-north-face-logo.svg", alt: "the-north-face" },
    { id: 13, src: "/images/ziggo-logo.svg", alt: "ziggo" },
  ];

  return (
    <div className="bg-[#040010] text-white py-10 md:py-16">
      <div className="flex flex-col   pb-10">
        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center text-[#8133F1] leading-[120%]">
          Trusted by Visionaries and Innovators
        </h1>
        <p className="max-w-[892px] mx-auto font-normal text-sm md:text-base text-center text-white leading-[140%]">
          We’re proud to partner with forward-thinking businesses,
          entrepreneurs, and creatives who inspire us to push boundaries and
          deliver exceptional results
        </p>
      </div>

      {/* Infinite scroll container with CSS animation */}
      <div className="container-wrapper relative overflow-hidden mt-6">
        <div className="flex logos-slide">
          {/* First set of logos */}
          {brands.map((brand) => (
            <div key={brand.id} className="mx-6 md:mx-6 flex-shrink-0">
              <Image
                src={brand.src}
                alt={brand.alt}
                width={90}
                height={90}
                className="md:w-[100px] md:h-[100px] object-contain"
              />
            </div>
          ))}

          {/* Duplicate set for seamless scrolling */}
          {brands.map((brand) => (
            <div
              key={`duplicate-${brand.id}`}
              className="mx-4 md:mx-6 flex-shrink-0"
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={90}
                height={90}
                className="md:w-[100px] md:h-[100px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS for bidirectional animation */}
      <style jsx global>{`
        @keyframes bidirectionalScroll {
          0% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .logos-slide {
          animation: bidirectionalScroll 15s linear infinite;
          width: fit-content;
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
