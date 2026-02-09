import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, Tag, Share2, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import { useEffect } from "react";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = getPostBySlug(slug || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="mb-4 text-3xl font-bold text-foreground">Article Not Found</h1>
          <p className="mb-6 text-muted-foreground">The article you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-sm font-medium text-primary hover:underline">
            ← Back to all articles
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = getRelatedPosts(post.slug, post.category);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: post.title, url: window.location.href });
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  // Simple markdown-to-html (headings, bold, lists, links, tables, hr)
  const renderContent = (content: string) => {
    return content
      .split("\n")
      .map((line, i) => {
        const trimmed = line.trim();

        if (trimmed.startsWith("## "))
          return (
            <h2
              key={i}
              className="mb-3 mt-10 text-2xl font-bold text-foreground"
            >
              {trimmed.slice(3)}
            </h2>
          );
        if (trimmed.startsWith("### "))
          return (
            <h3
              key={i}
              className="mb-2 mt-6 text-xl font-semibold text-foreground"
            >
              {trimmed.slice(4)}
            </h3>
          );
        if (trimmed.startsWith("---"))
          return <hr key={i} className="my-8 border-border" />;
        if (trimmed === "") return <div key={i} className="h-3" />;

        // List items
        if (trimmed.startsWith("- ") || trimmed.startsWith("* ")) {
          const text = trimmed.slice(2);
          return (
            <li key={i} className="ml-4 mb-1.5 flex items-start gap-2 text-foreground/85">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span dangerouslySetInnerHTML={{ __html: formatInline(text) }} />
            </li>
          );
        }

        // Numbered items
        const numMatch = trimmed.match(/^(\d+)\.\s(.*)/);
        if (numMatch) {
          return (
            <li key={i} className="ml-4 mb-1.5 flex items-start gap-2 text-foreground/85">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                {numMatch[1]}
              </span>
              <span dangerouslySetInnerHTML={{ __html: formatInline(numMatch[2]) }} />
            </li>
          );
        }

        // Table row
        if (trimmed.startsWith("|") && trimmed.endsWith("|")) {
          if (trimmed.includes("---")) return null;
          const cells = trimmed
            .split("|")
            .filter(Boolean)
            .map((c) => c.trim());
          const isHeader = i > 0; // simple heuristic
          return (
            <tr key={i} className="border-b border-border">
              {cells.map((cell, ci) => (
                <td
                  key={ci}
                  className="px-3 py-2 text-sm text-foreground/85"
                  dangerouslySetInnerHTML={{ __html: formatInline(cell) }}
                />
              ))}
            </tr>
          );
        }

        // Checklist
        if (trimmed.startsWith("✅") || trimmed.startsWith("❌")) {
          return (
            <p key={i} className="mb-1.5 text-foreground/85">
              <span dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }} />
            </p>
          );
        }

        // Regular paragraph
        return (
          <p
            key={i}
            className="mb-3 leading-relaxed text-foreground/85"
            dangerouslySetInnerHTML={{ __html: formatInline(trimmed) }}
          />
        );
      });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Article header */}
      <header className="border-b border-border bg-card py-10 md:py-14">
        <div className="container mx-auto max-w-3xl px-4">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              to={`/blog?category=${encodeURIComponent(post.category)}`}
              className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary transition-colors hover:bg-primary/20"
            >
              {post.category}
            </Link>
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              {post.title}
            </h1>
            <p className="mb-5 text-muted-foreground">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="text-foreground/60">By {post.author}</span>
              <button
                onClick={handleShare}
                className="ml-auto flex items-center gap-1.5 rounded-md bg-muted px-3 py-1.5 text-xs font-medium transition-colors hover:bg-primary/10 hover:text-primary"
              >
                <Share2 className="h-3.5 w-3.5" />
                Share
              </button>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Article content */}
      <article className="py-10 md:py-14">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="prose-custom">{renderContent(post.content)}</div>

          {/* Tags */}
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border pt-6">
            <Tag className="h-4 w-4 text-muted-foreground" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-xl gradient-hero p-6 text-center md:p-8">
            <h3 className="mb-2 text-xl font-bold text-primary-foreground">
              Transform Your School with AceEdX
            </h3>
            <p className="mb-4 text-sm text-primary-foreground/70">
              AI-powered tools for school leaders, teachers, and parents.
            </p>
            <a
              href="https://www.aceedx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-5 py-2.5 text-sm font-semibold text-brand-deep hover:opacity-90"
            >
              Visit AceEdX
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </article>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-t border-border bg-card py-14">
          <div className="container mx-auto px-4">
            <h2 className="mb-6 text-2xl font-bold text-foreground">
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

/** Format inline markdown: bold, italic, links, code */
function formatInline(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-foreground">$1</strong>')
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, '<code class="rounded bg-muted px-1 py-0.5 text-xs">$1</code>')
    .replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener noreferrer" class="text-primary underline hover:no-underline">$1</a>'
    );
}

export default BlogPost;
