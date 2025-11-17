import Link from "next/link";
import Image from "next/image";
import {
  socialLinks,
  mainMenuLinks,
  quickLinks,
  contactInfo,
} from "@/app/data/footerdata";

const Footer = () => {
  return (
    <footer className="bg-[#250059] text-white px-4 md:px-20 py-6 text-sm">
      <div className="flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-4 w-full sm:w-2/3 md:w-1/3 mb-4 justify-center">
          {socialLinks.map(({ id, Icon, url }) => (
            <a
              key={id}
              href={url}
              className="text-2xl cursor-pointer hover:text-purple-300 transition-colors"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 md:mt-0 w-full text-center leading-relaxed max-w-lg px-2 text-base">
          Empowering collaboration and productivity in shared spaces. Work on
          your projects, connect with others.
        </p>
      </div>

      <hr className="my-8 border-t border-indigo-200/30" />

      {/* Middle Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 text-left px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-4 2xl:grid-cols-4 lg:grid-cols-4  xs:grid-cols-2 gap-4 w-full">
          {/* Main Menu */}
          <div>
            <h3 className="font-semibold mb-3 text-base">Main Menu</h3>
            <ul className="space-y-1">
              {mainMenuLinks.map(({ id, name, path }) => (
                <li key={id}>
                  <Link
                    href={path}
                    className="hover:text-purple-300 transition-colors text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-3">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map(({ id, name, path }) => (
                <li key={id}>
                  <Link
                    href={path}
                    className="hover:text-purple-300 transition-colors text-sm"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-base mb-3">Contact</h3>
            <ul className="space-y-1">
              {contactInfo.map(({ id, info }) => {
                const isPhone = info.trim().startsWith("+");
                const href = isPhone
                  ? `tel:${info.replace(/\s+/g, "")}`
                  : info.includes("@")
                  ? `mailto:${info}`
                  : undefined;

                return (
                  <li key={id}>
                    {href ? (
                      <a
                        href={href}
                        className="hover:text-purple-300 transition-colors text-sm"
                      >
                        {info}
                      </a>
                    ) : (
                      <p className="text-sm text-white/80">{info}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Logo and Description */}
          <div className="col-span-2 3xl:col-span-1 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-4 sm:col-span-4 xs:col-span-4 ">
            <div className="w-full flex items-start mb-3">
              <Image
                src="/images/byow-logo.svg"
                alt="footer logo"
                width={100}
                height={40}
                sizes="100px"
                className="w-auto h-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Build Your Own Website is where your vision meets stunning,
              custom-designed websites that drive results.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <hr className="my-6 border-t border-indigo-200/30" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center text-xs sm:text-sm px-4">
        <p className="w-full">
          ©2025 BYOW. All rights reserved. A proud product built with love by{" "}
          <a
            href="https://codezela.com"
            target="_blank"
            rel="noreferrer"
            className="underline decoration-dotted decoration-white/50 hover:text-purple-300"
          >
            Codezela Technologies
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Footer;
