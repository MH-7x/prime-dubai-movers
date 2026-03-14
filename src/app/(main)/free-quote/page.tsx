import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import {
  ShieldCheck,
  DollarSign,
  Users,
  Truck,
  Umbrella,
  Headphones,
  Phone,
} from "lucide-react";
import FullQuoteForm from "@/components/FullQuoteForm";
import { Button } from "@/components/ui/button";
const differentiators = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured Operations",
    description:
      "Fully licensed by Dubai Municipality with comprehensive insurance coverage for every move we undertake.",
  },
  {
    icon: DollarSign,
    title: "Transparent, Upfront Pricing",
    description:
      "No hidden fees or surprise charges. We provide detailed, itemized quotes before any work begins.",
  },
  {
    icon: Users,
    title: "Professionally Trained Crew",
    description:
      "Our team undergoes rigorous training in handling, packing, and customer service to deliver a premium experience.",
  },
  {
    icon: Truck,
    title: "Modern Fleet with GPS Tracking",
    description:
      "Our well-maintained vehicles are equipped with GPS tracking so you can monitor your belongings in real time.",
  },
  {
    icon: Umbrella,
    title: "Comprehensive Insurance Coverage",
    description:
      "Every item is covered by our comprehensive transit insurance, giving you complete peace of mind during the move.",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Support",
    description:
      "Our dedicated support team is available around the clock to answer questions and address any concerns.",
  },
];

export default function FreeQuotePage({ forHome }: { forHome?: boolean }) {
  return (
    <>
      {/* Hero */}
      <section
        className={`${forHome ? "bg-white text-navy pt-24" : "bg-navy text-white py-12"} `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!forHome && (
            <nav className="flex items-center gap-2 text-sm text-gray-300 mb-4">
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold">Free Quote</span>
            </nav>
          )}
          {forHome ? (
            <>
              <h2 className="text-3xl md:text-4xl  font-extrabold  mb-3">
                Get Your Free Moving Quote Now
              </h2>
            </>
          ) : (
            <>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3">
                Get Your Free Moving Quote Now
              </h1>
            </>
          )}
          <p className={` text-lg max-w-2xl ${!forHome && "text-gray-300"}`}>
            Fill out the form below and our team will respond within 30 minutes
            with a detailed, no-obligation quote.
          </p>
        </div>
      </section>
      <FullQuoteForm />

      {!forHome && (
        <>
          {" "}
          <section className="section-padding bg-white">
            <div className="container-custom">
              <h2 className="text-center mb-4">Why We&apos;re Different</h2>
              <p className="text-center text-body max-w-2xl mx-auto mb-12">
                We go beyond just moving your belongings. Here is what sets
                Prime Dubai Movers apart from the rest.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {differentiators.map((item) => (
                  <Card key={item.title} className="text-center">
                    <CardHeader>
                      <div className="mx-auto mb-2 w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center">
                        <item.icon className="w-7 h-7 text-gold" />
                      </div>
                      <CardTitle className="text-navy text-lg font-extrabold">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
          <section className="section-padding bg-navy">
            <div className="container-custom text-center">
              <h2 className="text-white mb-4">
                Ready to Experience the Prime Difference?
              </h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
                Let our expert team handle your next move with the care and
                professionalism you deserve. Get in touch today for a free,
                no-obligation quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/free-quote">
                  <Button className="bg-gold hover:bg-gold-dark text-white px-8 py-3 text-base font-medium h-auto">
                    Get a Free Quote
                  </Button>
                </Link>
                <Link href="tel:+971 50 000 000">
                  <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-8 py-3 text-base font-medium h-auto">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
