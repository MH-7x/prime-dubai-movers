import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Prime Dubai Movers | Best Movers and Packers in Dubai, UAE",
    template: "%s | Prime Dubai Movers",
  },
  description:
    "Trusted movers and packers in Dubai with 14+ years experience. Residential, commercial & villa moving across all UAE emirates. Get your free quote today!",
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
    url: "https://primedubaimovers.com",
    siteName: "Prime Dubai Movers",
    title: "Prime Dubai Movers | Best Movers and Packers in Dubai, UAE",
    description:
      "Trusted movers and packers in Dubai with 14+ years experience. Residential, commercial & villa moving across all UAE emirates. Get your free quote today!",
  },
  robots: {
    index: true,
    follow: true,
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
      <body className={`${inter.className}  antialiased `}>
        <Header />
        <main className="overflow-hidden">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
