import type { Metadata } from "next";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building2,
  Building,
  Briefcase,
  Sofa,
  Music,
  Lock,
  Wallet,
  Package,
  Shield,
  Clock,
  Award,
  Truck,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Professional Moving Services in Dubai | Prime Dubai Movers",
  description:
    "Explore all moving services by Prime Dubai Movers: house, villa, apartment, office, furniture, piano, safe moving, packing services & affordable relocation across Dubai and UAE.",
};

const services = [
  {
    name: "House Moving Services",
    slug: "/house-movers-dubai",
    icon: Home,
    description:
      "Complete house relocation services across Dubai. We handle everything from packing fragile items to safely transporting your entire household to your new home.",
    alt: "Professional house moving service in Dubai",
  },
  {
    name: "Villa Moving Services",
    slug: "/villa-movers-dubai",
    icon: Building2,
    description:
      "Specialized villa moving for Dubai's luxury residences. Our experienced team manages large-scale relocations including garden equipment, outdoor furniture, and high-value possessions.",
    alt: "Villa relocation service in Dubai",
  },
  {
    name: "Apartment Moving Services",
    slug: "/apartment-movers-dubai",
    icon: Building,
    description:
      "Expert apartment movers skilled in high-rise logistics. We coordinate building management approvals, service elevators, and efficient floor-by-floor relocation.",
    alt: "Apartment moving service in Dubai high-rise buildings",
  },
  {
    name: "Office Moving Services",
    slug: "/office-movers-dubai",
    icon: Briefcase,
    description:
      "Minimize downtime with our corporate relocation expertise. We move IT equipment, office furniture, and sensitive documents with zero disruption to your business operations.",
    alt: "Commercial office relocation service in Dubai",
  },
  {
    name: "Furniture Moving Services",
    slug: "/furniture-movers-dubai",
    icon: Sofa,
    description:
      "Professional furniture disassembly, wrapping, transport, and reassembly. We protect every piece with premium materials and handle bulky items with precision care.",
    alt: "Furniture moving and transport service in Dubai",
  },
  {
    name: "Piano Moving Services",
    slug: "/piano-movers-dubai",
    icon: Music,
    description:
      "Delicate piano relocation by trained specialists using climate-controlled vehicles and custom padding. Grand pianos, uprights, and digital pianos moved safely.",
    alt: "Specialized piano moving service in Dubai",
  },
  {
    name: "Safe Moving Services",
    slug: "/safe-movers-dubai",
    icon: Lock,
    description:
      "Heavy-duty safe and vault relocation using hydraulic equipment and reinforced vehicles. We move safes of all sizes while protecting your floors and walls.",
    alt: "Heavy safe and vault moving service in Dubai",
  },
  {
    name: "Cheap Movers Services",
    slug: "/cheap-movers-dubai",
    icon: Wallet,
    description:
      "Affordable moving packages without compromising quality. Budget-friendly relocation options for students, small apartments, and cost-conscious families across Dubai.",
    alt: "Affordable and budget-friendly moving service in Dubai",
  },
  {
    name: "Packing Services",
    slug: "/packing-services-dubai",
    icon: Package,
    description:
      "Full-service packing and unpacking with premium materials. Custom crating for artwork, electronics wrapping, wardrobe boxes, and eco-friendly packing solutions.",
    alt: "Professional packing and unpacking service in Dubai",
  },
];

const differentiators = [
  {
    icon: Shield,
    title: "Fully Licensed & Insured",
    description:
      "Dubai Municipality licensed with comprehensive cargo insurance covering every item during transit and handling.",
  },
  {
    icon: Clock,
    title: "14+ Years of Experience",
    description:
      "Over a decade of expertise relocating families and businesses across all seven UAE emirates with zero claims record.",
  },
  {
    icon: Award,
    title: "Trained Professional Crews",
    description:
      "Every team member undergoes rigorous training in safe handling, packing techniques, and customer service standards.",
  },
  {
    icon: Truck,
    title: "Modern Fleet & Equipment",
    description:
      "GPS-tracked vehicles, air-ride suspension trucks, and specialized equipment for every type of move from studios to warehouses.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Professional Moving Services in Dubai
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto font-medium">
            Comprehensive relocation solutions for homes, offices & businesses
            across all UAE emirates
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
              Our Complete Range of Moving Services
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              From residential relocations to specialized item transport, we
              offer tailored solutions to meet every moving need in Dubai and
              beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <Card
                  key={service.slug}
                  className="group hover:shadow-lg transition-shadow duration-300 border border-gray-100"
                >
                  <CardHeader className="pb-0">
                    <div className="bg-gray-100 w-full aspect-[4/3] rounded-lg flex items-center justify-center text-gray-500 text-sm mb-4">
                      <span>Placeholder: {service.alt}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 text-gold" />
                      </div>
                      <CardTitle className="text-lg font-extrabold text-navy">
                        {service.name}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-body text-sm mb-4">
                      {service.description}
                    </p>
                    <Link href={service.slug} aria-label={service.name}>
                      <Button
                        variant="outline"
                        title={service.name}
                        className="w-full border-gold text-gold-dark hover:bg-gold hover:text-white transition-colors"
                      >
                        Get A Quote Now <ArrowRight />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy mb-4">
              Why Choose Prime Dubai Movers
            </h2>
            <p className="text-body max-w-2xl mx-auto">
              Trusted by thousands of families and businesses across the UAE for
              reliable, professional relocation services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {differentiators.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-lg font-extrabold text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            Need Help Choosing the Right Service?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Not sure which moving service fits your needs? Our relocation
            experts are ready to guide you through every option and provide a
            free, no-obligation quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/free-quote">
              <Button className="bg-gold hover:bg-gold-dark text-white px-8 py-3 text-base font-medium">
                Get a Free Quote
              </Button>
            </Link>
            <a
              href="tel:+971501234567"
              className="flex items-center gap-2 text-white hover:text-gold transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span className="text-lg font-medium">+971 50 123 4567</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
