import {
  LayoutDashboard,
  FileText,
  FolderKanban,
  MessageSquare,
  Settings,
  LogOut,
  User,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
} from "@/components/ui/sidebar";
import Link from "next/link";

const items = [
  {
    title: "Dashboard",
    url: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Projects",
    url: "/admin/projects",
    icon: FolderKanban,
  },
  {
    title: "Blogs",
    url: "/admin/blogs",
    icon: FileText,
  },
  {
    title: "Messages",
    url: "/admin/messages",
    icon: MessageSquare,
  },
];

const secondaryItems = [
  {
    title: "Settings",
    url: "/admin/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  return (
    <Sidebar collapsible="icon" className="border-r border-border/40 bg-card/50 backdrop-blur-xl">
      <SidebarHeader className="h-20 flex items-center px-6 border-b border-border/40">
        <div className="flex items-center gap-3 font-bold text-xl tracking-tighter">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20 ring-1 ring-white/20">
            <span className="text-xl font-black">A</span>
          </div>
          <div className="flex flex-col leading-none group-data-[collapsible=icon]:hidden">
            <span className="text-foreground">Portfolio</span>
            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">Console</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 pt-4">
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2">Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="gap-1">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="h-11 px-4 rounded-xl hover:bg-primary/5 hover:text-primary transition-all duration-200 group/item"
                  >
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 transition-transform duration-200 group-hover/item:scale-110" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="px-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 mb-2">System</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    tooltip={item.title}
                    className="h-11 px-4 rounded-xl hover:bg-primary/5 hover:text-primary transition-all duration-200 group/item"
                  >
                    <Link href={item.url} className="flex items-center gap-3">
                      <item.icon className="h-5 w-5 transition-transform duration-200 group-hover/item:scale-110" />
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-border/40 p-4 bg-muted/5">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="w-full justify-start gap-3 h-14 rounded-2xl hover:bg-background/80 transition-all border border-transparent hover:border-border/40">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-muted to-muted/50 border border-border/50 flex items-center justify-center shadow-inner">
                <User className="h-5 w-5 text-muted-foreground" />
              </div>
              <div className="flex flex-col items-start group-data-[collapsible=icon]:hidden">
                <span className="text-sm font-bold text-foreground">Ariel Batoon</span>
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Super Admin</span>
              </div>
              <LogOut className="h-4 w-4 ml-auto text-muted-foreground/50 group-data-[collapsible=icon]:hidden hover:text-destructive transition-colors" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
