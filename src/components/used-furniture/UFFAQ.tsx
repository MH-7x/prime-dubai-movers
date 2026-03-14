"use client";

import { useState } from "react";
import type { UFFAQ as UFFAQType } from "@/lib/data/used-furniture-locations";

interface UFFAQProps {
  faqs: UFFAQType[];
  city: string;
}

export default function UFFAQ({ faqs, city }: UFFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#1E3A5F]/10 text-[#1E3A5F] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A5F] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 text-lg">
            Everything you need to know about selling used furniture in {city}.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left group"
                aria-expanded={openIndex === i}
              >
                <span className="font-semibold text-[#1E3A5F] group-hover:text-amber-700 transition-colors pr-4 text-sm md:text-base">
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === i ? "bg-amber-500 rotate-180" : "bg-slate-100 group-hover:bg-amber-100"}`}>
                  <svg className={`w-4 h-4 transition-colors ${openIndex === i ? "text-white" : "text-slate-600"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <div className="h-px bg-slate-100 mb-4" />
                  <p className="text-slate-600 leading-relaxed text-sm md:text-base">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
