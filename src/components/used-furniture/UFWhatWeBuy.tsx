import type { UFCategory } from "@/lib/data/used-furniture-locations";

const CATEGORY_ICONS: Record<string, string> = {
  default: "🪑",
  "Home & Villa Furniture": "🏠",
  "Office Furniture": "🏢",
  "Used Office Furniture": "🏢",
  "Hotel & Restaurant Furniture": "🏨",
  "Appliances & Electronics": "📱",
  "Outdoor Furniture": "🌿",
  "Used Living Room Furniture": "🛋️",
  "Used Bedroom Furniture": "🛏️",
  "Bedroom Furniture": "🛏️",
  "Living Room Furniture": "🛋️",
  "Dining & Kitchen Furniture": "🍽️",
  "Dining Room Furniture": "🍽️",
  "Used Home Appliances": "🧊",
  "Home Appliances": "🧊",
  "Used Home Appliances & Electronics": "📺",
  "Used IKEA Furniture": "🟡",
  "Home Furniture": "🏠",
  "Used Home Furniture": "🏠",
  "Specialty & Household Items": "📦",
  "Commercial Furniture": "🏗️",
  "Full Property Clearance": "🚛",
};

interface UFWhatWeBuyProps {
  categories: UFCategory[];
  city: string;
}

export default function UFWhatWeBuy({ categories, city }: UFWhatWeBuyProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1.5 rounded-full mb-4 tracking-wide uppercase">
            What We Accept
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E3A5F] mb-4">
            What We Buy &amp; Sell in {city}
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            We purchase virtually every category of household and commercial furniture, appliances, and electronics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="group bg-slate-50 hover:bg-amber-50 border border-slate-200 hover:border-amber-300 rounded-2xl p-6 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-start gap-4 mb-4">
                <span className="text-3xl flex-shrink-0">
                  {CATEGORY_ICONS[cat.category] || CATEGORY_ICONS.default}
                </span>
                <h3 className="text-lg font-bold text-[#1E3A5F] group-hover:text-amber-700 transition-colors">
                  {cat.category}
                </h3>
              </div>
              <ul className="space-y-1.5">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
