import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  key?: React.Key;
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-surface border border-text-primary/5 shadow-sm hover:shadow-md transition-all",
        className
      )}
    >
      <Link to={`/projects/${project.slug}`} className="block h-full">
        <div className="aspect-[4/3] overflow-hidden relative">
          <motion.img
            src={project.image}
            alt={project.title}
            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium tracking-wider uppercase text-accent">
              {project.category}
            </span>
            <span className="text-sm text-text-secondary font-mono">
              {project.year}
            </span>
          </div>
          <h3 className="text-2xl font-heading font-bold text-text-primary mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary line-clamp-2 mb-6">
            {project.desc}
          </p>
          <div className="flex items-center text-sm font-medium text-text-primary group-hover:text-accent transition-colors">
            View Case Study
            <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
