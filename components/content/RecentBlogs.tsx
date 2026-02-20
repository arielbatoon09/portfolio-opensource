"use client";

import { useState, useEffect } from "react";
import { Section } from "@/components/common/Section";
import { SectionHeading } from "@/components/common/SectionHeading";
import { BlogPosts } from "@/constants/blogs";
import { CardShowcase, CardShowcaseSkeleton } from "@/components/common/CardShowcase";

export function RecentBlogs() {
  const [isLoading, setIsLoading] = useState(true);
  const recentBlogs = BlogPosts.filter(p => p.featured).slice(0, 2);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Section className="!py-12">
      <SectionHeading
        title="Recent Blogs"
        description="Check out my latest articles and thoughts"
        button={{ label: "View All", href: "/blog" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading ? (
          <>
            <CardShowcaseSkeleton />
            <CardShowcaseSkeleton />
          </>
        ) : (
          recentBlogs.map((post) => (
            <CardShowcase
              key={post.id}
              title={post.title}
              image={post.coverImage}
              href={`/blog/${post.slug}`}
            />
          ))
        )}
      </div>
    </Section>
  );
}