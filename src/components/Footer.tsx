import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";
import { categories } from "@/data/blogPosts";
import aceedxLogo from "@/assets/aceedx-logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <img src={aceedxLogo} alt="AceEdX Logo" className="h-10 w-auto" />
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
              <Link to="/admin" className="text-sm text-muted-foreground hover:text-primary transition-colors">Manage Posts</Link>
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

          {/* Contact */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-foreground">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:9373387800" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                9373387800
              </a>
              <a
                href="https://chat.whatsapp.com/DRFnvBygAX60wLmuvXRrfa?mode=gi_c"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 w-fit"
              >
                <MessageCircle className="h-4 w-4" />
                Join WhatsApp Community
              </a>
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
