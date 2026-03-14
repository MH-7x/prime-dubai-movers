interface UFWhyChooseUsProps {
  reasons: { title: string; description: string }[];
  city: string;
}

export default function UFWhyChooseUs({ reasons, city }: UFWhyChooseUsProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A5F] mb-4">
            Why {city} Residents Choose Us
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            In a market full of unreliable dealers, here&apos;s what makes us different.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="group relative bg-slate-50 hover:bg-[#1E3A5F] rounded-2xl p-7 border border-slate-200 hover:border-[#1E3A5F] transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-500/20 group-hover:bg-amber-500/30 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <svg className="w-5 h-5 text-amber-600 group-hover:text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-[#1E3A5F] group-hover:text-white transition-colors">
                  {reason.title}
                </h3>
              </div>
              <p className="text-slate-600 group-hover:text-slate-300 text-sm leading-relaxed transition-colors">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
