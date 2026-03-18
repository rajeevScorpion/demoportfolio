import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, X, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { projects } from "@/data/projects";

export function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState<{url: string, caption: string} | null>(null);
  
  const projectIndex = projects.findIndex((p) => p.slug === slug);
  const project = projects[projectIndex];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-heading font-bold mb-4">Project not found</h1>
          <button onClick={() => navigate("/projects")} className="text-accent hover:underline">
            Back to projects
          </button>
        </div>
      </div>
    );
  }

  const nextProject = projects[(projectIndex + 1) % projects.length];
  const prevProject = projects[(projectIndex - 1 + projects.length) % projects.length];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, filter: "blur(10px)" }}
        transition={{ duration: 0.5 }}
        className="pt-32 min-h-screen bg-surface"
      >
      {/* Hero */}
      <Section className="pb-12 pt-12">
        <Link to="/projects" className="inline-flex items-center text-text-secondary hover:text-accent transition-colors mb-12 group">
          <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="text-sm font-medium tracking-wider uppercase text-accent bg-accent/10 px-4 py-1.5 rounded-full">
              {project.category}
            </span>
            <span className="text-text-secondary font-mono">{project.year}</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-text-primary mb-8">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed">
            {project.desc}
          </p>
        </motion.div>
      </Section>

      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* DNA Strip */}
      <Section className="bg-text-primary text-surface py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 divide-x divide-surface/10">
          <div className="px-4">
            <h4 className="text-surface/50 text-sm uppercase tracking-wider mb-2">Type</h4>
            <p className="font-medium">{project.type}</p>
          </div>
          <div className="px-4">
            <h4 className="text-surface/50 text-sm uppercase tracking-wider mb-2">Duration</h4>
            <p className="font-medium">{project.duration}</p>
          </div>
          <div className="px-4">
            <h4 className="text-surface/50 text-sm uppercase tracking-wider mb-2">Role</h4>
            <p className="font-medium">{project.role}</p>
          </div>
          <div className="px-4">
            <h4 className="text-surface/50 text-sm uppercase tracking-wider mb-2">Focus</h4>
            <p className="font-medium">{project.focus}</p>
          </div>
          <div className="px-4">
            <h4 className="text-surface/50 text-sm uppercase tracking-wider mb-2">Outcome</h4>
            <p className="font-medium text-accent">{project.outcome}</p>
          </div>
        </div>
      </Section>

      {/* Content */}
      <Section className="max-w-4xl mx-auto">
        <div className="space-y-24">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold mb-6">The Approach</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              {project.approach}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold mb-8">Process & Execution</h2>
            <ul className="space-y-6">
              {project.process.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold mr-6 mt-1">
                    {index + 1}
                  </span>
                  <p className="text-lg text-text-secondary leading-relaxed">{step}</p>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <a 
                href={project.projectLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-surface text-text-primary rounded-xl font-medium shadow-lg hover:shadow-xl hover:bg-accent hover:text-white transition-all duration-300"
              >
                View Figma Project <ExternalLink size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Video Section (if exists) */}
      {project.videoUrl && (
        <Section className="bg-surface/50 pb-0">
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
              <iframe 
                width="100%" 
                height="100%" 
                src={project.videoUrl} 
                title="Project Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Section>
      )}

      {/* Gallery */}
      <Section className={project.videoUrl ? "bg-surface/50 pt-16" : "bg-surface/50"}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group cursor-pointer flex flex-col"
              onClick={() => setSelectedImage(img)}
            >
              <div className="rounded-2xl overflow-hidden shadow-sm mb-4">
                <img src={img.url} alt={img.caption} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm text-text-secondary text-center italic px-4">{img.caption}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Reflection */}
      <Section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-heading font-bold mb-8">Reflection</h2>
        <p className="text-2xl font-serif italic text-text-secondary leading-relaxed">
          "{project.reflection}"
        </p>
      </Section>

      {/* Navigation */}
      <Section className="border-t border-text-primary/10 py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <Link to={`/projects/${prevProject.slug}`} className="group flex flex-col items-start w-full md:w-1/2 text-left p-8 rounded-2xl hover:bg-surface/50 transition-colors">
            <span className="text-sm text-text-secondary uppercase tracking-wider mb-2 flex items-center">
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Previous Project
            </span>
            <span className="text-2xl font-heading font-bold group-hover:text-accent transition-colors">{prevProject.title}</span>
          </Link>
          
          <div className="hidden md:block w-px h-24 bg-text-primary/10"></div>

          <Link to={`/projects/${nextProject.slug}`} className="group flex flex-col items-end w-full md:w-1/2 text-right p-8 rounded-2xl hover:bg-surface/50 transition-colors">
            <span className="text-sm text-text-secondary uppercase tracking-wider mb-2 flex items-center">
              Next Project <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="text-2xl font-heading font-bold group-hover:text-accent transition-colors">{nextProject.title}</span>
          </Link>
        </div>
      </Section>
    </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-50"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="max-w-6xl w-full max-h-[90vh] flex flex-col items-center justify-center relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.url}
                alt={selectedImage.caption}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <p className="mt-6 text-lg md:text-xl text-white font-medium text-center max-w-3xl">
                {selectedImage.caption}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
