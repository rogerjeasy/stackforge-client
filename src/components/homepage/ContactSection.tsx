"use client";

import { useState } from "react";
import { Mail, Phone, Globe, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "support@stackforge.dev",
    href: "mailto:support@stackforge.dev",
  },
  {
    icon: Phone,
    label: "Support",
    value: "24/7 Available",
    href: null,
  },
  {
    icon: Globe,
    label: "Community",
    value: "Discord & GitHub",
    href: "https://discord.gg/stackforge",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-16 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
            {/* Left Side - Contact Info */}
            <div className="lg:col-span-2">
              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                Get in Touch
              </h2>

              {/* Description */}
              <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
                Have questions or feedback? We'd love to hear from you. Our team is
                here to help!
              </p>

              {/* Contact Methods */}
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#FF6B35]/10 to-[#F7931E]/10 rounded-xl flex items-center justify-center text-[#FF6B35] flex-shrink-0">
                      <method.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-gray-500 mb-1">
                        {method.label}
                      </div>
                      {method.href ? (
                        <a
                          href={method.href}
                          className="text-base sm:text-lg font-semibold text-gray-900 hover:text-[#FF6B35] transition-colors"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <div className="text-base sm:text-lg font-semibold text-gray-900">
                          {method.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="lg:col-span-3">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base border-2 border-gray-300 rounded-xl focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 transition-all"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base border-2 border-gray-300 rounded-xl focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 transition-all"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base border-2 border-gray-300 rounded-xl focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 transition-all resize-vertical min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 px-6 sm:px-8 py-5 sm:py-6 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF7B45] hover:to-[#F8A32E] text-white text-base sm:text-lg font-semibold rounded-xl shadow-[0_4px_12px_rgba(255,107,53,0.3)] hover:shadow-[0_8px_20px_rgba(255,107,53,0.4)] hover:-translate-y-1 transition-all duration-200 border-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}