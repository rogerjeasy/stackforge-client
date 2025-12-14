"use client";

import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { FeatureOption } from "@/types/fastapi.types";

interface FeatureCardProps {
  feature: FeatureOption;
  onToggle: (id: string) => void;
}

const categoryColors = {
  essential: "from-[#FF6B35] to-[#F7931E]",
  database: "from-[#10B981] to-[#059669]",
  auth: "from-[#3B82F6] to-[#1D4ED8]",
  devops: "from-[#8B5CF6] to-[#6D28D9]",
  advanced: "from-[#F59E0B] to-[#D97706]",
};

const categoryBorders = {
  essential: "border-[#FF6B35]",
  database: "border-[#10B981]",
  auth: "border-[#3B82F6]",
  devops: "border-[#8B5CF6]",
  advanced: "border-[#F59E0B]",
};

export default function FeatureCard({ feature, onToggle }: FeatureCardProps) {
  return (
    <div
      onClick={() => onToggle(feature.id)}
      className={cn(
        "relative p-6 rounded-xl border-2 transition-all duration-300 cursor-pointer group",
        feature.enabled
          ? `${categoryBorders[feature.category]} bg-gradient-to-br ${categoryColors[feature.category]}/5 shadow-lg`
          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-md"
      )}
    >
      {/* Checkmark */}
      <div
        className={cn(
          "absolute top-4 right-4 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
          feature.enabled
            ? `bg-gradient-to-r ${categoryColors[feature.category]} text-white`
            : "bg-gray-200 text-gray-400"
        )}
      >
        {feature.enabled && <Check className="w-4 h-4" />}
      </div>

      {/* Icon */}
      <div
        className={cn(
          "w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all duration-300",
          feature.enabled
            ? `bg-gradient-to-br ${categoryColors[feature.category]}/10`
            : "bg-gray-100 group-hover:bg-gray-200"
        )}
      >
        <div
          className={cn(
            "transition-colors duration-300",
            feature.enabled
              ? "text-[#FF6B35]"
              : "text-gray-500 group-hover:text-gray-700"
          )}
        >
          {feature.icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed mb-4">{feature.description}</p>

      {/* Badges */}
      {feature.badges && feature.badges.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {feature.badges.map((badge, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="text-xs px-2.5 py-0.5 bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
            >
              {badge}
            </Badge>
          ))}
        </div>
      )}

      {/* Dependencies */}
      {feature.dependencies && feature.dependencies.length > 0 && (
        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500">
            Requires: {feature.dependencies.join(", ")}
          </p>
        </div>
      )}
    </div>
  );
}