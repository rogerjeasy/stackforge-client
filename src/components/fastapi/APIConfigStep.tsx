"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import SelectedLibraries from "./Selectedlibraries";
import type { APIConfig } from "@/types/fastapi.types";

interface APIConfigStepProps {
  data: APIConfig;
  onChange: (data: Partial<APIConfig>) => void;
  errors: Record<string, string>;
}

export default function APIConfigStep({ data, onChange, errors }: APIConfigStepProps) {
  const [newOrigin, setNewOrigin] = useState("");

  const addOrigin = () => {
    if (newOrigin.trim() && !data.corsOrigins.includes(newOrigin.trim())) {
      onChange({ corsOrigins: [...data.corsOrigins, newOrigin.trim()] });
      setNewOrigin("");
    }
  };

  const removeOrigin = (origin: string) => {
    onChange({ corsOrigins: data.corsOrigins.filter((o) => o !== origin) });
  };

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeInUp">
      {/* Header - Centered */}
      <div className="text-center mx-auto max-w-3xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 text-center">
          API Configuration
        </h2>
        <p className="text-sm sm:text-base text-gray-600 text-center">
          Configure your API server and endpoints
        </p>
      </div>

      {/* Form Grid */}
      <div className="space-y-6">
        {/* Server Configuration */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {/* Host */}
          <div>
            <Label htmlFor="host" className="text-sm font-semibold text-gray-900 mb-2">
              Host
              <span className="ml-2 text-xs font-normal text-gray-500">
                Server bind address
              </span>
            </Label>
            <Input
              id="host"
              value={data.host}
              onChange={(e) => onChange({ host: e.target.value })}
              placeholder="0.0.0.0"
              className="h-12"
            />
          </div>

          {/* Port */}
          <div>
            <Label htmlFor="port" className="text-sm font-semibold text-gray-900 mb-2">
              Port
              <span className="ml-2 text-xs font-normal text-gray-500">
                Server port number
              </span>
            </Label>
            <Input
              id="port"
              type="number"
              value={data.port}
              onChange={(e) => onChange({ port: parseInt(e.target.value) || 8000 })}
              placeholder="8000"
              className="h-12"
            />
          </div>

          {/* API Prefix */}
          <div>
            <Label htmlFor="apiPrefix" className="text-sm font-semibold text-gray-900 mb-2">
              API Prefix
              <span className="ml-2 text-xs font-normal text-gray-500">
                Base path for all routes
              </span>
            </Label>
            <Input
              id="apiPrefix"
              value={data.apiPrefix}
              onChange={(e) => onChange({ apiPrefix: e.target.value })}
              placeholder="/api/v1"
              className="h-12"
            />
          </div>

          {/* Docs URL */}
          <div>
            <Label htmlFor="docsUrl" className="text-sm font-semibold text-gray-900 mb-2">
              Docs URL
              <span className="ml-2 text-xs font-normal text-gray-500">
                Swagger UI path
              </span>
            </Label>
            <Input
              id="docsUrl"
              value={data.docsUrl}
              onChange={(e) => onChange({ docsUrl: e.target.value })}
              placeholder="/docs"
              className="h-12"
            />
          </div>
        </div>

        {/* CORS Configuration */}
        <div className="p-6 bg-gray-50 rounded-xl border-2 border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Label className="text-base font-bold text-gray-900">
                CORS Configuration
              </Label>
              <p className="text-sm text-gray-600 mt-1">
                Enable Cross-Origin Resource Sharing for your API
              </p>
            </div>
            <Switch
              checked={data.corsEnabled}
              onCheckedChange={(checked) => onChange({ corsEnabled: checked })}
            />
          </div>

          {data.corsEnabled && (
            <div className="mt-4 space-y-4">
              <Label className="text-sm font-semibold text-gray-900">
                Allowed Origins
              </Label>

              {/* Origins List */}
              {data.corsOrigins.length > 0 && (
                <div className="space-y-2">
                  {data.corsOrigins.map((origin, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200"
                    >
                      <span className="text-sm text-gray-700 font-mono">{origin}</span>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeOrigin(origin)}
                        className="h-8 w-8 p-0 hover:bg-red-50 hover:text-red-600"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              {/* Add Origin Input */}
              <div className="flex gap-2">
                <Input
                  value={newOrigin}
                  onChange={(e) => setNewOrigin(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      addOrigin();
                    }
                  }}
                  placeholder="https://example.com"
                  className="h-11"
                />
                <Button
                  type="button"
                  onClick={addOrigin}
                  className="h-11 px-4 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF7B45] hover:to-[#F8A32E]"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <p className="text-xs text-gray-500">
                Add allowed origins one at a time. Use "*" for all origins (not recommended for production)
              </p>
            </div>
          )}
        </div>

        {/* Libraries Selection */}
        <SelectedLibraries
          selected={data.libraries || []}
          onChange={(libraries) => onChange({ libraries })}
        />
      </div>
    </div>
  );
}