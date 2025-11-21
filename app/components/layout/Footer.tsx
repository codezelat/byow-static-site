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
    <footer className="bg-[#250059] text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-3 py-6 sm:px-5 lg:px-8">
        {/* Social Icons */}
        <div className="mb-4 flex w-full justify-center space-x-4 sm:w-2/3 md:w-1/3">
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
        <p className="mt-4 w-full max-w-xl px-2 text-center text-base leading-relaxed">
          Empowering collaboration and productivity in shared spaces. Work on
          your projects, connect with others.
        </p>
      </div>

      <hr className="border-t border-indigo-200/30" />

      {/* Middle Section */}
      <div className="mx-auto flex max-w-6xl flex-col space-y-8 px-4 py-8 text-left sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
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
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="mb-3 flex w-full items-start justify-center lg:justify-start">
              <Image
                src="/images/byow-logo.svg"
                alt="footer logo"
                width={100}
                height={40}
                sizes="100px"
                className="w-auto h-auto"
              />
            </div>
            <p className="text-sm leading-relaxed max-w-sm text-center lg:text-left">
              Build Your Own Website is where your vision meets stunning,
              custom-designed websites that drive results.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <hr className="border-t border-indigo-200/30" />
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between space-y-3 px-4 py-6 text-center text-xs sm:flex-row sm:space-y-0 sm:text-sm sm:px-6 lg:px-8">
        <p className="w-full text-center sm:text-left">
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
