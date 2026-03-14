import Link from "next/link";
import { Phone, MessageCircle, Mail, FileText } from "lucide-react";

const contactChannels = [
  {
    icon: Phone,
    label: "Call Us",
    value: "+971 50 123 4567",
    href: "tel:+971501234567",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat Now",
    href: "https://wa.me/971501234567?text=Hi%2C%20I%20need%20a%20moving%20quote",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@primedubaimovers.com",
    href: "mailto:info@primedubaimovers.com",
  },
  {
    icon: FileText,
    label: "Online Quote",
    value: "Fill Form",
    href: "/free-quote",
    isInternal: true,
  },
];

export default function CTASection() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-custom text-center">
        {/* Heading */}
        <h2 className="text-white mb-4">
          Ready to Move? Get Your Free Quote Today
        </h2>
        <p className="text-white/70 text-lg mb-12 max-w-2xl mx-auto">
          Contact us through any channel for a free, no-obligation moving quote
        </p>

        {/* Contact channels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactChannels.map((channel) => {
            const content = (
              <div className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 hover:bg-white/10 transition-colors duration-200 cursor-pointer">
                <div className="flex items-center justify-center size-12 rounded-full bg-gold/15">
                  <channel.icon className="size-6 text-gold" />
                </div>
                <p className="text-sm font-medium text-white/60">
                  {channel.label}
                </p>
                <p className="text-base font-medium text-gold">
                  {channel.value}
                </p>
              </div>
            );

            if (channel.isInternal) {
              return (
                <Link key={channel.label} href={channel.href}>
                  {content}
                </Link>
              );
            }

            return (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  channel.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
              >
                {content}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
