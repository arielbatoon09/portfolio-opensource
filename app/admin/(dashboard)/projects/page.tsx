import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter, MoreVertical, ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function ProjectsAdminPage() {
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      status: "Published",
      category: "Fullstack",
      date: "Oct 24, 2023",
      views: "1.2k"
    },
    {
      id: 2,
      title: "AI Portfolio Generator",
      status: "Draft",
      category: "Next.js",
      date: "Nov 12, 2023",
      views: "0"
    },
    {
      id: 3,
      title: "Crypto Dashboard",
      status: "Published",
      category: "Frontend",
      date: "Sep 05, 2023",
      views: "850"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground italic text-sm">Manage and showcase your best work.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Add Project
        </Button>
      </div>

      <Card className="border-border/40 overflow-hidden">
        <CardHeader className="bg-muted/5 border-b border-border/40 pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search projects..." className="pl-9 h-9 border-border/40 text-xs" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9 border-border/40 text-[10px] font-bold uppercase tracking-widest">
                <Filter className="mr-2 h-3.5 w-3.5" /> Filter
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border/40 bg-muted/5">
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Project Name</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Status</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Category</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Views</th>
                  <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/40">
                {projects.map((project) => (
                  <tr key={project.id} className="group hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold">{project.title}</span>
                        <span className="text-[10px] text-muted-foreground">{project.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary" className={`text-[10px] px-2 py-0 border-none ${project.status === 'Published' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-muted text-muted-foreground'
                        }`}>
                        {project.status}
                      </Badge>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-medium text-muted-foreground">{project.category}</span>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-xs font-mono">{project.views}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-background">
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-background">
                          <MoreVertical className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
