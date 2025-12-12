"use client";

import Link from "next/link";
import { Zap, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function HeroSection() {
  const stats = [
    { number: "50K+", label: "Projects Generated" },
    { number: "99.9%", label: "Success Rate" },
    { number: "< 30s", label: "Generation Time" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
          {/* Trust Badge */}
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 border-[#FF6B35]/20 rounded-full text-[13px] sm:text-sm font-medium text-[#E8740F] mb-6 sm:mb-8 hover:bg-[#FF6B35]/15 transition-all duration-300"
          >
            <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            Trusted by 50,000+ Developers Worldwide
          </Badge>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-gray-900 mb-6 sm:mb-8">
            Generate Production-Ready
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">
              {" "}Applications{" "}
            </span>
            in Seconds
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl lg:text-[1.3rem] text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
            The most powerful project scaffolding tool for modern web development.
            Create FastAPI backends and React frontends with perfect structure,
            best practices, and enterprise-grade configurations—all with a single click.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 sm:mb-16 px-4">
            <Link href="/generators">
              <Button
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-9 py-5 sm:py-6 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF7B45] hover:to-[#F8A32E] text-white text-base sm:text-lg font-semibold rounded-xl shadow-[0_8px_20px_rgba(255,107,53,0.3)] hover:shadow-[0_12px_28px_rgba(255,107,53,0.4)] hover:-translate-y-1 transition-all duration-200 border-0 min-h-[56px] sm:min-h-[60px]"
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6" />
                Start Building Now
              </Button>
            </Link>

            <Button
              variant="outline"
              size="lg"
              onClick={() => alert("Demo video coming soon!")}
              className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-9 py-5 sm:py-6 bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-700 text-base sm:text-lg font-semibold rounded-xl hover:-translate-y-1 transition-all duration-200 min-h-[56px] sm:min-h-[60px]"
            >
              <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto mb-12 sm:mb-16 px-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent mb-2 leading-none">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* Terminal Window */}
          <div
            className="max-w-2xl mx-auto animate-fadeInUp px-4"
            style={{ animationDelay: "300ms" }}
          >
            <div className="bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
              {/* Window Header */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 bg-gray-800 border-b border-gray-700">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#FF5F56] rounded-full" />
                  <span className="w-3 h-3 bg-[#FFBD2E] rounded-full" />
                  <span className="w-3 h-3 bg-[#27C93F] rounded-full" />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 font-mono">
                  terminal
                </span>
                <div className="w-16" /> {/* Spacer for centering */}
              </div>

              {/* Terminal Content */}
              <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
                {/* Command Line */}
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <span className="text-[#FF6B35] font-semibold text-sm sm:text-base">
                    $
                  </span>
                  <span className="text-[#61DAFB] text-sm sm:text-base">
                    stackforge create --type fastapi
                  </span>
                </div>

                {/* Output Lines */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3 text-gray-400 animate-fadeInUp">
                    <span className="text-[#10B981] text-base sm:text-lg">✓</span>
                    <span className="text-sm sm:text-base">Project structure created</span>
                  </div>
                  <div
                    className="flex items-center gap-2 sm:gap-3 text-gray-400 animate-fadeInUp"
                    style={{ animationDelay: "200ms" }}
                  >
                    <span className="text-[#10B981] text-base sm:text-lg">✓</span>
                    <span className="text-sm sm:text-base">Dependencies configured</span>
                  </div>
                  <div
                    className="flex items-center gap-2 sm:gap-3 text-gray-400 animate-fadeInUp"
                    style={{ animationDelay: "400ms" }}
                  >
                    <span className="text-[#10B981] text-base sm:text-lg">✓</span>
                    <span className="text-sm sm:text-base">Ready to start coding!</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 mt-4">
                    <span className="w-2 h-4 sm:h-5 bg-[#FF6B35] animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}