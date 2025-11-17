import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Products | Showcasing BYOW Websites & Apps",
  description:
    "Explore featured launches and case studies from BYOW, including FinTech, education, and commerce experiences built for Sri Lankan teams.",
  alternates: {
    canonical: "/products",
  },
};

export default function ProductsLayout({ children }: { children: ReactNode }) {
  return children;
}
