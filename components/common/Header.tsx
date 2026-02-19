"use client"

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { HeaderNavigations } from "@/constants/navigations";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { ChevronDown, Menu, Mail, X } from "lucide-react";
import { Drawer, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger, DrawerClose } from "@/components/ui/drawer";
import { MobileNavigations } from "@/constants/navigations";

export function Header() {
	const pathname = usePathname()
	const [openMenu, setOpenMenu] = useState<string | null>(null)
	const [isScrolled, setIsScrolled] = useState(false)
	const timeoutRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0)
		}
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const handleMouseEnter = (title: string) => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current)
			timeoutRef.current = null
		}
		setOpenMenu(title)
	}

	const handleMouseLeave = () => {
		timeoutRef.current = setTimeout(() => {
			setOpenMenu(null)
		}, 150)
	}

	const isActive = (href?: string) => {
		if (!href) return false
		return pathname === href || pathname.startsWith(href + "/")
	}

	return (
		<header className="flex justify-center w-full fixed top-0 z-40 transition-shadow duration-300">
			<div className={`w-full mx-auto flex items-center justify-between px-4 py-3 max-w-4xl transition-all duration-500 ease-in-out border rounded-b-[0.5rem] bg-background/95 backdrop-blur-sm ${isScrolled ? "border-border" : "border-transparent"}`}>

				{/* Logo */}
				<Link href="/" className="font-custom flex shrink-0 items-center gap-2 text-xl font-semibold transition-colors duration-300 ease-in-out">
					<Image className="contrast-[70%] dark:hidden" src="/media/ab_logo_pure_black.png" alt="Logo" width={50} height={50} priority />
					<Image className="contrast-[70%] hidden dark:block" src="/media/ab_logo_pure_white.png" alt="Logo" width={50} height={50} priority />
				</Link>

				<div className="flex items-center gap-2 md:gap-4">
					<nav className="hidden md:flex items-center gap-6 relative">
						{HeaderNavigations.map((nav) => {
							const hasSubmenu = !!nav.submenu?.length
							const active = isActive(nav.href)

							return (
								<div
									key={nav.title}
									className="relative"
									onMouseEnter={() => hasSubmenu && handleMouseEnter(nav.title)}
									onMouseLeave={() => hasSubmenu && handleMouseLeave()}
								>
									{/* Trigger Link */}
									<div
										className={`inline-flex items-center gap-1 ease-in-out text-sm font-normal capitalize transition-colors duration-200 relative py-1 px-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-foreground text-foreground/70
                      ${active ? "after:w-full after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200" : ""}`}
									>
										<Link href={nav.href ?? "#"} className="relative">
											{nav.title}
										</Link>
										{hasSubmenu && (
											<ChevronDown
												className={`w-4 h-4 transition-transform duration-200 ease-in-out ${openMenu === nav.title ? "rotate-180" : "rotate-0"
													}`}
											/>
										)}
									</div>

									{/* Dropdown */}
									{hasSubmenu && openMenu === nav.title && (
										<div className="absolute right-0 top-full mt-2 w-56 rounded-[0.5rem] border border-border bg-background shadow-lg p-2 z-50"
											onMouseEnter={() => {
												if (timeoutRef.current) {
													clearTimeout(timeoutRef.current)
													timeoutRef.current = null
												}
											}}
											onMouseLeave={() => handleMouseLeave()}
										>
											{nav.submenu?.map((sub) => {
												const subActive = isActive(sub.href)
												return (
													<Link key={sub.title} href={sub.href}
														className={`block px-3 py-2 rounded-[0.5rem] text-sm transition-colors duration-200
                              ${subActive ? "bg-muted text-foreground" : "text-foreground/70 hover:bg-muted hover:text-foreground"}`}
													>
														<div className="flex items-center gap-3">
															{sub.icon && <sub.icon className="w-4 h-4" />}
															<div>
																<div className="font-medium">{sub.title}</div>
																{sub.description && (
																	<div className="text-xs text-muted-foreground">{sub.description}</div>
																)}
															</div>
														</div>
													</Link>
												)
											})}
										</div>
									)}
								</div>
							)
						})}
					</nav>


					<ThemeToggle />

					{/* Mobile Menu */}
					<div className="md:hidden">
						<Drawer direction="right">
							<DrawerTrigger asChild>
								<button className="p-2 -mr-2 hover:bg-muted rounded-md outline-none">
									<Menu className="w-5 h-5" />
								</button>
							</DrawerTrigger>
							<DrawerContent className="h-full rounded-l-xl rounded-r-none outline-none">
								<div className="px-6 py-4 border-b flex justify-between items-center">
									<DrawerTitle>Menu</DrawerTitle>
									<DrawerClose asChild>
										<Button variant="ghost" size="icon" className="p-2 -mr-2 hover:bg-muted rounded-md outline-none">
											<X className="w-5 h-5" />
										</Button>
									</DrawerClose>
								</div>
								<div className="flex flex-col gap-2 p-4 overflow-y-auto">
									{MobileNavigations.map((nav) => {
										const active = isActive(nav.href)
										return (
											<Link
												key={nav.title}
												href={nav.href || "#"}
												className={`flex items-center gap-3 px-4 py-3 rounded-md text-sm font-medium transition-colors ${active ? "bg-primary/10 text-primary" : "hover:bg-muted"
													}`}
											>
												{nav.icon && <nav.icon className="w-4 h-4" />}
												{nav.title}
											</Link>
										)
									})}
								</div>
								<DrawerFooter className="border-t p-4">
									<Link
										href="/contact"
										className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md text-sm font-medium transition-colors"
									>
										<Mail className="w-4 h-4" />
										Contact
									</Link>
								</DrawerFooter>
							</DrawerContent>
						</Drawer>
					</div>
				</div>
			</div>
		</header>
	)
}