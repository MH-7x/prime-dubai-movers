import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


import {
  Home,
  Building,
  Building2,
  Briefcase,
  Sofa,
  Package,
  Wallet,
  Music,
  
} from "lucide-react";

export const services = [
  {
    icon: Home,
    name: "House Moving",
    description:
      "Safe, insured house relocation with professional packing and careful handling of your belongings.",
    href: "/house-movers-dubai",
    src: "/House-Moving-in-Dubai.jpg",
  },
  {
    icon: Building,
    name: "Villa Moving",
    description:
      "Specialized villa moving services with expert disassembly, transport, and reassembly of all furniture.",
    href: "/villa-movers-dubai",
    src: "/Villa-Moving-in-Dubai.jpg",
  },
  {
    icon: Building2,
    name: "Apartment Moving",
    description:
      "Hassle-free apartment relocations with elevator coordination, packing, and same-day delivery.",
    href: "/apartment-movers-dubai",
    src: "/Apartment-Moving-in-Dubai.jpg",
  },
  {
    icon: Briefcase,
    name: "Office Moving",
    description:
      "Minimize downtime with our efficient office relocation services including IT equipment handling.",
    href: "/office-movers-dubai",
    src: "/Office-Moving-in-Dubai.jpg",
  },
  {
    icon: Sofa,
    name: "Furniture Moving",
    description:
      "Expert furniture disassembly, wrapping, transport, and reassembly with damage-free guarantee.",
    href: "/furniture-movers-dubai",
    src: "/Furniture-Moving-in-Dubai.jpg",
  },
  {
    icon: Package,
    name: "Packing Services",
    description:
      "Professional packing with premium materials to ensure every item arrives safely at your new home.",
    href: "/packing-services-dubai",
    src: "/Packing-Services-in-Dubai.jpg",
  },
  {
    icon: Wallet,
    name: "Cheap Movers",
    description:
      "Budget-friendly moving packages without compromising on quality, safety, or professionalism.",
    href: "/cheap-movers-dubai",
    src: "/Cheap-Movers-in-Dubai.jpg",
  },
  {
    icon: Music,
    name: "Piano Moving",
    description:
      "Specialized piano and heavy instrument moving with custom crating and climate-controlled transport.",
    href: "/piano-movers-dubai",
    src: "/Piano-Moving-in-Dubai.jpg",
  },
];
