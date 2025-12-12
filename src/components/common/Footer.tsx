"use client";

import Link from "next/link";
import { Github, Twitter, Linkedin, Mail, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerLinks = {
    product: [
      { label: "Features", href: "/features" },
      { label: "Generators", href: "/generators" },
      { label: "Pricing", href: "/pricing" },
      { label: "Changelog", href: "/changelog" },
    ],
    resources: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api-reference" },
      { label: "Guides", href: "/guides" },
      { label: "Blog", href: "/blog" },
    ],
    company: [
      { label: "About Us", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
      { label: "Press Kit", href: "/press" },
    ],
    legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Cookie Policy", href: "/cookies" },
      { label: "Licenses", href: "/licenses" },
    ],
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com",
      icon: Github,
      bgColor: "bg-[#181717]",
      hoverScale: "hover:scale-110",
    },
    {
      name: "Twitter",
      href: "https://twitter.com",
      icon: Twitter,
      bgColor: "bg-[#1DA1F2]",
      hoverScale: "hover:scale-110",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com",
      icon: Linkedin,
      bgColor: "bg-[#0A66C2]",
      hoverScale: "hover:scale-110",
    },
  ];

  return (
    <footer className="relative bg-gray-50 text-gray-700 border-t border-gray-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Section - Brand & Description (3 columns) */}
            <div className="lg:col-span-3">
              {/* Logo */}
              <Link href="/" className="inline-flex items-center gap-3 group mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#FF6B35] to-[#F7931E] rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-6 h-6"
                  >
                    <path d="M7 12L11 8L15 12L11 16L7 12Z" fill="white" opacity="0.9" />
                    <path d="M11 8L15 12L17 10L13 6L11 8Z" fill="white" opacity="0.7" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-bold text-gray-900 leading-tight">
                    StackForge
                  </span>
                  <span className="text-xs text-gray-600 leading-tight">
                    Professional Scaffolding
                  </span>
                </div>
              </Link>

              {/* Description */}
              <p className="text-gray-700 text-[15px] leading-relaxed font-medium">
                The most powerful project scaffolding tool for modern web development. Generate production-ready applications in seconds.
              </p>
            </div>

            {/* Middle Section - Links (6 columns) */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Product Links */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wider">
                    Product
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.product.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[15px] font-medium text-gray-700 hover:text-[#FF6B35] transition-colors inline-flex items-center group cursor-pointer"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Resources Links */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wider">
                    Resources
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.resources.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[15px] font-medium text-gray-700 hover:text-[#FF6B35] transition-colors inline-flex items-center group cursor-pointer"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Links */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wider">
                    Company
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.company.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[15px] font-medium text-gray-700 hover:text-[#FF6B35] transition-colors inline-flex items-center group cursor-pointer"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Links */}
                <div>
                  <h4 className="text-sm font-bold text-gray-900 mb-5 uppercase tracking-wider">
                    Legal
                  </h4>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[15px] font-medium text-gray-700 hover:text-[#FF6B35] transition-colors inline-flex items-center group cursor-pointer"
                        >
                          <span className="group-hover:translate-x-1 transition-transform duration-200">
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Section - Contact & Newsletter (3 columns) */}
            <div className="lg:col-span-3">
              {/* Contact Methods */}
              <div className="space-y-4 mb-8">
                {/* Email */}
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1.5">Email Us</p>
                  <Link 
                    href="mailto:support@stackforge.dev"
                    className="text-[15px] font-bold text-gray-900 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group"
                  >
                    <Mail className="w-4 h-4 text-gray-500 group-hover:text-[#FF6B35]" />
                    support@stackforge.dev
                  </Link>
                </div>

                {/* Support */}
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1.5">Support</p>
                  <p className="text-[15px] font-bold text-gray-900 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    24/7 Available
                  </p>
                </div>

                {/* Community */}
                <div>
                  <p className="text-xs text-gray-500 font-medium mb-1.5">Community</p>
                  <Link 
                    href="https://discord.gg/stackforge"
                    className="text-[15px] font-bold text-gray-900 hover:text-[#FF6B35] transition-colors flex items-center gap-2 group"
                  >
                    <Globe className="w-4 h-4 text-gray-500 group-hover:text-[#FF6B35]" />
                    Discord & GitHub
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator className="bg-gray-200" />

        {/* Footer Bottom */}
        <div className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-gray-700 text-center md:text-left font-medium">
              © {new Date().getFullYear()} StackForge. All rights reserved. Built with{" "}
              <span className="text-red-500">❤️</span> for developers.
            </p>

            {/* Social Links with Brand Colors */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md",
                    social.bgColor,
                    social.hoverScale
                  )}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}