interface UFAreasServedProps {
  areas: string[];
  city: string;
}

export default function UFAreasServed({ areas, city }: UFAreasServedProps) {
  return (
    <section className="py-20 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Coverage
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Areas We Serve Across {city}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Same-day furniture pickup service across every residential and
            commercial area in {city}. No area is too far.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {areas.map((area, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-amber-500/20 border border-white/10 hover:border-amber-500/40 text-slate-300 hover:text-amber-300 text-sm px-4 py-2 rounded-full transition-all duration-200 cursor-default"
              >
                <svg
                  className="w-3 h-3 text-amber-500 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                {area}
              </span>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">
            Don&apos;t see your area?{" "}
            <a
              href="https://wa.me/971561046146"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline"
            >
              WhatsApp us to confirm
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
