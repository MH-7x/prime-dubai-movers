import Link from "next/link";
import { Phone } from "lucide-react";
import Image from "next/image";
import imgSrc from "../../../public/prime-dubai-movers.jpg";
export default function HeroSection() {
  return (
    <section className="relative h-max md:min-h-150 flex items-center bg-navy/86">
      <Image
        src={imgSrc}
        alt="Prime Dubai Movers and Packers"
        fill
        loading="eager"
        placeholder="blur"
        className="object-cover -z-10"
      />
      <div className="relative container-custom w-full pb-20 pt-16 md:py-28">
        <div className="max-w-3xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/10 px-4 py-2 text-sm text-gold mb-8 backdrop-blur-sm">
            <span className="font-medium">14+ Years</span>
            <span className="text-white/40">|</span>
            <span className="font-medium">5,000+ Moves</span>
            <span className="text-white/40">|</span>
            <span className="font-medium">All 7 Emirates</span>
          </div>

          <h1 className="text-white font-extrabold text-[33px] mb-6 md:text-5xl">
            <span className="text-primary md:block">Prime Dubai Movers</span>{" "}
            Best Movers and Packers <br className="md:block hidden" /> in Dubai
          </h1>

          <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 max-w-2xl">
            Professional residential, commercial &amp; villa moving across all
            UAE emirates. Licensed, insured &amp; rated 5-stars by thousands of
            happy customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/free-quote"
              className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-secondary font-medium px-8 h-12 text-base rounded-lg transition-colors"
            >
              Get Free Quote
            </Link>

            <a
              href="tel:+971561046146"
              className="inline-flex items-center justify-center border border-white text-white hover:bg-white/10 font-medium px-8 h-12 text-base rounded-lg transition-colors"
            >
              <Phone className="size-4 mr-2" />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
