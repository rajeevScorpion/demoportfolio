import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ArrowRight } from "lucide-react";

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="pt-32 min-h-screen"
    >
      {/* Intro */}
      <Section className="pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-text-primary leading-[1.1] mb-8">
            I design with structure, teach with empathy, and build with curiosity.
          </h1>
        </motion.div>
      </Section>

      {/* Bio */}
      <Section className="bg-surface/50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
              alt="Rajeev Kumar"
              className="w-full h-auto rounded-3xl object-cover shadow-lg"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-8">
            <SectionHeader title="Bio" subtitle="About Me" className="mb-8" />
            <p className="text-xl text-text-secondary leading-relaxed">
              Rajeev Kumar is a multidisciplinary design educator and consultant with over 15 years of experience across visual communication, UX/UI design, digital systems, and design education.
            </p>
            <p className="text-xl text-text-secondary leading-relaxed">
              His work bridges academic inquiry and real-world application, focusing on building meaningful systems for users, learners, and organizations.
            </p>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section className="bg-accent/5 text-center">
        <div className="max-w-4xl mx-auto">
          <SectionHeader title="Philosophy" subtitle="Core Belief" className="mx-auto mb-12" />
          <p className="text-3xl md:text-5xl font-serif italic text-text-primary leading-tight">
            "Design is not just about interfaces. It is about systems, behavior, and meaning."
          </p>
        </div>
      </Section>

      {/* Practice Areas & Values */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <SectionHeader title="Practice Areas" subtitle="Focus" className="mb-12" />
            <ul className="space-y-6">
              {[
                "Design Education",
                "UX/UI Systems",
                "Research",
                "AI & Design",
                "Product Thinking"
              ].map((area, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-xl text-text-secondary font-medium"
                >
                  <span className="w-2 h-2 rounded-full bg-accent mr-4" />
                  {area}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader title="Values" subtitle="Principles" className="mb-12" />
            <div className="space-y-8">
              {[
                { title: "Clarity over complexity", desc: "Simplifying the intricate without losing depth." },
                { title: "Systems over surfaces", desc: "Designing for the whole ecosystem, not just the visible layer." },
                { title: "Learning over instruction", desc: "Fostering environments where discovery leads." },
                { title: "Depth over trends", desc: "Building enduring solutions grounded in fundamental principles." }
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border-l-2 border-accent/20 pl-6 hover:border-accent transition-colors"
                >
                  <h3 className="text-xl font-heading font-bold text-text-primary mb-2">{value.title}</h3>
                  <p className="text-text-secondary">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-text-primary text-surface rounded-3xl mx-6 md:mx-auto mb-24 text-center py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8">
            Let's collaborate on building meaningful experiences.
          </h2>
          <Link
            to="/#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text-primary bg-surface rounded-full hover:bg-accent hover:text-surface transition-colors group"
          >
            Get in touch
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Link>
        </div>
      </Section>
    </motion.div>
  );
}
