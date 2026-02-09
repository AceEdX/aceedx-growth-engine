import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const summaryPoints = [
  "Target question-driven, long-tail keywords",
  "Create high-quality, comprehensive blog posts that genuinely help parents, schools, and educators",
  "Implement on-page SEO, internal linking, and rich media",
  "Maintain a consistent publishing schedule and update content over time",
  "Optimize for AI-driven search & user intent in 2026",
];

const SummarySection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl rounded-2xl border border-brand-teal/20 gradient-card-teal p-8 md:p-12"
        >
          <h2 className="mb-2 text-2xl font-bold text-foreground md:text-3xl">
            🧠 Winning SEO Blogging for AceEdX
          </h2>
          <p className="mb-8 text-muted-foreground">
            Follow these pillars consistently and AceEdX will dominate
            school-related search queries.
          </p>

          <div className="space-y-4">
            {summaryPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" />
                <span className="text-foreground">{point}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SummarySection;
