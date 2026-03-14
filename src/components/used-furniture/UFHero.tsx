import Link from "next/link";

interface UFHeroProps {
  h1: string;
  subtitle: string;
  tagline: string;
  city: string;
  whatsappNumber?: string;
  phone?: string;
}

export default function UFHero({
  h1,
  subtitle,
  tagline,
  city,
  whatsappNumber = "971501234567",
  phone = "+971 50 123 4567",
}: UFHeroProps) {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-[#1E3A5F]">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-slate-800" aria-hidden="true" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/80 to-[#1E3A5F]/50" />
      </div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-500/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse" />
            <span className="text-amber-300 text-sm font-medium">
              Serving All of {city} — Same-Day Service
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4">
            {h1}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-4 font-medium">
            {subtitle}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {tagline.split("·").map((t, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 text-sm text-amber-200 bg-white/10 rounded-full px-3 py-1"
              >
                <svg
                  className="w-3.5 h-3.5 text-amber-400 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {t.trim()}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20want%20to%20sell%20used%20furniture%20in%20${encodeURIComponent(city)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-0.5 text-base"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp for Free Quote
            </a>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold px-6 py-3.5 rounded-xl transition-all duration-200 hover:-translate-y-0.5 text-base backdrop-blur-sm"
            >
              <svg
                className="w-5 h-5 text-amber-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
                />
              </svg>
              Call Us Now
            </a>
          </div>

          <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6">
            {[
              { icon: "⚡", text: "Quote in 30 mins" },
              { icon: "💵", text: "Instant cash payment" },
              { icon: "🚚", text: "Free same-day pickup" },
              { icon: "✅", text: "No obligation" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex md:flex-row flex-col items-center gap-2 text-slate-300"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
