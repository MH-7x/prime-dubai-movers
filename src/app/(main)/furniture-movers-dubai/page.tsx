import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";
import heroImage from "../../../../public/ser/Top-Furniture-Movers-In-Dubai.jpg";
const service = getServiceBySlug("furniture-movers-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "Furniture Movers in Dubai | Prime Dubai Movers",
  description:
    service?.metaDescription ||
    "Professional furniture movers Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title:
      service?.metaTitle || "Furniture Movers in Dubai | Prime Dubai Movers",
    description:
      service?.metaDescription ||
      "Professional furniture movers Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
    images: ["/ser/Top-Furniture-Movers-In-Dubai.jpg"],
  },
  alternates: {
    canonical: `${process.env.APP_URL}/furniture-movers-dubai`,
  },
};

export default function FurnitureMoversPage() {
  if (!service) return notFound();
  return (
    <ServicePageTemplate
      images={[
        {
          src: "/ser/furniture-movers-dubai-professional-furniture-transport-service.jpg",
          alt: "furniture movers dubai professional furniture transport service",
        },
        {
          src: "/ser/furniture-delivery-movers-dubai-heavy-furniture-handling.jpg",
          alt: "furniture delivery movers dubai heavy furniture handling",
        },
      ]}
      heroImage={heroImage}
      service={service}
    />
  );
}
