import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getUFLocationBySlug } from "@/lib/data/used-furniture-locations";
import {
  UFHero,
  UFIntroSection,
  UFWhatWeBuy,
  UFHowItWorks,
  UFPricingTable,
  UFWhyChooseUs,
  UFAreasServed,
  UFFAQ,
  UFCTASection,
} from "@/components/used-furniture";

const loc = getUFLocationBySlug("used-furniture-buyers-sharjah");

export const metadata: Metadata = loc
  ? {
      title: loc.metaTitle,
      description: loc.metaDescription,
      alternates: { canonical: loc.canonicalPath },
      openGraph: {
        title: loc.metaTitle,
        description: loc.metaDescription,
        type: "website",
        locale: "en_AE",
      },
    }
  : {};

export default function UsedFurnitureBuyersSharjahPage() {
  if (!loc) notFound();

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: loc.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Dubai Furniture Buyers",
    description: loc.metaDescription,
    url: `https://www.dubaifurniturebuyers.com${loc.canonicalPath}`,
    telephone: "+971-50-123-4567",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sharjah",
      addressLocality: loc.schemaCity,
      addressCountry: "AE",
    },
    areaServed: loc.areasServed.map((area) => ({
      "@type": "City",
      name: area,
    })),
    priceRange: "AED 50 - AED 5000",
    openingHours: "Mo-Su 08:00-22:00",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <UFHero
        h1={loc.h1}
        subtitle={loc.heroSubtitle}
        tagline={loc.heroTagline}
        city={loc.city}
      />
      <UFIntroSection paragraphs={loc.introParagraphs} city={loc.city} />
      <UFWhatWeBuy categories={loc.whatWeBuyCategories} city={loc.city} />
      <UFHowItWorks steps={loc.steps} city={loc.city} />
      <UFPricingTable rows={loc.pricingRows} note={loc.pricingNote} city={loc.city} />
      <UFWhyChooseUs reasons={loc.whyChooseUs} city={loc.city} />
      <UFAreasServed areas={loc.areasServed} city={loc.city} />
      <UFFAQ faqs={loc.faqs} city={loc.city} />
      <UFCTASection heading={loc.ctaHeading} body={loc.ctaBody} city={loc.city} />
    </>
  );
}
