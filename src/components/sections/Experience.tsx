import { Building2, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section bg-canvas-alt">
      <div className="rail">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">
            Where I&rsquo;ve <span className="gradient-text">done the work</span>
          </h2>
          <p className="section-lede">
            One company, two titles — the second earned five months into the first.
          </p>
        </Reveal>

        <div className="mt-12 space-y-6">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i + 1}>
              <article className="surface min-w-0 p-5 sm:p-8 lg:p-9">
                <header className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
                  <div>
                    <h3 className="flex items-center gap-2.5 font-display text-fluid-2xl font-semibold">
                      <span
                        className="grid h-9 w-9 place-items-center rounded-lg bg-brand-soft text-brand"
                        aria-hidden
                      >
                        <Building2 size={18} />
                      </span>
                      {job.company}
                    </h3>
                    <p className="mt-2 flex items-center gap-1.5 text-sm text-ink-faint">
                      <MapPin size={14} aria-hidden />
                      {job.location}
                    </p>
                  </div>
                </header>

                <p className="mt-5 text-sm text-ink-muted">{job.summary}</p>

                {/* Role progression inside the company. */}
                <ol className="mt-6 space-y-3">
                  {job.roles.map((role) => (
                    <li
                      key={role.title}
                      className="flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl border border-line bg-surface-raised px-4 py-3"
                    >
                      <span className="font-medium">{role.title}</span>
                      {role.current && (
                        <span className="chip border-ok/30 bg-ok-soft text-ok">Current</span>
                      )}
                      <span className="chip">{role.type}</span>
                      {/* Full width once it wraps, so the date never orphans right-aligned. */}
                      <span className="w-full font-mono text-xs tabular-nums text-ink-faint sm:ml-auto sm:w-auto sm:text-right">
                        {role.period}
                      </span>
                    </li>
                  ))}
                </ol>

                <hr className="rule my-7" />

                <ul className="space-y-3">
                  {job.highlights.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-ink-soft">
                      <span
                        className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                        aria-hidden
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li key={tech} className="chip">
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
