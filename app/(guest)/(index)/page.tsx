import { Suspense } from "react";
import { LoadingPage } from "@/components/common/LoadingPage";
import { HomeBanner } from "@/components/content/HomeBanner";
import { SkillOverview } from "@/components/content/SkillOverview";
import { RecentProjects } from "@/components/content/RecentProjects";
import { RecentBlogs } from "@/components/content/RecentBlogs";
import { CTABanner } from "@/components/content/CTABanner";

export default function HomePage() {
	return (
		<Suspense fallback={<LoadingPage />}>
			<HomeBanner />
			<SkillOverview />
			<RecentProjects />
			<RecentBlogs />
			<CTABanner />
		</Suspense>
	);
}