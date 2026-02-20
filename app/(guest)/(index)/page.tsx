import { Suspense } from "react";
import { LoadingPage } from "@/components/common/LoadingPage";
import { HomeBanner } from "@/components/content/HomeBanner";
import SkillOverview from "@/components/content/SkillOverview";
import RecentProjects from "@/components/content/RecentProjects";
import RecentBlogs from "@/components/content/RecentBlogs";
import { CTABanner } from "@/components/content/CTABanner";

async function HomeContent() {
	await new Promise((resolve) => setTimeout(resolve, 1000));

	return (
		<>
			<HomeBanner />
			<SkillOverview />
			<RecentProjects />
			<RecentBlogs />
			<CTABanner />
		</>
	);
}

export default function Home() {
	return (
		<Suspense fallback={<LoadingPage />}>
			<HomeContent />
		</Suspense>
	);
}