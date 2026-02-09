import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const topics = [
  "How to Choose the Best School for Your Child: 2026 Parent's Guide",
  "Top 10 Questions to Ask a School Before Admission",
  "School Curriculum Compared: CBSE vs State Boards vs IB",
  "Benefits of Digital Learning Platforms for Students",
  "How AI is Transforming School Administration in 2026",
  "Parent's Guide to School Admissions Tips & Timelines",
  "Why Future-Ready Schools Invest in EdTech Platforms",
  "Teacher Efficiency: AI Tools for Lesson Planning & Assessments",
];

const BlogTopicsSection = () => {
  return (
    <section className="border-t border-border bg-card py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Recommended Blog Topics
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            High-intent topics matching what parents, educators, and school
            leaders actually search for.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {topics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
              className="group flex items-center gap-4 rounded-lg border border-border bg-background p-4 transition-all duration-200 hover:border-brand-teal/40 hover:shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-xs font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="flex-1 text-sm font-medium text-foreground md:text-base">
                {topic}
              </span>
              <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTopicsSection;
