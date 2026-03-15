import type { UFPricingRow } from "@/lib/data/used-furniture-locations";

interface UFPricingTableProps {
  rows: UFPricingRow[];
  note: string;
  city: string;
  whatsappNumber?: string;
}

export default function UFPricingTable({
  rows,
  note,
  city,
  whatsappNumber = "971561046146",
}: UFPricingTableProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block bg-[#1E3A5F]/10 text-[#1E3A5F] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            Price Guide
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A5F] mb-4">
            What Is Your Furniture Worth in {city}?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Estimated price ranges based on condition. Actual prices depend on
            brand, age, and market demand.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-[#1E3A5F]">
                  <th className="text-left text-white font-semibold px-6 py-4 text-sm">
                    Item / Category
                  </th>
                  <th className="text-center text-white font-semibold px-6 py-4 text-sm">
                    Fair Condition
                  </th>
                  <th className="text-center text-white font-semibold px-6 py-4 text-sm">
                    Good / Excellent
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-slate-100 hover:bg-amber-50/50 transition-colors ${i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-[#1E3A5F]">
                      {row.item}
                    </td>
                    <td className="px-6 py-4 text-center text-sm text-slate-600">
                      {row.fairCondition}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-amber-700">
                      {row.goodCondition}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-amber-50 border-t border-amber-200">
            <p className="text-sm text-amber-800 italic">{note}</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%20want%20to%20sell%20used%20furniture%20in%20${encodeURIComponent(city)}%20and%20need%20a%20quote`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-amber-500/30"
          >
            Get Your Personalised Quote on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
