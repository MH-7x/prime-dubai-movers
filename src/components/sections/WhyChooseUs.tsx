import { Shield, Receipt, Users, Truck } from "lucide-react";

const pillars = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description:
      "Fully licensed by Dubai Municipality with comprehensive insurance coverage for every move.",
  },
  {
    icon: Receipt,
    title: "Transparent Pricing",
    description:
      "No hidden charges or surprise fees. Get a detailed quote upfront with clear pricing breakdowns.",
  },
  {
    icon: Users,
    title: "Trained Professional Crew",
    description:
      "Our expert movers undergo rigorous training in handling, packing, and customer service.",
  },
  {
    icon: Truck,
    title: "Modern Fleet & Equipment",
    description:
      "Well-maintained trucks with GPS tracking and professional-grade packing materials.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2 className="text-white">Why Choose Prime Dubai Movers</h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 text-center"
            >
              <div className="flex items-center justify-center size-14 rounded-full bg-gold/15 mx-auto mb-5">
                <pillar.icon
                  className="size-7 text-gold"
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-lg font-extrabold text-white mb-3">
                {pillar.title}
              </h3>

              <p className="text-sm text-white/70 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
