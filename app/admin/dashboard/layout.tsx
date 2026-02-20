"use client";

import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/admin/AppSidebar";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { Search, Bell, Command } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-background">
        <header className="flex h-20 shrink-0 items-center justify-between gap-4 px-6 border-b border-border/40 sticky top-0 bg-background/60 backdrop-blur-xl z-20">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="-ml-1 h-9 w-9" />
            <Separator orientation="vertical" className="h-4 bg-border/60" />
            <Breadcrumb className="hidden md:block">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/admin/dashboard" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 hover:text-primary transition-colors">
                    Console
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-[10px] font-black uppercase tracking-widest text-primary">Overview</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="flex-1 max-w-md hidden lg:block relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
            <Input
              placeholder="Search console... (⌘K)"
              className="w-full pl-10 bg-muted/20 border-border/40 focus-visible:ring-primary/20 focus-visible:border-primary/30 h-10 rounded-xl transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden group-focus-within:block">
              <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 mr-2 px-1 py-1 rounded-xl bg-muted/30 border border-border/40">
              <button className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-background transition-all text-muted-foreground hover:text-foreground">
                <Bell className="h-4 w-4" />
              </button>
              <button className="h-8 w-8 rounded-lg flex items-center justify-center hover:bg-background transition-all text-muted-foreground hover:text-foreground">
                <Command className="h-4 w-4" />
              </button>
            </div>
            <Separator orientation="vertical" className="h-4 mr-2 bg-border/60" />
            <ThemeToggle />
          </div>
        </header>
        <main className="flex flex-1 flex-col gap-6 p-6 lg:p-10">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
