"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { ProjectInfo } from "@/types/fastapi.types";

interface ProjectInfoStepProps {
  data: ProjectInfo;
  onChange: (data: Partial<ProjectInfo>) => void;
  errors: Record<string, string>;
}

export default function ProjectInfoStep({ data, onChange, errors }: ProjectInfoStepProps) {
  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeInUp">
      {/* Header - Centered */}
      <div className="text-center mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
          Project Information
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center">
          Let's start with the basics of your FastAPI project
        </p>
      </div>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {/* Project Name - Full Width */}
        <div className="md:col-span-2">
          <Label htmlFor="projectName" className="text-sm font-semibold text-gray-900 mb-2">
            Project Name <span className="text-red-500">*</span>
            <span className="ml-2 text-xs font-normal text-gray-500">
              Used for folder name and package identifier
            </span>
          </Label>
          <Input
            id="projectName"
            value={data.projectName}
            onChange={(e) => onChange({ projectName: e.target.value })}
            placeholder="my-awesome-api"
            className={`h-12 ${errors.projectName ? "border-red-500" : ""}`}
          />
          <p className="text-xs text-gray-500 mt-1.5">
            Use lowercase with hyphens (e.g., my-fastapi-app)
          </p>
          {errors.projectName && (
            <p className="text-xs text-red-500 mt-1">{errors.projectName}</p>
          )}
        </div>

        {/* Version */}
        <div>
          <Label htmlFor="version" className="text-sm font-semibold text-gray-900 mb-2">
            Version <span className="text-red-500">*</span>
          </Label>
          <Input
            id="version"
            value={data.version}
            onChange={(e) => onChange({ version: e.target.value })}
            placeholder="0.1.0"
            className={`h-12 ${errors.version ? "border-red-500" : ""}`}
          />
          {errors.version && <p className="text-xs text-red-500 mt-1">{errors.version}</p>}
        </div>

        {/* Python Version */}
        <div>
          <Label htmlFor="pythonVersion" className="text-sm font-semibold text-gray-900 mb-2">
            Python Version <span className="text-red-500">*</span>
          </Label>
          <Select value={data.pythonVersion} onValueChange={(value) => onChange({ pythonVersion: value })}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select Python version" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="^3.12">Python 3.12+</SelectItem>
              <SelectItem value="^3.11">Python 3.11+</SelectItem>
              <SelectItem value="^3.10">Python 3.10+</SelectItem>
              <SelectItem value="^3.9">Python 3.9+</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Description - Full Width */}
        <div className="md:col-span-2">
          <Label htmlFor="description" className="text-sm font-semibold text-gray-900 mb-2">
            Description
            <span className="ml-2 text-xs font-normal text-gray-500">
              Brief description of your project
            </span>
          </Label>
          <Textarea
            id="description"
            value={data.description}
            onChange={(e) => onChange({ description: e.target.value })}
            placeholder="A production-ready FastAPI application for..."
            rows={3}
            className="resize-none"
          />
        </div>

        {/* Author Name */}
        <div>
          <Label htmlFor="authorName" className="text-sm font-semibold text-gray-900 mb-2">
            Author Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="authorName"
            value={data.authorName}
            onChange={(e) => onChange({ authorName: e.target.value })}
            placeholder="John Doe"
            className={`h-12 ${errors.authorName ? "border-red-500" : ""}`}
          />
          {errors.authorName && <p className="text-xs text-red-500 mt-1">{errors.authorName}</p>}
        </div>

        {/* Author Email */}
        <div>
          <Label htmlFor="authorEmail" className="text-sm font-semibold text-gray-900 mb-2">
            Author Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="authorEmail"
            type="email"
            value={data.authorEmail}
            onChange={(e) => onChange({ authorEmail: e.target.value })}
            placeholder="john@example.com"
            className={`h-12 ${errors.authorEmail ? "border-red-500" : ""}`}
          />
          {errors.authorEmail && <p className="text-xs text-red-500 mt-1">{errors.authorEmail}</p>}
        </div>
      </div>
    </div>
  );
}