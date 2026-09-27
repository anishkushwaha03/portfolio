"use client";

import { motion } from "motion/react";
import { ArrowDown, Download, Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Typewriter from "@/components/Typewriter";
import { heroRoles, profile, stats } from "@/lib/data";

/**
 * Entrance animation, staggered by delay. Defined once at module scope so the
 * objects keep a stable identity across renders.
 * MotionProvider strips the travel for anyone who prefers reduced motion.
 */
const FROM = { opacity: 0, y: 22 };
const TO = { opacity: 1, y: 0 };
const rise = (delay: number) => ({
  initial: FROM,
  animate: TO,
  transition: { duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[min(100svh,880px)] items-center overflow-hidden pt-28 pb-20"
    >
      <div className="aurora" aria-hidden />

      <div className="rail relative z-10 flex flex-col items-center text-center">
        <motion.p
          {...rise(0)}
          className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-ink-muted shadow-[var(--shadow-sm)]"
        >
          <span className="relative flex h-2 w-2" aria-hidden>
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ok opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-ok" />
          </span>
          {profile.availability}
        </motion.p>

        <motion.h1
          {...rise(0.08)}
          className="mt-7 max-w-[18ch] text-fluid-4xl font-semibold"
        >
          <span className="animate-wave mr-1 inline-block" aria-hidden>
            👋
          </span>{" "}
          Hi, I&rsquo;m <span className="gradient-text">Anish Kushwaha</span>
        </motion.h1>

        <motion.p
          {...rise(0.16)}
          className="mt-5 flex min-h-[1.6em] flex-wrap items-center justify-center gap-x-2 text-fluid-xl text-ink-soft"
        >
          <span>I build</span>
          <Typewriter phrases={heroRoles} />
        </motion.p>

        <motion.p
          {...rise(0.24)}
          className="mt-6 max-w-[62ch] text-pretty text-ink-muted"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          {...rise(0.32)}
          className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <a href="#projects" className="btn btn-primary">
            View my work
            <ArrowDown size={17} aria-hidden />
          </a>
          <a href={profile.resumePath} download className="btn btn-ghost">
            <Download size={17} aria-hidden />
            Download CV
          </a>
        </motion.div>

        <motion.div {...rise(0.4)} className="mt-8 flex items-center gap-2">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-ink-muted transition-all hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
          >
            <FaGithub size={18} aria-hidden />
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-ink-muted transition-all hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
          >
            <FaLinkedin size={18} aria-hidden />
          </a>
          <a
            href={`mailto:${profile.email}`}
            aria-label="Send an email"
            className="grid h-11 w-11 place-items-center rounded-lg border border-line bg-surface text-ink-muted transition-all hover:-translate-y-0.5 hover:border-line-strong hover:text-ink"
          >
            <Mail size={18} aria-hidden />
          </a>
          <span className="ml-2 hidden items-center gap-1.5 text-sm text-ink-faint sm:inline-flex">
            <MapPin size={15} aria-hidden />
            {profile.location}
          </span>
        </motion.div>

        <motion.dl
          {...rise(0.5)}
          className="mt-16 grid w-full max-w-2xl grid-cols-3 divide-x divide-line rounded-xl border border-line bg-surface/60 py-6 backdrop-blur-sm"
        >
          {/* col-reverse keeps dt before dd in the markup while the number reads first. */}
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col-reverse items-center gap-1 px-2">
              <dt className="text-center text-xs leading-snug text-ink-muted sm:text-sm">
                {s.label}
              </dt>
              <dd className="font-display text-fluid-2xl font-semibold tabular-nums">
                <span className="gradient-text">
                  {s.value}
                  {s.suffix}
                </span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
