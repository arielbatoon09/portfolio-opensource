"use client"

import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { HeaderNavigations } from "@/constants/navigations";

export default function DesktopNav() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + "/");
  }

  const handleMouseEnter = (title: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenMenu(title);
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  }

  return (
    <nav className="hidden md:flex items-center gap-6 relative">
      {HeaderNavigations.map((nav) => {
        const hasSubmenu = !!nav.submenu?.length;
        const active = isActive(nav.href);

        return (
          <div key={nav.title} className="relative"
            onMouseEnter={() => hasSubmenu && handleMouseEnter(nav.title)}
            onMouseLeave={() => hasSubmenu && handleMouseLeave()}
          >
            {/* Trigger Link */}
            <div className={`inline-flex items-center gap-1 ease-in-out text-sm font-normal capitalize transition-colors duration-200 relative py-1 px-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full hover:text-foreground text-foreground/70
              ${active ? "after:w-full after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200" : ""}`}
            >
              <Link href={nav.href ?? "#"} className="relative">
                {nav.title}
              </Link>
              {hasSubmenu && (
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ease-in-out ${openMenu === nav.title ? "rotate-180" : "rotate-0"}`} />
              )}
            </div>

            {/* Dropdown */}
            {hasSubmenu && openMenu === nav.title && (
              <div className="absolute right-0 top-full mt-2 w-56 rounded-[0.5rem] border border-border bg-background shadow-lg p-2 z-50"
                onMouseEnter={() => {
                  if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                    timeoutRef.current = null;
                  }
                }}
                onMouseLeave={() => handleMouseLeave()}
              >
                {nav.submenu?.map((sub) => {
                  const subActive = isActive(sub.href);
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
  )
}