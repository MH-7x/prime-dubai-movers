import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ShieldCheck,
  DollarSign,
  Users,
  Truck,
  Umbrella,
  Headphones,
  Heart,
  Award,
  HandHeart,
  Leaf,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Prime Dubai Movers",
  description:
    "Learn about Prime Dubai Movers — UAE's trusted moving company with 14+ years of experience. Licensed, insured, and committed to stress-free relocations across all 7 emirates.",
};

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

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We operate with honesty and transparency in every interaction, building lasting trust with our clients.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive for the highest standards in every move, continuously improving our processes and service quality.",
  },
  {
    icon: HandHeart,
    title: "Customer First",
    description:
      "Your satisfaction drives every decision we make. We listen, adapt, and go the extra mile for every client.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "We are committed to eco-friendly practices, using recyclable packing materials and optimizing routes to reduce our carbon footprint.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy section-padding">
        <div className="container-custom text-center">
          <h1 className="text-white mb-6">About Prime Dubai Movers</h1>
          <p className="text-white/80 text-lg md:text-xl max-w-3xl mx-auto">
            For over 14 years, Prime Dubai Movers has been the UAE&apos;s most
            trusted partner for residential and commercial relocations. We
            combine expertise, care, and professionalism to make every move
            seamless.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our Story</h2>
              <p className="mb-4">
                Prime Dubai Movers was founded with a simple yet powerful
                vision: to transform the moving experience in the UAE. What
                began as a small, dedicated team operating out of Dubai has
                grown into one of the most recognized and trusted moving
                companies across all seven emirates.
              </p>
              <p className="mb-4">
                Over the past 14 years, we have successfully completed thousands
                of residential, commercial, and specialized moves. Our journey
                started when our founder recognized the need for a moving
                company that truly put the customer first — one that combined
                international best practices with a deep understanding of the
                local market.
              </p>
              <p className="mb-4">
                From our early days handling apartment relocations in Dubai
                Marina to managing large-scale corporate moves across Abu Dhabi,
                Sharjah, and beyond, we have earned a reputation for
                reliability, professionalism, and genuine care. Every piece of
                furniture, every fragile item, and every cherished belonging is
                treated as if it were our own.
              </p>
              <p>
                Today, Prime Dubai Movers stands as a testament to what can be
                achieved when passion meets purpose. With a modern fleet,
                state-of-the-art packing materials, and a team of over 100
                trained professionals, we continue to set the standard for
                moving services in the UAE.
              </p>
            </div>
            <div className="bg-gray-200 w-full aspect-[3/4] rounded-lg flex items-center justify-center text-gray-500">
              {/* Replace with actual image */}
              <span>Placeholder: Prime Dubai Movers team at work</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-t-4 border-t-gold">
              <CardHeader>
                <CardTitle className="text-navy text-xl font-extrabold">
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To deliver stress-free, efficient, and affordable moving
                  experiences that exceed expectations. We are committed to
                  handling every relocation with the utmost care, transparency,
                  and professionalism — ensuring our clients feel supported from
                  the first call to the final box unpacked.
                </p>
              </CardContent>
            </Card>
            <Card className="border-t-4 border-t-navy">
              <CardHeader>
                <CardTitle className="text-navy text-xl font-extrabold">
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To be the UAE&apos;s most trusted and preferred relocation
                  partner, recognized for our unwavering commitment to quality,
                  innovation, and customer satisfaction. We aspire to set the
                  benchmark for moving services in the region and beyond.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why We're Different Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-center mb-4">Why We&apos;re Different</h2>
          <p className="text-center text-body max-w-2xl mx-auto mb-12">
            We go beyond just moving your belongings. Here is what sets Prime
            Dubai Movers apart from the rest.
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

      {/* Our Values Section */}
      <section className="section-padding bg-off-white">
        <div className="container-custom">
          <h2 className="text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-navy rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h4 className="mb-2 text-lg">{value.title}</h4>
                <p className="text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Trust Section */}
      <section className="section-padding ">
        <div className="container-custom">
          <h2 className="text-center mb-12">Certifications & Trust</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-7 h-7 text-navy" />
                </div>
                <h4 className="text-base mb-2">Dubai Municipality Licensed</h4>
                <p className="text-sm">
                  Fully licensed and regulated by Dubai Municipality to operate
                  moving services across the emirate.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center">
                  <Award className="w-7 h-7 text-navy" />
                </div>
                <h4 className="text-base mb-2">ISO Certified Standards</h4>
                <p className="text-sm">
                  Our operations adhere to ISO quality management standards,
                  ensuring consistent and reliable service delivery.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="mx-auto mb-4 w-14 h-14 bg-navy/10 rounded-full flex items-center justify-center">
                  <Users className="w-7 h-7 text-navy" />
                </div>
                <h4 className="text-base mb-2">
                  International Movers Association
                </h4>
                <p className="text-sm">
                  Proud member of the International Association of Movers,
                  connecting us to a global network of relocation professionals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
  );
}
