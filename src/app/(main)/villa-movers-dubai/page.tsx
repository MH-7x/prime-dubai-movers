import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";
import heroImage from "../../../../public/ser/Villa-Movers-in-Dubai.jpg";
const service = getServiceBySlug("villa-movers-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "Villa Movers in Dubai | Prime Dubai Movers",
  description:
    service?.metaDescription ||
    "Professional villa movers Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title: service?.metaTitle || "Villa Movers in Dubai | Prime Dubai Movers",
    description:
      service?.metaDescription ||
      "Professional villa movers Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
    images: ["/ser/Villa-Movers-in-Dubai.jpg"],
  },
  alternates: {
    canonical: "https://primedubaimovers.com/villa-movers-dubai",
  },
};

export default function VillaMoversPage() {
  if (!service) return notFound();
  return (
    <ServicePageTemplate
      images={[
        {
          src: "/ser/prime-dubai-movers-villa-project-manager.jpg",
          alt: "prime dubai movers villa project manager",
        },
        {
          src: "/ser/prime-dubai-movers-villa-heavy-lift-poolside.jpg",
          alt: "prime dubai movers villa heavy lift poolside",
        },
      ]}
      heroImage={heroImage}
      service={service}
    />
  );
}
