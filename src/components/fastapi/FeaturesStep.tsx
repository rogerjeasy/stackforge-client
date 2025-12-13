"use client";

import { Database, Shield, Activity, TestTube, Container, Code, BarChart, FileText } from "lucide-react";
import FeatureCard from "./FeatureCard";
import type { FeatureOption, Features } from "@/types/fastapi.types";

interface FeaturesStepProps {
  data: Features;
  onChange: (data: Partial<Features>) => void;
}

export default function FeaturesStep({ data, onChange }: FeaturesStepProps) {
  const features: FeatureOption[] = [
    // Essential
    {
      id: "docker",
      title: "Docker Support",
      description: "Production-ready Dockerfile and docker-compose configuration",
      icon: <Container className="w-6 h-6" />,
      enabled: data.docker,
      category: "essential",
    },
    {
      id: "testing",
      title: "Testing Setup",
      description: "pytest configuration with coverage and fixtures",
      icon: <TestTube className="w-6 h-6" />,
      enabled: data.testing,
      category: "essential",
    },
    {
      id: "logging",
      title: "Logging & Monitoring",
      description: "Structured logging with different log levels",
      icon: <FileText className="w-6 h-6" />,
      enabled: data.logging,
      category: "essential",
    },
    
    // Database
    {
      id: "database",
      title: "Database Integration",
      description: "SQLAlchemy ORM with async support and migrations",
      icon: <Database className="w-6 h-6" />,
      enabled: data.database.enabled,
      category: "database",
    },
    
    // Authentication
    {
      id: "authentication",
      title: "Authentication",
      description: "JWT authentication with user management",
      icon: <Shield className="w-6 h-6" />,
      enabled: data.authentication.enabled,
      category: "auth",
    },
    
    // DevOps
    {
      id: "cicd",
      title: "CI/CD Pipeline",
      description: "GitHub Actions workflow for automated testing and deployment",
      icon: <Activity className="w-6 h-6" />,
      enabled: data.cicd,
      category: "devops",
    },
    
    // Advanced
    {
      id: "celery",
      title: "Celery Task Queue",
      description: "Background task processing with Celery",
      icon: <Code className="w-6 h-6" />,
      enabled: data.celery,
      category: "advanced",
      dependencies: ["redis"],
    },
    {
      id: "redis",
      title: "Redis Caching",
      description: "Redis for caching and session management",
      icon: <BarChart className="w-6 h-6" />,
      enabled: data.redis,
      category: "advanced",
    },
    {
      id: "monitoring",
      title: "Monitoring",
      description: "Application monitoring and health checks",
      icon: <Activity className="w-6 h-6" />,
      enabled: data.monitoring,
      category: "advanced",
    },
  ];

  const handleToggle = (id: string) => {
    const feature = features.find((f) => f.id === id);
    if (!feature) return;

    // Handle special cases for nested features
    if (id === "database") {
      onChange({
        database: {
          ...data.database,
          enabled: !data.database.enabled,
        },
      });
    } else if (id === "authentication") {
      onChange({
        authentication: {
          ...data.authentication,
          enabled: !data.authentication.enabled,
        },
      });
    } else {
      onChange({ [id]: !data[id as keyof Features] });
    }

    // Handle dependencies
    if (id === "celery" && !data.celery && !data.redis) {
      onChange({ redis: true });
    }
  };

  const categorizedFeatures = {
    essential: features.filter((f) => f.category === "essential"),
    database: features.filter((f) => f.category === "database"),
    auth: features.filter((f) => f.category === "auth"),
    devops: features.filter((f) => f.category === "devops"),
    advanced: features.filter((f) => f.category === "advanced"),
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeInUp">
      {/* Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Select Features
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          Choose the features you want to include in your project
        </p>
      </div>

      {/* Features by Category */}
      <div className="space-y-8">
        {/* Essential */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-[#FF6B35] to-[#F7931E] rounded-full" />
            Essential Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorizedFeatures.essential.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} onToggle={handleToggle} />
            ))}
          </div>
        </div>

        {/* Database */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-[#10B981] to-[#059669] rounded-full" />
            Database
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorizedFeatures.database.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} onToggle={handleToggle} />
            ))}
          </div>
        </div>

        {/* Authentication */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-[#3B82F6] to-[#1D4ED8] rounded-full" />
            Authentication
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorizedFeatures.auth.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} onToggle={handleToggle} />
            ))}
          </div>
        </div>

        {/* DevOps */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-[#8B5CF6] to-[#6D28D9] rounded-full" />
            DevOps & Deployment
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorizedFeatures.devops.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} onToggle={handleToggle} />
            ))}
          </div>
        </div>

        {/* Advanced */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-[#F59E0B] to-[#D97706] rounded-full" />
            Advanced Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categorizedFeatures.advanced.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} onToggle={handleToggle} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}