import { ArrowUp, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks, profile } from "@/lib/data";

const builtWith = ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Motion"];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-canvas">
      <div className="rail py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="min-w-0 md:col-span-5">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span
                className="grid h-9 w-9 place-items-center rounded-lg bg-[linear-gradient(105deg,var(--grad-from),var(--grad-to))] font-display text-sm font-semibold text-white"
                aria-hidden
              >
                {profile.initials}
              </span>
              <span className="font-display font-semibold tracking-tight">{profile.name}</span>
            </a>
            <p className="mt-4 max-w-[38ch] text-sm text-ink-muted">
              {profile.role} in {profile.location}. Currently building online dispute resolution
              at LawDocs.
            </p>

            <div className="mt-5 flex items-center gap-2">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <FaGithub size={17} aria-hidden />
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <FaLinkedin size={17} aria-hidden />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Send an email"
                className="grid h-10 w-10 place-items-center rounded-lg border border-line bg-surface text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
              >
                <Mail size={17} aria-hidden />
              </a>
            </div>
          </div>

          <nav className="min-w-0 md:col-span-3" aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-wider text-ink-faint">Sections</h2>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-muted transition-colors hover:text-ink"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0 md:col-span-4">
            <h2 className="font-mono text-xs uppercase tracking-wider text-ink-faint">
              Built with
            </h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {builtWith.map((tool) => (
                <li key={tool} className="chip">
                  {tool}
                </li>
              ))}
            </ul>
            <a href={profile.resumePath} download className="btn btn-ghost mt-5 h-10 px-4">
              Download CV
            </a>
          </div>
        </div>

        <hr className="rule my-10" />

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm text-ink-faint">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted transition-colors hover:text-ink"
          >
            Back to top
            <ArrowUp size={14} aria-hidden />
          </a>
        </div>
      </div>
    </footer>
  );
}
