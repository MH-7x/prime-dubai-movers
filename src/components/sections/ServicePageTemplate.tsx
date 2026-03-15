"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { allLocations } from "@/lib/data/locations";
import {
  Phone,
  MessageCircle,
  Mail,
  FileText,
  Star,
  CheckCircle,
  ArrowRight,
  MapPin,
  Shield,
  Clock,
  Award,
  Truck,
  Package,
  Home,
  Building2,
  Building,
  Briefcase,
  Sofa,
  Music,
  Lock,
  Wallet,
  Users,
  ThumbsUp,
  HeartHandshake,
  Gem,
  Target,
  Zap,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  Clock,
  Award,
  Truck,
  Package,
  Home,
  Building2,
  Building,
  Briefcase,
  Sofa,
  Music,
  Lock,
  Wallet,
  Users,
  ThumbsUp,
  HeartHandshake,
  Gem,
  Target,
  Zap,
  CheckCircle,
  MapPin,
  Phone,
  Star,
};

interface ServicePageProps {
  service: {
    name: string;
    primaryKeyword: string;
    heroHeadline: string;
    heroDescription: string;
    introduction: string;
    offerings: { title: string; description: string }[];
    process: { step: number; title: string; description: string }[];
    whyChooseUs: { title: string; description: string }[];
    pricingNote: string;
    faqs: { question: string; answer: string }[];
    relatedServices: { name: string; slug: string }[];
    icon: string;
  };
  heroImage: StaticImageData;
  images: { src: string; alt: string }[];
}

export default function ServicePageTemplate({
  service,
  heroImage,
  images,
}: ServicePageProps) {
  const HeroIcon = iconMap[service.icon] || Package;

  // Get a subset of locations across different emirates
  const displayLocations = allLocations.slice(0, 24);

  const placeholderTestimonials = [
    {
      name: "Fatima A.",
      rating: 5,
      text: `Prime Dubai Movers made our ${service.name.toLowerCase()} experience absolutely seamless. The team arrived on time, handled everything with care, and finished ahead of schedule. Highly recommended!`,
    },
    {
      name: "Michael T.",
      rating: 5,
      text: `We were nervous about our move, but the professionalism of the Prime Dubai Movers crew put us at ease immediately. Their ${service.name.toLowerCase()} service was worth every dirham.`,
    },
    {
      name: "Rashid K.",
      rating: 5,
      text: `Outstanding service from start to finish. The team was courteous, efficient, and went above and beyond during our ${service.name.toLowerCase()} process. Will definitely use again.`,
    },
  ];

  const offeringIcons = [
    Package,
    Shield,
    Truck,
    Award,
    CheckCircle,
    Gem,
    Target,
    Zap,
    Users,
    HeartHandshake,
  ];

  return (
    <>
      {/* 1. Hero Section */}
      <section className="bg-white py-20 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gold/20 flex items-center justify-center">
                  <HeroIcon className="w-6 h-6 text-gold" />
                </div>
                <span className="text-gold font-medium text-sm uppercase tracking-wider">
                  {service.name}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl  font-extrabold text-secondary mb-6 leading-tight">
                {service.heroHeadline}
              </h1>
              <p className="text-lg text-foreground mb-8 max-w-xl">
                {service.heroDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/free-quote" className="md:w-max w-full">
                  <Button size={"lg"} className="w-full">
                    Get a Free Quote
                  </Button>
                </Link>
                <a href="tel:+971561046146" className="md:w-max w-full">
                  <Button variant="secondary" size={"lg"} className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
              </div>
            </div>
            <div>
              <div className="bg-gold/30 w-full aspect-4/3 rounded-lg overflow-hidden relative">
                <Image
                  src={heroImage}
                  alt={service.heroHeadline}
                  fill
                  loading="eager"
                  placeholder="blur"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 grid-cols-1 gap-12 items-center">
          <div className="w-full aspect-4/3 rounded-3xl bg-gold-light md:order-1 order-2 overflow-hidden relative">
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              className="object-cover"
            />
          </div>
          <div className="md:order-2 order-1">
            <h2 className="text-2xl md:text-4xl font-extrabold text-navy mb-6 capitalize">
              {service.primaryKeyword}, <br /> Prime Dubai Movers
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-body leading-relaxed text-base ">
                {service.introduction}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Offer */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
              What Prime Dubai Movers Offer
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Our {service.name.toLowerCase()} services are designed to cover
              every aspect of your relocation needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.offerings.map((offering, index) => {
              const OfferingIcon = offeringIcons[index % offeringIcons.length];
              return (
                <Card
                  key={index}
                  className="border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <OfferingIcon className="w-5 h-5 text-gold" />
                      </div>
                      <CardTitle className="text-base font-extrabold text-navy">
                        {offering.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-sm">{offering.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Our Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
              Our {service.name} Process
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              A streamlined approach to ensure your move is efficient, safe, and
              stress-free from start to finish.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical line connector */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gold/20 hidden md:block" />

              <div className="space-y-8">
                {service.process.map((step) => (
                  <div key={step.step} className="relative flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-gold text-white flex items-center justify-center font-extrabold text-lg z-10">
                      {step.step}
                    </div>
                    <div className="bg-off-white rounded-xl p-6 flex-1">
                      <h3 className="text-lg font-extrabold text-navy mb-2">
                        {step.title}
                      </h3>
                      <p className="text-body text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-4xl bg-gold-light mx-auto  aspect-video md:mb-26 mb-16 md:rounded-3xl relative overflow-hidden">
        <Image
          src={images[1].src}
          alt={images[1].alt}
          fill
          className="object-cover"
        />
      </section>
      {/* 5. Why Choose Prime Dubai Movers */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Why Choose Prime Dubai Movers <br /> for {service.name}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Discover what sets us apart as the leading{" "}
              {service.name.toLowerCase()} provider in Dubai.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-gold" />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Pricing Guide */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-6">
              {service.name} Pricing Guide
            </h2>
            <div className="bg-off-white rounded-xl p-8">
              <p className="text-body text-base md:text-lg mb-6">
                {service.pricingNote}
              </p>
              <Link href="/free-quote">
                <Button className="bg-gold hover:bg-gold-dark text-white px-8 py-3 text-base font-medium">
                  <FileText className="w-4 h-4 mr-2" />
                  Request Your Free Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Areas We Serve */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
              Areas We Serve
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              We provide {service.name.toLowerCase()} services across Dubai and
              all UAE emirates. Click any area for location-specific details.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {displayLocations.map((location) => (
              <Link
                key={location.slug}
                href={`/movers-packers/${location.slug}`}
                className="flex items-center gap-2 bg-white rounded-lg px-3 py-2.5 text-sm text-navy hover:bg-gold hover:text-white transition-colors group"
              >
                <MapPin className="w-3.5 h-3.5 text-gold group-hover:text-white shrink-0" />
                <span className="truncate">{location.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Customer Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
              What Our Customers Say
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Real feedback from clients who trusted us with their{" "}
              {service.name.toLowerCase()} needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {placeholderTestimonials.map((testimonial, index) => (
              <Card key={index} className="border border-gray-100">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-body text-sm mb-4 italic">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>
                  <p className="text-navy font-medium text-sm">
                    {testimonial.name}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-body">
                Common questions about our {service.name.toLowerCase()} services
                in Dubai.
              </p>
            </div>

            <Accordion>
              {service.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base text-navy font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-body">{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* 10. CTA Block */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Ready to Book Your {service.name}?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10">
              Contact us today for a free, no-obligation quote. Our team is
              available 24/7 to assist with your relocation needs.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <a
                href="tel:+971561046146"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-colors group"
              >
                <Phone className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-white font-medium text-sm">Call Us</p>
                <p className="text-gray-300 text-xs mt-1">+971 56 104 6146</p>
              </a>

              <a
                href="https://wa.me/971561046146"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-colors group"
              >
                <MessageCircle className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-white font-medium text-sm">WhatsApp</p>
                <p className="text-gray-300 text-xs mt-1">Chat with us</p>
              </a>

              <a
                href="mailto:primedubaimovers.com@gmail.com"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/20 transition-colors group"
              >
                <Mail className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-white font-medium text-sm">Email</p>
                <p className="text-gray-300 text-xs mt-1">
                  primedubaimovers.com@gmail.com
                </p>
              </a>

              <Link
                href="/free-quote"
                className="bg-gold/20 backdrop-blur-sm rounded-xl p-6 border border-gold/30 hover:bg-gold/30 transition-colors group"
              >
                <FileText className="w-8 h-8 text-gold mx-auto mb-3" />
                <p className="text-white font-medium text-sm">Quote Form</p>
                <p className="text-gray-300 text-xs mt-1">
                  Free estimate online
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Related Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
              Related Services
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Explore other moving services that complement your{" "}
              {service.name.toLowerCase()} needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {service.relatedServices.map((related, index) => (
              <Link key={index} href={`/${related.slug}`}>
                <Card className="border border-gray-100 hover:shadow-md hover:border-gold/30 transition-all group h-full">
                  <CardContent className="pt-6 flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                      <ArrowRight className="w-5 h-5 text-gold" />
                    </div>
                    <p className="text-navy font-medium group-hover:text-gold transition-colors">
                      {related.name}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
