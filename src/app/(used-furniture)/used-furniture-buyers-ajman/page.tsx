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

const loc = getUFLocationBySlug("used-furniture-buyers-ajman");

export const metadata: Metadata = loc
  ? {
      title: loc.metaTitle,
      description: loc.metaDescription,
      alternates: { canonical: process.env.APP_URL + loc.canonicalPath },
      openGraph: {
        title: loc.metaTitle,
        description: loc.metaDescription,
        type: "website",
        locale: "en_AE",
        url: process.env.APP_URL + loc.canonicalPath,
        images: ["/fur/used-furniture-buyers-in-ajman.jpg"],
      },
    }
  : {};

import heroImage from "../../../../public/fur/used-furniture-buyers-in-ajman.jpg";
import Script from "next/script";
export default function UsedFurnitureBuyersAjmanPage() {
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
    name: "Used Furniture Buyers in Ajman",
    description: loc.metaDescription,
    url: `${process.env.APP_URL}${loc.canonicalPath}`,
    telephone: "+971561046146",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ajman",
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
      <Script
        id="faqSchema"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="localBusinessSchema"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <UFHero
        heroImage={heroImage}
        h1={loc.h1}
        subtitle={loc.heroSubtitle}
        tagline={loc.heroTagline}
        city={loc.city}
      />
      <UFIntroSection
        img="/fur/buy-and-sell-used-furniture-in-ajman.jpg"
        paragraphs={loc.introParagraphs}
        city={loc.city}
      />
      <UFWhatWeBuy categories={loc.whatWeBuyCategories} city={loc.city} />
      <UFHowItWorks steps={loc.steps} city={loc.city} />
      <UFPricingTable
        rows={loc.pricingRows}
        note={loc.pricingNote}
        city={loc.city}
      />
      <UFWhyChooseUs reasons={loc.whyChooseUs} city={loc.city} />
      <UFAreasServed areas={loc.areasServed} city={loc.city} />
      <UFFAQ faqs={loc.faqs} city={loc.city} />
      <UFCTASection
        heading={loc.ctaHeading}
        body={loc.ctaBody}
        city={loc.city}
      />
    </>
  );
}
