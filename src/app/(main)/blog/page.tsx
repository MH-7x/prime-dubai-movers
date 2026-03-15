import { Metadata } from "next";
import Link from "next/link";
import { Calendar, ArrowRight, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Moving Tips & Guides Blog | Prime Dubai Movers",
  description:
    "Expert moving tips, relocation guides, and industry insights from Prime Dubai Movers. Learn how to plan your move, reduce costs, and choose the best movers in Dubai.",
};

const blogPosts = [
  {
    title: "How Much Do Movers Cost in Dubai? (2026 Guide)",
    excerpt:
      "A comprehensive breakdown of moving costs across Dubai neighborhoods, from studio apartments to large villas. Discover what factors affect pricing and how to budget for your next move.",
    date: "March 5, 2026",
    category: "Cost Guide",
    alt: "Moving cost guide and pricing breakdown for Dubai relocations",
  },
  {
    title: "House Moving Checklist: Complete Guide for UAE",
    excerpt:
      "Your ultimate step-by-step moving checklist covering everything from 8 weeks before your move to settling into your new home. Never forget a critical task again.",
    date: "February 28, 2026",
    category: "Moving Tips",
    alt: "Complete house moving checklist for residents in UAE",
  },
  {
    title: "How to Choose the Best Movers in Dubai",
    excerpt:
      "Key factors to evaluate when selecting a moving company in Dubai. Learn about licensing, insurance, reviews, pricing transparency, and red flags to watch out for.",
    date: "February 20, 2026",
    category: "Decision Guide",
    alt: "Guide to choosing reliable professional movers in Dubai",
  },
  {
    title: "10 Tips to Reduce Your Moving Costs in UAE",
    excerpt:
      "Practical strategies to save money on your next move without compromising quality. From timing your move right to decluttering effectively, these tips can save you hundreds.",
    date: "February 15, 2026",
    category: "Cost Saving",
    alt: "Money-saving tips for affordable moving in UAE",
  },
  {
    title: "Villa Moving in Dubai: Everything You Need to Know",
    excerpt:
      "A specialized guide for villa relocations in Dubai covering garden furniture, large appliances, pool equipment, and the unique challenges of community-based villa moves.",
    date: "February 10, 2026",
    category: "Villa Moving",
    alt: "Comprehensive villa moving guide for Dubai residents",
  },
  {
    title: "Office Relocation Tips for Businesses in UAE",
    excerpt:
      "Minimize downtime and ensure business continuity during your office move. Expert advice on IT equipment handling, employee communication, and phased relocation strategies.",
    date: "February 5, 2026",
    category: "Commercial",
    alt: "Office relocation planning tips for UAE businesses",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-300 mb-6">
            <Link href="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold">Blog</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Moving Tips, Guides & Industry Insights
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Expert advice from Dubai&apos;s trusted movers to help you plan,
            budget, and execute a stress-free relocation.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, idx) => (
              <Card
                key={idx}
                className="border-0 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group"
              >
                {/* Replace with actual blog image */}
                <div className="bg-gray-200 w-full h-52 flex items-center justify-center text-gray-500 text-sm">
                  <span className="px-4 text-center">
                    Placeholder: {post.alt}
                  </span>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-gold bg-gold/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-body">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </div>
                  </div>
                  <h2 className="text-xl font-extrabold text-navy mb-3 group-hover:text-gold transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-body text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="text-gold font-medium text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all cursor-pointer">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 py-10 bg-off-white rounded-2xl">
            <h3 className="text-2xl font-extrabold text-navy mb-3">
              More Articles Coming Soon!
            </h3>
            <p className="text-body max-w-lg mx-auto">
              We are working on more helpful guides covering moving costs, area
              guides, packing tips, and relocation advice for every UAE emirate.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Ready to Start Your Move?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get a free, no-obligation quote from Dubai&apos;s most trusted
            movers and packers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-quote"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-white font-medium text-lg px-8 py-3 rounded-lg transition-colors"
            >
              Get Free Quote
            </Link>
            <a
              href="tel:+971561046146"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 font-medium text-lg px-8 py-3 rounded-lg transition-colors"
            >
              Call +971 56 104 6146
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
