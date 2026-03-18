import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface RoleCardProps {
  key?: React.Key;
  title: string;
  description: string;
  className?: string;
  index: number;
}

export function RoleCard({ title, description, className, index }: RoleCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={cn(
        "p-8 rounded-2xl bg-surface border border-text-primary/5 shadow-sm hover:shadow-md transition-all group cursor-default",
        className
      )}
    >
      <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-surface transition-colors">
        <span className="font-mono text-lg font-bold">0{index + 1}</span>
      </div>
      <h3 className="text-xl font-heading font-bold text-text-primary mb-4">
        {title}
      </h3>
      <p className="text-text-secondary leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
