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
import { BlogCategory } from "@/constants/blogs";

interface BlogFiltersProps {
  onFilter: (filters: { category: BlogCategory | "All"; year: string | "All"; search: string }) => void;
  availableYears: string[];
}

export function BlogFilters({ onFilter, availableYears }: BlogFiltersProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<BlogCategory | "All">("All");
  const [year, setYear] = useState<string | "All">("All");

  const handleApplyFilters = () => {
    onFilter({ category, year, search });
  };

  const clearFilters = () => {
    setSearch("");
    setCategory("All");
    setYear("All");
    onFilter({ category: "All", year: "All", search: "" });
  };

  return (
    <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm mb-8 space-y-4">
      {/* Search Bar - Full Width */}
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search articles..."
          className="pl-9 w-full"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleApplyFilters()}
        />
      </div>

      {/* Filters & Actions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Select value={category} onValueChange={(val) => setCategory(val as BlogCategory | "All")}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Categories</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Tutorial">Tutorial</SelectItem>
            <SelectItem value="Career">Career</SelectItem>
            <SelectItem value="Lifestyle">Lifestyle</SelectItem>
            <SelectItem value="Design">Design</SelectItem>
          </SelectContent>
        </Select>

        <Select value={year} onValueChange={setYear}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Years</SelectItem>
            {availableYears.map((y) => (
              <SelectItem key={y} value={y}>{y}</SelectItem>
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
          disabled={!search && category === "All" && year === "All"}
        >
          <X className="mr-2 h-4 w-4" /> Clear
        </Button>
      </div>
    </div>
  );
}