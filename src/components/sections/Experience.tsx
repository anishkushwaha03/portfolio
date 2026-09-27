"use client";
import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experience = [
  {
    role: "Software Developer (Full-Time)",
    company: "LawDocs",
    location: "Jaipur, Rajasthan (Remote)",
    date: "August 2026 – Present",
    highlights: [
      "Promoted from intern to full-time based on end-to-end ownership of core platform features.",
      "Built a full-stack Online Dispute Resolution (ODR) platform using Next.js, Node.js, and PostgreSQL.",
      "Designed normalized schemas on Supabase with Row Level Security (RLS) enforcing strict data privacy.",
      "Implemented real-time chat with WebSockets (Socket.io) backed by Redis message caching."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "LawDocs",
    location: "Jaipur, Rajasthan (Remote)",
    date: "March 2026 – August 2026",
    highlights: [
      "Developed secure RESTful API endpoints with JWT authentication and RBAC.",
      "Integrated AWS S3 for scalable document storage and evidence management.",
      "Collaborated in an Agile workflow using Git and GitHub for pull-request code reviews."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="section-tag">Experience</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto">
            My track record of delivering production-grade applications.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-8 relative group"
            >
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-500 to-cyan-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                    {exp.role}
                  </h3>
                  <div className="text-indigo-400 font-medium text-lg mt-1 flex items-center gap-2">
                    <Briefcase size={18} />
                    {exp.company}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 text-slate-400 text-sm">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar size={16} />
                    {exp.date}
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin size={16} />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex gap-3 text-slate-300">
                    <span className="text-cyan-500 mt-1.5">•</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
