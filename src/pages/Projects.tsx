import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="pt-32 min-h-screen"
    >
      <Section className="pb-12">
        <SectionHeader
          title="Selected Works"
          subtitle="Portfolio"
          className="mb-12"
        />
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={cn(
                "px-6 py-2.5 rounded-full text-sm font-medium transition-all",
                filter === category
                  ? "bg-text-primary text-surface shadow-md"
                  : "bg-surface border border-text-primary/10 text-text-secondary hover:border-accent hover:text-accent"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>
    </motion.div>
  );
}
