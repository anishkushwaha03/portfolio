import { Database, Layers, Radio, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { highlights, journey, profile } from "@/lib/data";

const icons: Record<string, LucideIcon> = {
  layers: Layers,
  database: Database,
  shield: ShieldCheck,
  radio: Radio,
};

const toneClass: Record<string, string> = {
  brand: "bg-brand",
  accent: "bg-accent",
  ok: "bg-ok",
};

const facts = [
  { label: "Based in", value: profile.location },
  { label: "Role", value: "Full Stack Developer @ LawDocs" },
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "Phone", value: profile.phone, href: profile.phoneHref },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="rail">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">About</p>
          <h2 className="section-title">
            What I actually <span className="gradient-text">work on</span>
          </h2>
          <p className="section-lede">
            The short version: production legal-tech, owned end to end.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal delay={1} className="min-w-0 lg:col-span-7">
            <article className="surface h-full min-w-0 p-5 sm:p-8 lg:p-9">
              <p className="text-ink-soft">{profile.about}</p>

              <hr className="rule my-7" />

              <dl className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {facts.map((fact) => (
                  <div key={fact.label} className="flex flex-col gap-0.5">
                    <dt className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                      {fact.label}
                    </dt>
                    <dd className="text-sm font-medium break-words">
                      {fact.href ? (
                        <a
                          href={fact.href}
                          className="text-ink transition-colors hover:text-brand"
                        >
                          {fact.value}
                        </a>
                      ) : (
                        <span className="text-ink">{fact.value}</span>
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>

          <div className="grid min-w-0 gap-6 lg:col-span-5">
            <Reveal delay={2}>
              <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {highlights.map((item) => {
                  const Icon = icons[item.icon];
                  return (
                    <li key={item.title} className="surface surface-lift p-5">
                      <span className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand">
                        <Icon size={19} aria-hidden />
                      </span>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink-muted">{item.body}</p>
                    </li>
                  );
                })}
              </ul>
            </Reveal>

            <Reveal delay={3}>
              <article className="surface p-7">
                <h3 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
                  How I got here
                </h3>
                <ol className="mt-5 space-y-5">
                  {journey.map((step, i) => (
                    <li key={step.period} className="relative pl-6">
                      <span
                        className={`absolute left-0 top-[0.45rem] h-2.5 w-2.5 rounded-full ${toneClass[step.tone]}`}
                        aria-hidden
                      />
                      {/* Connector runs between dots, so the last step has none. */}
                      {i < journey.length - 1 && (
                        <span
                          className="absolute left-[4.5px] top-[1.1rem] h-[calc(100%+0.85rem)] w-px bg-line"
                          aria-hidden
                        />
                      )}
                      <p className="font-mono text-xs tabular-nums text-ink-faint">
                        {step.period}
                      </p>
                      <p className="mt-0.5 text-sm font-semibold">{step.title}</p>
                      <p className="text-sm text-ink-muted">{step.detail}</p>
                    </li>
                  ))}
                </ol>
              </article>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
