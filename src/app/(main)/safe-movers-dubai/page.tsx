import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";
import heroImage from "../../../../public/ser/safe-movers-in-dubai.jpg";
const service = getServiceBySlug("safe-movers-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "Safe Movers in Dubai | Prime Dubai Movers",
  description:
    service?.metaDescription ||
    "Professional safe movers in Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title: service?.metaTitle || "Safe Movers in Dubai | Prime Dubai Movers",
    description:
      service?.metaDescription ||
      "Professional safe movers in Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
  },
};

export default function SafeMoversPage() {
  if (!service) return notFound();
  return (
    <ServicePageTemplate
      images={[
        {
          src: "/ser/safe-movers-dubai-heavy-safe-transport-professional-movers.jpg",
          alt: "safe movers dubai heavy safe transport professional movers",
        },
        {
          src: "/ser/commercial-safe-relocation-dubai-heavy-vault-moving-service.jpg",
          alt: "commercial safe relocation dubai heavy vault moving service",
        },
      ]}
      heroImage={heroImage}
      service={service}
    />
  );
}
