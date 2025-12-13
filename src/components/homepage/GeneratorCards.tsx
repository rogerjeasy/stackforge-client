"use client";

import Link from "next/link";
import { Clock, Atom, Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface GeneratorFeature {
  text: string;
}

interface GeneratorStats {
  generated: string;
  rating: string;
}

interface Generator {
  id: string;
  title: string;
  badge: string;
  badgeVariant: "fastapi" | "react";
  icon: React.ReactNode;
  description: string;
  features: GeneratorFeature[];
  stats: GeneratorStats;
  buttonText: string;
  href: string;
}

const generators: Generator[] = [
  {
    id: "fastapi",
    title: "FastAPI Generator",
    badge: "Backend",
    badgeVariant: "fastapi",
    icon: <Clock className="w-12 h-12" />,
    description:
      "Create production-ready FastAPI applications with Poetry, complete API structure, authentication, database integration, and more.",
    features: [
      { text: "Poetry dependency management" },
      { text: "SQLAlchemy ORM & Alembic" },
      { text: "JWT Authentication" },
      { text: "Docker & Testing setup" },
    ],
    stats: {
      generated: "28K+",
      rating: "4.9/5",
    },
    buttonText: "Create FastAPI Project",
    href: "/generators/fastapi",
  },
  {
    id: "react",
    title: "React Generator",
    badge: "Frontend",
    badgeVariant: "react",
    icon: <Atom className="w-12 h-12" />,
    description:
      "Build modern React applications with TypeScript, Tailwind CSS, shadcn/ui, and all the tools you need for professional development.",
    features: [
      { text: "TypeScript configuration" },
      { text: "Tailwind CSS & SASS" },
      { text: "shadcn/ui components" },
      { text: "Vite & React Router" },
    ],
    stats: {
      generated: "35K+",
      rating: "4.8/5",
    },
    buttonText: "Create React Project",
    href: "/generators/react",
  },
];

export default function GeneratorCards() {
  return (
    <section id="generators" className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          {/* Badge */}
          <Badge
            variant="outline"
            className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 border-[#FF6B35]/20 rounded-full text-[13px] sm:text-sm font-semibold text-[#E8740F] mb-4"
          >
            Choose Your Stack
          </Badge>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
            Project Generators
          </h2>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect generator for your next project
          </p>
        </div>

        {/* Generators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {generators.map((generator) => (
            <div
              key={generator.id}
              className={`
                group relative bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12
                shadow-xl border-2 transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl
                ${
                  generator.badgeVariant === "fastapi"
                    ? "border-[#FF6B35] bg-gradient-to-br from-[#FF6B35]/[0.02] to-[#F7931E]/[0.02]"
                    : "border-[#61DAFB] bg-gradient-to-br from-[#61DAFB]/[0.02] to-[#00D8FF]/[0.02]"
                }
              `}
            >
              {/* Header with Icon and Badge */}
              <div className="flex items-start justify-between mb-6">
                {/* Icon */}
                <div
                  className={`
                    w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center
                    ${
                      generator.badgeVariant === "fastapi"
                        ? "bg-gradient-to-br from-[#FF6B35]/10 to-[#F7931E]/10 text-[#FF6B35]"
                        : "bg-gradient-to-br from-[#61DAFB]/10 to-[#00D8FF]/10 text-[#00D8FF]"
                    }
                  `}
                >
                  {generator.icon}
                </div>

                {/* Badge */}
                <Badge
                  className={`
                    px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold rounded-full uppercase tracking-wider
                    ${
                      generator.badgeVariant === "fastapi"
                        ? "bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white"
                        : "bg-gradient-to-r from-[#61DAFB] to-[#00D8FF] text-gray-900"
                    }
                  `}
                >
                  {generator.badge}
                </Badge>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                {generator.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {generator.description}
              </p>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {generator.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 text-sm sm:text-base text-gray-700"
                  >
                    <Check className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 p-5 sm:p-6 bg-gray-50 rounded-xl mb-8">
                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-none mb-1">
                    {generator.stats.generated}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600">Generated</span>
                </div>

                <div className="w-px h-10 bg-gray-300" />

                <div className="flex flex-col">
                  <span className="text-xl sm:text-2xl font-bold text-gray-900 leading-none mb-1">
                    {generator.stats.rating}
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600">Rating</span>
                </div>
              </div>

              {/* CTA Button */}
              <Link href={generator.href}>
                <Button
                  size="lg"
                  className={`
                    w-full flex items-center justify-center gap-3 px-6 sm:px-8 py-5 sm:py-6
                    text-base sm:text-lg font-semibold rounded-xl
                    transition-all duration-200 hover:-translate-y-1
                    ${
                      generator.badgeVariant === "fastapi"
                        ? "bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF7B45] hover:to-[#F8A32E] text-white shadow-[0_4px_12px_rgba(255,107,53,0.3)] hover:shadow-[0_8px_20px_rgba(255,107,53,0.4)] border-0"
                        : "bg-gradient-to-r from-[#61DAFB] to-[#00D8FF] hover:from-[#71EAFB] hover:to-[#10E8FF] text-gray-900 shadow-[0_4px_12px_rgba(97,218,251,0.3)] hover:shadow-[0_8px_20px_rgba(97,218,251,0.4)] border-0"
                    }
                  `}
                >
                  {generator.buttonText}
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}