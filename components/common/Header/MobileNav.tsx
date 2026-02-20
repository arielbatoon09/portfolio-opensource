"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerFooter, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { MobileNavigations } from "@/constants/navigations";
import { DrawerClose } from "@/components/ui/drawer";

export default function MobileNav() {
  const pathname = usePathname();

  const isActive = (href?: string) => {
    if (!href) return false;
    return pathname === href || pathname.startsWith(href + "/");
  }

  return (
    <div className="md:hidden">
      <Drawer direction="right">
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
                <Link key={nav.title} href={nav.href || "#"}
                  className={`flex items-center gap-3 px-4 py-3 rounded-[0.5rem] text-sm font-medium transition-colors ${active ? "bg-primary/10 text-primary" : "hover:bg-muted"}`}
                >
                  {nav.icon && <nav.icon className="w-4 h-4" />}
                  {nav.title}
                </Link>
              )
            })}
          </div>
          <DrawerFooter className="border-t p-4">
            <Link href="/contact" className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-[0.5rem] text-sm font-medium transition-colors">
              <Mail className="w-4 h-4" />
              Contact
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  )
}