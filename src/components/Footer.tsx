import { Link } from "react-router-dom";
import { categories } from "@/data/blogPosts";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-sm">
                A
              </div>
              <span className="text-lg font-bold text-foreground">
                Ace<span className="text-primary">EdX</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered EdTech platform helping school leaders streamline
              operations, empower teachers, engage parents, and build
              future-ready institutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">All Articles</Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About AceEdX</Link>
              <a href="https://www.aceedx.com" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Visit AceEdX →
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Categories</h4>
            <div className="flex flex-wrap gap-2">
              {categories.filter(c => c !== "All").map((cat) => (
                <Link
                  key={cat}
                  to={`/blog?category=${encodeURIComponent(cat)}`}
                  className="rounded-md bg-muted px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-center">
          <p className="text-xs text-muted-foreground">
            © 2026 AceEdX. All rights reserved. AI-powered EdTech for future-ready schools.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
