"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import StepProgress from "./StepProgress";
import ProjectInfoStep from "./ProjectInfoStep";
import APIConfigStep from "./APIConfigStep";
import FeaturesStep from "./FeaturesStep";
import ReviewStep from "./ReviewStep";
import type { FastAPIProject, WizardStep } from "@/types/fastapi.types";

export default function FastAPIWizard() {
  const [currentStep, setCurrentStep] = useState<WizardStep>(1);
  const [completedSteps, setCompletedSteps] = useState<WizardStep[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [projectData, setProjectData] = useState<FastAPIProject>({
    projectInfo: {
      projectName: "",
      version: "0.1.0",
      pythonVersion: "^3.9",
      description: "",
      authorName: "",
      authorEmail: "",
    },
    apiConfig: {
      host: "0.0.0.0",
      port: 8000,
      apiPrefix: "/api/v1",
      docsUrl: "/docs",
      redocUrl: "/redoc",
      corsEnabled: true,
      corsOrigins: ["http://localhost:3000"],
    },
    features: {
      database: {
        enabled: true,
        type: "postgresql",
        useAsync: true,
        migrations: true,
      },
      authentication: {
        enabled: true,
        jwtSecret: true,
        oauth: false,
        apiKeys: false,
      },
      celery: false,
      redis: false,
      docker: true,
      testing: true,
      cicd: true,
      logging: true,
      monitoring: false,
      swagger: true,
    },
  });

  // Validation
  const validateStep = (step: WizardStep): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!projectData.projectInfo.projectName) {
        newErrors.projectName = "Project name is required";
      } else if (!/^[a-z0-9-]+$/.test(projectData.projectInfo.projectName)) {
        newErrors.projectName = "Use lowercase letters, numbers, and hyphens only";
      }
      if (!projectData.projectInfo.version) {
        newErrors.version = "Version is required";
      }
      if (!projectData.projectInfo.authorName) {
        newErrors.authorName = "Author name is required";
      }
      if (!projectData.projectInfo.authorEmail) {
        newErrors.authorEmail = "Author email is required";
      } else if (!/\S+@\S+\.\S+/.test(projectData.projectInfo.authorEmail)) {
        newErrors.authorEmail = "Invalid email format";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (!completedSteps.includes(currentStep)) {
        setCompletedSteps([...completedSteps, currentStep]);
      }
      if (currentStep < 4) {
        setCurrentStep((currentStep + 1) as WizardStep);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as WizardStep);
    }
  };

  const handleGenerate = async () => {
    setIsGenerating(true);

    // Simulate project generation
    setTimeout(() => {
      // Here you would make an API call to generate the project
      console.log("Generating project with config:", projectData);
      
      // Simulate download
      const blob = new Blob([JSON.stringify(projectData, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${projectData.projectInfo.projectName}-config.json`;
      a.click();
      URL.revokeObjectURL(url);

      setIsGenerating(false);
      alert("Project generated successfully! Check your downloads folder.");
    }, 3000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* Progress Steps */}
      <StepProgress currentStep={currentStep} completedSteps={completedSteps} />

      {/* Form Container */}
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border-2 border-gray-200 p-6 sm:p-8 lg:p-12">
        {/* Step Content */}
        <div className="min-h-[500px]">
          {currentStep === 1 && (
            <ProjectInfoStep
              data={projectData.projectInfo}
              onChange={(data) =>
                setProjectData({
                  ...projectData,
                  projectInfo: { ...projectData.projectInfo, ...data },
                })
              }
              errors={errors}
            />
          )}

          {currentStep === 2 && (
            <APIConfigStep
              data={projectData.apiConfig}
              onChange={(data) =>
                setProjectData({
                  ...projectData,
                  apiConfig: { ...projectData.apiConfig, ...data },
                })
              }
              errors={errors}
            />
          )}

          {currentStep === 3 && (
            <FeaturesStep
              data={projectData.features}
              onChange={(data) =>
                setProjectData({
                  ...projectData,
                  features: { ...projectData.features, ...data },
                })
              }
            />
          )}

          {currentStep === 4 && (
            <ReviewStep
              data={projectData}
              isGenerating={isGenerating}
              onGenerate={handleGenerate}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        {currentStep < 4 && (
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <Button
              onClick={handleBack}
              disabled={currentStep === 1}
              variant="outline"
              className="h-12 px-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>

            <Button
              onClick={handleNext}
              className="h-12 px-8 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF7B45] hover:to-[#F8A32E] border-0"
            >
              {currentStep === 3 ? "Review" : "Next"}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        )}

        {currentStep === 4 && (
          <div className="flex justify-center mt-8 pt-6 border-t border-gray-200">
            <Button
              onClick={handleBack}
              variant="outline"
              className="h-12 px-6"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Edit
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}