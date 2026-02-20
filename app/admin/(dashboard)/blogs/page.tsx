import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, BookOpen, Clock, MoreVertical, Edit2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

export default function BlogsAdminPage() {
  const posts = [
    {
      id: 1,
      title: "The Future of Web Development in 2024",
      author: "Ariel Batoon",
      category: "Trends",
      status: "Published",
      date: "Oct 28, 2023",
      readTime: "5 min"
    },
    {
      id: 2,
      title: "Mastering Framer Motion for Next.js",
      author: "Ariel Batoon",
      category: "Tutorial",
      status: "Draft",
      date: "Nov 02, 2023",
      readTime: "12 min"
    },
    {
      id: 3,
      title: "Building Scalable APIs with Hono",
      author: "Ariel Batoon",
      category: "Backend",
      status: "Published",
      date: "Sep 15, 2023",
      readTime: "8 min"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Blog Posts</h1>
          <p className="text-muted-foreground italic text-sm">Write, edit, and publish your thoughts.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" /> Create Post
        </Button>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="group border-border/40 hover:border-primary/20 transition-all duration-300 shadow-sm hover:shadow-md">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row">
                <div className="h-32 md:h-auto md:w-48 bg-muted/60 relative overflow-hidden group-hover:bg-muted/80 transition-colors">
                  <BookOpen className="absolute inset-0 m-auto h-8 w-8 text-muted-foreground/30" />
                </div>
                <div className="flex-1 p-6 relative">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary" className="bg-primary/5 text-primary text-[10px] uppercase font-bold tracking-widest border-none">
                        {post.category}
                      </Badge>
                      <Badge variant="secondary" className={`text-[10px] px-2 py-0 border-none ${post.status === 'Published' ? 'bg-emerald-500/10 text-emerald-600' : 'bg-muted text-muted-foreground'
                        }`}>
                        {post.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon" className="h-8 w-8 border border-border/40 hover:bg-background">
                        <Edit2 className="h-3.5 w-3.5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8 border border-border/40 hover:bg-background">
                        <MoreVertical className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors cursor-pointer mb-2 leading-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5 font-medium">
                      By {post.author}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                    <span className="hidden sm:inline font-mono">{post.date}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
