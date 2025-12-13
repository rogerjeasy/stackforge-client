"use client";

import { CheckCircle2, Download, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FastAPIProject } from "@/types/fastapi.types";

interface ReviewStepProps {
  data: FastAPIProject;
  isGenerating: boolean;
  onGenerate: () => void;
}

export default function ReviewStep({ data, isGenerating, onGenerate }: ReviewStepProps) {
  const enabledFeatures = [
    data.features.docker && "Docker Support",
    data.features.testing && "Testing Setup",
    data.features.logging && "Logging",
    data.features.database.enabled && "Database Integration",
    data.features.authentication.enabled && "Authentication",
    data.features.cicd && "CI/CD Pipeline",
    data.features.celery && "Celery Task Queue",
    data.features.redis && "Redis Caching",
    data.features.monitoring && "Monitoring",
  ].filter(Boolean);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeInUp">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FF6B35]/10 to-[#F7931E]/10 rounded-2xl mb-4">
          <CheckCircle2 className="w-8 h-8 text-[#FF6B35]" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Review Your Configuration
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Everything looks good? Let's generate your FastAPI project!
        </p>
      </div>

      {/* Configuration Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project Info */}
        <div className="p-6 bg-white rounded-xl border-2 border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Project Information</h3>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs font-semibold text-gray-500 uppercase">Project Name</dt>
              <dd className="text-sm text-gray-900 font-medium mt-1">{data.projectInfo.projectName}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-500 uppercase">Version</dt>
              <dd className="text-sm text-gray-900 font-medium mt-1">{data.projectInfo.version}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-500 uppercase">Python Version</dt>
              <dd className="text-sm text-gray-900 font-medium mt-1">{data.projectInfo.pythonVersion}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-500 uppercase">Author</dt>
              <dd className="text-sm text-gray-900 font-medium mt-1">
                {data.projectInfo.authorName} ({data.projectInfo.authorEmail})
              </dd>
            </div>
          </dl>
        </div>

        {/* API Configuration */}
        <div className="p-6 bg-white rounded-xl border-2 border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">API Configuration</h3>
          <dl className="space-y-3">
            <div>
              <dt className="text-xs font-semibold text-gray-500 uppercase">Server</dt>
              <dd className="text-sm text-gray-900 font-medium mt-1">
                {data.apiConfig.host}:{data.apiConfig.port}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-500 uppercase">API Prefix</dt>
              <dd className="text-sm text-gray-900 font-medium mt-1">{data.apiConfig.apiPrefix}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-500 uppercase">CORS</dt>
              <dd className="text-sm text-gray-900 font-medium mt-1">
                {data.apiConfig.corsEnabled ? "Enabled" : "Disabled"}
                {data.apiConfig.corsEnabled && data.apiConfig.corsOrigins.length > 0 && (
                  <span className="text-gray-600"> ({data.apiConfig.corsOrigins.length} origins)</span>
                )}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold text-gray-500 uppercase">Documentation</dt>
              <dd className="text-sm text-gray-900 font-medium mt-1">{data.apiConfig.docsUrl}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Features Summary */}
      <div className="p-6 bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5 rounded-xl border-2 border-[#FF6B35]/20">
        <h3 className="text-lg font-bold text-gray-900 mb-4">
          Selected Features ({enabledFeatures.length})
        </h3>
        {enabledFeatures.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {enabledFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-gray-700 bg-white px-4 py-2 rounded-lg"
              >
                <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">No additional features selected</p>
        )}
      </div>

      {/* Description */}
      {data.projectInfo.description && (
        <div className="p-6 bg-white rounded-xl border-2 border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Description</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{data.projectInfo.description}</p>
        </div>
      )}

      {/* Generate Button */}
      <div className="flex flex-col items-center gap-4 pt-4">
        <Button
          onClick={onGenerate}
          disabled={isGenerating}
          className="w-full sm:w-auto min-w-[280px] h-14 text-lg font-semibold bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF7B45] hover:to-[#F8A32E] shadow-[0_8px_20px_rgba(255,107,53,0.3)] hover:shadow-[0_12px_28px_rgba(255,107,53,0.4)] transition-all duration-200 border-0"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 mr-2 animate-spin" />
              Generating Project...
            </>
          ) : (
            <>
              <Download className="w-5 h-5 mr-2" />
              Generate FastAPI Project
            </>
          )}
        </Button>
        <p className="text-xs text-gray-500 text-center max-w-md">
          Your project will be generated with all selected features and configurations.
          Download will start automatically.
        </p>
      </div>
    </div>
  );
}