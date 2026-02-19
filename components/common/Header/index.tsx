"use client"

import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import Logo from "@/components/common/Header/Logo";
import DesktopNav from "@/components/common/Header/DesktopNav";
import MobileNav from "@/components/common/Header/MobileNav";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="flex justify-center w-full fixed top-0 z-40 transition-shadow duration-300">
      <div className={`w-full mx-auto flex items-center justify-between px-4 py-3 max-w-4xl transition-all duration-500 ease-in-out border rounded-b-[0.5rem] bg-background/95 backdrop-blur-sm ${isScrolled ? "border-border" : "border-transparent"}`}>
        <Logo />
        <div className="flex items-center gap-2 md:gap-4">
          <DesktopNav />
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  )
}