import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";
import heroImage from "../../../../public/ser/Cheap-Movers-in-Dubai.jpg";
const service = getServiceBySlug("cheap-movers-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "Cheap Movers in Dubai | Prime Dubai Movers",
  description:
    service?.metaDescription ||
    "Professional cheap movers and packers Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title: service?.metaTitle || "Cheap Movers in Dubai | Prime Dubai Movers",
    description:
      service?.metaDescription ||
      "Professional cheap movers and packers Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
    images: ["/ser/Cheap-Movers-in-Dubai.jpg"],
  },
  alternates: {
    canonical: "https://primedubaimovers.com/cheap-movers-dubai",
  },
};

export default function CheapMoversPage() {
  if (!service) return notFound();
  return (
    <ServicePageTemplate
      images={[
        {
          src: "/ser/cheap-movers-packers-dubai-affordable-moving-service.jpg",
          alt: "cheap movers packers dubai affordable moving service",
        },
        {
          src: "/ser/affordable-moving-service-dubai-packers-movers-team.jpg",
          alt: "affordable moving service dubai packers movers team",
        },
      ]}
      heroImage={heroImage}
      service={service}
    />
  );
}
