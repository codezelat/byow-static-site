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

const videoSrc = "/videos/aboutvedio.mp4";

const introCopy = [
  "At BYOW, we believe that the digital world is more than just a space—it's a canvas for creativity, connection, and growth. Our journey began with a simple yet powerful idea: to help entrepreneurs, businesses, and individuals bring their visions to life online. With a passion for design and technology, we set out to make website building an effortless and enjoyable experience for everyone.",
  "Your website is often the first impression you make on the world. It's where your story unfolds, your products find their audience, and your brand connects with the people who matter most. That's why we focus on creating seamless, visually stunning, and functional websites tailored to your needs.",
  "What sets BYOW apart is our commitment to collaboration and innovation. We don't just build websites—we build partnerships. Our process begins with listening, understanding your goals, and transforming your vision into a powerful digital presence.",
];

const extendedCopy = [
  "But our work doesn't stop at launch. We believe that a great website is a living, evolving entity that grows with your business. That's why we offer ongoing support, updates, and maintenance to keep your site fresh, secure, and ahead of the curve. We stay up to date with the latest industry trends to ensure your website remains competitive and engaging.",
  "BYOW was founded with a mission to empower individuals and businesses to thrive in the digital age. We recognized that many entrepreneurs and creatives had incredible ideas but lacked the tools and expertise to bring them to life online. Our goal is to bridge that gap and make digital success accessible to all.",
  "Over the years, we've had the privilege of working with a diverse range of clients—from small startups and solo entrepreneurs to established businesses and educational institutions. Each project is a unique journey, and we take pride in crafting tailored solutions that align with our clients' goals.",
];

const closingCopy = [
  "What sets BYOW apart is our commitment to collaboration and innovation. We don't just build websites—we build partnerships. We work closely with our clients to ensure that their ideas are fully realized and translated into a dynamic online presence.",
  "We combine modern design trends with cutting-edge technology to ensure your site is not only beautiful but also fast, responsive, and optimized for success. Whether you're launching a new venture or revamping an existing brand, BYOW is here to make your digital vision a reality.",
];

export default function MiddleContainerAbout() {
  return (
    <section className="container-wrapper space-y-16 py-12 text-white sm:py-16">
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
            {introCopy.slice(1).map((paragraph, index) => (
              <div
                key={index}
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
          {extendedCopy.map((paragraph, index) => (
            <div
              key={index}
              className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm leading-relaxed text-white/80 sm:p-5 sm:text-base"
            >
              {paragraph}
            </div>
          ))}
        </div>
      </div>

      {/* Third Section - Gallery */}
      <div className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
          Inside BYOW
        </p>
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
