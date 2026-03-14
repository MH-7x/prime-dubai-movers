import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Economy",
    price: "999",
    popular: false,
    features: [
      "Basic boxes",
      "2 movers",
      "Standard pickup truck",
      "Basic wrap protection",
      "Basic liability coverage",
      "Standard scheduling",
    ],
  },
  {
    name: "Standard",
    price: "1,499",
    popular: false,
    features: [
      "Boxes + bubble wrap",
      "3 movers",
      "Covered truck",
      "Furniture dis/reassembly",
      "Standard insurance coverage",
      "Priority scheduling",
      "Trolley + straps included",
    ],
  },
  {
    name: "Premium",
    price: "2,199",
    popular: true,
    features: [
      "Premium boxes + custom crating",
      "4 movers + supervisor",
      "Air-ride suspension truck",
      "Full protective padding",
      "Full replacement value",
      "Same-week guarantee",
      "Stair climber equipment",
    ],
  },
  {
    name: "VIP",
    price: "2,999",
    popular: false,
    features: [
      "All Premium + wardrobe & art crating",
      "5 movers + dedicated foreman",
      "Climate-controlled truck",
      "White-glove handling",
      "Premium comprehensive insurance",
      "Same-day / next-day service",
      "Post-move cleanup included",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2>Moving Packages That Fit Your Budget</h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Pricing grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <Card
              key={pkg.name}
              className={`relative bg-white transition-shadow duration-300 hover:shadow-lg overflow-visible ${
                pkg.popular
                  ? "border-2 border-gold shadow-md"
                  : "border border-gray-200"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gold text-white text-xs font-medium px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-2">
                <CardTitle className="text-navy text-lg font-extrabold">
                  {pkg.name}
                </CardTitle>
                <div className="mt-2">
                  <span className="text-sm text-body">AED</span>{" "}
                  <span className="text-3xl font-extrabold text-navy">
                    {pkg.price}
                  </span>
                </div>
                <p className="text-xs text-body mt-1">Starting from</p>
              </CardHeader>

              <CardContent className="flex flex-col gap-4">
                <ul className="space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-body"
                    >
                      <Check className="size-4 text-gold shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/free-quote"
                  className={`inline-flex items-center justify-center w-full mt-2 font-medium h-10 rounded-lg transition-colors ${
                    pkg.popular
                      ? "bg-gold hover:bg-gold-dark text-white"
                      : "bg-navy hover:bg-navy-light text-white"
                  }`}
                >
                  Get Quote
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
