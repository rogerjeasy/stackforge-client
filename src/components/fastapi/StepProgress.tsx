"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WizardStep } from "@/types/fastapi.types";

interface Step {
  number: WizardStep;
  title: string;
  description: string;
}

interface StepProgressProps {
  currentStep: WizardStep;
  completedSteps: WizardStep[];
}

const steps: Step[] = [
  { number: 1, title: "Project Info", description: "Basic details" },
  { number: 2, title: "Configuration", description: "API settings" },
  { number: 3, title: "Features", description: "Add-ons" },
  { number: 4, title: "Generate", description: "Review & create" },
];

export default function StepProgress({ currentStep, completedSteps }: StepProgressProps) {
  return (
    <div className="w-full mb-8 sm:mb-12">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isCompleted = completedSteps.includes(step.number);
          const isCurrent = currentStep === step.number;
          const isUpcoming = step.number > currentStep;

          return (
            <div key={step.number} className="flex items-center flex-1">
              {/* Step Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-300",
                    isCompleted && "bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white",
                    isCurrent && "bg-gradient-to-r from-[#FF6B35] to-[#F7931E] text-white ring-4 ring-[#FF6B35]/20",
                    isUpcoming && "bg-gray-200 text-gray-500"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-5 h-5 sm:w-6 sm:h-6" />
                  ) : (
                    <span className="text-sm sm:text-base font-bold">{step.number}</span>
                  )}
                </div>

                {/* Step Info - Hidden on mobile for spacing */}
                <div className="hidden md:flex md:flex-col md:items-center md:mt-3">
                  <span
                    className={cn(
                      "text-xs sm:text-sm font-semibold whitespace-nowrap",
                      (isCompleted || isCurrent) && "text-gray-900",
                      isUpcoming && "text-gray-500"
                    )}
                  >
                    {step.title}
                  </span>
                  <span className="text-xs text-gray-500 whitespace-nowrap">{step.description}</span>
                </div>
              </div>

              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 sm:mx-4">
                  <div
                    className={cn(
                      "h-full transition-all duration-300",
                      completedSteps.includes(steps[index + 1].number)
                        ? "bg-gradient-to-r from-[#FF6B35] to-[#F7931E]"
                        : "bg-gray-200"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Mobile Step Info */}
      <div className="md:hidden mt-4 text-center">
        <p className="text-sm font-semibold text-gray-900">{steps[currentStep - 1].title}</p>
        <p className="text-xs text-gray-500">{steps[currentStep - 1].description}</p>
      </div>
    </div>
  );
}