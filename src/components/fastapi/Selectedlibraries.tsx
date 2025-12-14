"use client";

import { useState, useMemo } from "react";
import { X, Search, Plus, ChevronDown, Package } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export interface Library {
  name: string;
  version: string;
  description?: string;
}

interface SelectedLibrariesProps {
  selected: Library[];
  onChange: (libraries: Library[]) => void;
}

// Popular FastAPI libraries with default versions
const POPULAR_LIBRARIES: Library[] = [
  { name: "fastapi", version: "^0.104.0", description: "Modern web framework" },
  { name: "uvicorn", version: "^0.24.0", description: "ASGI server" },
  { name: "pydantic", version: "^2.5.0", description: "Data validation" },
  { name: "sqlalchemy", version: "^2.0.0", description: "SQL toolkit and ORM" },
  { name: "alembic", version: "^1.12.0", description: "Database migrations" },
  { name: "python-jose", version: "^3.3.0", description: "JWT implementation" },
  { name: "passlib", version: "^1.7.4", description: "Password hashing" },
  { name: "python-multipart", version: "^0.0.6", description: "Form data parsing" },
  { name: "email-validator", version: "^2.1.0", description: "Email validation" },
  { name: "redis", version: "^5.0.0", description: "Redis client" },
  { name: "celery", version: "^5.3.0", description: "Distributed task queue" },
  { name: "httpx", version: "^0.25.0", description: "HTTP client" },
  { name: "pytest", version: "^7.4.0", description: "Testing framework" },
  { name: "pytest-asyncio", version: "^0.21.0", description: "Async test support" },
  { name: "black", version: "^23.11.0", description: "Code formatter" },
  { name: "flake8", version: "^6.1.0", description: "Code linter" },
  { name: "mypy", version: "^1.7.0", description: "Static type checker" },
  { name: "python-dotenv", version: "^1.0.0", description: "Environment variables" },
  { name: "loguru", version: "^0.7.0", description: "Logging library" },
  { name: "python-cors", version: "^1.0.0", description: "CORS middleware" },
  { name: "psycopg2-binary", version: "^2.9.0", description: "PostgreSQL adapter" },
  { name: "motor", version: "^3.3.0", description: "Async MongoDB driver" },
  { name: "pymongo", version: "^4.6.0", description: "MongoDB driver" },
  { name: "aioboto3", version: "^12.0.0", description: "Async AWS SDK" },
  { name: "prometheus-client", version: "^0.19.0", description: "Metrics library" },
];

export default function SelectedLibraries({ selected, onChange }: SelectedLibrariesProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [manualName, setManualName] = useState("");
  const [manualVersion, setManualVersion] = useState("");

  // Filter libraries based on search and exclude already selected
  const filteredLibraries = useMemo(() => {
    const selectedNames = selected.map((lib) => lib.name.toLowerCase());
    return POPULAR_LIBRARIES.filter(
      (lib) =>
        !selectedNames.includes(lib.name.toLowerCase()) &&
        (lib.name.toLowerCase().includes(search.toLowerCase()) ||
          lib.description?.toLowerCase().includes(search.toLowerCase()))
    );
  }, [search, selected]);

  const addLibrary = (library: Library) => {
    onChange([...selected, library]);
    setOpen(false);
    setSearch("");
  };

  const removeLibrary = (name: string) => {
    onChange(selected.filter((lib) => lib.name !== name));
  };

  const addManualLibrary = () => {
    if (manualName.trim()) {
      const newLib: Library = {
        name: manualName.trim(),
        version: manualVersion.trim() || "latest",
      };
      onChange([...selected, newLib]);
      setManualName("");
      setManualVersion("");
      setShowManualEntry(false);
      setOpen(false);
      setSearch("");
    }
  };

  return (
    <div className="space-y-4">
      {/* Label */}
      <div>
        <Label className="text-sm font-semibold text-gray-900 flex items-center gap-2">
          <Package className="w-4 h-4 text-[#FF6B35]" />
          Additional Libraries
          <span className="ml-2 text-xs font-normal text-gray-500">
            Select or add custom Python packages
          </span>
        </Label>
      </div>

      {/* Selected Libraries Display */}
      {selected.length > 0 && (
        <div className="flex flex-wrap gap-2 p-4 bg-white rounded-lg border-2 border-gray-200">
          {selected.map((lib, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="px-3 py-2 bg-gradient-to-r from-[#FF6B35]/10 to-[#F7931E]/10 border border-[#FF6B35]/20 text-gray-900 hover:bg-[#FF6B35]/20 transition-colors"
            >
              <span className="font-semibold">{lib.name}</span>
              <span className="mx-1.5 text-gray-400">@</span>
              <span className="text-xs text-gray-600">{lib.version}</span>
              <button
                onClick={() => removeLibrary(lib.name)}
                className="ml-2 hover:text-red-600 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {/* Add Library Dropdown */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between h-12 border-2 border-gray-300 hover:border-[#FF6B35] transition-colors"
          >
            <span className="flex items-center gap-2 text-gray-600">
              <Search className="w-4 h-4" />
              Search and add libraries...
            </span>
            <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0" align="start" style={{ width: "var(--radix-popover-trigger-width)" }}>
          <Command>
            <CommandInput
              placeholder="Search libraries..."
              value={search}
              onValueChange={setSearch}
            />
            <CommandList>
              <CommandEmpty>
                <div className="py-6 text-center text-sm">
                  <p className="text-gray-600 mb-4">No library found.</p>
                  <Button
                    onClick={() => {
                      setShowManualEntry(true);
                      setOpen(false);
                    }}
                    variant="outline"
                    size="sm"
                    className="border-[#FF6B35] text-[#FF6B35] hover:bg-[#FF6B35]/10"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Custom Library
                  </Button>
                </div>
              </CommandEmpty>
              <CommandGroup>
                {filteredLibraries.map((lib) => (
                  <CommandItem
                    key={lib.name}
                    value={lib.name}
                    onSelect={() => addLibrary(lib)}
                    className="cursor-pointer hover:bg-gray-50 aria-selected:bg-gray-50 aria-selected:text-gray-900"
                  >
                    <div className="flex items-center justify-between w-full">
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">{lib.name}</div>
                        {lib.description && (
                          <div className="text-xs text-gray-500">{lib.description}</div>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 font-mono ml-4">
                        {lib.version}
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Manual Entry Form */}
      {showManualEntry && (
        <div className="p-6 bg-gradient-to-br from-[#FF6B35]/5 to-[#F7931E]/5 rounded-xl border-2 border-[#FF6B35]/20">
          <div className="flex items-center justify-between mb-4">
            <h4 className="font-semibold text-gray-900">Add Custom Library</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setShowManualEntry(false);
                setManualName("");
                setManualVersion("");
              }}
              className="h-8 w-8 p-0"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="manual-name" className="text-sm font-medium text-gray-700 mb-2">
                Package Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="manual-name"
                value={manualName}
                onChange={(e) => setManualName(e.target.value)}
                placeholder="e.g., custom-package"
                className="h-11"
              />
            </div>

            <div>
              <Label htmlFor="manual-version" className="text-sm font-medium text-gray-700 mb-2">
                Version
              </Label>
              <Input
                id="manual-version"
                value={manualVersion}
                onChange={(e) => setManualVersion(e.target.value)}
                placeholder="e.g., ^1.0.0 or latest"
                className="h-11"
              />
              <p className="text-xs text-gray-500 mt-1">Leave empty for latest version</p>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button
              onClick={addManualLibrary}
              disabled={!manualName.trim()}
              className="flex-1 bg-gradient-to-r from-[#FF6B35] to-[#F7931E] hover:from-[#FF7B45] hover:to-[#F8A32E] border-0"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add Library
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                setShowManualEntry(false);
                setManualName("");
                setManualVersion("");
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Quick Add Button (when manual entry is hidden) */}
      {!showManualEntry && (
        <Button
          variant="ghost"
          onClick={() => setShowManualEntry(true)}
          className="w-full border-2 border-dashed border-gray-300 hover:border-[#FF6B35] hover:bg-[#FF6B35]/5 transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Custom Library Manually
        </Button>
      )}

      {/* Info Text */}
      <p className="text-xs text-gray-500">
        Selected libraries will be added to your project's dependencies with the specified versions.
      </p>
    </div>
  );
}