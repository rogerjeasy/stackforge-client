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
      description: "Multi-stage Dockerfile & docker-compose",
      icon: <Container className="w-6 h-6" />,
      enabled: data.docker,
      category: "essential",
      badges: ["Docker", "Compose", "Multi-stage"],
    },
    {
      id: "testing",
      title: "Testing Suite",
      description: "Pytest with coverage and async support",
      icon: <TestTube className="w-6 h-6" />,
      enabled: data.testing,
      category: "essential",
      badges: ["Pytest", "Coverage", "Async"],
    },
    {
      id: "logging",
      title: "Advanced Logging",
      description: "Structured logging with rotation and levels",
      icon: <FileText className="w-6 h-6" />,
      enabled: data.logging,
      category: "essential",
      badges: ["Loguru", "Structured", "Rotation"],
    },
    
    // Database
    {
      id: "database",
      title: "PostgreSQL Database",
      description: "SQLAlchemy ORM with async PostgreSQL and Alembic migrations",
      icon: <Database className="w-6 h-6" />,
      enabled: data.database.enabled && data.database.type === "postgresql",
      category: "database",
      badges: ["SQLAlchemy", "Alembic", "PostgreSQL"],
    },
    {
      id: "mongodb",
      title: "MongoDB",
      description: "MongoDB with Motor async driver and ODM support",
      icon: <Database className="w-6 h-6" />,
      enabled: data.database.enabled && data.database.type === "mongodb",
      category: "database",
      badges: ["MongoDB", "Motor", "Async"],
    },
    {
      id: "firestore",
      title: "Firebase Firestore",
      description: "Google Cloud Firestore NoSQL database integration",
      icon: <Database className="w-6 h-6" />,
      enabled: data.database.enabled && data.database.type === "firestore",
      category: "database",
      badges: ["Firestore", "Firebase", "NoSQL"],
    },
    
    // Authentication
    {
      id: "authentication",
      title: "Authentication",
      description: "JWT tokens with secure password hashing",
      icon: <Shield className="w-6 h-6" />,
      enabled: data.authentication.enabled,
      category: "auth",
      badges: ["JWT", "OAuth2", "Bcrypt"],
    },
    
    // DevOps
    {
      id: "cicd",
      title: "CI/CD Pipeline",
      description: "GitHub Actions workflow for automated testing and deployment",
      icon: <Activity className="w-6 h-6" />,
      enabled: data.cicd,
      category: "devops",
      badges: ["GitHub", "Actions", "Deploy"],
    },
    
    // Advanced
    {
      id: "celery",
      title: "Background Tasks",
      description: "Celery for async task processing",
      icon: <Code className="w-6 h-6" />,
      enabled: data.celery,
      category: "advanced",
      dependencies: ["redis"],
      badges: ["Celery", "Async", "Queue"],
    },
    {
      id: "redis",
      title: "Redis Caching",
      description: "High-performance caching layer with Redis",
      icon: <BarChart className="w-6 h-6" />,
      enabled: data.redis,
      category: "advanced",
      badges: ["Redis", "Cache", "Performance"],
    },
    {
      id: "monitoring",
      title: "Monitoring",
      description: "Prometheus metrics and health checks",
      icon: <Activity className="w-6 h-6" />,
      enabled: data.monitoring,
      category: "advanced",
      badges: ["Prometheus", "Metrics", "Health"],
    },
  ];

  const handleToggle = (id: string) => {
    const feature = features.find((f) => f.id === id);
    if (!feature) return;

    // Handle database selection (exclusive - only one can be selected)
    if (id === "database" || id === "mongodb" || id === "firestore") {
      let dbType: "postgresql" | "mongodb" | "firestore" | "sqlite" | "mysql" = "postgresql";
      
      if (id === "mongodb") dbType = "mongodb";
      else if (id === "firestore") dbType = "firestore";
      
      // Toggle database enabled state
      const isCurrentlySelected = data.database.enabled && data.database.type === dbType;
      
      onChange({
        database: {
          ...data.database,
          enabled: !isCurrentlySelected,
          type: isCurrentlySelected ? "postgresql" : dbType,
        },
      });
    } 
    // Handle authentication
    else if (id === "authentication") {
      onChange({
        authentication: {
          ...data.authentication,
          enabled: !data.authentication.enabled,
        },
      });
    } 
    // Handle other features
    else {
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
      {/* Header - Centered */}
      <div className="text-center mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
          Select Features
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center">
          Choose the features you want to include in your project
        </p>
      </div>

      {/* Features by Category */}
      <div className="space-y-8">
        {/* Essential */}
        <div>
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-gradient-to-b from-[#0F172A] to-[#1E293B] rounded-full" />
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