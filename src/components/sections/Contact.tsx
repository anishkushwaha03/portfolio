"use client";
import { motion } from "motion/react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-tag">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle mx-auto">
            I'm currently available for full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-card p-8 md:p-12 text-center"
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
            <a href="mailto:anishsinghkushwaha03@gmail.com" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-full bg-indigo-500/10 text-indigo-400 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <Mail size={28} />
              </div>
              <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                anishsinghkushwaha03@gmail.com
              </span>
            </a>
            
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-white transition-all cursor-default">
                <MapPin size={28} />
              </div>
              <span className="text-slate-300 font-medium group-hover:text-white transition-colors cursor-default">
                Jaipur, Rajasthan
              </span>
            </div>

            <a href="tel:+917014756534" className="flex flex-col items-center gap-4 group">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                <Phone size={28} />
              </div>
              <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                +91 7014756534
              </span>
            </a>
          </div>

          <a
            href="mailto:anishsinghkushwaha03@gmail.com"
            className="inline-flex h-14 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-500 px-8 text-lg font-bold text-white shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1 transition-all"
          >
            Say Hello 👋
          </a>
        </motion.div>
      </div>
      
      {/* Footer */}
      <footer className="mt-24 border-t border-white/5 py-8 text-center text-slate-500 text-sm">
        <p>Built with Next.js, Tailwind CSS, and Motion.</p>
        <p className="mt-2">© {new Date().getFullYear()} Anish Kushwaha. All rights reserved.</p>
      </footer>
    </section>
  );
}
