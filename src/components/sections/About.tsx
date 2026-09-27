"use client";
import { motion } from "motion/react";
import { Code, Database, Cpu, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="section-tag">About Me</span>
          <h2 className="section-title">
            Crafting Digital <span className="gradient-text">Experiences</span>
          </h2>
          <p className="section-subtitle">
            Passionate full-stack developer on a mission to build scalable, production-grade applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 glass-card p-8 rounded-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl -mr-10 -mt-10 transition-all group-hover:bg-cyan-500/20" />
            
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-500 p-1">
                <div className="w-full h-full bg-slate-900 rounded-full flex items-center justify-center font-bold text-2xl text-white">
                  AK
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Anish Kushwaha</h3>
                <p className="text-cyan-400 font-medium">Full Stack Developer</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed mb-8">
              I'm a passionate Full Stack Developer building and scaling production-grade platforms. 
              I specialize in crafting seamless user experiences with React.js and Next.js, while 
              architecting secure APIs and relational databases with Node.js and PostgreSQL. 
              I love exploring new tools and optimizing systems for maximum performance and security.
            </p>

            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-400">Email</span>
                <span className="text-slate-200 font-medium text-right break-all">anishsinghkushwaha03@gmail.com</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-400">Phone No.</span>
                <span className="text-slate-200 font-medium">+91 7014756534</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-white/5">
                <span className="text-slate-400">Experience</span>
                <span className="text-slate-200 font-medium">2+ Years</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400">Status</span>
                <span className="text-emerald-400 font-medium flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open to Work
                </span>
              </div>
            </div>
          </motion.div>

          {/* Highlights & Journey */}
          <div className="lg:col-span-7 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-6 flex gap-4 items-start"
              >
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <Globe size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Full Stack</h4>
                  <p className="text-sm text-slate-400">End-to-end application development</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="glass-card p-6 flex gap-4 items-start"
              >
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                  <Database size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Database Design</h4>
                  <p className="text-sm text-slate-400">Normalized schemas & RLS policies</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="glass-card p-6 flex gap-4 items-start"
              >
                <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400">
                  <Code size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">Clean Code</h4>
                  <p className="text-sm text-slate-400">Readable, scalable architecture</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="glass-card p-6 flex gap-4 items-start"
              >
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400">
                  <Cpu size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">AI Workflows</h4>
                  <p className="text-sm text-slate-400">Agents, prompt engineering, and n8n</p>
                </div>
              </motion.div>
            </div>

            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="glass-card p-8"
            >
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                🛣️ My Journey
              </h4>
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-indigo-500/30">
                  <div className="absolute w-3 h-3 bg-indigo-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                  <span className="text-indigo-400 text-sm font-bold block mb-1">2022</span>
                  <span className="text-slate-300 block">Started B.Tech CSE at JECRC University</span>
                </div>
                <div className="relative pl-6 border-l border-cyan-500/30">
                  <div className="absolute w-3 h-3 bg-cyan-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                  <span className="text-cyan-400 text-sm font-bold block mb-1">Early 2026</span>
                  <span className="text-slate-300 block">Software Developer Intern @ LawDocs — Built ODR platform core features</span>
                </div>
                <div className="relative pl-6 border-l border-emerald-500/30">
                  <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                  <span className="text-emerald-400 text-sm font-bold block mb-1">Now</span>
                  <span className="text-slate-300 block">Full Stack Developer @ LawDocs — Scaling production legal-tech systems</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
