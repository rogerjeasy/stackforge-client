import FastAPIWizard from "@/components/fastapi/FastAPIWizard";
import { Badge } from "@/components/ui/badge";

export default function FastAPIGeneratorPage() {
  return (
    <div className="relative min-h-screen py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          {/* Badge */}
          <Badge
            variant="outline"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 border-[#FF6B35]/20 rounded-full text-[13px] sm:text-sm font-semibold text-[#E8740F] mb-6"
          >
            <span className="w-2 h-2 bg-[#FF6B35] rounded-full animate-pulse" />
            Production-Ready in Seconds
          </Badge>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Generate Your{" "}
            <span className="bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">
              FastAPI
            </span>{" "}
            Project
            <br className="hidden sm:block" />
            with Perfect Setup
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Create enterprise-grade FastAPI applications with perfect structure, best practices,
            and all configurations pre-configured. Used by thousands of developers worldwide.
          </p>

          {/* Stats */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">
                28K+
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Projects Generated</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">
                99.9%
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Success Rate</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-300" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-[#FF6B35] to-[#F7931E] bg-clip-text text-transparent">
                &lt; 30s
              </div>
              <div className="text-xs sm:text-sm text-gray-600">Generation Time</div>
            </div>
          </div>
        </div>

        {/* Wizard */}
        <FastAPIWizard />

        {/* Info Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            What You'll Get
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto mb-8">
            A complete, production-ready FastAPI project with industry best practices
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              {
                title: "Perfect Structure",
                description: "Organized project layout following best practices",
              },
              {
                title: "Full Documentation",
                description: "Comprehensive README and inline documentation",
              },
              {
                title: "Testing Ready",
                description: "pytest configuration with example tests",
              },
              {
                title: "Docker Support",
                description: "Production-ready Docker and docker-compose files",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl border-2 border-gray-200 hover:border-[#FF6B35] transition-colors duration-300"
              >
                <h3 className="text-base font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}