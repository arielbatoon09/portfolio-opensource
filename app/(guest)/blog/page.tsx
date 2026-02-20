import { Suspense } from "react";
import { LoadingPage } from "@/components/common/LoadingPage";
import { BlogsGrid } from "@/components/content/BlogsGrid";

export default function BlogPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <BlogsGrid />
    </Suspense>
  );
}
