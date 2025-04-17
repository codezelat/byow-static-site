"use client";

import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import { socialLinks, mainMenuLinks, quickLinks, contactInfo } from "../data/footerdata";

const Footer: NextPage = () => {
  return (
    <footer className="bg-[#250059] text-white px-4 md:px-20 py-6 text-xs">
      <div className="flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-4 w-full sm:w-2/3 md:w-1/3 mb-4 justify-center">
          {socialLinks.map(({ id, Icon, url }) => (
            <a key={id} href={url} className="text-xl cursor-pointer hover:text-purple-300 transition-colors">
              <Icon />
            </a>
          ))}
        </div>

        {/* Description */}
        <p className="mt-4 md:mt-0 w-full text-center leading-relaxed max-w-lg px-2">
          Empowering collaboration and productivity in shared spaces. Work on your projects, connect with others.
        </p>
      </div>

      <hr className="my-8 border-t border-indigo-200/30" />

      {/* Middle Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between space-y-8 md:space-y-0 text-left px-4">
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-4 2xl:grid-cols-4 lg:grid-cols-4  xs:grid-cols-2 gap-4 w-full">
          {/* Main Menu */}
          <div>
            <h3 className="font-semibold mb-3 text-sm">Main Menu</h3>
            <ul className="space-y-1">
              {mainMenuLinks.map(({ id, name, path }) => (
                <li key={id}>
                  <Link href={path} className="hover:text-purple-300 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Quick Links</h3>
            <ul className="space-y-1">
              {quickLinks.map(({ id, name, path }) => (
                <li key={id}>
                  <Link href={path} className="hover:text-purple-300 transition-colors">
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-sm mb-3">Contact</h3>
            <ul className="space-y-1">
              {contactInfo.map(({ id, info }) => (
                <li key={id}>
                  <p className="hover:text-purple-300 transition-colors">{info}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="col-span-2 3xl:col-span-1 2xl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-4 sm:col-span-4 xs:col-span-4 ">
            <div className="w-full flex items-start mb-3">
              <Image src="/images/byow-logo.svg" alt="footer logo" width={100} height={40} className="w-auto h-auto" />
            </div>
            <p className="text-xs mb-3 leading-relaxed max-w-sm">
              Bring Your Own Website—where your vision meets stunning, custom-designed websites that drive results and tell your story.
            </p>
            <h3 className="text-sm font-bold mb-2">Subscribe to our newsletter</h3>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-white text-gray-900 rounded-l-md outline-none text-sm"
              />
              <button className="bg-purple-600 text-white px-4 py-2 rounded-r-md font-medium hover:bg-purple-700 transition-colors text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <hr className="my-6 border-t border-indigo-200/30" />
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center text-[10px] sm:text-[12px] px-4">
        <p className="w-full">©2025 BYOW. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
