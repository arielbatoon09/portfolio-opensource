import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BlogPosts } from "@/constants/blogs";
import { notFound } from "next/navigation";
import { Section } from "@/components/common/Section";

export default async function BlogDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const postIndex = BlogPosts.findIndex((p) => p.slug === slug);
  const post = BlogPosts[postIndex];

  if (!post) {
    return notFound();
  }

  const prevPost = BlogPosts[postIndex - 1] || null;
  const nextPost = BlogPosts[postIndex + 1] || null;

  return (
    <div className="pt-24 pb-16">
      <Section className="!pt-0">
        {/* Top: Back to Blog button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="-ml-4 text-muted-foreground hover:text-foreground">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to blog
            </Link>
          </Button>
        </div>

        {/* Banner: Blog Cover Image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-border/50 shadow-sm mb-12">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                {post.category}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">{post.title}</h1>

            <div className="flex items-center gap-3 p-4 rounded-lg bg-muted/30 border border-border/50 mb-8">
              <div className="bg-primary/10 p-2 rounded-full">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold">{post.author}</p>
                <p className="text-xs text-muted-foreground">Author</p>
              </div>
            </div>

            <p className="text-xl text-muted-foreground leading-relaxed italic border-l-4 border-primary/30 pl-6 mb-8">
              {post.excerpt}
            </p>
          </div>

          {/* Content Body */}
          <div className="prose dark:prose-invert max-w-none mb-12 blog-content">
            {post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p>{post.excerpt}</p>
            )}
          </div>

          {/* Tags */}
          <div className="mb-12 pt-8 border-t border-border/50">
            <h2 className="text-lg font-semibold mb-4">Tags</h2>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-3 py-1 font-normal text-muted-foreground">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          <div className="border-t border-border pt-12 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Previous Post */}
              {prevPost ? (
                <Link
                  href={`/blog/${prevPost.slug}`}
                  className="group flex flex-col p-6 border border-border rounded-xl hover:bg-muted/50 transition-all text-left shadow-sm hover:shadow-md"
                >
                  <span className="text-xs text-muted-foreground mb-2 flex items-center font-medium uppercase tracking-wider">
                    <ArrowLeft className="mr-1 h-3 w-3 transition-transform group-hover:-translate-x-1" /> Previous Article
                  </span>
                  <span className="font-bold text-foreground line-clamp-1">{prevPost.title}</span>
                </Link>
              ) : (
                <div className="flex flex-col p-6 border border-border/50 rounded-xl bg-muted/5 text-left opacity-50 cursor-not-allowed">
                  <span className="text-xs text-muted-foreground mb-2 flex items-center font-medium uppercase tracking-wider">
                    <ArrowLeft className="mr-1 h-3 w-3" /> Previous Article
                  </span>
                  <span className="font-bold text-muted-foreground">End of Feed</span>
                </div>
              )}

              {/* Next Post */}
              {nextPost ? (
                <Link
                  href={`/blog/${nextPost.slug}`}
                  className="group flex flex-col p-6 border border-border rounded-xl hover:bg-muted/50 transition-all text-right items-end shadow-sm hover:shadow-md"
                >
                  <span className="text-xs text-muted-foreground mb-2 flex items-center font-medium uppercase tracking-wider">
                    Next Article <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="font-bold text-foreground line-clamp-1">{nextPost.title}</span>
                </Link>
              ) : (
                <div className="flex flex-col p-6 border border-border/50 rounded-xl bg-muted/5 text-right items-end opacity-50 cursor-not-allowed">
                  <span className="text-xs text-muted-foreground mb-2 flex items-center font-medium uppercase tracking-wider">
                    Next Article <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                  <span className="font-bold text-muted-foreground">Newest Article</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}