import { cn } from "@/lib/utils";
import { Award, CheckCircle2, MapPin, Headphones } from "lucide-react";
import Image from "next/image";

const trustItems = [
  {
    icon: Award,
    value: "14+",
    label: "Years Experience",
  },
  {
    icon: CheckCircle2,
    value: "5,000+",
    label: "Successful Moves",
  },
  {
    icon: MapPin,
    value: "All 7",
    label: "Serving All Emirates",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "Customer Support",
  },
];

export default function TrustBar() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 grid grid-cols-1 sm:grid-cols-2 gap-16 items-center">
      <div>
        {" "}
        <h2 className="text-balance text-3xl tracking-tight sm:text-4xl font-extrabold">
          We Are Dubai&apos;s Trusted Moving Company
        </h2>
        <p className="mt-4  text-lg text-muted-foreground ">
          We have been helping people move to Dubai for over 14 years.
        </p>
        <div className="mt-10 rounded-2xl bg-gold-light p-1">
          <div
            className={cn(
              "grid grid-cols-1 gap-1 overflow-hidden rounded-xl sm:grid-cols-2 ",
              "*:rounded  *:first:rounded-t-xl *:last:rounded-b-xl sm:*:nth-2:rounded-tr-xl sm:*:first:rounded-tl-xl sm:*:first:rounded-tr md:*:nth-2:rounded-tr md:*:last:rounded-e-xl md:*:last:rounded-bl md:*:first:rounded-s-xl",
            )}
          >
            {trustItems.map((item) => (
              <div key={item.value} className="bg-background p-10">
                <span className="font-bold text-navy text-3xl">
                  {item.value}
                </span>
                <p className="mt-4 ">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gold aspect-4/5 rounded-3xl relative overflow-hidden drop-shadow-2xl">
        <Image
          src={"/Dubai-trusted-moving-company-prime.jpg"}
          alt="Dubai's Trusted Moving Company, Prime Dubai Movers"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
