import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("furniture-movers-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "Furniture Movers in Dubai | Prime Dubai Movers",
  description: service?.metaDescription || "Professional furniture movers Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title: service?.metaTitle || "Furniture Movers in Dubai | Prime Dubai Movers",
    description: service?.metaDescription || "Professional furniture movers Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
  },
};

export default function FurnitureMoversPage() {
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
