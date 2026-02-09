import { ArrowRight, Users, BookOpen, BarChart3, Bot } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const features = [
  {
    icon: Bot,
    title: "AI-Powered Tools",
    description: "Lesson planning, assessments, and communication powered by artificial intelligence.",
  },
  {
    icon: Users,
    title: "Parent Engagement",
    description: "Real-time updates, transparent communication, and seamless parent-school connection.",
  },
  {
    icon: BookOpen,
    title: "Teacher Empowerment",
    description: "Reduce administrative burden so teachers can focus on inspiring students.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Analytics and insights to help school leaders make smarter operational decisions.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <header className="gradient-hero py-16 md:py-24">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h1 className="mb-4 text-3xl font-bold text-primary-foreground md:text-5xl">
            About <span className="text-gradient">AceEdX</span>
          </h1>
          <p className="mx-auto max-w-xl text-primary-foreground/70">
            AceEdX is an AI-powered EdTech platform helping school leaders
            streamline operations, empower teachers, engage parents, and build
            future-ready institutions.
          </p>
        </div>
      </header>

      <section className="py-16 md:py-20">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 text-2xl font-bold text-foreground md:text-3xl">
              What We Do
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              We equip schools with intelligent tools that make education
              management seamless, teaching joyful, and learning impactful.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md"
              >
                <div className="mb-3 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mb-1.5 text-lg font-bold text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-2xl font-bold text-foreground md:text-3xl">
            Our Mission
          </h2>
          <div className="space-y-4 text-foreground/85 leading-relaxed">
            <p>
              We believe every school deserves access to world-class technology.
              AceEdX connects parents, teachers, and schools through smart
              technology — helping children learn better, stay engaged, and
              prepare for the future.
            </p>
            <p>
              Our platform equips teachers with AI-powered tools for lesson
              planning, assessments, communication, and classroom efficiency —
              so teaching stays joyful and impactful.
            </p>
            <p>
              For school leaders, AceEdX provides the data, automation, and
              insights needed to run efficient institutions that parents trust
              and students love.
            </p>
          </div>

          <div className="mt-10 rounded-xl gradient-hero p-8 text-center">
            <h3 className="mb-3 text-xl font-bold text-primary-foreground">
              Ready to Join the Future of Education?
            </h3>
            <a
              href="https://www.aceedx.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-brand-deep hover:opacity-90"
            >
              Visit AceEdX
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
