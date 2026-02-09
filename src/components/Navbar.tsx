import { ExternalLink } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-primary-foreground text-sm">
            A
          </div>
          <span className="text-lg font-bold text-foreground">
            Ace<span className="text-primary">EdX</span>
          </span>
        </div>
        <a
          href="https://www.aceedx.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Visit AceEdX
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
