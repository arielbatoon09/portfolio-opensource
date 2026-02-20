"use client";

import { useState, useMemo, useEffect } from "react";
import { BlogCategory, BlogPosts, BlogPost } from "@/constants/blogs";
import { BlogFilters } from "@/components/content/BlogFilters";
import { BlogCard, BlogCardSkeleton } from "@/components/common/BlogCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/common/Section";
import { PageHeading } from "@/components/common/PageHeading";

export function BlogsGrid() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const itemsPerPage = 6;

  const [activeFilters, setActiveFilters] = useState({
    category: "All" as BlogCategory | "All",
    year: "All" as string | "All",
    search: "",
  });

  // Initial loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const simulateLoading = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  // Extract year from date string (e.g., "October 15, 2024")
  const getPostYear = (dateStr: string) => {
    const parts = dateStr.split(", ");
    return parts[parts.length - 1];
  };

  // Derived state for filtered blogs
  const filteredBlogs = useMemo(() => {
    return BlogPosts.filter((post) => {
      const postYear = getPostYear(post.date);
      const categoryMatch = activeFilters.category === "All" || post.category === activeFilters.category;
      const yearMatch = activeFilters.year === "All" || postYear === activeFilters.year;
      const searchMatch = !activeFilters.search ||
        post.title.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(activeFilters.search.toLowerCase()) ||
        post.content?.toLowerCase().includes(activeFilters.search.toLowerCase());

      return categoryMatch && yearMatch && searchMatch;
    });
  }, [activeFilters]);

  // Derived state for pagination
  const totalPages = Math.ceil(filteredBlogs.length / itemsPerPage);
  const currentBlogs = filteredBlogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (newPage: number) => {
    simulateLoading();
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get all unique years for filter dropdown
  const allYears = Array.from(new Set(BlogPosts.map(post => getPostYear(post.date)))).sort((a, b) => b.localeCompare(a));

  return (
    <Section className="!pt-24">
      <PageHeading
        title="From the Blog"
        description="Thoughts on software development, design patterns, and the future of tech."
      />

      <div>
        <BlogFilters
          onFilter={(filters) => {
            simulateLoading();
            setActiveFilters(filters);
            setCurrentPage(1);
          }}
          availableYears={allYears}
        />

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: itemsPerPage }).map((_, i) => (
              <BlogCardSkeleton key={i} />
            ))}
          </div>
        ) : currentBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {currentBlogs.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-muted/20 rounded-lg border border-border/50">
            <h3 className="text-xl font-semibold mb-2 text-muted-foreground">No articles found</h3>
            <p className="text-muted-foreground">Try adjusting your filters or search terms.</p>
          </div>
        )}

        {/* Pagination Controls */}
        {!isLoading && totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="text-sm font-medium">
              Page {currentPage} of {totalPages}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </Section>
  );
}
