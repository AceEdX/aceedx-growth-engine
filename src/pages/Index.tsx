import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, BookOpen, Users } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import { getFeaturedPosts, blogPosts } from "@/data/blogPosts";

const Index = () => {
  const featured = getFeaturedPosts();
  const recent = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-brand-teal blur-3xl" />
          <div className="absolute bottom-10 right-20 h-48 w-48 rounded-full bg-brand-gold blur-3xl" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-2 text-sm text-primary-foreground/80">
              <TrendingUp className="h-4 w-4" />
              Insights for Schools, Parents & Educators
            </div>
            <h1 className="mb-5 text-4xl font-bold tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
              The <span className="text-gradient">AceEdX</span> Blog
            </h1>
            <p className="mx-auto mb-8 max-w-xl text-base text-primary-foreground/70 md:text-lg">
              Expert guides on school admissions, curriculum choices, digital
              learning, and how AI is shaping the future of education.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground/10 border border-primary-foreground/20 px-5 py-2.5 text-sm font-medium text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
              >
                Browse All Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-b border-border bg-card">
        <div className="container mx-auto grid grid-cols-3 divide-x divide-border px-4 py-6">
          {[
            { icon: BookOpen, label: "Articles", value: `${blogPosts.length}+` },
            { icon: Users, label: "For Parents & Teachers", value: "Expert" },
            { icon: TrendingUp, label: "SEO Optimized", value: "100%" },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex flex-col items-center gap-1 px-2 text-center">
              <Icon className="h-4 w-4 text-primary" />
              <span className="text-lg font-bold text-foreground md:text-xl">{value}</span>
              <span className="text-xs text-muted-foreground">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Featured Articles</h2>
            <Link to="/blog" className="text-sm font-medium text-primary hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid gap-6">
            {featured.slice(0, 2).map((post) => (
              <BlogCard key={post.id} post={post} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Recent */}
      <section className="border-t border-border bg-card py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">Latest Articles</h2>
            <Link to="/blog" className="text-sm font-medium text-primary hover:underline">
              View all →
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recent.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl rounded-2xl gradient-hero p-8 text-center md:p-12">
            <h2 className="mb-3 text-2xl font-bold text-primary-foreground md:text-3xl">
              Ready to Transform Your School?
            </h2>
            <p className="mb-6 text-primary-foreground/70">
              Join thousands of schools using AceEdX to streamline operations,
              empower teachers, and engage parents.
            </p>
            <a
              href="https://www.aceedx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-brand-deep transition-opacity hover:opacity-90"
            >
              Get Started with AceEdX
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
