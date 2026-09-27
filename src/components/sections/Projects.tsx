"use client";
import { motion } from "motion/react";
import { ExternalLink, Tag } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "NexusShop",
    description: "Multi-vendor e-commerce platform with seller storefronts, admin workflows, and Razorpay payment integration.",
    category: "E-Commerce",
    icon: "🛒",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Redux", "Razorpay"],
    link: "https://nexus-shop-chi.vercel.app/",
    color: "indigo"
  },
  {
    title: "Solar Plant EPC Firm Website",
    description: "Responsive client-facing website with RESTful Express backend for secure form submission and lead management.",
    category: "Web Application",
    icon: "☀️",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    color: "cyan"
  }
];

const colorMap: Record<string, string> = {
  indigo: "from-indigo-500/20 to-transparent border-indigo-500/30 text-indigo-400 bg-indigo-500/10",
  cyan: "from-cyan-500/20 to-transparent border-cyan-500/30 text-cyan-400 bg-cyan-500/10",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-tag">Projects</span>
          <h2 className="section-title">
            Things I've <span className="gradient-text">Built</span>
          </h2>
          <p className="section-subtitle">
            A showcase of real-world projects built with passion for clean code and great user experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card relative overflow-hidden group p-8"
            >
              {/* Accent Gradient */}
              <div 
                className={cn(
                  "absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl blur-3xl rounded-full opacity-50 -mr-20 -mt-20 pointer-events-none transition-all group-hover:opacity-100",
                  project.color === "indigo" ? "from-indigo-500/30 to-transparent" : "from-cyan-500/30 to-transparent"
                )}
              />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border",
                    colorMap[project.color]
                  )}>
                    {project.icon}
                  </div>
                  
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <Tag size={16} className={project.color === "indigo" ? "text-indigo-400" : "text-cyan-400"} />
                  <span className={cn(
                    "text-sm font-medium",
                    project.color === "indigo" ? "text-indigo-400" : "text-cyan-400"
                  )}>
                    {project.category}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-8 leading-relaxed min-h-[4rem]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Hover Line */}
              <div className={cn(
                "absolute bottom-0 left-0 h-1 w-full scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100",
                project.color === "indigo" ? "bg-indigo-500" : "bg-cyan-500"
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
