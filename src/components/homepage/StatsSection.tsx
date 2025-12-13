"use client";

interface Stat {
  number: string;
  label: string;
}

interface StatsSectionProps {
  stats?: Stat[];
}

const defaultStats: Stat[] = [
  { number: "50K+", label: "Projects Generated" },
  { number: "99.9%", label: "Success Rate" },
  { number: "< 30s", label: "Generation Time" },
  { number: "24/7", label: "Support Available" },
];

export default function StatsSection({ stats = defaultStats }: StatsSectionProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-12 max-w-4xl mx-auto px-4">
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
  );
}