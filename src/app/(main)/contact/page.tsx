import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";
import FullQuoteForm from "@/components/FullQuoteForm";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Contact Us | Prime Dubai Movers",
  description:
    "Get in touch with Prime Dubai Movers for a free moving quote. Call, email, or WhatsApp us. Available Saturday to Thursday 8AM-8PM. Dubai's trusted movers and packers.",
  alternates: {
    canonical: `${process.env.APP_URL}/contact`,
  },
  openGraph: {
    type: "website",
    title: "Contact Us | Prime Dubai Movers",
    description:
      "Get in touch with Prime Dubai Movers for a free moving quote. Call, email, or WhatsApp us. Available Saturday to Thursday 8AM-8PM. Dubai's trusted movers and packers.",
    url: `${process.env.APP_URL}/contact`,
    images: [`/prime-dubai-movers.jpg`],
  },
};

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+971 56 104 6146",
    href: "tel:+971561046146",
    description: "Speak directly with our moving consultants",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "primedubaimovers.com@gmail.com",
    href: "mailto:primedubaimovers.com@gmail.com",
    description: "We respond to all emails within 2 hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+971 56 104 6146",
    href: "https://wa.me/971561046146",
    description: "Quick responses via WhatsApp messaging",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    value: "Dubai, UAE",
    href: undefined,
    description: "Sat-Thu: 8AM-8PM | Fri: 9AM-5PM",
  },
];

const faqs = [
  {
    question: "How quickly will you respond to my inquiry?",
    answer:
      "We aim to respond to all inquiries within 30 minutes during business hours (Saturday to Thursday, 8AM-8PM). Emails received outside of business hours will be addressed first thing the next working day.",
  },
  {
    question: "What is the best way to get a quick quote?",
    answer:
      "The fastest way to receive a quote is through our Free Quote page or by calling us directly at +971 56 104 6146. WhatsApp is also a great option for quick communication and sharing photos of items to be moved.",
  },
  {
    question: "Do you offer free on-site surveys?",
    answer:
      "Yes, for larger moves such as villas, offices, and full house relocations, we offer complimentary on-site surveys. This allows us to provide the most accurate quote tailored to your specific needs.",
  },
  {
    question: "Can I reach you on weekends and holidays?",
    answer:
      "We operate Saturday through Thursday from 8AM to 8PM and Friday from 9AM to 5PM. For urgent matters outside these hours, you can reach us via WhatsApp and we will respond as soon as possible.",
  },
  {
    question: "What information do I need to provide for a quote?",
    answer:
      "To provide an accurate quote, we need your current location, destination, type of property, approximate number of rooms, preferred moving date, and any special items that require extra care such as pianos, artwork, or safes.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy section-padding">
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">Contact Prime Dubai Movers</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            We&apos;re here to help with your next move. Reach out to us through
            any of the channels below and our team will assist you promptly.
          </p>
        </div>
      </section>

      {/* Contact Info Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item) => (
              <Card
                key={item.title}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                    <item.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg mb-2">{item.title}</h3>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-navy font-medium hover:text-gold transition-colors block mb-2"
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        item.href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-navy font-medium mb-2">{item.value}</p>
                  )}
                  <p className="text-sm text-body">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <FullQuoteForm />

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d898.7546376380693!2d55.27908210939592!3d25.204840510705274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4284e8dc04d9%3A0x8d10139ba0acaa7!2s3%2035a%20St%20-%20Zaa&#39;beel%20Second%20-%20Za&#39;abeel%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1773651061390!5m2!1sen!2s"
        title="Prime Dubai Movers Office Location"
        allowFullScreen
        loading="lazy"
        className="max-w-5xl mx-auto aspect-video my-10"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <Script
        id="faq-schema"
        strategy="beforeInteractive"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
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
      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="py-6">
                  <h4 className="text-base font-extrabold mb-3">
                    {faq.question}
                  </h4>
                  <p className="text-sm">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
