// types/fastapi.types.ts

export interface ProjectInfo {
  projectName: string;
  version: string;
  pythonVersion: string;
  description: string;
  authorName: string;
  authorEmail: string;
}

export interface Library {
  name: string;
  version: string;
  description?: string;
}

export interface APIConfig {
  host: string;
  port: number;
  apiPrefix: string;
  docsUrl: string;
  redocUrl: string;
  corsEnabled: boolean;
  corsOrigins: string[];
  libraries: Library[];
}

export interface DatabaseConfig {
  enabled: boolean;
  type: "postgresql" | "mysql" | "sqlite" | "mongodb" | "firestore";
  useAsync: boolean;
  migrations: boolean;
}

export interface AuthConfig {
  enabled: boolean;
  jwtSecret: boolean;
  oauth: boolean;
  apiKeys: boolean;
}

export interface Features {
  database: DatabaseConfig;
  authentication: AuthConfig;
  celery: boolean;
  redis: boolean;
  docker: boolean;
  testing: boolean;
  cicd: boolean;
  logging: boolean;
  monitoring: boolean;
  swagger: boolean;
}

export interface FastAPIProject {
  projectInfo: ProjectInfo;
  apiConfig: APIConfig;
  features: Features;
}

export type WizardStep = 1 | 2 | 3 | 4;

export interface StepValidation {
  isValid: boolean;
  errors: Record<string, string>;
}

export interface FeatureOption {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  enabled: boolean;
  category: "essential" | "database" | "auth" | "devops" | "advanced";
  dependencies?: string[];
  badges?: string[];
}