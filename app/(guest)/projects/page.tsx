import { Suspense } from "react";
import { LoadingPage } from "@/components/common/LoadingPage";
import { ProjectsGrid } from "@/components/content/ProjectsGrid";

export default function ProjectsPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <ProjectsGrid />
    </Suspense>
  );
}