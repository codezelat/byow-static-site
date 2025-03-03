"use client";

import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { socialLinks, mainMenuLinks, quickLinks, contactInfo } from "../data/footerdata";

const Footer: NextPage = () => {
  return (
    <footer className="bg-[#250059] text-white px-2 md:px-20 py-6 text-xs">
      <div className="flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-4 w-full md:w-1/3 mb-4 justify-center">
          {socialLinks.map(({ id, Icon, url }) => (
            <a key={id} href={url} className="text-xl cursor-pointer hover:text-purple-300 transition-colors">
              <Icon />
            </a>
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 md:mt-0 w-full text-center leading-relaxed">
          Empowering collaboration and productivity in shared spaces. Work on your projects, connect with others.
        </p>
      </div>

      <hr className="my-8 border-t border-indigo-200/30" />

      {/* Middle Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 text-left">
        <div className="grid grid-cols-4 md:grid-cols-4 gap-2 w-full">
          {/* Main Menu */}
          <div>
            <h3 className="font-semibold mb-5 text-sm">Main Menu</h3>
            <ul className="space-y-1">
              {mainMenuLinks.map(({ id, name, path }) => (
                <li key={id} className="mb-5">
                  <Link href={path} className="hover:text-purple-300 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-5">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map(({ id, name, path }) => (
                <li key={id} className="mb-5">
                  <Link href={path} className="hover:text-purple-300 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm mb-5">Contact</h3>
            <ul className="space-y-1 mb-5">
              {contactInfo.map(({ id, info }) => (
                <li key={id} className="mb-5">
                  <p className="hover:text-purple-300 transition-colors">{info}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <div className="w-full flex items-start mb-3">
              <Image src="/images/byow-logo.svg" alt="footer logo" width={100} height={40} />
            </div>
            <p className="text-xs mb-5 w-full text-left leading-relaxed">
              Bring Your Own Website—where your vision meets stunning, custom-<br /> designed websites that drive results and tell your story.
            </p>
            <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white text-gray-900 rounded-l-md outline-none"
              />
              <button className="bg-purple-600 text-white px-6 py-3 rounded-r-md font-medium hover:bg-purple-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <hr className="my-6 border-t border-indigo-200/30" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <p className="flex flex-col items-center justify-center w-full text-center text-[10px] sm:text-[12px] mb-4 md:mb-0">
          ©2025 BYOW. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
