import { motion } from "framer-motion";
import { Search, TrendingUp, BookOpen } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="gradient-hero relative overflow-hidden py-24 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-brand-teal blur-3xl" />
        <div className="absolute bottom-10 right-20 h-48 w-48 rounded-full bg-brand-gold blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm text-brand-teal-light">
            <TrendingUp className="h-4 w-4" />
            <span>2026-Ready SEO Strategy</span>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-primary-foreground md:text-6xl lg:text-7xl">
            SEO Blog Strategy for{" "}
            <span className="text-gradient">AceEdX</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-primary-foreground/70 md:text-xl">
            Attract organic traffic, improve Google rankings, and grow
            visibility for school-related queries. A complete content roadmap
            for your AI-powered EdTech platform.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <StatBadge icon={<Search className="h-4 w-4" />} label="Long-tail Keywords" />
            <StatBadge icon={<BookOpen className="h-4 w-4" />} label="Content Strategy" />
            <StatBadge icon={<TrendingUp className="h-4 w-4" />} label="Organic Growth" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const StatBadge = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 rounded-lg border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm font-medium text-primary-foreground backdrop-blur-sm">
    {icon}
    {label}
  </div>
);

export default HeroSection;
