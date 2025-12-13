"use client";

import { Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stats = [
  { number: "2025", label: "Founded" },
  { number: "5K+", label: "Active Users" },
  { number: "10+", label: "Contributors" },
  { number: "24/7", label: "Support" },
];

const values = [
  { icon: "⚡", label: "Speed" },
  { icon: "🎯", label: "Quality" },
  { icon: "🤝", label: "Community" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="animate-fadeInUp">
            {/* Badge */}
            <Badge
              variant="outline"
              className="inline-block px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 border-[#FF6B35]/20 rounded-full text-[13px] sm:text-sm font-semibold text-[#E8740F] mb-4 hover:bg-[#FF6B35]/15 transition-all duration-300 cursor-default"
            >
              About Us
            </Badge>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Built by Developers,
              <br />
              for Developers
            </h2>

            {/* Paragraphs */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6">
              We started StackForge with a simple mission: eliminate the tedious setup
              process that developers face at the start of every project. After creating
              hundreds of applications ourselves, we knew there had to be a better way.
            </p>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-12">
              Today, StackForge is used by thousands of developers and companies worldwide
              to jumpstart their projects with confidence. Our generators are built on
              real-world experience and continuously updated with the latest best practices.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group text-center p-4 sm:p-6 bg-gray-50 rounded-xl transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1 cursor-pointer animate-fadeInUp"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent leading-none mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm sm:text-base text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Mission Card */}
          <div className="lg:ml-8 animate-fadeInUp" style={{ animationDelay: "200ms" }}>
            <div className="group p-8 sm:p-10 lg:p-12 bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5 border-2 border-[#FF6B35] rounded-2xl sm:rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-[#FF6B35]/80">
              {/* Icon */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-full flex items-center justify-center text-[#FF6B35] shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  <Users className="w-10 h-10 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center mb-4 group-hover:text-[#FF6B35] transition-colors duration-300">
                Our Mission
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed text-center mb-8 group-hover:text-gray-700 transition-colors duration-300">
                Empower developers to focus on building great features, not boilerplate
                code. We handle the setup, so you can ship faster.
              </p>

              {/* Values */}
              <div className="flex justify-center gap-6 sm:gap-8">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-2 group/value hover:scale-110 transition-transform duration-300 cursor-pointer"
                  >
                    <span className="text-3xl sm:text-4xl group-hover/value:scale-125 transition-transform duration-300">
                      {value.icon}
                    </span>
                    <span className="text-sm sm:text-base text-gray-700 font-medium group-hover/value:text-[#FF6B35] transition-colors duration-300">
                      {value.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}