import { notFound } from "next/navigation";
import ServiceSinglePage from "@/app/components/sections/services/ServiceSinglePage";
import { serviceDetails } from "@/app/data/servicesingledata";

interface ServiceRouteProps {
  params: {
    serviceId: string;
  };
}

export function generateStaticParams() {
  return Object.keys(serviceDetails)
    .filter((key) => key !== "default")
    .map((serviceId) => ({ serviceId }));
}

export default function ServiceRoute({ params }: ServiceRouteProps) {
  const { serviceId } = params;

  if (!serviceDetails[serviceId]) {
    notFound();
  }

  return <ServiceSinglePage serviceId={serviceId} />;
}
