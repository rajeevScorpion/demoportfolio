import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  key?: React.Key;
  quote: string;
  author: string;
  role: string;
  className?: string;
  index: number;
}

export function TestimonialCard({ quote, author, role, className, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "p-10 rounded-3xl bg-surface border border-text-primary/5 shadow-sm relative overflow-hidden",
        className
      )}
    >
      <Quote className="absolute top-8 right-8 text-accent/10 w-24 h-24 -rotate-12" />
      <div className="relative z-10">
        <p className="text-xl md:text-2xl font-serif italic text-text-primary leading-relaxed mb-8">
          "{quote}"
        </p>
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-lg mr-4">
            {author.charAt(0)}
          </div>
          <div>
            <h4 className="font-heading font-bold text-text-primary">{author}</h4>
            <p className="text-sm text-text-secondary">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
