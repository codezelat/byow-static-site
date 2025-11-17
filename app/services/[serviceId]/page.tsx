import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceSinglePage from "@/app/components/sections/services/ServiceSinglePage";
import { serviceDetails } from "@/app/data/servicesingledata";

interface ServiceRouteProps {
  params: Promise<{
    serviceId: string;
  }>;
}

export function generateStaticParams() {
  return Object.keys(serviceDetails)
    .filter((key) => key !== "default")
    .map((serviceId) => ({ serviceId }));
}

export async function generateMetadata({
  params,
}: ServiceRouteProps): Promise<Metadata> {
  const { serviceId } = await params;
  const detail = serviceDetails[serviceId];
  const serviceTitle = detail?.title || "BYOW Service";

  return {
    title: `${serviceTitle} | BYOW Services`,
    description: `Learn how BYOW delivers ${serviceTitle.toLowerCase()} with strategy, UX, and engineering expertise.`,
    alternates: {
      canonical: `/services/${serviceId}`,
    },
  };
}

export default async function ServiceRoute({ params }: ServiceRouteProps) {
  const { serviceId } = await params;

  if (!serviceDetails[serviceId]) {
    notFound();
  }

  return <ServiceSinglePage serviceId={serviceId} />;
}
