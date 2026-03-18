import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-24 md:py-32", className)}
      {...props}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        {children}
      </div>
    </motion.section>
  );
}

export function SectionHeader({ title, subtitle, className }: { title: string; subtitle?: string; className?: string }) {
  return (
    <div className={cn("mb-16 md:mb-24 max-w-3xl", className)}>
      {subtitle && (
        <span className="text-accent font-medium tracking-wider uppercase text-sm mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-heading font-bold tracking-tight text-text-primary">
        {title}
      </h2>
    </div>
  );
}
