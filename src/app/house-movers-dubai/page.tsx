import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";
import heroImage from "../../../public/ser/Trusted-House-Movers-in-Dubai.jpg";
const service = getServiceBySlug("house-movers-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "House Movers in Dubai | Prime Dubai Movers",
  description:
    service?.metaDescription ||
    "Professional house movers in Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title: service?.metaTitle || "House Movers in Dubai | Prime Dubai Movers",
    description:
      service?.metaDescription ||
      "Professional house movers in Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
  },
};

export default function HouseMoversPage() {
  if (!service) return notFound();
  return (
    <ServicePageTemplate
      images={[
        {
          src: "/ser/prime-dubai-movers-team-house-move-dubai.jpg",
          alt: "prime dubai movers team house move dubai",
        },
        {
          src: "/ser/prime-dubai-movers-truck-residential-move-dubai.jpg",
          alt: "prime dubai movers truck residential move dubai",
        },
      ]}
      heroImage={heroImage}
      service={service}
    />
  );
}
