import { Metadata } from "next";
import HeroSection from "@/components/sections/HeroSection";
import TrustBar from "@/components/sections/TrustBar";
import ServicesOverview from "@/components/sections/ServicesOverview";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import PricingSection from "@/components/sections/PricingSection";
import LocationCoverage from "@/components/sections/LocationCoverage";
import BlogPreview from "@/components/sections/BlogPreview";
import CTASection from "@/components/sections/CTASection";
import FreeQuotePage from "./free-quote/page";
import ReviewSection from "@/components/sections/ReviewsSection";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Prime Dubai Movers | Best Movers and Packers in Dubai, UAE",
  description:
    "Trusted movers and packers in Dubai with 14+ years experience. Residential, commercial & villa moving across all UAE emirates. Get your free quote today!",
  openGraph: {
    title: "Prime Dubai Movers | Best Movers and Packers in Dubai, UAE",
    description:
      "Trusted movers and packers in Dubai with 14+ years experience. Residential, commercial & villa moving across all UAE emirates. Get your free quote today!",
    type: "website",
    images: ["/prime-dubai-movers.jpg"],
    url: process.env.APP_URL,
  },
  alternates: {
    canonical: process.env.APP_URL,
  },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FreeQuotePage forHome />
      <div className="mb-16" />
      <TrustBar />
      <WhyChooseUs />
      <ServicesOverview />
      <PricingSection />
      <LocationCoverage />
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 text-center">
            Prime Dubai Movers Moving Process
          </h2>
          <p className="text-body text-center mb-10 max-w-2xl mx-auto">
            Let Prime Dubai Movers take the lead. Our systematic approach
            ensures total transparency and maximum safety. With expert packing,
            GPS-tracked transport, and full unpacking services, we don&apos;t
            just move boxes—we move lives, with care.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {[
              {
                step: 1,
                title: "Free Survey",
                desc: "We visit your property to assess the scope of the move",
              },
              {
                step: 2,
                title: "Detailed Quote",
                desc: "Receive a transparent, itemized quote with no hidden fees",
              },
              {
                step: 3,
                title: "Professional Packing",
                desc: "Our trained packers carefully wrap and box all items",
              },
              {
                step: 4,
                title: "Safe Transport",
                desc: "GPS-tracked trucks deliver your belongings securely",
              },
              {
                step: 5,
                title: "Unpacking & Setup",
                desc: "We unpack and arrange items in your new space",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center text-xl font-extrabold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-medium text-navy text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-body text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ReviewSection />
      <section className="max-w-4xl mx-auto my-20">
        <h2 className="md:text-4xl text-3xl mb-5 text-navy">
          Choose Prime Movers in Dubai
        </h2>
        <p className="md:text-lg mb-2">
          To hire movers in Dubai, you can find out from your surroundings, your
          colleagues or your friends may already have used a professional moving
          company in Dubai.
        </p>
        <p className="md:text-lg mb-2">
          Of course, all moving companies have detailed profiles on the Internet
          to give a precise idea of the cost that will involve your departure.
        </p>
        <p className="md:text-lg mb-2">
          In order to avoid unpleasant surprises, it is advised to prefer
          professional movers Dubai who are certified like Prime Dubai Movers.
        </p>
      </section>
      <section className="max-w-4xl mx-auto my-20">
        <h2 className="md:text-4xl text-3xl mb-5 text-navy">
          Plan Your Moving ? Contact Prime Dubai Movers
        </h2>
        <p className="md:text-lg mb-2">
          We don&apos;t sacrifice consistency for providing low prices. Expert
          Movers and packers in Dubai have been operating in the surrounding
          regions since 2009, with consistent success in changing services.
        </p>
        <p className="md:text-lg mb-2">
          The transport and storage capacity will describe prices. So, get Dubai
          quotes right now. We offer different services according to the needs
          of the Customer.
        </p>
        <p className="md:text-lg mb-2">
          Prime Dubai Movers is known for going the extra mile to ensure
          Customer&apos;s shipping satisfaction. Our support system is always
          ready to benefit our customers. You can get free of cost quotes at any
          time you need them with our movers and packers in Dubai.
        </p>
      </section>
      <BlogPreview />
      <CTASection />
      {/* Organization Schema */}

      {/* FAQPage Schema */}
      <Script
        id="faq-schema"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How much do movers charge in Dubai?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Moving costs in Dubai typically range from AED 499 for a studio apartment to AED 8,000+ for large villas. The exact cost depends on property size, volume of belongings, distance, and additional services like packing. Prime Dubai Movers offers free, no-obligation quotes.",
                },
              },
              {
                "@type": "Question",
                name: "Are your movers licensed and insured?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Prime Dubai Movers is fully licensed by Dubai Municipality and carries comprehensive insurance coverage. All moves include basic liability protection, with upgrade options for full replacement value coverage.",
                },
              },
              {
                "@type": "Question",
                name: "Do you provide packing materials and services?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, we offer complete packing services using high-quality materials including corrugated boxes, bubble wrap, packing paper, wardrobe boxes, and custom crating for delicate items. You can choose full packing or partial packing options.",
                },
              },
              {
                "@type": "Question",
                name: "How far in advance should I book my move?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "We recommend booking at least one week in advance, especially during peak moving seasons (summer months). However, we also accommodate last-minute and same-day moves subject to availability.",
                },
              },
              {
                "@type": "Question",
                name: "Do you serve all Emirates in the UAE?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, Prime Dubai Movers provides moving services across all seven UAE emirates: Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, and Umm Al Quwain. We also handle inter-emirate relocations.",
                },
              },
            ],
          }),
        }}
      />
    </>
  );
}
