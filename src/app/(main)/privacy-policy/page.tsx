import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Prime Dubai Movers",
  description:
    "Read the privacy policy of Prime Dubai Movers. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-gray-300 mb-4">
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-gold">Privacy Policy</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <p className="text-body text-sm mb-8">Last Updated: March 1, 2026</p>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">1. Introduction</h2>
          <p className="text-body leading-relaxed mb-4">
            Prime Dubai Movers (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website primedubaimovers.com, use our services, or interact with us through any channel.
          </p>
          <p className="text-body leading-relaxed mb-4">
            By using our website or services, you agree to the collection and use of information in accordance with this policy. If you do not agree with the terms of this privacy policy, please do not access our website.
          </p>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">2. Information We Collect</h2>
          <h3 className="text-xl font-extrabold text-navy mt-6 mb-3">2.1 Personal Information</h3>
          <p className="text-body leading-relaxed mb-4">We may collect personally identifiable information that you voluntarily provide, including:</p>
          <ul className="list-disc pl-6 text-body space-y-2 mb-4">
            <li>Full name and contact details (email address, phone number)</li>
            <li>Moving origin and destination addresses</li>
            <li>Property type and size details</li>
            <li>Preferred moving dates and scheduling information</li>
            <li>Special requirements or notes about your move</li>
            <li>Payment information for completed services</li>
          </ul>

          <h3 className="text-xl font-extrabold text-navy mt-6 mb-3">2.2 Automatically Collected Information</h3>
          <p className="text-body leading-relaxed mb-4">When you visit our website, we may automatically collect:</p>
          <ul className="list-disc pl-6 text-body space-y-2 mb-4">
            <li>IP address and browser type</li>
            <li>Device information and operating system</li>
            <li>Pages visited and time spent on each page</li>
            <li>Referring website URLs</li>
            <li>Geographic location data</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">3. How We Use Your Information</h2>
          <p className="text-body leading-relaxed mb-4">We use collected information to:</p>
          <ul className="list-disc pl-6 text-body space-y-2 mb-4">
            <li>Provide, operate, and maintain our moving services</li>
            <li>Process and respond to your quote requests and inquiries</li>
            <li>Communicate with you about your move, including confirmations and updates</li>
            <li>Improve our website, services, and customer experience</li>
            <li>Send promotional communications (with your consent)</li>
            <li>Comply with legal obligations and protect our rights</li>
            <li>Analyze usage patterns to enhance our digital presence</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">4. Information Sharing & Disclosure</h2>
          <p className="text-body leading-relaxed mb-4">
            We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-body space-y-2 mb-4">
            <li><strong>Service Providers:</strong> Trusted third parties who assist us in operating our website and services (e.g., payment processors, IT support)</li>
            <li><strong>Legal Requirements:</strong> When required by law, court order, or government regulation</li>
            <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            <li><strong>Protection of Rights:</strong> To protect the rights, property, or safety of Prime Dubai Movers, our customers, or others</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">5. Data Security</h2>
          <p className="text-body leading-relaxed mb-4">
            We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include encrypted data transmission (SSL/TLS), secure server infrastructure, access controls, and regular security assessments. However, no method of electronic transmission or storage is completely secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">6. Cookies & Tracking Technologies</h2>
          <p className="text-body leading-relaxed mb-4">
            Our website uses cookies and similar tracking technologies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you use our website. We use:
          </p>
          <ul className="list-disc pl-6 text-body space-y-2 mb-4">
            <li><strong>Essential Cookies:</strong> Required for website functionality</li>
            <li><strong>Analytics Cookies:</strong> Help us understand website usage and performance</li>
            <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
          </ul>
          <p className="text-body leading-relaxed mb-4">
            You can control cookies through your browser settings. Disabling cookies may limit certain website features.
          </p>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">7. Your Rights</h2>
          <p className="text-body leading-relaxed mb-4">
            Under applicable data protection laws, you have the right to:
          </p>
          <ul className="list-disc pl-6 text-body space-y-2 mb-4">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate or incomplete data</li>
            <li>Request deletion of your personal information</li>
            <li>Object to or restrict the processing of your data</li>
            <li>Withdraw consent for marketing communications at any time</li>
            <li>Request data portability in a commonly used format</li>
          </ul>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">8. Data Retention</h2>
          <p className="text-body leading-relaxed mb-4">
            We retain personal information only for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements. Quote request data is retained for up to 12 months. Completed service records are retained for up to 7 years in accordance with UAE commercial regulations.
          </p>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">9. Third-Party Links</h2>
          <p className="text-body leading-relaxed mb-4">
            Our website may contain links to third-party websites such as Google Maps, social media platforms, and review sites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
          </p>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">10. Children&apos;s Privacy</h2>
          <p className="text-body leading-relaxed mb-4">
            Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a minor, please contact us immediately.
          </p>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">11. Changes to This Policy</h2>
          <p className="text-body leading-relaxed mb-4">
            We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on this page with a revised &quot;Last Updated&quot; date. Your continued use of our website after such modifications constitutes acceptance of the updated policy.
          </p>

          <h2 className="text-2xl font-extrabold text-navy mt-10 mb-4">12. Contact Us</h2>
          <p className="text-body leading-relaxed mb-4">
            If you have questions about this Privacy Policy or wish to exercise your data rights, please contact us:
          </p>
          <ul className="list-none text-body space-y-2 mb-4">
            <li><strong>Email:</strong> info@primedubaimovers.com</li>
            <li><strong>Phone:</strong> +971 50 123 4567</li>
            <li><strong>Address:</strong> Dubai, United Arab Emirates</li>
          </ul>
        </div>
      </section>
    </>
  );
}
