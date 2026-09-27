"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Code2, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { profile, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const ALL = "All";

export default function Projects() {
  const [filter, setFilter] = useState(ALL);

  const categories = useMemo(() => {
    const counts = new Map<string, number>([[ALL, projects.length]]);
    for (const p of projects) counts.set(p.category, (counts.get(p.category) ?? 0) + 1);
    return [...counts.entries()];
  }, []);

  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="rail">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">
            Things I&rsquo;ve <span className="gradient-text">shipped</span>
          </h2>
          <p className="section-lede">
            Two builds I can talk through in detail — what I chose, what I&rsquo;d change, and why.
          </p>
        </Reveal>

        <Reveal delay={1}>
          <div className="mt-8 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
            {categories.map(([name, count]) => {
              const isActive = filter === name;
              return (
                <button
                  key={name}
                  type="button"
                  onClick={() => setFilter(name)}
                  aria-pressed={isActive}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "border-brand/40 bg-brand-soft text-ink"
                      : "border-line bg-surface text-ink-muted hover:border-line-strong hover:text-ink"
                  )}
                >
                  {name}
                  <span
                    className={cn(
                      "font-mono text-xs tabular-nums",
                      isActive ? "text-brand" : "text-ink-faint"
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <ul className="mt-8 grid gap-6 lg:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((project) => (
              <motion.li
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="surface surface-lift flex flex-col p-7 sm:p-8"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip border-brand/30 bg-brand-soft text-brand">
                    {project.category}
                  </span>
                  <span className="chip tabular-nums">{project.year}</span>
                  {project.featured && (
                    <span className="chip border-accent/30 bg-accent-soft text-accent">
                      <Star size={12} aria-hidden />
                      Featured
                    </span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-fluid-2xl font-semibold">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">{project.tagline}</p>
                <p className="mt-4 text-sm text-ink-muted">{project.summary}</p>

                <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex gap-2.5 text-sm text-ink-soft">
                      <span className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-brand" aria-hidden />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* mt-auto pins the footer so cards in a row line up. */}
                <div className="mt-auto pt-6">
                  <ul className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li key={tech} className="chip">
                        {tech}
                      </li>
                    ))}
                  </ul>

                  {(project.live || project.source) && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-primary h-10 px-4"
                        >
                          Live site
                          <ArrowUpRight size={16} aria-hidden />
                        </a>
                      )}
                      {project.source && (
                        <a
                          href={project.source}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-ghost h-10 px-4"
                        >
                          <Code2 size={16} aria-hidden />
                          Source
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        <Reveal delay={2}>
          <p className="mt-8 text-sm text-ink-muted">
            My day-to-day work on the LawDocs platform is closed source.{" "}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-brand underline-offset-4 hover:underline"
            >
              <FaGithub size={14} aria-hidden />
              More on GitHub
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
