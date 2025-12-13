"use client";

import { Zap, Layers, Settings, Wrench, Package, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Lightning Fast",
    description:
      "Generate complete project structures in under 30 seconds with optimized configurations and best practices built-in.",
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Production Ready",
    description:
      "Enterprise-grade configurations with security, scalability, and maintainability considerations from day one.",
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Fully Customizable",
    description:
      "Choose exactly what you need—from databases to authentication, testing frameworks to UI libraries.",
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Best Practices",
    description:
      "Code structure, naming conventions, and architectural patterns that follow industry standards.",
  },
  {
    icon: <Package className="w-8 h-8" />,
    title: "Modern Stack",
    description:
      "Latest versions of FastAPI, React, TypeScript, and all modern development tools pre-configured.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Community Driven",
    description:
      "Continuously improved by thousands of developers with active community support and contributions.",
  },
];

export default function FeaturesShowcase() {
  return (
    <section id="features" className="relative py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <Badge
            variant="outline"
            className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 border-[#FF6B35]/20 rounded-full text-[13px] sm:text-sm font-semibold text-[#E8740F] mb-4"
          >
            Why Choose Us
          </Badge>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Powerful Features for Modern Development
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to kickstart your next project with confidence and speed
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 sm:p-10 bg-white border-2 border-gray-200 rounded-2xl transition-all duration-300 hover:border-[#FF6B35] hover:-translate-y-2 hover:shadow-xl cursor-pointer"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B35]/10 to-[#F7931E]/10 rounded-xl flex items-center justify-center text-[#FF6B35] mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}