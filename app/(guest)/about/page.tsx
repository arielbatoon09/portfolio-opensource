import { Suspense } from "react";
import { LoadingPage } from "@/components/common/LoadingPage";
import { AboutHero } from "@/components/content/AboutHero";
import { AboutTabs } from "@/components/content/AboutTabs";

export default function AboutPage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <AboutHero />
      <AboutTabs />
    </Suspense>
  );
}