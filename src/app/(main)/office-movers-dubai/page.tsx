import { Metadata } from "next";
import { getServiceBySlug } from "@/lib/data/services";
import ServicePageTemplate from "@/components/sections/ServicePageTemplate";
import { notFound } from "next/navigation";
import heroImage from "../../../../public/ser/Office-Movers-In-Dubai-Prime-Movers.jpg";
const service = getServiceBySlug("office-movers-dubai");

export const metadata: Metadata = {
  title: service?.metaTitle || "Office Movers in Dubai | Prime Dubai Movers",
  description:
    service?.metaDescription ||
    "Professional office movers Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
  openGraph: {
    title: service?.metaTitle || "Office Movers in Dubai | Prime Dubai Movers",
    description:
      service?.metaDescription ||
      "Professional office movers Dubai with expert packing, safe transport & on-time delivery. Licensed & insured. Get your free quote!",
    type: "website",
  },
};

export default function OfficeMoversPage() {
  if (!service) return notFound();
  return (
    <ServicePageTemplate
      images={[
        {
          src: "/ser/office-movers-dubai-commercial-relocation.jpg",
          alt: "office movers dubai commercial relocation",
        },
        {
          src: "/ser/professional-office-relocation-dubai-business-tower-movers.jpg",
          alt: "professional office relocation dubai business tower movers",
        },
      ]}
      heroImage={heroImage}
      service={service}
    />
  );
}
