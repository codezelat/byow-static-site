import Image from "next/image";

const mainImage = {
  src: "/images/byow.png",
  alt: "BYOW",
  width: 542,
  height: 375,
};

const galleryImages = [
  {
    src: "/images/about01.jpg",
    alt: "BYOW Image 1",
    width: 300,
    height: 350,
  },
  {
    src: "/images/about02.jpg",
    alt: "BYOW Image 2",
    width: 300,
    height: 350,
  },
  {
    src: "/images/about.jpg",
    alt: "BYOW Image 3",
    width: 300,
    height: 350,
  },
];

const videoSrc = "/videos/aboutvideo.mp4";

const introCopy = [
  "BYOW was formed to bring together design intuition and reliable engineering so entrepreneurs, teams, and creators can launch without the usual friction.",
  "Every product, service, or community deserves a digital home that feels crafted. We shape immersive, responsive canvases that let your story lead.",
  "Partnership is our core process. We listen first, co-create each milestone, and translate shared goals into thoughtful, high-performing experiences.",
];

const extendedCopy = [
  {
    title: "Continuous partnership",
    description:
      "Launch day is step one. We keep iterating with proactive updates, maintenance, and optimization so your site evolves with the business.",
  },
  {
    title: "Mission-driven",
    description:
      "BYOW exists to remove the barriers many founders face when taking ideas online. We make modern digital craftsmanship accessible to anyone ready to grow.",
  },
  {
    title: "Broad perspective",
    description:
      "From solo creators to enterprise teams, we have built for a wide mix of industries. That diversity keeps our solutions adaptable and relevant.",
  },
];

const closingCopy = [
  "Clients stay with BYOW because we act as an embedded extension of their team. You get transparent guidance, fast feedback loops, and design decisions grounded in real outcomes.",
  "We obsess over speed, accessibility, and polish, ensuring each interaction remains consistent across devices and touchpoints. When you are ready to scale, the foundation already supports it.",
];

export default function MiddleContainerAbout() {
  return (
    <section className="mx-auto max-w-6xl space-y-16 py-12 px-3 text-white xs:px-4 sm:px-6 sm:py-16">
      {/* First Section - Main Image & Intro */}
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Right Side - Text Content */}
        <div className="order-2 space-y-6 text-start lg:order-1">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
              Our story
            </p>
            <h2 className="mt-3 bg-gradient-to-r from-white via-[#CEB0FA] to-white bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
              About BYOW
            </h2>
          </div>
          <p className="text-base leading-relaxed text-white/80 sm:text-lg">
            {introCopy[0]}
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {introCopy.slice(1).map((paragraph) => (
              <div
                key={paragraph}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm leading-relaxed text-white/80 shadow-[0_20px_50px_rgba(8,0,20,0.45)] sm:text-base"
              >
                {paragraph}
              </div>
            ))}
          </div>
        </div>

        {/* Left Side - Image */}
        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-r from-[#8133F1]/25 via-transparent to-transparent blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-gradient-to-b from-[#1E0B34] to-[#05000F] p-1 shadow-2xl">
              <div className="rounded-[28px] bg-black">
                <Image
                  src={mainImage.src}
                  alt={mainImage.alt}
                  width={mainImage.width}
                  height={mainImage.height}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-full w-full rounded-[28px] object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section - Extended Content */}
      <div className="rounded-[32px] border border-white/10 bg-[#04000C]/80 p-6 shadow-[0_25px_80px_rgba(5,0,11,0.8)] sm:p-8">
        <div className="grid gap-5 md:grid-cols-3">
          {extendedCopy.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm leading-relaxed text-white/80 sm:p-5 sm:text-base"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                {item.title}
              </p>
              <p className="mt-3">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Third Section - Gallery */}
      <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image) => (
            <div
              key={image.src}
              className="group relative rounded-[24px] border border-white/10 bg-gradient-to-b from-[#16002C] to-[#04000C] p-1 shadow-[0_20px_60px_rgba(6,0,16,0.8)]"
            >
              <div className="relative overflow-hidden rounded-[20px]">
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(129,51,241,0.35), rgba(9,9,9,0.8))",
                  }}
                />
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fourth Section - Closing Message */}
      <div className="rounded-[32px] border border-white/10 bg-gradient-to-br from-[#0A001A] to-[#120027] p-6 sm:p-8">
        <div className="space-y-5">
          {closingCopy.map((paragraph, index) => (
            <p
              key={index}
              className="text-sm leading-relaxed text-white/80 sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/* Fifth Section - Video */}
      <div className="w-full rounded-[32px] border border-white/10 bg-[#05000E]/70 p-1 shadow-[0_20px_60px_rgba(5,0,14,0.55)]">
        <div className="relative overflow-hidden rounded-[28px]">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#8133F1]/20 to-transparent" />
          <video
            className="relative h-full w-full rounded-[28px] object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
