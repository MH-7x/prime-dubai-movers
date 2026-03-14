import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";

const service = getServiceBySlug("piano-movers-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "Piano Movers in Dubai | Prime Dubai Movers",
  description: service?.metaDescription || "Professional piano moving Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title: service?.metaTitle || "Piano Movers in Dubai | Prime Dubai Movers",
    description: service?.metaDescription || "Professional piano moving Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
  },
};

export default function PianoMoversPage() {
  if (!service) return notFound();
  return <ServicePageTemplate service={service} />;
}
