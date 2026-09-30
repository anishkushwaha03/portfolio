"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  Cloud,
  Code2,
  Compass,
  Database,
  Monitor,
  Plug,
  Server,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";
import { skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  monitor: Monitor,
  server: Server,
  database: Database,
  cloud: Cloud,
  plug: Plug,
  sparkles: Sparkles,
  compass: Compass,
};

export default function Skills() {
  const [activeId, setActiveId] = useState(skillGroups[1].id);
  const active = skillGroups.find((g) => g.id === activeId) ?? skillGroups[0];

  return (
    <section id="skills" className="section bg-canvas-alt">
      <div className="rail">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Skills</p>
          <h2 className="section-title">
            The <span className="gradient-text">toolkit</span>
          </h2>
          <p className="section-lede">
            Grouped by where it sits in the stack. Everything here is something I have shipped
            with, not just read about.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Category rail — wraps on narrow screens, stacks into a column on desktop.
              min-w-0 lets this grid item shrink below its content's intrinsic width. */}
          <Reveal delay={1} className="min-w-0 lg:col-span-4">
            <div
              role="tablist"
              aria-label="Skill categories"
              className="flex flex-wrap gap-2 lg:flex-col lg:flex-nowrap"
            >
              {skillGroups.map((group) => {
                const Icon = icons[group.icon];
                const isActive = group.id === activeId;
                return (
                  <button
                    key={group.id}
                    type="button"
                    role="tab"
                    id={`tab-${group.id}`}
                    aria-selected={isActive}
                    aria-controls={`panel-${group.id}`}
                    onClick={() => setActiveId(group.id)}
                    className={cn(
                      "group flex items-center gap-2.5 rounded-xl border px-3 py-2.5 text-left text-xs font-medium transition-colors sm:gap-3 sm:px-4 sm:py-3 sm:text-sm lg:w-full",
                      isActive
                        ? "border-brand/40 bg-brand-soft text-ink"
                        : "border-line bg-surface text-ink-muted hover:border-line-strong hover:text-ink"
                    )}
                  >
                    <Icon
                      size={17}
                      aria-hidden
                      className={isActive ? "text-brand" : "text-ink-faint"}
                    />
                    <span className="whitespace-nowrap">{group.label}</span>
                    <span
                      className={cn(
                        "ml-auto hidden font-mono text-xs tabular-nums lg:inline",
                        isActive ? "text-brand" : "text-ink-faint"
                      )}
                    >
                      {group.items.length}
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={2} className="min-w-0 lg:col-span-8">
            <div
              role="tabpanel"
              id={`panel-${active.id}`}
              aria-labelledby={`tab-${active.id}`}
              className="surface h-full p-5 sm:p-8 lg:p-9"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="font-display text-fluid-xl font-semibold">{active.label}</h3>
                    <span className="font-mono text-xs tabular-nums text-ink-faint">
                      {active.items.length} tools
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-ink-muted">{active.blurb}</p>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {active.items.map((item) => (
                      <li
                        key={item}
                        className="chip border-line-strong/60 text-ink-soft transition-colors hover:border-brand/50 hover:text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
