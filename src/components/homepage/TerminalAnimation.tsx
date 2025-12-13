"use client";

import { useEffect, useState } from "react";

interface TerminalLine {
  type: "command" | "output";
  icon?: string;
  text: string;
  delay?: number;
}

interface TerminalAnimationProps {
  command?: string;
  outputLines?: Array<{ icon: string; text: string }>;
}

const defaultOutputLines = [
  { icon: "✓", text: "Project structure created" },
  { icon: "✓", text: "Dependencies configured" },
  { icon: "✓", text: "Ready to start coding!" },
];

export default function TerminalAnimation({
  command = "projectgen create --type fastapi",
  outputLines = defaultOutputLines,
}: TerminalAnimationProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    // Show output lines with staggered animation
    outputLines.forEach((_, index) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, index * 200);
    });
  }, [outputLines]);

  return (
    <div className="max-w-2xl mx-auto animate-fadeInUp px-4" style={{ animationDelay: "300ms" }}>
      <div className="bg-gray-900 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
        {/* Window Header */}
        <div className="flex items-center justify-between px-4 sm:px-5 py-3 sm:py-4 bg-gray-800 border-b border-gray-700">
          {/* macOS Dots */}
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FF5F56] rounded-full" />
            <span className="w-3 h-3 bg-[#FFBD2E] rounded-full" />
            <span className="w-3 h-3 bg-[#27C93F] rounded-full" />
          </div>
          
          {/* Title */}
          <span className="text-xs sm:text-sm text-gray-400 font-mono">terminal</span>
          
          {/* Spacer for centering */}
          <div className="w-16" />
        </div>

        {/* Terminal Content */}
        <div className="p-4 sm:p-6 font-mono text-xs sm:text-sm">
          {/* Command Line */}
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="text-[#FF6B35] font-semibold text-sm sm:text-base">$</span>
            <span className="text-[#61DAFB] text-sm sm:text-base">{command}</span>
          </div>

          {/* Output Lines */}
          <div className="space-y-2 sm:space-y-3">
            {outputLines.map((line, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 sm:gap-3 text-gray-400 transition-all duration-300 ${
                  visibleLines.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                <span className="text-[#10B981] text-base sm:text-lg">{line.icon}</span>
                <span className="text-sm sm:text-base">{line.text}</span>
              </div>
            ))}

            {/* Blinking Cursor */}
            <div className="flex items-center gap-2 sm:gap-3 mt-4">
              <span className="w-2 h-4 sm:h-5 bg-[#FF6B35] animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}