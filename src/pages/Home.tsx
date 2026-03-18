import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { RoleCard } from "@/components/ui/RoleCard";
import { TestimonialCard } from "@/components/ui/TestimonialCard";
import { projects } from "@/data/projects";

export function Home() {
  const featuredProjects = projects.slice(0, 4);

  const roles = [
    { title: "UX/UI & Product Thinking", desc: "Designing digital interfaces and workflows that are intuitive, scalable, and human-centered." },
    { title: "Design Education & Curriculum Innovation", desc: "Building future-ready learning experiences and academic frameworks." },
    { title: "Research & Critical Inquiry", desc: "Exploring interfaces, visual culture, and technological shifts through structured research." },
    { title: "AI in Creative Workflows", desc: "Developing intelligent systems that enhance design productivity and creativity." }
  ];

  const testimonials = [
    { quote: "Rajeev brings clarity to complex systems. His approach is structured and deeply human.", author: "Academic Collaborator", role: "University Partner" },
    { quote: "Working with him transformed how we approached UX strategy.", author: "Client", role: "Tech Startup Founder" },
    { quote: "He bridges theory and practice exceptionally well.", author: "Faculty Peer", role: "Design Professor" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tighter text-text-primary leading-[1.1] mb-8">
              Designing systems, stories, and learning experiences for emerging futures.
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary max-w-2xl leading-relaxed mb-12">
              I'm Rajeev Kumar — a multidisciplinary design educator, UX/UI consultant, researcher, and visual communication specialist. I work at the intersection of digital products, design systems, AI-driven workflows, and design education.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-surface bg-text-primary rounded-full hover:bg-accent transition-colors group"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-text-primary border border-text-primary/20 rounded-full hover:border-accent hover:text-accent transition-colors"
              >
                Let's Collaborate
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <Section className="bg-surface/50">
        <SectionHeader title="What I Do" subtitle="Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {roles.map((role, index) => (
            <RoleCard key={index} index={index} title={role.title} description={role.desc} />
          ))}
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24">
          <SectionHeader title="Featured Work" subtitle="Selected Projects" className="mb-0" />
          <Link
            to="/projects"
            className="inline-flex items-center text-accent font-medium hover:text-text-primary transition-colors mt-8 md:mt-0 group"
          >
            View all projects
            <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-accent/5">
        <SectionHeader title="What People Say" subtitle="Testimonials" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} index={index} {...testimonial} />
          ))}
        </div>
      </Section>

      {/* Contributions & Ecosystem */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <SectionHeader title="Contributions" subtitle="Impact Areas" className="mb-12" />
            <ul className="space-y-6">
              {[
                "Teaching & Mentorship",
                "UX/UI Strategy",
                "Curriculum Design",
                "Research & Publications",
                "Digital Product Consulting",
                "AI-driven Systems"
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center text-xl text-text-secondary"
                >
                  <span className="w-2 h-2 rounded-full bg-accent mr-4" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader title="Role Ecosystem" subtitle="Hats I Wear" className="mb-12" />
            <div className="flex flex-wrap gap-4">
              {[
                "Associate Professor",
                "Design Researcher",
                "UX/UI Consultant",
                "Curriculum Architect",
                "Product Thinker",
                "AI-in-Design Educator",
                "Visual Communication Specialist"
              ].map((role, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-3 rounded-full border border-text-primary/10 bg-surface text-text-primary font-medium shadow-sm hover:border-accent hover:text-accent transition-colors cursor-default"
                >
                  {role}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="bg-text-primary text-surface rounded-t-[3rem] mt-12 scroll-mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-5xl md:text-7xl font-heading font-bold tracking-tight mb-8">
              Let's build something thoughtful.
            </h2>
            <p className="text-xl text-surface/70 max-w-md mb-12">
              Whether it's a new product, a research collaboration, or a speaking engagement, I'm always open to discussing interesting ideas.
            </p>
            <div className="space-y-4">
              <a href="mailto:hello@rajeevkumar.design" className="block text-2xl font-medium hover:text-accent transition-colors">
                hello@rajeevkumar.design
              </a>
              <p className="text-surface/50 font-mono">Based in India. Working globally.</p>
            </div>
          </div>
          <div className="bg-surface/10 p-8 md:p-12 rounded-3xl backdrop-blur-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-surface/70 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-surface/20 py-3 text-surface focus:outline-none focus:border-accent transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-surface/70 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-surface/20 py-3 text-surface focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-surface/70 mb-2">Purpose</label>
                <select
                  id="purpose"
                  defaultValue=""
                  className="w-full bg-transparent border-b border-surface/20 py-3 text-surface focus:outline-none focus:border-accent transition-colors"
                >
                  <option value="" disabled className="bg-text-primary text-surface">Select an option</option>
                  <option value="hire" className="bg-text-primary text-surface">Hire me</option>
                  <option value="collab" className="bg-text-primary text-surface">Collaboration</option>
                  <option value="speaking" className="bg-text-primary text-surface">Speaking</option>
                  <option value="research" className="bg-text-primary text-surface">Research</option>
                  <option value="inquiry" className="bg-text-primary text-surface">Project Inquiry</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-surface/70 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-surface/20 py-3 text-surface focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <div className="flex justify-end mt-8">
                <button
                  type="submit"
                  className="px-8 py-4 bg-surface text-text-primary rounded-xl font-medium shadow-lg hover:shadow-xl hover:bg-accent hover:text-white transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </motion.div>
  );
}
