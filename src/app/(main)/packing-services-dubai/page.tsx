import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("packing-services-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "Packing Services in Dubai | Prime Dubai Movers",
  description: service?.metaDescription || "Professional packing services Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title: service?.metaTitle || "Packing Services in Dubai | Prime Dubai Movers",
    description: service?.metaDescription || "Professional packing services Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
  },
};

export default function PackingServicesPage() {
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
