import { motion } from "framer-motion";
import {
  Search,
  FileText,
  Settings,
  Link2,
  Image,
  Calendar,
  Bot,
  BarChart3,
} from "lucide-react";

const strategies = [
  {
    number: "01",
    title: "Keyword Research",
    icon: Search,
    gradient: "gradient-card-teal",
    borderColor: "border-brand-teal/20",
    iconColor: "text-brand-teal",
    description:
      "Identify terms your audience searches for using Google Keyword Planner, Ahrefs, and Ubersuggest.",
    tips: [
      "Focus on long-tail keywords like 'how to choose the right school in 2026'",
      "Group keywords by content type: guides, comparisons, how-tos, FAQs",
      "Target question-driven phrases with local intent",
    ],
  },
  {
    number: "02",
    title: "Audience-Focused Content",
    icon: FileText,
    gradient: "gradient-card-gold",
    borderColor: "border-brand-gold/20",
    iconColor: "text-brand-gold",
    description:
      "Create high-quality, long-form articles (1,500+ words) that solve real problems for parents and educators.",
    tips: [
      "Answer FAQs and explain processes with real examples",
      "Structure with H1/H2/H3 headings, bullets, and visuals",
      "Match genuine search intent of your audience",
    ],
  },
  {
    number: "03",
    title: "On-Page SEO",
    icon: Settings,
    gradient: "gradient-card-blue",
    borderColor: "border-brand-blue/20",
    iconColor: "text-brand-blue",
    description:
      "Optimize every post with proper title tags, meta descriptions, URL structure, and image alt-text.",
    tips: [
      "Include primary keyword in H1 and first 100 words",
      "Meta descriptions: 120–160 characters with target keywords",
      "Short, descriptive URLs with main keyword",
    ],
  },
  {
    number: "04",
    title: "Internal & External Linking",
    icon: Link2,
    gradient: "gradient-card-purple",
    borderColor: "border-brand-purple/20",
    iconColor: "text-brand-purple",
    description:
      "Build a strong link structure connecting your content and referencing authoritative sources.",
    tips: [
      "Link each post to relevant AceEdX service pages",
      "Reference education boards and government statistics",
      "Improve site navigation for Google crawlers",
    ],
  },
  {
    number: "05",
    title: "Multimedia & Engagement",
    icon: Image,
    gradient: "gradient-card-teal",
    borderColor: "border-brand-teal/20",
    iconColor: "text-brand-teal",
    description:
      "Add images with alt text, infographics, and short videos to boost time on page — a key ranking signal.",
    tips: [
      "Relevant images with descriptive alt text",
      "Infographics demonstrating key concepts",
      "Short explainer videos or slide presentations",
    ],
  },
  {
    number: "06",
    title: "Consistent Publishing",
    icon: Calendar,
    gradient: "gradient-card-gold",
    borderColor: "border-brand-gold/20",
    iconColor: "text-brand-gold",
    description:
      "Maintain a content calendar with 1–2 quality posts per week. Update older posts to keep them fresh.",
    tips: [
      "Plan publishing schedule at least one month ahead",
      "Refresh older posts with new data and internal links",
      "Google favors consistently fresh content",
    ],
  },
  {
    number: "07",
    title: "AI-Driven Search Optimization",
    icon: Bot,
    gradient: "gradient-card-blue",
    borderColor: "border-brand-blue/20",
    iconColor: "text-brand-blue",
    description:
      "Structure content to compete in AI-powered search results with clear answers and FAQ sections.",
    tips: [
      "Answer specific questions clearly in FAQ format",
      "Match how users ask: 'how to,' 'what is,' 'why does'",
      "Highlight outcomes and benefits prominently",
    ],
  },
  {
    number: "08",
    title: "Monitor & Improve",
    icon: BarChart3,
    gradient: "gradient-card-purple",
    borderColor: "border-brand-purple/20",
    iconColor: "text-brand-purple",
    description:
      "Track organic traffic, top-ranking posts, CTR, and engagement using Google Analytics and Search Console.",
    tips: [
      "Monitor organic traffic trends weekly",
      "Analyze click-through rates per keyword",
      "Iterate strategy based on performance data",
    ],
  },
];

const StrategySection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            The 8-Step SEO Playbook
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            A comprehensive, actionable strategy designed to position AceEdX as
            the go-to resource for school-related searches.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {strategies.map((strategy, index) => (
            <motion.div
              key={strategy.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
            >
              <div
                className={`group h-full rounded-xl border ${strategy.borderColor} ${strategy.gradient} p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 md:p-8`}
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className={`rounded-lg bg-card p-2.5 shadow-sm ${strategy.iconColor}`}>
                    <strategy.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      Step {strategy.number}
                    </span>
                    <h3 className="text-lg font-bold text-foreground">
                      {strategy.title}
                    </h3>
                  </div>
                </div>

                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {strategy.description}
                </p>

                <ul className="space-y-2">
                  {strategy.tips.map((tip, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-foreground/80"
                    >
                      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-teal`} />
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
