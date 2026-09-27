"use client";
import { motion } from "motion/react";
import { ArrowDown, Download, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-sm font-medium text-slate-300">Available for opportunities</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
        >
          <span className="inline-block animate-wave origin-bottom-right">👋</span>
          <br />
          Hi, I'm <span className="gradient-text">Anish Kushwaha</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-medium text-slate-300 mb-6 flex items-center gap-2"
        >
          <span>I build</span>
          <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
            Full Stack Applications
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Full Stack Developer building and scaling production-grade web applications. 
          I specialize in crafting seamless user experiences with React and Next.js, 
          and architecting robust, scalable APIs with Node.js and PostgreSQL.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16"
        >
          <a
            href="#projects"
            className="flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
          >
            View My Work
            <ArrowDown size={18} />
          </a>
          
          <a
            href="/Anish_Kushwaha_Resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-4 rounded-xl glass-card text-white font-semibold hover:bg-white/5 transition-all"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex items-center gap-6"
        >
          <a
            href="https://github.com/anishkushwaha03"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 transition-all"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/anishkushwaha03"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 transition-all"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="mailto:anishsinghkushwaha03@gmail.com"
            className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:-translate-y-1 transition-all"
          >
            <Mail size={20} />
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl font-black gradient-text">2+</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Years Experience</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl font-black gradient-text">10+</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Projects Shipped</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <span className="text-4xl font-black gradient-text">15+</span>
            <span className="text-sm font-medium text-slate-400 uppercase tracking-wider">Technologies</span>
          </div>
        </motion.div>
      </div>

      {/* Floating Icons (Simplified for now) */}
      <div className="absolute inset-0 pointer-events-none z-0 hidden md:block">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-1/4 left-[15%] text-4xl"
        >
          ⚛️
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-1/3 right-[20%] text-4xl"
        >
          🟩
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute bottom-1/3 left-[20%] text-4xl opacity-80"
        >
          🐘
        </motion.div>
      </div>
    </section>
  );
}
