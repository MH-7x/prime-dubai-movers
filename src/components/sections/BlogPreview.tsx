import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const blogPosts = [
  {
    title: "How Much Do Movers Cost in Dubai? (2026 Guide)",
    excerpt:
      "A comprehensive breakdown of moving costs across Dubai, from studio apartments to large villas. Learn what factors affect pricing and how to get the best value.",
    date: "March 5, 2026",
    href: "/blog",
    alt: "Moving cost calculator and pricing guide for Dubai relocations",
  },
  {
    title: "House Moving Checklist: Complete Guide",
    excerpt:
      "Your ultimate step-by-step checklist for a stress-free house move in the UAE. From packing tips to move-day essentials, we cover everything.",
    date: "February 28, 2026",
    href: "/blog",
    alt: "Complete house moving checklist for UAE residents",
  },
  {
    title: "How to Choose the Best Movers in Dubai",
    excerpt:
      "Key factors to consider when selecting a moving company in Dubai. Licensing, insurance, reviews, and red flags to watch out for.",
    date: "February 20, 2026",
    href: "/blog",
    alt: "Guide to choosing the best professional movers in Dubai",
  },
];

export default function BlogPreview() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
            Moving Tips & Guides
          </h2>
          <div className="w-20 h-1 bg-gold mx-auto mb-6" />
          <p className="text-body text-lg max-w-2xl mx-auto">
            Expert advice and practical guides to make your next move smoother
            and more affordable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, idx) => (
            <Card
              key={idx}
              className="border-0 shadow-sm hover:shadow-lg transition-shadow overflow-hidden group pt-0"
            >
              {/* Replace with actual blog image */}
              <div className="bg-gray-200 w-full aspect-4/3 flex items-center justify-center text-gray-500 text-sm">
                <span className="px-4 text-center">
                  Placeholder: {post.alt}
                </span>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-body mb-3">
                  <Calendar className="w-4 h-4 text-gold" />
                  {post.date}
                </div>
                <h3 className="text-xl font-extrabold text-navy mb-3 group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="text-body text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={post.href}
                  className="text-gold font-medium text-sm inline-flex items-center gap-1 hover:gap-2 transition-all"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center justify-center border border-navy text-navy hover:bg-navy hover:text-white font-medium px-4 h-9 rounded-lg transition-colors text-sm"
          >
            View All Articles <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
