import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";
import heroImage from "../../../../public/ser/Piano-Movers-in-Dubai.jpg";
const service = getServiceBySlug("piano-movers-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "Piano Movers in Dubai | Prime Dubai Movers",
  description:
    service?.metaDescription ||
    "Professional piano moving Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title: service?.metaTitle || "Piano Movers in Dubai | Prime Dubai Movers",
    description:
      service?.metaDescription ||
      "Professional piano moving Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
  },
};

export default function PianoMoversPage() {
  if (!service) return notFound();
  return (
    <ServicePageTemplate
      images={[
        {
          src: "/ser/apartment-movers-dubai-high-rise-moving-service.jpg",
          alt: "apartment movers dubai high rise moving service",
        },
        {
          src: "/ser/professional-apartment-packers-movers-dubai-high-rise-moving-company.jpg",
          alt: "professional apartment packers movers dubai high rise moving company",
        },
      ]}
      heroImage={heroImage}
      service={service}
    />
  );
}
