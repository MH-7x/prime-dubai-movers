import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { services } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2>
            Our Professional <br /> Moving Services in Dubai
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card
              key={service.name}
              className="group border border-gray-200 bg-white hover:shadow-lg transition-shadow duration-300 pt-2"
            >
              <CardContent className="flex flex-col items-start gap-4 pt-2">
                <div className="w-full aspect-[16/10] relative rounded-lg bg-gold/10 overflow-hidden">
                  <Image
                    src={service.src}
                    alt={service.name + " in Dubai, Prime Dubai Movers"}
                    fill
                    className="object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-navy mb-2">
                    {service.name} in Dubai
                  </h3>
                  <p className="text-sm text-body leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium py-1 px-2 border border-gold-dark rounded-2xl text-gold-dark transition-colors mt-auto"
                >
                  Contact For {service.name}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
