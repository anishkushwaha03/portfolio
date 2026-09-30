/**
 * Single source of truth for every piece of content on the site.
 * Editing copy, adding a project, or updating a date happens here — not in components.
 */

export const profile = {
  name: "Anish Kushwaha",
  initials: "AK",
  role: "Full Stack Developer",
  stack: "React · Next.js · Node.js · PostgreSQL",
  location: "Jaipur, Rajasthan, India",
  email: "anishsinghkushwaha03@gmail.com",
  phone: "+91 7014756534",
  phoneHref: "tel:+917014756534",
  resumePath: "/Anish_Kushwaha_Resume.pdf",
  availability: "Open to full-time roles",
  links: {
    github: "https://github.com/anishkushwaha03",
    linkedin: "https://www.linkedin.com/in/anishkushwaha03",
  },
  intro:
    "I build and scale a production legal-tech platform full-time — from relational schema design through secure REST APIs to deployment. Most of my work sits at the seam between a clean interface and a backend that can be trusted with confidential data.",
  about:
    "I'm a Full Stack Developer at LawDocs, where I own features end to end on an Online Dispute Resolution platform. Day to day that means a 70+ table multi-tenant schema on PostgreSQL, 120+ REST endpoints hardened with JWT, multi-factor auth and role-based access control, real-time case rooms over Socket.io, and background workers that chase SLA deadlines. I care most about the parts users never see: the constraint that prevents bad data, the index that keeps a query fast, the retry that stops a missed deadline becoming a missed hearing.",
} as const;

/** Rotating phrases in the hero. Kept short so the line never wraps on mobile. */
export const heroRoles = [
  "full stack applications",
  "secure REST APIs",
  "real-time systems",
  "relational data models",
] as const;

/**
 * Figures shown under the hero. Every one traces to a line on the resume —
 * if the resume changes, change these too.
 */
export const stats = [
  { value: "120", suffix: "+", label: "REST endpoints shipped" },
  { value: "70", suffix: "+", label: "Tables in production schema" },
  { value: "3", suffix: "", label: "Production systems shipped" },
] as const;

export const highlights = [
  {
    icon: "layers",
    title: "End-to-end ownership",
    body: "Schema design through production deploy, on one codebase.",
  },
  {
    icon: "database",
    title: "Relational data modelling",
    body: "70+ table multi-tenant schema, indexed query paths, tenant-scoped access.",
  },
  {
    icon: "shield",
    title: "API security",
    body: "JWT, multi-factor auth, RBAC, Zod validation, per-route rate limiting.",
  },
  {
    icon: "radio",
    title: "Real-time systems",
    body: "Socket.io case rooms over authenticated room-join handshakes.",
  },
  {
    icon: "workflow",
    title: "Background workers",
    body: "pg-boss job queue driving email, scheduling and SLA escalation.",
  },
  {
    icon: "plug",
    title: "Third-party integrations",
    body: "KYC and eSign, escrow payments and payouts, Teams scheduling.",
  },
] as const;

export const journey = [
  {
    period: "2022",
    title: "Started B.Tech CSE",
    detail: "JECRC University, Jaipur",
    tone: "brand",
  },
  {
    period: "Mar 2026",
    title: "Software Developer Intern",
    detail: "LawDocs — shipped core ODR platform features",
    tone: "accent",
  },
  {
    period: "Aug 2026",
    title: "Moved to full-time",
    detail: "Software Developer, after five months as an intern",
    tone: "ok",
  },
  {
    period: "Now",
    title: "Scaling the platform",
    detail: "120+ endpoints, 70+ tables, real-time case rooms in production",
    tone: "ok",
  },
] as const;

export type SkillGroup = {
  id: string;
  label: string;
  icon: string;
  blurb: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "languages",
    label: "Languages",
    icon: "code",
    blurb: "What I write in, day to day.",
    items: ["JavaScript (ES6+)", "TypeScript", "SQL", "C++", "C", "HTML5", "CSS3"],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "monitor",
    blurb: "Interfaces that stay fast as they grow.",
    items: [
      "React.js",
      "Next.js (App Router)",
      "SSR & SSG",
      "Redux Toolkit",
      "TanStack Query",
      "Tailwind CSS",
      "Responsive design",
    ],
  },
  {
    id: "backend",
    label: "Backend",
    icon: "server",
    blurb: "APIs built to be handed confidential data.",
    items: [
      "Node.js",
      "Express.js",
      "REST API design",
      "Socket.io",
      "WebSockets",
      "JWT authentication",
      "Multi-factor auth",
      "RBAC",
      "Zod validation",
      "Rate limiting",
      "HMAC verification",
      "pg-boss job queues",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    icon: "database",
    blurb: "Schemas first, queries measured after.",
    items: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Redis",
      "Schema design",
      "Indexing",
      "Query optimization",
      "Row Level Security",
    ],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "cloud",
    blurb: "Getting it shipped, repeatably.",
    items: [
      "AWS S3",
      "Vercel",
      "Git",
      "GitHub",
      "GitHub Actions",
      "Docker",
      "Postman",
      "npm",
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    icon: "plug",
    blurb: "Third-party services wired in end to end.",
    items: [
      "Razorpay (escrow & payouts)",
      "Surepass KYC & eSign",
      "Microsoft Graph / Teams",
      "AWS S3 presigned URLs",
      "Webhook verification",
      "Transactional email",
    ],
  },
  {
    id: "ai",
    label: "AI & Automation",
    icon: "sparkles",
    blurb: "Models wired into real product surfaces.",
    items: [
      "Anthropic Claude API",
      "Prompt engineering",
      "Structured outputs",
      "AI agent workflows",
      "n8n",
    ],
  },
  {
    id: "concepts",
    label: "Foundations",
    icon: "compass",
    blurb: "The coursework that still pays off.",
    items: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "MVC architecture",
      "Agile / Scrum",
      "SDLC",
      "Unit testing",
      "Code review",
      "Debugging",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  year: string;
  featured: boolean;
  summary: string;
  highlights: string[];
  stack: string[];
  live?: string;
  source?: string;
};

export const projects: Project[] = [
  {
    slug: "nexusshop",
    title: "NexusShop",
    tagline: "Multi-vendor marketplace",
    category: "E-Commerce",
    year: "2025",
    featured: true,
    summary:
      "A marketplace where independent sellers run their own storefronts under one admin-approved roof, with the full order lifecycle handled across buyer, seller, and admin roles.",
    highlights: [
      "Seller storefronts with admin approval workflows and role-scoped dashboards.",
      "Razorpay payment integration (test mode) with HMAC signature verification on webhooks.",
      "Server-side validation with Zod, API rate limiting, and middleware route protection.",
      "Global client state in Redux Toolkit; shipped to Vercel through GitHub CI/CD.",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Redux Toolkit", "Zod", "Razorpay"],
    live: "https://nexus-shop-chi.vercel.app/",
  },
  {
    slug: "solar-epc",
    title: "Solar Plant EPC Firm",
    tagline: "Client site with lead pipeline",
    category: "Web Application",
    year: "2024",
    featured: false,
    summary:
      "A responsive site for a solar energy contractor, backed by an Express API that captures and manages inbound leads. Delivered for production client use.",
    highlights: [
      "RESTful Express.js and MongoDB backend for secure form submission.",
      "Lead capture and management flow used by the client's sales team.",
      "Responsive layouts tuned for the mobile traffic the client actually receives.",
    ],
    stack: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
];

export type Role = {
  title: string;
  period: string;
  type: string;
  current: boolean;
};

export const experience = [
  {
    company: "LawDocs",
    location: "Jaipur, Rajasthan (Remote)",
    summary:
      "Legal-tech platform for online dispute resolution. I joined as an intern in March 2026 and moved to full-time in August, owning platform features end to end throughout.",
    roles: [
      {
        title: "Software Developer",
        period: "August 2026 — Present",
        type: "Full-time",
        current: true,
      },
      {
        title: "Software Developer Intern",
        period: "March 2026 — August 2026",
        type: "Internship",
        current: false,
      },
    ] as Role[],
    highlights: [
      "Built a full-stack Online Dispute Resolution platform with Next.js, Node.js, Express.js, and PostgreSQL — owning the lifecycle from relational schema design to production deployment.",
      "Designed and normalized a multi-tenant relational schema on PostgreSQL (Supabase) across 70+ tables, with indexed query paths and tenant-scoped data access enforcing role-based confidentiality for privileged legal records.",
      "Implemented real-time case rooms, chat, and notifications with Socket.io over authenticated room-join handshakes.",
      "Built a PostgreSQL-backed job queue (pg-boss) running background workers for transactional email, session scheduling, and SLA deadline escalation with exponential-backoff retries.",
      "Developed 120+ secure REST endpoints with JWT authentication, multi-factor auth enforcement, role-based access control, Zod request validation, and per-route rate limiting; integrated AWS S3 presigned uploads and downloads for evidence and document management.",
      "Integrated third-party services end to end: Surepass for Aadhaar/PAN KYC and eSign, Razorpay for escrow payments and payouts with HMAC-SHA256 webhook verification, and Microsoft Graph for Teams hearing scheduling and attendance sync.",
      "Worked in an Agile cycle using Git and GitHub for pull-request reviews and iterative releases.",
    ],
    stack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Supabase",
      "Socket.io",
      "pg-boss",
      "AWS S3",
      "JWT",
      "Razorpay",
      "Microsoft Graph",
    ],
  },
];

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  institution: "JECRC University, Jaipur",
  period: "2022 — 2026",
  cgpa: "7.5 / 10" as string | null,
  coursework: [
    "Data Structures and Algorithms",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
    "Object-Oriented Programming",
    "Web Technologies",
  ],
};

export const achievements = [
  {
    title: "Hardware Head, RHYTHM'25",
    organisation: "JECRC University",
    period: "January 2025 — March 2025",
    detail:
      "Led a 50+ member cross-functional team to plan and run robotics and embedded systems events across university departments.",
  },
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
] as const;
