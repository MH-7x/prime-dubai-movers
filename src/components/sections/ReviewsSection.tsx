"use client";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import GoogleReviewCard from "../GoogleReviewCard";
import { Star } from "lucide-react";

const googleReviews = [
  {
    name: "Khalid Al-Hashmi",
    time: "4 days ago",
    star: 5,
    review:
      "Prime Dubai Movers relocated us from Dubai Marina to JVC and everything went perfectly. They were super gentle with all our stuff and got it done quicker than we thought.",
    image: "/ava/32.jpg",
  },
  {
    name: "Rebecca Thompson",
    time: "3 weeks ago",
    star: 5,
    review:
      "So impressed with how careful they were during my move. Every item was packed securely and nothing got broken — even my glass dining table made it in one piece.",
    image: "/ava/44.jpg",
  },
  {
    name: "Arjun Nair",
    time: "2 days ago",
    star: 5,
    review:
      "Booked them on short notice for a move in Sharjah and they still arrived right on time. Honest pricing as well — no surprises when it came to the bill.",
    image: "/ava/86.jpg",
  },
  {
    name: "Layla Ibrahim",
    time: "5 weeks ago",
    star: 5,
    review:
      "We hired Prime Dubai Movers for our villa relocation in Abu Dhabi. The crew was polite, worked really hard, and put all our wardrobes back together perfectly.",
    image: "/ava/68.jpg",
  },
  {
    name: "Tom Bradley",
    time: "6 days ago",
    star: 5,
    review:
      "Got my entire one-bedroom packed and moved in under three hours. These guys clearly know their job and put everything exactly where I wanted.",
    image: "/ava/22.jpg",
  },
  {
    name: "Noura Al-Suwaidi",
    time: "2 months ago",
    star: 5,
    review:
      "Was really worried about moving my piano but Prime Dubai Movers took care of it professionally. Super cautious team and they kept me updated throughout.",
    image: "/ava/90.jpg",
  },
  {
    name: "Daniel Carter",
    time: "10 days ago",
    star: 5,
    review:
      "This is my third time booking them and the quality never drops. Dependable furniture movers in Dubai — trust me, that's not easy to come by.",
    image: "/ava/54.jpg",
  },
  {
    name: "Amina Rashid",
    time: "2 weeks ago",
    star: 5,
    review:
      "They wrapped all my kitchenware and fragile items with so much care. Everything arrived without a single mark. Definitely telling my friends about Prime Dubai Movers.",
    image: "/ava/29.jpg",
  },
  {
    name: "Chris Fernandez",
    time: "6 weeks ago",
    star: 5,
    review:
      "Hired them for an office relocation in Business Bay. Fast, well-coordinated, and the quote was reasonable compared to other companies I reached out to.",
    image: "/ava/11.jpg",
  },
  {
    name: "Sana Malik",
    time: "1 week ago",
    star: 5,
    review:
      "Had a seamless move from Ajman to Dubai. The guys were really nice and took their time with everything. I'd happily use Prime Dubai Movers again.",
    image: "/ava/19.jpg",
  },
];

export default function ReviewSection() {
  return (
    <section className="mt-16 max-w-6xl md:px-0 px-3 pb-24 mx-auto">
      <div className="flex items-center justify-center text-center flex-col">
        <h2 className="font-extrabold text-brand-secondary whitespace-normal md:text-4xl text-3xl wrap-break-word">
          Customer&apos;s Reviews About Prime Dubai Movers
        </h2>
        <p className="text-brand-text max-w-2xl mx-auto mt-5">
          Thousands of families and businesses across the UAE have trusted us
          with their moves. Here&apos;s what some of them have to say.
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="flex gap-x-1 ">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
          </div>
          <span className="text-brand-secondary font-bold">4.9/5</span>
          <span className="text-brand-text text-sm">based on 500+ reviews</span>
        </div>
      </div>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2500,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-5xl mx-auto mt-10"
      >
        <CarouselContent>
          {googleReviews.map((review, index) => (
            <CarouselItem
              key={index}
              className="md:basis-1/2 lg:basis-1/3 select-none"
            >
              <GoogleReviewCard review={{ ...review }} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
