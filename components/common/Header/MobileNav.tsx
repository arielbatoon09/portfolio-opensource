"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { MobileNavigations } from "@/constants/navigations";
import { DrawerClose } from "@/components/ui/drawer";
import { useState, useEffect } from "react";

export default function MobileNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Initialize hash structure
    setCurrentHash(window.location.hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    // Also update on click for same-page hash links that might not trigger hashchange immediately in all routers
    // though for standard anchors they do.
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const isActive = (href?: string) => {
    if (!href) return false;

    // Split href into path and hash
    const [targetPath, targetHash] = href.split("#");
    const hasHash = href.includes("#");

    // Check if paths match
    const pathMatches = pathname === targetPath || (targetPath !== "/" && pathname.startsWith(targetPath + "/"));

    if (!pathMatches) return false;

    // If the link has a hash, require the current hash to match
    if (hasHash) {
      return currentHash === `#${targetHash}`;
    }

    // If the link has NO hash (like /about), it should only be active if there is NO current hash
    // (This fulfills "avoid making the about as active state" when on #experience)
    return currentHash === "" || currentHash === "#";
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href?: string) => {
    setIsOpen(false);

    if (href?.includes("#")) {
      const [targetPath, targetHash] = href.split("#");

      // Check if we are currently on the target page
      // Note: pathname might vary (e.g. with/without trailing slash), simple equality check usually enough for Next.js pathnames
      const isSamePage = pathname === targetPath || (targetPath !== "/" && pathname === targetPath + "/");

      if (isSamePage) {
        // Prevent default navigation to avoid conflict with Drawer's scroll lock release
        e.preventDefault();

        // Wait for Drawer close animation to allow scroll lock to release
        setTimeout(() => {
          window.location.hash = targetHash;
          // Update local state for immediate feedback if needed, although hashchange will do it
          setCurrentHash(`#${targetHash}`);
        }, 300);
      } else {
        // Navigating to new page, just update local state
        setTimeout(() => setCurrentHash(`#${targetHash}`), 50);
      }
    } else {
      setTimeout(() => setCurrentHash(""), 50);
    }
  }

  return (
    <div className="md:hidden">
      <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <button className="p-2 -mr-2 hover:bg-muted rounded-md outline-none">
            <Menu className="w-5 h-5" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="h-full rounded-l-xl rounded-r-none outline-none">
          <div className="px-6 py-4 border-b flex justify-between items-center">
            <DrawerTitle className="font-bold text-xl">Menu</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="ghost" size="icon" className="p-2 -mr-2 hover:bg-muted rounded-md outline-none">
                <X className="size-6" />
              </Button>
            </DrawerClose>
          </div>
          <div className="flex flex-col gap-2 p-4 overflow-y-auto">
            {MobileNavigations.map((nav) => {
              const active = isActive(nav.href);
              return (
                <Link
                  key={nav.title}
                  href={nav.href || "#"}
                  onClick={(e) => handleLinkClick(e, nav.href)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-[0.5rem] text-sm font-medium transition-colors ${active ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
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
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-[0.5rem] text-sm font-medium transition-colors"
            >
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}