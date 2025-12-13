"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { generators, generatorThemes } from "./generators.config";

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
          {generators.map((generator) => {
            const theme = generatorThemes[generator.variant];

            return (
              <div
                key={generator.id}
                className={`
                  group relative bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12
                  shadow-xl border-2 transition-all duration-300
                  hover:-translate-y-2 hover:shadow-2xl
                  ${theme.borderColor} bg-gradient-to-br ${theme.bgGradient}
                `}
              >
                {/* Header with Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  {/* Icon */}
                  <div
                    className={`
                      w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center
                      transition-transform duration-300 group-hover:scale-110
                      bg-gradient-to-br ${theme.iconBgGradient} ${theme.iconColor}
                    `}
                  >
                    {generator.icon}
                  </div>

                  {/* Badge */}
                  <Badge
                    className={`
                      px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold 
                      rounded-full uppercase tracking-wider
                      bg-gradient-to-r ${theme.badgeGradient} ${theme.badgeTextColor}
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
                <div className="flex items-center gap-6 p-5 sm:p-6 bg-gray-50 rounded-xl mb-8 transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
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
                      transition-all duration-200 hover:-translate-y-1 border-0
                      bg-gradient-to-r ${theme.buttonGradient} ${theme.buttonHoverGradient}
                      ${theme.buttonTextColor} ${theme.buttonShadow} ${theme.buttonHoverShadow}
                    `}
                  >
                    {generator.buttonText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}