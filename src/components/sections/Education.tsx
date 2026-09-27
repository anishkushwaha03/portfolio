import { GraduationCap, Trophy } from "lucide-react";
import Reveal from "@/components/Reveal";
import { achievements, education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="rail">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Education &amp; Leadership</p>
          <h2 className="section-title">
            Where the <span className="gradient-text">foundations</span> came from
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal delay={1}>
            <article className="surface h-full min-w-0 p-5 sm:p-7 lg:p-8">
              <span
                className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand"
                aria-hidden
              >
                <GraduationCap size={20} />
              </span>

              <h3 className="mt-5 font-display text-fluid-xl font-semibold">
                {education.degree}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">{education.institution}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="chip tabular-nums">{education.period}</span>
                {education.cgpa && <span className="chip tabular-nums">CGPA {education.cgpa}</span>}
              </div>

              <h4 className="mt-7 font-mono text-xs uppercase tracking-wider text-ink-faint">
                Relevant coursework
              </h4>
              <ul className="mt-3 flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <li key={course} className="chip">
                    {course}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={2}>
            <div className="grid h-full gap-6">
              {achievements.map((item) => (
                <article key={item.title} className="surface h-full min-w-0 p-5 sm:p-7 lg:p-8">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-lg bg-accent-soft text-accent"
                    aria-hidden
                  >
                    <Trophy size={20} />
                  </span>

                  <h3 className="mt-5 font-display text-fluid-xl font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-accent">{item.organisation}</p>

                  <div className="mt-4">
                    <span className="chip tabular-nums">{item.period}</span>
                  </div>

                  <p className="mt-5 text-sm text-ink-muted">{item.detail}</p>
                </article>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
