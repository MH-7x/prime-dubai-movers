import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";
import heroImage from "../../../../public/ser/Packing-Services-in-Dubai.jpg";
const service = getServiceBySlug("packing-services-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "Packing Services in Dubai | Prime Dubai Movers",
  description:
    service?.metaDescription ||
    "Professional packing services Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title:
      service?.metaTitle || "Packing Services in Dubai | Prime Dubai Movers",
    description:
      service?.metaDescription ||
      "Professional packing services Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
    images: ["/ser/Packing-Services-in-Dubai.jpg"],
  },
  alternates: {
    canonical: "https://primedubaimovers.com/packing-services-dubai",
  },
};

export default function PackingServicesPage() {
  if (!service) return notFound();
  return (
    <ServicePageTemplate
      images={[
        {
          src: "/ser/professional-packing-services-dubai-fragile-item-packing.jpg",
          alt: "professional packing services in dubai fragile item packing",
        },
        {
          src: "/ser/expert-home-packing-service-dubai-professional-packers.jpg",
          alt: "expert home packing service dubai professional packers",
        },
      ]}
      heroImage={heroImage}
      service={service}
    />
  );
}
