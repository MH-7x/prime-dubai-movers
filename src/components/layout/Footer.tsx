"use client";

import React from "react";
import Link from "next/link";
import { Phone, Mail, Clock, MapPin, Facebook, Instagram } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Free Quote", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

const footerServices = [
  { name: "House Moving", href: "/house-movers-dubai" },
  { name: "Villa Moving", href: "/villa-movers-dubai" },
  { name: "Apartment Moving", href: "/apartment-movers-dubai" },
  { name: "Office Moving", href: "/office-movers-dubai" },
  { name: "Furniture Moving", href: "/furniture-movers-dubai" },
  { name: "Packing Services", href: "/packing-services-dubai" },
];

const locations = [
  { href: "/used-furniture-buyers-dubai", label: "Dubai" },
  { href: "/used-furniture-buyers-abu-dhabi", label: "Abu Dhabi" },
  { href: "/used-furniture-buyers-sharjah", label: "Sharjah" },
  { href: "/used-furniture-buyers-ajman", label: "Ajman" },
  { href: "/used-furniture-buyers-al-ain", label: "Al Ain" },
  { href: "/used-furniture-buyers-ras-al-khaimah", label: "Ras Al Khaimah" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white border-t-4 border-gold-light">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-10 lg:gap-8">
          {/* Column 1: Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-extrabold tracking-tight">
                <span className="text-gold">PRIME</span>{" "}
                <span className="text-white">DUBAI MOVERS</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              Your trusted partner for professional moving services across Dubai
              and the UAE. We deliver safe, reliable, and affordable relocations
              for homes, offices, and businesses.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex items-center justify-center size-9 rounded-full bg-navy-light hover:bg-gold transition-colors duration-200"
              >
                <Facebook className="size-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center size-9 rounded-full bg-navy-light hover:bg-gold transition-colors duration-200"
              >
                <Instagram className="size-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-extrabold text-white mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div>
            <h4 className="text-base font-extrabold text-white mb-4">
              Our Services
            </h4>
            <ul className="flex flex-col gap-2.5">
              {footerServices.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Used Furniture */}
          <div>
            <h4 className="text-base font-extrabold text-white mb-4">
              Used Furniture
            </h4>
            <ul className="flex flex-col gap-2.5">
              {locations.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="text-sm text-gray-300 hover:text-gold transition-colors duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-base font-extrabold text-white mb-4">
              Contact Info
            </h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-gold mt-0.5 shrink-0" />
                <span className="text-sm text-gray-300">Dubai, UAE</span>
              </li>
              <li>
                <a
                  href="tel:+971561046146"
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-gold transition-colors duration-200"
                >
                  <Phone className="size-4 text-gold mt-0.5 shrink-0" />
                  +971 56 104 6146
                </a>
              </li>
              <li>
                <a
                  href="mailto:primedubaimovers.com@gmail.com"
                  className="flex items-start gap-3 text-sm text-gray-300 hover:text-gold transition-colors duration-200"
                >
                  <Mail className="size-4 text-gold mt-0.5 shrink-0" />
                  primedubaimovers.com@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="size-4 text-gold mt-0.5 shrink-0" />
                <div className="text-sm text-gray-300">
                  <p>Sat - Thu: 8AM - 8PM, Fri: 9AM - 5PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-navy-dark">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between py-4 gap-3 text-sm text-gray-400">
          <p suppressHydrationWarning>
            &copy; {currentYear} Prime Dubai Movers. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-gold transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-gold transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
          <a
            href="https://wa.me/+923471309916?text=Hello%20Mashal,%20I%20Need%20Your%20Service%20!"
            rel="noopener noreferrer"
            className="hover:text-gold transition-colors duration-200 md:inline block"
          >
            Design & Maintenance by <span>Mashal Huraira</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
