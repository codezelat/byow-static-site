import type { MetadataRoute } from "next";
import { serviceDetails } from "@/app/data/servicesingledata";

const siteUrl = "https://byow.lk";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/products",
    "/contact",
    "/privacy",
  ];

  const serviceRoutes = Object.keys(serviceDetails)
    .filter((slug) => slug !== "default")
    .map((slug) => `/services/${slug}`);

  const routes = [...staticRoutes, ...serviceRoutes];
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
  }));
}
