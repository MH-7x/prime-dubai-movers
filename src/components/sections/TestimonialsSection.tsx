import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah K.",
    location: "Palm Jumeirah",
    rating: 5,
    text: "Moved our entire villa with zero damage. The team was punctual, professional, and went above and beyond.",
    source: "Google Reviews",
  },
  {
    name: "Ahmed R.",
    location: "Business Bay",
    rating: 5,
    text: "Best office movers in Dubai. They relocated our entire floor over a weekend with minimal disruption.",
    source: "Google Reviews",
  },
  {
    name: "Priya M.",
    location: "JVC",
    rating: 5,
    text: "Affordable yet premium service. They packed everything meticulously and delivered on time.",
    source: "Google Reviews",
  },
  {
    name: "James T.",
    location: "Downtown Dubai",
    rating: 5,
    text: "Third time using Prime Dubai Movers. Consistently excellent service across every move.",
    source: "Google Reviews",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`size-4 ${
            i < rating ? "fill-gold text-gold" : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-custom">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2>What Our Customers Say</h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="bg-white border border-gray-200 hover:shadow-md transition-shadow duration-300"
            >
              <CardContent className="flex flex-col gap-4 pt-2">
                <Quote className="size-8 text-gold/20" strokeWidth={1.5} />

                <p className="text-sm text-body leading-relaxed italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                <StarRating rating={testimonial.rating} />

                <div className="mt-auto pt-4 border-t border-gray-100">
                  <p className="font-medium text-navy text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-body">
                    {testimonial.location} &middot; {testimonial.source}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
