import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ExternalLink, Menu, X, Phone } from "lucide-react";
import aceedxLogo from "@/assets/aceedx-logo.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Admin", to: "/admin" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <Link to="/" className="flex items-center gap-2">
          <img src={aceedxLogo} alt="AceEdX Logo" className="h-10 w-auto" />
          <span className="text-lg font-bold text-foreground">
            <span className="text-primary">Blog</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-5 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:9373387800"
            className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <Phone className="h-3.5 w-3.5" />
            9373387800
          </a>
          <a
            href="https://chat.whatsapp.com/DRFnvBygAX60wLmuvXRrfa?mode=gi_c"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-green-600 px-3 py-1.5 text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Join WhatsApp
          </a>
          <a
            href="https://www.aceedx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Visit AceEdX
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-md p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 pt-2 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm font-medium ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a href="tel:9373387800" className="block py-2 text-sm font-medium text-muted-foreground">
            📞 9373387800
          </a>
          <a
            href="https://chat.whatsapp.com/DRFnvBygAX60wLmuvXRrfa?mode=gi_c"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 block w-full rounded-lg bg-green-600 px-4 py-2 text-center text-sm font-medium text-primary-foreground"
          >
            Join WhatsApp Community
          </a>
          <a
            href="https://www.aceedx.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Visit AceEdX
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
