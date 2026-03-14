import type { UFStep } from "@/lib/data/used-furniture-locations";

interface UFHowItWorksProps {
  steps: UFStep[];
  city: string;
}

export default function UFHowItWorks({ steps, city }: UFHowItWorksProps) {
  return (
    <section className="py-20 bg-[#1E3A5F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-500/20 text-amber-400 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Simple Process
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            How to Sell Your Used Furniture in {city}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From first contact to cash in hand — usually completed the same day.
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 ${steps.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} gap-8`}>
          {steps.map((step) => (
            <div key={step.step} className="flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-2xl font-extrabold text-[#1E3A5F] group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-amber-500/30">
                  {step.step}
                </div>
                <div className="absolute inset-0 w-16 h-16 bg-amber-400/30 rounded-full blur-md -z-10" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
