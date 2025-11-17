import type { Metadata } from "next";
import ServicePage from "../components/sections/services/ServicePage";

export const metadata: Metadata = {
  title: "Services | Website Strategy, Design & Development",
  description:
    "Explore BYOW’s service catalogue spanning UX/UI, frontend and backend development, e-commerce, maintenance, hosting, and SEO-ready builds.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicePageComponent() {
  return (
    <div>
      <ServicePage />
    </div>
  );
}
