import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import type { BlogPost } from "@/data/blogPosts";
import { blogImages } from "@/data/blogImages";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

const BlogCard = ({ post, featured = false }: BlogCardProps) => {
  const image = blogImages[post.slug];

  return (
    <Link
      to={`/blog/${post.slug}`}
      className={`group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
        featured ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "md:w-2/5" : "aspect-[16/9]"
        }`}
      >
        {image ? (
          <img
            src={image}
            alt={post.title}
            className="h-full min-h-[200px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full min-h-[200px] items-center justify-center bg-gradient-to-br from-primary/10 via-muted to-accent/10 p-8">
            <span className="rounded-md bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary">
              {post.category}
            </span>
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="rounded-md bg-primary/90 px-2.5 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className={`flex flex-1 flex-col p-5 md:p-6 ${featured ? "justify-center" : ""}`}>
        {featured && (
          <span className="mb-2 inline-flex w-fit items-center rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
            Featured
          </span>
        )}

        <h3
          className={`mb-2 font-bold text-card-foreground transition-colors group-hover:text-primary ${
            featured ? "text-xl md:text-2xl" : "text-base md:text-lg"
          }`}
        >
          {post.title}
        </h3>

        <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{post.date}</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
