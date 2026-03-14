"use client";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  ChevronRight,
  Clock,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "./ui/card";
const steps = [
  { number: 1, title: "Location" },
  { number: 2, title: "Property" },
  { number: 3, title: "Schedule" },
  { number: 4, title: "Contact" },
];

const FullQuoteForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<{
    moveFrom: string | null;
    moveTo: string | null;
    propertyType: string | null;
    bedrooms: string | null;
    movingDate: string | null;
    flexibility: string | null;
    name: string | null;
    phone: string | null;
    email: string | null;
    notes: string | null;
  }>({
    moveFrom: "",
    moveTo: "",
    propertyType: "",
    bedrooms: "",
    movingDate: "",
    flexibility: "",
    name: "",
    phone: "",
    email: "",
    notes: "",
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log(formData);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <section className="bg-navy text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-sm text-gray-300 mb-4">
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-gold">Free Quote</span>
            </nav>
          </div>
        </section>
        <section className="py-20 md:py-32">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-4">
              Thank You for Your Request!
            </h1>
            <p className="text-body text-lg mb-2">
              We have received your moving quote request and our team will call
              you within <strong className="text-navy">30 minutes</strong>{" "}
              during business hours.
            </p>
            <p className="text-body mb-8">
              Sat–Thu: 8 AM – 8 PM | Fri: 9 AM – 5 PM
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                onClick={(e) => window.location.reload()}
                className="inline-flex items-center justify-center bg-gold hover:bg-gold-dark text-white font-medium px-4 h-9 rounded-lg transition-colors text-sm"
              >
                Return Home
              </Link>
              <a
                href="tel:+971501234567"
                className="inline-flex items-center justify-center border border-navy text-navy font-medium px-4 h-9 rounded-lg transition-colors text-sm"
              >
                <Phone className="w-4 h-4 mr-2" /> Call Now Instead
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-10">
              {steps.map((step, idx) => (
                <div key={step.number} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-sm transition-colors ${
                        currentStep >= step.number
                          ? "bg-gold text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {currentStep > step.number ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        step.number
                      )}
                    </div>
                    <span className="text-xs mt-1 text-body font-medium hidden sm:block">
                      {step.title}
                    </span>
                  </div>
                  {idx < steps.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded ${
                        currentStep > step.number ? "bg-gold" : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            <Card className="border shadow-sm">
              <CardContent className="p-6 md:p-8">
                {/* Step 1: Location */}
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-extrabold text-navy mb-2">
                      Where Are You Moving?
                    </h2>
                    <p className="text-body mb-6">
                      Tell us your current and destination locations.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="moveFrom"
                          className="text-navy font-medium"
                        >
                          Moving From
                        </Label>
                        <Input
                          id="moveFrom"
                          placeholder="e.g., Dubai Marina, JVC, Abu Dhabi"
                          value={String(formData.moveFrom)}
                          onChange={(e) =>
                            updateField("moveFrom", e.target.value)
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="moveTo"
                          className="text-navy font-medium"
                        >
                          Moving To
                        </Label>
                        <Input
                          id="moveTo"
                          placeholder="e.g., Palm Jumeirah, Downtown Dubai"
                          value={String(formData.moveTo)}
                          onChange={(e) =>
                            updateField("moveTo", e.target.value)
                          }
                          className="mt-1"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 2: Property */}
                {currentStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-extrabold text-navy mb-2">
                      Property Details
                    </h2>
                    <p className="text-body mb-6">
                      Help us understand the size of your move.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label className="text-navy font-medium">
                          Property Type
                        </Label>
                        <Select
                          value={formData.propertyType}
                          onValueChange={(v) =>
                            updateField("propertyType", v ? v : "")
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="office">Office</SelectItem>
                            <SelectItem value="studio">Studio</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label className="text-navy font-medium">
                          Number of Bedrooms
                        </Label>
                        <Select
                          value={formData.bedrooms}
                          onValueChange={(v) =>
                            updateField("bedrooms", v ? v : "")
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="Select bedrooms" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="studio">Studio</SelectItem>
                            <SelectItem value="1">1 Bedroom</SelectItem>
                            <SelectItem value="2">2 Bedrooms</SelectItem>
                            <SelectItem value="3">3 Bedrooms</SelectItem>
                            <SelectItem value="4">4 Bedrooms</SelectItem>
                            <SelectItem value="5+">5+ Bedrooms</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Schedule */}
                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-extrabold text-navy mb-2">
                      When Do You Want to Move?
                    </h2>
                    <p className="text-body mb-6">
                      Select your preferred moving date and flexibility.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label
                          htmlFor="movingDate"
                          className="text-navy font-medium"
                        >
                          Preferred Moving Date
                        </Label>
                        <Input
                          id="movingDate"
                          type="date"
                          value={String(formData.movingDate)}
                          onChange={(e) =>
                            updateField("movingDate", e.target.value)
                          }
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label className="text-navy font-medium">
                          Date Flexibility
                        </Label>
                        <Select
                          value={formData.flexibility}
                          onValueChange={(v) =>
                            updateField("flexibility", v ? v : "")
                          }
                        >
                          <SelectTrigger className="mt-1">
                            <SelectValue placeholder="How flexible are you?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="exact">Exact Date</SelectItem>
                            <SelectItem value="flexible-1-2">
                              +/- 1-2 Days
                            </SelectItem>
                            <SelectItem value="flexible">
                              Flexible (Any Time)
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Contact Info */}
                {currentStep === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-extrabold text-navy mb-2">
                      Your Contact Information
                    </h2>
                    <p className="text-body mb-6">
                      We will call you within 30 minutes with your personalized
                      quote.
                    </p>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-navy font-medium">
                          Full Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={String(formData.name)}
                          onChange={(e) => updateField("name", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="text-navy font-medium"
                        >
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          placeholder="+971 50 XXX XXXX"
                          value={String(formData.phone)}
                          onChange={(e) => updateField("phone", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="email"
                          className="text-navy font-medium"
                        >
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={String(formData.email)}
                          onChange={(e) => updateField("email", e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="notes"
                          className="text-navy font-medium"
                        >
                          Additional Notes (Optional)
                        </Label>
                        <Textarea
                          id="notes"
                          placeholder="Any special items, requirements, or questions?"
                          value={String(formData.notes)}
                          onChange={(e) => updateField("notes", e.target.value)}
                          className="mt-1"
                          rows={4}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between mt-8 pt-6 border-t">
                  {currentStep > 1 ? (
                    <Button
                      variant="outline"
                      onClick={() => setCurrentStep((s) => s - 1)}
                      className="border-navy text-navy"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" /> Back
                    </Button>
                  ) : (
                    <div />
                  )}
                  {currentStep < 4 ? (
                    <Button
                      onClick={() => setCurrentStep((s) => s + 1)}
                      className="bg-gold hover:bg-gold-dark text-white"
                    >
                      Next Step <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      onClick={handleSubmit}
                      className="bg-gold hover:bg-gold-dark text-white text-lg px-8 block"
                    >
                      Submit Quote
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            <p className="text-center text-body text-sm mt-6">
              Prefer to call?{" "}
              <a
                href="tel:+971501234567"
                className="text-gold font-medium hover:underline"
              >
                +971 50 123 4567
              </a>
            </p>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="border-0 bg-off-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-extrabold text-navy mb-6">
                  Why Get a Quote From Us?
                </h3>
                <div className="space-y-5">
                  {[
                    {
                      icon: Award,
                      title: "14+ Years Experience",
                      desc: "Trusted by thousands of families across UAE",
                    },
                    {
                      icon: Users,
                      title: "500+ Happy Customers",
                      desc: "Rated 4.9/5 on Google Reviews",
                    },
                    {
                      icon: Shield,
                      title: "Licensed & Insured",
                      desc: "Full coverage for your peace of mind",
                    },
                    {
                      icon: Clock,
                      title: "30-Min Response",
                      desc: "We respond faster than any competitor",
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-medium text-navy text-sm">
                          {item.title}
                        </h4>
                        <p className="text-body text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 bg-navy text-white">
              <CardContent className="p-6 text-center">
                <Phone className="w-10 h-10 text-gold mx-auto mb-3" />
                <h3 className="text-lg font-extrabold text-white mb-2">
                  Need Help Right Now?
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  Call us directly for immediate assistance
                </p>
                <a
                  href="tel:+971501234567"
                  className="text-gold text-xl font-extrabold hover:underline"
                >
                  +971 50 123 4567
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullQuoteForm;
