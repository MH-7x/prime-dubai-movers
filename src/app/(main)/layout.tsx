import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import Script from "next/script";
import ActionButton from "@/components/ActionButtons";
import BlogPreview from "@/components/sections/BlogPreview";
import GTM from "@/components/GTM";
const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  keywords: [
    "movers and packers in Dubai",
    "best movers Dubai",
    "moving company Dubai",
    "packers and movers Dubai",
    "villa movers Dubai",
    "house movers Dubai",
    "office movers Dubai",
    "furniture movers Dubai",
    "cheap movers Dubai",
    "movers UAE",
  ],
  authors: [{ name: "Prime Dubai Movers" }],
  openGraph: {
    type: "website",
    locale: "en_AE",
    url: process.env.APP_URL,
    siteName: "Prime Dubai Movers",
    title: "Prime Dubai Movers | Best Movers and Packers in Dubai, UAE",
    description:
      "Trusted movers and packers in Dubai with 14+ years experience. Residential, commercial & villa moving across all UAE emirates. Get your free quote today!",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GTM />
      <body className={`${inter.className}  antialiased `}>
        <Header />
        <main className="overflow-hidden">{children}</main>
        <BlogPreview />
        <Footer />

        <ActionButton />
        <Toaster />

        <Script
          id="organization-schema"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Prime Dubai Movers",
              url: process.env.APP_URL,
              logo: `${process.env.APP_URL}/logo.svg`,
              image: `${process.env.APP_URL}/prime-dubai-movers.jpg`,
              telephone: "+971561046146",
              email: "primedubaimovers.com@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
                postalCode: "00000",
                streetAddress: "3 35a St - Zaa'beel Second - Za'abeel",
              },
              sameAs: [
                "https://www.facebook.com/primedubaimovers",
                "https://www.instagram.com/primedubaimovers",
              ],
            }),
          }}
        />
        {/* LocalBusiness Schema */}
        <Script
          id="localBusiness-schema"
          strategy="beforeInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Prime Dubai Movers",
              description:
                "Trusted movers and packers in Dubai with 14+ years experience. Residential, commercial & villa moving across all UAE emirates.",
              url: process.env.APP_URL,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Dubai",
                addressCountry: "AE",
                postalCode: "00000",
                streetAddress:
                  "Office # 702 Al Mustaqbal St - Zaa'beel Second - Za'abeel",
              },
              image: `${process.env.APP_URL}/prime-dubai-movers.jpg`,
              telephone: "+971561046146",
              email: "primedubaimovers.com@gmail.com",
              priceRange: "AED 499 - AED 30,000",
              areaServed: [
                { "@type": "State", name: "Dubai" },
                { "@type": "State", name: "Abu Dhabi" },
                { "@type": "State", name: "Sharjah" },
                { "@type": "State", name: "Ajman" },
                { "@type": "State", name: "Ras Al Khaimah" },
                { "@type": "State", name: "Fujairah" },
                { "@type": "State", name: "Umm Al Quwain" },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Saturday",
                    "Sunday",
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Friday",
                  opens: "09:00",
                  closes: "17:00",
                },
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "2847",
                bestRating: "5",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
