import { BlogPost } from "@/constants/blogs";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="group h-full w-full transition-all duration-300 hover:translate-y-[-4px]">
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full w-full rounded-lg overflow-hidden bg-card hover:shadow-lg transition-all duration-300 border border-card-foreground/10">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={800}
            height={600}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm shadow-sm hover:bg-background/90 transition-colors">
              {post.category}
            </Badge>
          </div>
        </div>

        <div className="flex flex-col justify-between p-5 flex-grow space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <CalendarDays className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-foreground line-clamp-2 group-hover:text-primary transition-colors leading-tight">
              {post.title}
            </h3>

            <p className="text-muted-foreground text-sm line-clamp-2 leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="px-2 py-0 text-[10px] text-muted-foreground border-border/50 bg-secondary/10">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2 border-t border-border/40">
              <div className="bg-primary/10 p-1.5 rounded-full">
                <User className="w-3.5 h-3.5 text-primary" />
              </div>
              <span className="text-xs font-medium text-foreground">{post.author}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export function BlogCardSkeleton() {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden border border-border/50 bg-card">
      <div className="aspect-[16/9] w-full relative">
        <Skeleton className="h-full w-full" />
        <div className="absolute top-4 left-4">
          <Skeleton className="h-5 w-20 rounded-full" />
        </div>
      </div>
      <div className="p-5 space-y-4">
        <div className="flex gap-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-7 w-full" />
          <Skeleton className="h-7 w-2/3" />
        </div>
        <div className="space-y-2 pt-1">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>
        <div className="pt-2 flex gap-2">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-5 w-18" />
        </div>
        <div className="pt-2 border-t border-border/40 flex items-center gap-2">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-4 w-32" />
        </div>
      </div>
    </div>
  );
}
