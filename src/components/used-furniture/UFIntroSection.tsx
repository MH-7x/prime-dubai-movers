import Image from "next/image";

interface UFIntroSectionProps {
  paragraphs: string[];
  city: string;
  img: string;
}

export default function UFIntroSection({
  paragraphs,
  city,
  img,
}: UFIntroSectionProps) {
  const stats = [
    { value: "5,000+", label: "Happy Customers" },
    { value: "12+", label: "Years Experience" },
    { value: "Same Day", label: "Pickup Available" },
    { value: "Free", label: "Valuation" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
              Trusted in {city}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A5F] mb-6 leading-tight">
              Buy and Sell Used Furniture in {city}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-slate-600 leading-relaxed text-base">
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="relative aspect-video bg-gold-light rounded-2xl mb-8 overflow-hidden ">
              {" "}
              <Image
                src={img}
                alt={`Buy and Sell Used Furniture in ${city}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-extrabold text-[#1E3A5F] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
