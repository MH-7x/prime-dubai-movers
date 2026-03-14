"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  Clock,
  ChevronDown,
  Menu,
  Facebook,
  Instagram,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";

const services = [
  { name: "House Moving", href: "/house-movers-dubai" },
  { name: "Villa Moving", href: "/villa-movers-dubai" },
  { name: "Apartment Moving", href: "/apartment-movers-dubai" },
  { name: "Office Moving", href: "/office-movers-dubai" },
  { name: "Furniture Moving", href: "/furniture-movers-dubai" },
  { name: "Piano Moving", href: "/piano-movers-dubai" },
  { name: "Safe Moving", href: "/safe-movers-dubai" },
  { name: "Cheap Movers", href: "/cheap-movers-dubai" },
  { name: "Packing Services", href: "/packing-services-dubai" },
];

const dubaiLocations = [
  "Palm Jumeirah",
  "Downtown Dubai",
  "Dubai Marina",
  "JVC",
  "JLT",
  "Business Bay",
  "Al Barsha",
  "Arabian Ranches",
  "Emirates Hills",
  "Damac Hills",
  "Al Nahda",
  "Silicon Oasis",
  "Bur Dubai",
  "Deira",
  "Al Quoz",
  "JVT",
  "Motor City",
  "International City",
];

const otherEmiratesLocations = [
  "Abu Dhabi",
  "Sharjah",
  "Ajman",
  "Ras Al Khaimah",
  "Fujairah",
  "Umm Al Quwain",
  "Al Ain",
  "Khalifa City",
  "Al Reem Island",
  "Mussafah",
  "Al Majaz",
  "Al Nahda Sharjah",
];

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const locations = [
  { href: "/used-furniture-buyers-dubai", label: "Dubai" },
  { href: "/used-furniture-buyers-abu-dhabi", label: "Abu Dhabi" },
  { href: "/used-furniture-buyers-sharjah", label: "Sharjah" },
  { href: "/used-furniture-buyers-ajman", label: "Ajman" },
  { href: "/used-furniture-buyers-al-ain", label: "Al Ain" },
  { href: "/used-furniture-buyers-ras-al-khaimah", label: "Ras Al Khaimah" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileSection = (section: string) => {
    setMobileExpanded(mobileExpanded === section ? null : section);
  };

  return (
    <header className="w-full z-50">
      {/* Top Bar */}
      <div className="bg-navy-dark text-white text-xs">
        <div className="container-custom flex items-center justify-between py-2.5">
          <div className="hidden md:flex items-center gap-5">
            <a
              href="tel:+971501234567"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Phone className="size-3" />
              <span>+971 50 123 4567</span>
            </a>
            <a
              href="mailto:info@primedubaimovers.com"
              className="flex items-center gap-1.5 hover:text-gold transition-colors"
            >
              <Mail className="size-3" />
              <span>info@primedubaimovers.com</span>
            </a>
            <span className="flex items-center gap-1.5">
              <Clock className="size-3" />
              <span>Sat-Thu 8AM-8PM | Fri 9AM-5PM</span>
            </span>
          </div>
          <div className="flex items-center justify-between gap-3  md:w-max w-full">
            <div>
              <a
                href="tel:+971501234567"
                className="md:hidden flex items-center gap-1.5 hover:text-gold transition-colors"
              >
                <Phone className="size-3" />
                <span>+971 50 123 4567</span>
              </a>
            </div>
            <div className="flex gap-x-3 md:ml-auto">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-gold transition-colors"
              >
                <Facebook className="size-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-gold transition-colors"
              >
                <Instagram className="size-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Main Header */}
      <div
        className={`bg-white border-b border-gray-100 transition-shadow duration-300 ${
          isScrolled ? "sticky top-0 shadow-md z-50" : ""
        }`}
      >
        <div className="container-custom flex items-center justify-between py-2">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 shrink-0 relative">
            <Image
              src={"/logo.svg"}
              alt="Prime Dubai Movers Logo"
              width={130}
              height={130}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors">
                Services
                <ChevronDown
                  className={`size-3.5 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "services" && (
                <div className="absolute top-full z-10 left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-body hover:bg-off-white hover:text-gold transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-1 pt-1">
                    <Link
                      href="/services"
                      className="block px-4 py-2 text-sm font-medium text-gold hover:bg-off-white transition-colors"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Movers & Packers Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("locations")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors">
                Movers &amp; Packers
                <ChevronDown
                  className={`size-3.5 transition-transform duration-200 ${
                    activeDropdown === "locations" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "locations" && (
                <div className="absolute top-full z-10 left-1/2 -translate-x-1/2 w-[680px] bg-white rounded-lg shadow-xl border border-gray-100 p-6 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="grid grid-cols-2 gap-8">
                    {/* Dubai Locations */}
                    <div>
                      <h4 className="text-sm font-extrabold text-navy mb-3 flex items-center gap-1.5">
                        <MapPin className="size-4 text-gold" />
                        Dubai
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {dubaiLocations.map((location) => (
                          <Link
                            key={location}
                            href={`/movers-packers/${toSlug(location)}`}
                            className="text-sm text-body hover:text-gold transition-colors py-1"
                          >
                            {location}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Other Emirates */}
                    <div>
                      <h4 className="text-sm font-extrabold text-navy mb-3 flex items-center gap-1.5">
                        <MapPin className="size-4 text-gold" />
                        Other Emirates
                      </h4>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                        {otherEmiratesLocations.map((location) => (
                          <Link
                            key={location}
                            href={`/movers-packers/${toSlug(location)}`}
                            className="text-sm text-body hover:text-gold transition-colors py-1"
                          >
                            {location}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Used Furniture Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("furniture")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors">
                Used Furniture
                <ChevronDown
                  className={`size-3.5 transition-transform duration-200 ${
                    activeDropdown === "furniture" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {activeDropdown === "furniture" && (
                <div className="absolute top-full z-10 left-0 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  {locations.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-body hover:bg-off-white hover:text-gold transition-colors"
                    >
                      {service.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/about"
              className="px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="px-3 py-2 text-sm font-medium text-navy hover:text-gold transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link href="/free-quote" className="hidden sm:block">
              <Button className="bg-gold hover:bg-gold-dark text-white font-medium px-5 h-9 rounded-lg text-sm cursor-pointer">
                Get Free Quote
              </Button>
            </Link>

            {/* Mobile Menu */}
            <div className="lg:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label="Open menu"
                    />
                  }
                >
                  <Menu className="size-5 text-navy" />
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[300px] sm:w-[360px] overflow-y-auto"
                >
                  <SheetHeader>
                    <SheetTitle>
                      <span className="text-gold font-extrabold">PRIME</span>{" "}
                      <span className="text-navy font-extrabold">
                        DUBAI MOVERS
                      </span>
                    </SheetTitle>
                  </SheetHeader>

                  <nav className="flex flex-col px-4 pb-6">
                    <Link
                      href="/"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 text-sm font-medium text-navy border-b border-gray-100 hover:text-gold transition-colors"
                    >
                      Home
                    </Link>

                    {/* Mobile Services */}
                    <div className="border-b border-gray-100">
                      <button
                        onClick={() => toggleMobileSection("services")}
                        className="flex items-center justify-between w-full py-3 text-sm font-medium text-navy hover:text-gold transition-colors"
                      >
                        Services
                        <ChevronDown
                          className={`size-4 transition-transform duration-200 ${
                            mobileExpanded === "services" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === "services" && (
                        <div className="pb-3 pl-4 flex flex-col gap-1">
                          {services.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-1.5 text-sm text-body hover:text-gold transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            onClick={() => setMobileOpen(false)}
                            className="py-1.5 text-sm font-medium text-gold"
                          >
                            View All Services
                          </Link>
                        </div>
                      )}
                    </div>

                    {/* Mobile Movers & Packers */}
                    <div className="border-b border-gray-100">
                      <button
                        onClick={() => toggleMobileSection("locations")}
                        className="flex items-center justify-between w-full py-3 text-sm font-medium text-navy hover:text-gold transition-colors"
                      >
                        Movers &amp; Packers
                        <ChevronDown
                          className={`size-4 transition-transform duration-200 ${
                            mobileExpanded === "locations" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === "locations" && (
                        <div className="pb-3 pl-4">
                          <p className="text-xs font-extrabold text-navy mb-2 flex items-center gap-1">
                            <MapPin className="size-3 text-gold" />
                            Dubai
                          </p>
                          <div className="flex flex-col gap-1 mb-3">
                            {dubaiLocations.map((location) => (
                              <Link
                                key={location}
                                href={`/movers-packers/${toSlug(location)}`}
                                onClick={() => setMobileOpen(false)}
                                className="py-1 text-sm text-body hover:text-gold transition-colors"
                              >
                                {location}
                              </Link>
                            ))}
                          </div>
                          <p className="text-xs font-extrabold text-navy mb-2 flex items-center gap-1">
                            <MapPin className="size-3 text-gold" />
                            Other Emirates
                          </p>
                          <div className="flex flex-col gap-1">
                            {otherEmiratesLocations.map((location) => (
                              <Link
                                key={location}
                                href={`/movers-packers/${toSlug(location)}`}
                                onClick={() => setMobileOpen(false)}
                                className="py-1 text-sm text-body hover:text-gold transition-colors"
                              >
                                {location}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Used Furniture */}
                    <div className="border-b border-gray-100">
                      <button
                        onClick={() => toggleMobileSection("furniture")}
                        className="flex items-center justify-between w-full py-3 text-sm font-medium text-navy hover:text-gold transition-colors"
                      >
                        Used Furniture
                        <ChevronDown
                          className={`size-4 transition-transform duration-200 ${
                            mobileExpanded === "furniture" ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {mobileExpanded === "furniture" && (
                        <div className="pb-3 pl-4 flex flex-col gap-1">
                          {locations.map((service) => (
                            <a
                              key={service.href}
                              href={service.href}
                              onClick={() => setMobileOpen(false)}
                              className="py-1.5 text-sm text-body hover:text-gold transition-colors"
                            >
                              {service.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                    <Link
                      href="/about"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 text-sm font-medium text-navy border-b border-gray-100 hover:text-gold transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="py-3 text-sm font-medium text-navy border-b border-gray-100 hover:text-gold transition-colors"
                    >
                      Contact
                    </Link>

                    <Link
                      href="/contact"
                      onClick={() => setMobileOpen(false)}
                      className="mt-4"
                    >
                      <Button className="w-full bg-gold hover:bg-gold-dark text-white font-medium h-10 rounded-lg cursor-pointer">
                        Get Free Quote
                      </Button>
                    </Link>

                    {/* Mobile Contact Info */}
                    <div className="mt-6 pt-4 border-t border-gray-100 flex flex-col gap-3 text-sm text-body">
                      <a
                        href="tel:+971501234567"
                        className="flex items-center gap-2 hover:text-gold transition-colors"
                      >
                        <Phone className="size-4 text-gold" />
                        +971 50 123 4567
                      </a>
                      <a
                        href="mailto:info@primedubaimovers.com"
                        className="flex items-center gap-2 hover:text-gold transition-colors"
                      >
                        <Mail className="size-4 text-gold" />
                        info@primedubaimovers.com
                      </a>
                      <span className="flex items-center gap-2">
                        <Clock className="size-4 text-gold" />
                        Sat-Thu 8AM-8PM | Fri 9AM-5PM
                      </span>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
