"use client";

import { useState } from "react";
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/data";

const channels = [
  {
    key: "github",
    label: "GitHub",
    value: "anishkushwaha03",
    href: profile.links.github,
    Icon: FaGithub,
    external: true,
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    value: "anishkushwaha03",
    href: profile.links.linkedin,
    Icon: FaLinkedin,
    external: true,
  },
  {
    key: "phone",
    label: "Phone",
    value: profile.phone,
    href: profile.phoneHref,
    Icon: Phone,
    external: false,
  },
] as const;

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked — the address is selectable text right beside the button.
    }
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-canvas-alt">
      <div className="aurora" aria-hidden />

      <div className="rail relative z-10">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">
            Let&rsquo;s <span className="gradient-text">talk</span>
          </h2>
          <p className="section-lede">
            I&rsquo;m open to full-time roles. If you have a question about anything above, email
            is the fastest way to reach me.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          <Reveal delay={1} className="min-w-0 lg:col-span-7">
            <article className="surface h-full min-w-0 p-5 sm:p-8 lg:p-9">
              <span
                className="grid h-11 w-11 place-items-center rounded-lg bg-brand-soft text-brand"
                aria-hidden
              >
                <Mail size={21} />
              </span>

              <h3 className="mt-5 font-display text-fluid-xl font-semibold">Email me</h3>
              <p className="mt-1.5 text-sm text-ink-muted">
                I read everything and reply to anything that isn&rsquo;t a cold pitch.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2 rounded-xl border border-line bg-surface-raised p-2 pl-4">
                <span className="select-all break-all font-mono text-sm text-ink">
                  {profile.email}
                </span>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="ml-auto inline-flex h-9 items-center gap-1.5 rounded-lg border border-line bg-surface px-3 text-xs font-medium text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
                >
                  {copied ? (
                    <>
                      <Check size={14} aria-hidden className="text-ok" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy size={14} aria-hidden />
                      Copy
                    </>
                  )}
                </button>
              </div>
              <span aria-live="polite" className="sr-only">
                {copied ? "Email address copied to clipboard" : ""}
              </span>

              <a href={`mailto:${profile.email}`} className="btn btn-primary mt-5 w-full sm:w-auto">
                <Mail size={17} aria-hidden />
                Open in mail app
              </a>

              <p className="mt-6 flex items-center gap-1.5 text-sm text-ink-faint">
                <MapPin size={14} aria-hidden />
                Based in {profile.location}
              </p>
            </article>
          </Reveal>

          <Reveal delay={2} className="min-w-0 lg:col-span-5">
            <ul className="grid h-full gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {channels.map(({ key, label, value, href, Icon, external }) => (
                <li key={key}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="surface surface-lift flex h-full items-center gap-4 p-5"
                  >
                    <span
                      className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-surface-raised text-ink-muted"
                      aria-hidden
                    >
                      <Icon size={18} />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs uppercase tracking-wider text-ink-faint">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium text-ink">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
