import { BlogPost } from "@/constants/blogs";
import { CardShowcase, CardShowcaseSkeleton } from "@/components/common/CardShowcase";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <CardShowcase
      title={post.title}
      image={post.coverImage}
      href={`/blog/${post.slug}`}
    />
  );
}

export function BlogCardSkeleton() {
  return <CardShowcaseSkeleton />;
}
