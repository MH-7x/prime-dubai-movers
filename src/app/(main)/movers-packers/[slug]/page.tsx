import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Star,
  ChevronRight,
  Truck,
  CheckCircle2,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { allLocations, getLocationBySlug } from "@/lib/data/locations";
import FreeQuotePage from "@/app/(main)/free-quote/page";
import Image from "next/image";
import Script from "next/script";
import ReviewSection from "@/components/sections/ReviewsSection";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return allLocations.map((location) => ({
    slug: location.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Not Found" };

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: {
      canonical: `${process.env.APP_URL}/movers-packers/${slug}`,
    },
    openGraph: {
      title: location.metaTitle,
      description: location.metaDescription,
      type: "website",
      url: `${process.env.APP_URL}/movers-packers/${slug}`,
      images: [location.img?.src || "/prime-dubai-movers.jpg"],
    },
  };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div className="bg-gold-light/50 w-full aspect-square rounded-3xl md:order-1 order-2 relative overflow-hidden">
            {location.img && (
              <Image
                src={location.img}
                alt={"Movers and Packers in " + location.name}
                fill
                loading="eager"
                placeholder="blur"
                className="object-cover"
              />
            )}
          </div>
          <div className="md:order-2 order-1">
            <nav className="flex items-center gap-2 text-sm text-gray-300 mb-6">
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <Link
                href="/services"
                className="hover:text-gold transition-colors"
              >
                Services
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold">{location.name}</span>
            </nav>
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-5xl  font-extrabold text-white mb-6">
                Movers and Packers in {location.name}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                {location.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/free-quote"
                  className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-white font-medium text-lg px-8 h-9 rounded-lg transition-colors"
                >
                  Get Free Quote
                </Link>
                <a
                  href="tel:+971561046146"
                  className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 font-medium text-lg px-8 h-9 rounded-lg transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FreeQuotePage forHome />
      {/* Area Introduction */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-6">
                Professional Moving Services in {location.name}
              </h2>
              <p className="text-body leading-relaxed md:text-lg">
                {location.areaIntro}
              </p>
              <div className="my-12 bg-gold-light w-full aspect-video rounded-3xl relative overflow-hidden">
                {location.moreImgs && location.moreImgs.length > 0 && (
                  <Image
                    src={location.moreImgs[0]}
                    alt={"Prime Dubai Movers Services in " + location.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
              {location.detailedDescription && (
                <div className="mt-6 ">
                  <div className="text-body leading-relaxed md:text-lg space-y-2">
                    {location.detailedDescription}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Service Types */}
      {location.serviceTypes && location.serviceTypes.length > 0 && (
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-10 text-center">
              Our Moving Services in {location.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {location.serviceTypes.map((service, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow border border-gray-100"
                >
                  <span className="text-4xl block mb-4">{service.icon}</span>
                  <h3 className="font-extrabold text-navy text-xl mb-3">
                    {service.name} in {location.name}
                  </h3>
                  <p className="text-body leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why We're the Best */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-10 text-center">
            Why We Are the Best Movers in {location.name}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {location.whyBest.map((reason, idx) => (
              <div key={idx} className="flex gap-4 p-6 rounded-xl bg-off-white">
                <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-1" />
                <p className="text-body">{reason}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-gold-light max-w-4xl mx-auto aspect-video rounded-3xl relative overflow-hidden">
            {location.moreImgs && location.moreImgs.length > 0 && (
              <Image
                src={location.moreImgs[1]}
                alt={"Best Movers in " + location.name}
                fill
                className="object-cover"
              />
            )}
          </div>
        </div>
      </section>

      {/* Moving Tips */}
      {location.movingTips && location.movingTips.length > 0 && (
        <section className="py-16 md:py-20 bg-navy text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-10 text-center">
              Moving Tips for {location.name} Residents
            </h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {location.movingTips.map((tip, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur rounded-xl p-6 flex items-start gap-4 border border-white/10"
                >
                  <CheckCircle2 className="w-6 h-6 text-gold shrink-0 mt-0.5" />
                  <p className="text-white leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Estimated Costs */}
      <section className="py-16 md:py-20 bg-gold-light ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 text-center">
            Moving Costs in {location.name}
          </h2>
          <p className="text-navy-light text-center mb-10 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Prices vary based on
            volume, floor level, and specific requirements.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {location.estimatedCosts.map((cost, idx) => (
              <div
                key={idx}
                className="bg-white/20 backdrop-blur rounded-xl p-6 text-center border border-white/10"
              >
                <h3 className="font-medium text-navy-light text-lg mb-3">
                  {cost.type}
                </h3>
                <p className="text-2xl font-extrabold text-navy">
                  {cost.price}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/free-quote"
              className="inline-flex items-center justify-center bg-gold-dark hover:bg-gold text-white font-medium text-lg px-8 h-9 rounded-lg transition-colors"
            >
              Get Your Exact Quote
            </Link>
          </div>
          {location.costFactors && location.costFactors.length > 0 && (
            <div className="mt-16 py-16 bg-white/20 md:rounded-3xl">
              <h3 className="text-xl md:text-2xl font-extrabold text-navy mb-6 text-center">
                Factors That Affect Your Moving Cost
              </h3>
              <div className="flex flex-wrap justify-center gap-4">
                {location.costFactors.map((factor, idx) => (
                  <span
                    key={idx}
                    className="bg-white/30 border border-white/30 md:rounded-full px-5 py-2.5 text-sm font-medium text-body"
                  >
                    {factor}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 text-center">
            Our Moving Process in {location.name}
          </h2>
          <p className="text-body text-center mb-10 max-w-2xl mx-auto">
            {location.processNotes}
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

      {/* FAQ Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-10 text-center">
            Frequently Asked Questions About Moving in {location.name}
          </h2>
          <div className="max-w-3xl mx-auto">
            <Accordion className="w-full">
              {location.faqs.map((faq, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left text-navy font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-body text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-16 md:py-20 bg-off-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-10 text-center">
            Also Serving Nearby Areas
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {location.nearbyAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/movers-packers/${area.slug}`}
                className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow text-navy font-medium hover:text-gold"
              >
                <MapPin className="w-4 h-4 text-gold" />
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Move in {location.name}?
          </h2>
          <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
            Contact us today for a free, no-obligation moving quote. We respond
            within 30 minutes.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <a
              href="tel:+971561046146"
              className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors border border-white/10"
            >
              <Phone className="w-8 h-8 text-gold" />
              <span className="font-medium">Call Us</span>
              <span className="text-sm text-gray-300">+971 56 104 6146</span>
            </a>
            <a
              href="https://wa.me/971561046146?text=Hi%2C%20I%20need%20a%20moving%20quote%20for%20a%20move%20in%20{location.name}"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors border border-white/10"
            >
              <MessageCircle className="w-8 h-8 text-green-400" />
              <span className="font-medium">WhatsApp</span>
              <span className="text-sm text-gray-300">Chat with us</span>
            </a>
            <a
              href="mailto:primedubaimovers.com@gmail.com"
              className="flex flex-col items-center gap-3 bg-white/10 backdrop-blur rounded-xl p-6 hover:bg-white/20 transition-colors border border-white/10"
            >
              <Mail className="w-8 h-8 text-gold" />
              <span className="font-medium">Email</span>
              <span className="text-sm text-gray-300">
                primedubaimovers.com@gmail.com
              </span>
            </a>
            <Link
              href="/free-quote"
              className="flex flex-col items-center gap-3 bg-gold/20 backdrop-blur rounded-xl p-6 hover:bg-gold/30 transition-colors border border-gold/30"
            >
              <Truck className="w-8 h-8 text-gold" />
              <span className="font-medium">Free Quote</span>
              <span className="text-sm text-gray-300">
                Get instant estimate
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Markup */}

      <Script
        id="faq-schema"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: location.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
      <Script
        id="BreadcrumbList"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: process.env.APP_URL,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Services",
                item: `${process.env.APP_URL}/services`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: `Movers and Packers in ${location.name}`,
                item: `${process.env.APP_URL}/movers-packers/${location.slug}`,
              },
            ],
          }),
        }}
      />
    </>
  );
}
