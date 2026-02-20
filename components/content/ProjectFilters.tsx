"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ProjectType, ProjectCategory } from "@/constants/projects";

interface ProjectFiltersProps {
  onFilter: (filters: { type: ProjectType | "All"; category: ProjectCategory | "All"; tech: string; search: string }) => void;
  availableTech: string[];
}

export function ProjectFilters({ onFilter, availableTech }: ProjectFiltersProps) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<ProjectType | "All">("All");
  const [category, setCategory] = useState<ProjectCategory | "All">("All");
  const [tech, setTech] = useState("All");

  const handleApplyFilters = () => {
    onFilter({ type, category, tech, search });
  };

  const clearFilters = () => {
    setSearch("");
    setType("All");
    setCategory("All");
    setTech("All");
    onFilter({ type: "All", category: "All", tech: "All", search: "" });
  };

  return (
    <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm mb-8 space-y-4">
      {/* Search Bar - Full Width */}
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search projects..."
          className="pl-9 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleApplyFilters()}
        />
      </div>

      {/* Filters & Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <Select value={type} onValueChange={(val) => setType(val as ProjectType | "All")}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Types</SelectItem>
            <SelectItem value="Personal">Personal</SelectItem>
            <SelectItem value="Business">Business</SelectItem>
            <SelectItem value="Open Source">Open Source</SelectItem>
          </SelectContent>
        </Select>

        <Select value={category} onValueChange={(val) => setCategory(val as ProjectCategory | "All")}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Website">Website</SelectItem>
            <SelectItem value="Web App">Web App</SelectItem>
            <SelectItem value="Mobile App">Mobile App</SelectItem>
            <SelectItem value="Custom Software">Custom Software</SelectItem>
            <SelectItem value="Game Development">Game Development</SelectItem>
          </SelectContent>
        </Select>

        <Select value={tech} onValueChange={setTech}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Technology" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Tech</SelectItem>
            {availableTech.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Button onClick={handleApplyFilters} className="w-full">
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>

        <Button
          variant="outline"
          onClick={clearFilters}
          className="w-full"
          title="Clear Filters"
          disabled={!search && type === "All" && category === "All" && tech === "All"}
        >
          <X className="mr-2 h-4 w-4" /> Clear
        </Button>
      </div>
    </div>
  );
}