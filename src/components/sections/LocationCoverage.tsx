import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";

const dubaiNeighborhoods = [
  { name: "Palm Jumeirah", slug: "palm-jumeirah" },
  { name: "Downtown Dubai", slug: "downtown-dubai" },
  { name: "Dubai Marina", slug: "dubai-marina" },
  { name: "JVC", slug: "jvc" },
  { name: "JLT", slug: "jlt" },
  { name: "Business Bay", slug: "business-bay" },
  { name: "Al Barsha", slug: "al-barsha" },
  { name: "Arabian Ranches", slug: "arabian-ranches" },
  { name: "Emirates Hills", slug: "emirates-hills" },
  { name: "Damac Hills", slug: "damac-hills" },
  { name: "Al Nahda", slug: "al-nahda" },
  { name: "Silicon Oasis", slug: "silicon-oasis" },
  { name: "Bur Dubai", slug: "bur-dubai" },
  { name: "Deira", slug: "deira" },
  { name: "Al Quoz", slug: "al-quoz" },
  { name: "JVT", slug: "jvt" },
  { name: "Motor City", slug: "motor-city" },
  { name: "International City", slug: "international-city" },
];

const otherEmirates = [
  { name: "Abu Dhabi", slug: "abu-dhabi" },
  { name: "Sharjah", slug: "sharjah" },
  { name: "Ajman", slug: "ajman" },
  { name: "Ras Al Khaimah", slug: "ras-al-khaimah" },
  { name: "Fujairah", slug: "fujairah" },
  { name: "Umm Al Quwain", slug: "umm-al-quwain" },
  { name: "Al Ain", slug: "al-ain" },
];

export default function LocationCoverage() {
  return (
    <section className="section-padding bg-off-white">
      <div className="container-custom">
        {/* Section heading */}
        <div className="text-center mb-14">
          <h2>Movers and Packers in All Over UAE</h2>
          <div className="w-20 h-1 bg-gold mx-auto mt-4 rounded-full" />
        </div>

        {/* Dubai Neighborhoods */}
        <div className="mb-12">
          <h3 className="text-xl font-extrabold text-navy mb-6">
            Dubai Neighborhoods
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {dubaiNeighborhoods.map((location) => (
              <Link
                key={location.slug}
                href={`/movers-packers/${location.slug}`}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-navy hover:border-gold hover:shadow-sm transition-all duration-200"
              >
                <MapPin className="size-3.5 text-gold shrink-0" />
                <span>{location.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Other Emirates */}
        <div className="mb-10">
          <h3 className="text-xl font-extrabold text-navy mb-6">
            Other Emirates
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-3">
            {otherEmirates.map((location) => (
              <Link
                key={location.slug}
                href={`/movers-packers/${location.slug}`}
                className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-navy hover:border-gold hover:shadow-sm transition-all duration-200"
              >
                <MapPin className="size-3.5 text-gold shrink-0" />
                <span>Movers and Packers {location.name}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link
            href="/movers-packers"
            className="inline-flex items-center gap-2 text-gold-dark hover:text-gold font-medium transition-colors"
          >
            CONTACT US NOW
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
