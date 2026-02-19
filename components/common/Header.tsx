import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeaderNavigations } from "@/constants/navigations";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
	return (
		<header aria-label="Navigation" className="flex justify-center w-full fixed top-0 sm:top-0 lg:top-0 z-40 transition-shadow duration-300">
			<div className="w-full mx-auto flex items-center justify-between px-4 py-3 max-w-4xl transition-all duration-500 ease-in-out border border-border rounded-b-[0.5rem] bg-background/95 backdrop-blur-sm">
				<Link href="/" className="transition-colors duration-300 ease-in-out font-custom flex shrink-0 items-center gap-2 text-xl font-semibold">
					<Image className="contrast-[50%] dark:hidden" src="/media/ab_logo_pure_black.png" alt="Logo" width={50} height={50} priority />
					<Image className="hidden dark:block" src="/media/ab_logo_pure_white.png" alt="Logo" width={50} height={50} priority />
				</Link>

				<div className="flex items-center gap-2 md:gap-4">
					<nav className="hidden items-center gap-6 md:flex">
						{HeaderNavigations.map((nav) => (
							<Link key={nav.title} href={nav.href ? nav.href : ""}
								className="inline-block ease-in-out text-sm font-normal capitalize transition-colors duration-200 relative py-1 px-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-foreground text-foreground/70">
								{nav.title}
							</Link>
						))}
					</nav>

					<ThemeToggle />
				</div>
			</div>
		</header>
	);
}