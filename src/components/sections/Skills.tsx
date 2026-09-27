"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "all", label: "All Skills", icon: "🚀" },
  { id: "frontend", label: "Frontend", icon: "🖥️" },
  { id: "backend", label: "Backend", icon: "⚙️" },
  { id: "database", label: "Databases", icon: "🗄️" },
  { id: "cloud", label: "Cloud/DevOps", icon: "🔧" },
  { id: "ai", label: "AI/GenAI", icon: "🤖" },
];

const skills = [
  { name: "React.js", category: "frontend", color: "text-cyan-400", bg: "bg-cyan-400/10", border: "border-cyan-400/20" },
  { name: "Next.js", category: "frontend", color: "text-white", bg: "bg-white/10", border: "border-white/20" },
  { name: "Tailwind CSS", category: "frontend", color: "text-sky-400", bg: "bg-sky-400/10", border: "border-sky-400/20" },
  { name: "Redux Toolkit", category: "frontend", color: "text-purple-400", bg: "bg-purple-400/10", border: "border-purple-400/20" },
  { name: "TanStack Query", category: "frontend", color: "text-red-400", bg: "bg-red-400/10", border: "border-red-400/20" },
  
  { name: "Node.js", category: "backend", color: "text-green-400", bg: "bg-green-400/10", border: "border-green-400/20" },
  { name: "Express.js", category: "backend", color: "text-slate-300", bg: "bg-slate-400/10", border: "border-slate-400/20" },
  { name: "REST APIs", category: "backend", color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20" },
  { name: "WebSockets", category: "backend", color: "text-orange-400", bg: "bg-orange-400/10", border: "border-orange-400/20" },
  { name: "JWT & RBAC", category: "backend", color: "text-rose-400", bg: "bg-rose-400/10", border: "border-rose-400/20" },
  
  { name: "PostgreSQL", category: "database", color: "text-blue-400", bg: "bg-blue-400/10", border: "border-blue-400/20" },
  { name: "MongoDB", category: "database", color: "text-emerald-400", bg: "bg-emerald-400/10", border: "border-emerald-400/20" },
  { name: "Supabase", category: "database", color: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { name: "Redis", category: "database", color: "text-red-500", bg: "bg-red-500/10", border: "border-red-500/20" },
  
  { name: "AWS S3", category: "cloud", color: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20" },
  { name: "Vercel", category: "cloud", color: "text-white", bg: "bg-white/10", border: "border-white/20" },
  { name: "Docker", category: "cloud", color: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20" },
  { name: "GitHub Actions", category: "cloud", color: "text-slate-300", bg: "bg-slate-400/10", border: "border-slate-400/20" },
  
  { name: "Claude API", category: "ai", color: "text-orange-300", bg: "bg-orange-300/10", border: "border-orange-300/20" },
  { name: "Prompt Engineering", category: "ai", color: "text-fuchsia-400", bg: "bg-fuchsia-400/10", border: "border-fuchsia-400/20" },
  { name: "Agent Workflows", category: "ai", color: "text-indigo-400", bg: "bg-indigo-400/10", border: "border-indigo-400/20" },
  { name: "n8n", category: "ai", color: "text-rose-500", bg: "bg-rose-500/10", border: "border-rose-500/20" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills = activeTab === "all" 
    ? skills 
    : skills.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <span className="section-tag">Skills</span>
          <h2 className="section-title">
            My Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="section-subtitle mx-auto">
            A comprehensive toolkit built through hands-on project experience and continuous learning.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 border",
                activeTab === tab.id
                  ? "bg-indigo-500/20 border-indigo-500/50 text-white shadow-[0_0_15px_rgba(99,102,241,0.2)]"
                  : "bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white"
              )}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Cloud Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              className={cn(
                "px-5 py-2.5 rounded-full border text-sm font-semibold whitespace-nowrap transition-transform hover:scale-110 cursor-default",
                skill.bg,
                skill.border,
                skill.color
              )}
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
