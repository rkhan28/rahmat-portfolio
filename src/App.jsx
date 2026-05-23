import React, { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BuilderScene from "./Components/BuilderScene";


function Icon({ name, className = "h-5 w-5" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  const icons = {
    github: (
      <svg {...common}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    file: (
      <svg {...common}>
        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
        <path d="M14 2v6h6" />
        <path d="M8 13h8" />
        <path d="M8 17h5" />
      </svg>
    ),
    mail: (
      <svg {...common}>
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
    arrow: (
      <svg {...common}>
        <path d="M7 7h10v10" />
        <path d="M7 17 17 7" />
      </svg>
    ),
    cpu: (
      <svg {...common}>
        <rect width="14" height="14" x="5" y="5" rx="2" />
        <path d="M9 9h6v6H9z" />
        <path d="M9 1v4" />
        <path d="M15 1v4" />
        <path d="M9 19v4" />
        <path d="M15 19v4" />
        <path d="M1 9h4" />
        <path d="M1 15h4" />
        <path d="M19 9h4" />
        <path d="M19 15h4" />
      </svg>
    ),
    database: (
      <svg {...common}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </svg>
    ),
    workflow: (
      <svg {...common}>
        <rect width="6" height="6" x="3" y="3" rx="1" />
        <rect width="6" height="6" x="15" y="3" rx="1" />
        <rect width="6" height="6" x="9" y="15" rx="1" />
        <path d="M9 6h6" />
        <path d="M18 9v2a4 4 0 0 1-4 4h-2" />
        <path d="M6 9v2a4 4 0 0 0 4 4h2" />
      </svg>
    ),
    shield: (
      <svg {...common}>
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.5 3.8 17 5 19 5a1 1 0 0 1 1 1z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    train: (
      <svg {...common}>
        <path d="M4 15.5V6a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v9.5a3.5 3.5 0 0 1-3.5 3.5h-9A3.5 3.5 0 0 1 4 15.5Z" />
        <path d="M8 19 6 22" />
        <path d="m16 19 2 3" />
        <path d="M8 11h8" />
        <path d="M8 6h8" />
        <circle cx="8.5" cy="15.5" r="1" />
        <circle cx="15.5" cy="15.5" r="1" />
      </svg>
    ),
    cloud: (
      <svg {...common}>
        <path d="M17.5 19H8a6 6 0 1 1 1.08-11.9A7 7 0 0 1 22 11.5 4.5 4.5 0 0 1 17.5 19Z" />
      </svg>
    ),
    sparkles: (
      <svg {...common}>
        <path d="m12 3-1.9 5.8L4 11l6.1 2.2L12 19l1.9-5.8L20 11l-6.1-2.2Z" />
        <path d="M5 3v4" />
        <path d="M3 5h4" />
        <path d="M19 17v4" />
        <path d="M17 19h4" />
      </svg>
    ),
    blocks: (
      <svg {...common}>
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
      </svg>
    ),
  };

  return icons[name] || icons.blocks;
}

const profile = {
  name: "MD Rahmat Ullah Khan",
  location: "Toronto, ON",
  email: "rahmatkhan2001@hotmail.com",
  github: "https://github.com/rkhan28",
  resume: "/Rahmat_Khan_Resume_ATS.pdf",
  title: "Systems Builder · AI Automation · Full-Stack Engineering",
  tagline:
    "I turn messy ideas into working systems before the meeting about the system ends.\nAPIs, automations, AI workflows, dashboards — if it has moving parts, I make them behave.\nReadable code, sharp product instincts, and just enough chaos to ship fast.",
};

const accentColors = [
  "bg-rose-300/70 shadow-rose-950/25",
  "bg-amber-200/75 shadow-amber-950/25",
  "bg-sky-300/70 shadow-sky-950/25",
  "bg-teal-300/65 shadow-teal-950/25",
  "bg-purple-300/65 shadow-purple-950/25",
  "bg-indigo-300/65 shadow-indigo-950/25",
];

const skills = [
  "Python",
  "C++",
  "JavaScript",
  "TypeScript",
  "SQL",
  "React",
  "Next.js",
  "Node.js",
  "FastAPI",
  "Flask",
  "PyTorch",
  "OpenCV",
  "AWS",
  "Azure",
  "Docker",
  "GitHub Actions",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Redis",
  "Power BI",
  "n8n",
  "REST APIs",
];

const experiences = [
  {
    role: "Research Assistant",
    org: "York University — Vision & Image Processing Lab",
    date: "Jun 2023 — Jan 2024",
    icon: "cpu",
    color: "bg-sky-300/70",
    bullets: [
      "Implemented PyTorch HRNet pose-estimation pipelines on multi-camera sports datasets, improving PCK@0.2 accuracy by 12%.",
      "Automated camera calibration and homography validation using Python, OpenCV, and NumPy, reducing preprocessing effort by 30%.",
      "Ran reproducible hyperparameter experiments using TensorBoard and Weights & Biases.",
    ],
  },
  {
    role: "Capstone Project Lead",
    org: "York University",
    date: "Oct 2022 — Apr 2023",
    icon: "database",
    color: "bg-amber-200/75",
    bullets: [
      "Led a 5-member team building a cloud-based sales analytics dashboard for inventory, revenue, and customer behavior.",
      "Designed forecasting models for sales trend analysis and inventory flow optimization.",
      "Presented executive-level reports with clear visual insights to professors and industry stakeholders.",
    ],
  },
];

const projects = [
  {
    name: "Onboardy",
    type: "Automation Agency",
    icon: "workflow",
    color: "from-rose-300/70 to-purple-300/60",
    description:
      "Custom onboarding flows, CRM pipelines, API integrations, and cross-platform data sync systems for businesses that are tired of manual work.",
    stack: ["n8n", "Python", "REST APIs", "CRM Automation"],
  },
  {
    name: "ForwardScan",
    type: "AI Email Security Platform",
    icon: "shield",
    color: "from-sky-300/70 to-cyan-200/60",
    description:
      "A phishing detection platform that analyzes forwarded emails and returns structured risk reports using OpenAI, FastAPI, Mailgun, and VirusTotal.",
    stack: ["Python", "FastAPI", "OpenAI API", "VirusTotal", "Mailgun"],
  },
  {
    name: "TTC Easy",
    type: "Real-Time Transit Platform",
    icon: "train",
    color: "from-teal-300/65 to-emerald-200/60",
    description:
      "A transit platform using GTFS data, maps, commute pattern learning, and a RAG-based AI chatbot for natural-language Ontario transit queries.",
    stack: ["Next.js", "Node.js", "Supabase", "pgvector", "MapLibre", "Claude API"],
  },
];

const highlights = [
  { label: "Architecture", value: "Systems", icon: "blocks", color: "bg-rose-300/70" },
  { label: "Engineering", value: "AI + Cloud", icon: "cloud", color: "bg-sky-300/70" },
  { label: "Execution", value: "Ship Fast", icon: "sparkles", color: "bg-amber-200/75" },
];

function runPortfolioSelfTests() {
  const summaryLines = profile.tagline.split("\n");
  console.assert(profile.github.startsWith("https://github.com/"), "GitHub URL should be valid.");
  console.assert(profile.resume.endsWith(".pdf"), "Resume should point to a PDF file.");
  console.assert(projects.length >= 3, "Portfolio should include at least three projects.");
  console.assert(skills.includes("React") && skills.includes("Python"), "Core skills should include React and Python.");
  console.assert(experiences.every((item) => item.role && item.bullets.length > 0), "Each experience needs a role and bullets.");
  console.assert(accentColors.length >= 4, "Theme should include multiple accent colors.");
  console.assert(!profile.title.toLowerCase().includes("graduate"), "Hero title should not mention graduate.");
  console.assert(summaryLines.length === 3, "Hero summary should split into exactly three lines.");
  console.assert(projects.every((project) => project.stack.length >= 3), "Each project should include at least three stack items.");
}

runPortfolioSelfTests();

const fadeUp = {
  hidden: { opacity: 0, y: 34, scale: 0.98, filter: "blur(8px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
};

function Studs({ count = 4, className = "" }) {
  return (
    <div className={`pointer-events-none flex gap-2 ${className}`}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          animate={{ opacity: [0.48, 0.9, 0.48], y: [0, -1, 0] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.15 }}
          className="h-4 w-4 rounded-full border border-white/25 bg-white/25 shadow-[inset_0_2px_4px_rgba(255,255,255,0.4),inset_0_-3px_6px_rgba(0,0,0,0.25)]"
        />
      ))}
    </div>
  );
}

function FloatingUnit({ className = "", color = "bg-rose-300/70", delay = 0, studs = 4 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotate: -10 }}
      animate={{ opacity: 0.75, y: [0, -18, 0, 12, 0], x: [0, 10, -8, 4, 0], rotate: [-10, 4, 12, -5, -10] }}
      transition={{
        opacity: { duration: 0.6, delay },
        y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay },
        x: { duration: 9, repeat: Infinity, ease: "easeInOut", delay },
        rotate: { duration: 10, repeat: Infinity, ease: "easeInOut", delay },
      }}
      className={`absolute hidden rounded-2xl border border-white/20 ${color} p-3 shadow-2xl backdrop-blur-sm lg:block ${className}`}
    >
      <Studs count={studs} />
    </motion.div>
  );
}

function MiniBlock({ color = "bg-amber-200/80", className = "", small = false }) {
  return (
    <div
      className={`relative rounded-xl border border-white/15 ${color} shadow-[0_8px_16px_rgba(0,0,0,0.32),inset_0_1px_2px_rgba(255,255,255,0.45),inset_0_-8px_14px_rgba(0,0,0,0.18)] ${small ? "h-8 w-12" : "h-10 w-16"} ${className}`}
    >
      <span className="absolute left-2 top-1.5 h-3 w-3 rounded-full bg-white/30 shadow-inner" />
      <span className="absolute right-2 top-1.5 h-3 w-3 rounded-full bg-white/30 shadow-inner" />
    </div>
  );
}


function SectionHeader({ kicker, title, children }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="mb-8 flex flex-col gap-3 sm:mb-10"
    >
      <p className="inline-flex w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 font-mono text-xs font-black uppercase tracking-[0.25em] text-amber-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)] backdrop-blur-xl">
        {kicker}
      </p>
      <h2 className="max-w-4xl text-2xl font-black tracking-[-0.04em] text-white sm:text-3xl md:text-5xl">{title}</h2>
      {children && <p className="max-w-2xl text-sm font-medium leading-7 text-slate-300 sm:text-base sm:leading-8 md:text-lg">{children}</p>}
    </motion.div>
  );
}

function ActionButton({ href, children, variant = "primary", icon }) {
  const styles =
    variant === "primary"
      ? "border-amber-200/20 bg-amber-200/90 text-slate-950 shadow-[0_9px_0_#92400e,0_18px_30px_rgba(245,158,11,0.18)] hover:shadow-[0_5px_0_#92400e,0_12px_24px_rgba(245,158,11,0.24)]"
      : "border-sky-200/20 bg-sky-300/80 text-slate-950 shadow-[0_9px_0_#1e40af,0_18px_30px_rgba(37,99,235,0.18)] hover:shadow-[0_5px_0_#1e40af,0_12px_24px_rgba(37,99,235,0.24)]";

  return (
    <motion.a
      whileHover={{ y: 4, scale: 1.025 }}
      whileTap={{ y: 8, scale: 0.98 }}
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl border-2 px-5 py-3.5 text-sm font-black transition-all duration-200 sm:w-auto sm:px-6 sm:py-4 ${styles}`}
    >
      <Studs count={2} className="absolute right-3 top-2 opacity-35" />
      {icon && <Icon name={icon} className="relative h-5 w-5" />}
      <span className="relative">{children}</span>
    </motion.a>
  );
}

function ElevatedCard({ children, color = "bg-slate-900/85", className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-[1.6rem] border border-white/10 ${color} p-5 shadow-[0_14px_0_rgba(0,0,0,0.28),0_26px_70px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:rounded-[2rem] sm:p-7 ${className}`}>
      <Studs count={3} className="absolute right-5 top-5 opacity-45" />
      {children}
    </div>
  );
}

function TechConsole() {
  const logs = ["api.health: 200", "pipeline: synced", "model.scan: active", "deploy: green"];

  return (
    <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative z-10 hidden lg:block">
      <motion.div
        animate={{ rotate: [1.2, -1.2, 1.2], y: [0, -10, 0], x: [0, 5, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }}
        className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_18px_0_rgba(0,0,0,0.35),0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      >
        <motion.div animate={{ opacity: [0.16, 0.34, 0.16], scale: [1, 1.08, 1] }} transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }} className="absolute -inset-10 rounded-full bg-gradient-to-br from-amber-200/20 via-rose-300/10 to-sky-300/20 blur-3xl" />
        <Studs count={6} className="relative mb-4 justify-center" />
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/95 p-6 text-white shadow-inner">
          <motion.div animate={{ x: ["-120%", "120%"] }} transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 1.8, ease: "easeInOut" }} className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
          <div className="relative mb-5 flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-4 w-4 rounded-full bg-rose-300/75 shadow-[inset_0_-3px_rgba(0,0,0,0.24)]" />
              <span className="h-4 w-4 rounded-full bg-amber-200/75 shadow-[inset_0_-3px_rgba(0,0,0,0.24)]" />
              <span className="h-4 w-4 rounded-full bg-teal-300/75 shadow-[inset_0_-3px_rgba(0,0,0,0.24)]" />
            </div>
            <p className="font-mono text-xs text-sky-200">systems.console</p>
          </div>
          <div className="relative space-y-4 font-mono text-sm">
            <p className="text-amber-200">const rahmat = &#123;</p>
            <p className="pl-5 text-slate-300">builds: <span className="text-white">&quot;AI tools&quot;</span>,</p>
            <p className="pl-5 text-slate-300">ships: <span className="text-white">&quot;automation systems&quot;</span>,</p>
            <p className="pl-5 text-slate-300">debugs: <span className="text-white">&quot;until it behaves&quot;</span>,</p>
            <p className="text-amber-200">&#125;<motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="ml-1 inline-block h-4 w-2 bg-amber-200 align-middle" /></p>
          </div>
          <div className="relative mt-7 grid gap-2">
            {logs.map((log, index) => (
              <motion.div key={log} initial={{ opacity: 0, x: -12 }} animate={{ opacity: [0.5, 1, 0.72], x: [0, 4, 0] }} transition={{ duration: 1.4, repeat: Infinity, repeatDelay: 2.4, delay: index * 0.3 }} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 font-mono text-xs text-slate-300">
                <span>{log}</span>
                <motion.span animate={{ scale: [1, 1.6, 1], opacity: [0.7, 1, 0.7] }} transition={{ duration: 1.1, repeat: Infinity, delay: index * 0.15 }} className="h-2 w-2 rounded-full bg-teal-300/90 shadow-[0_0_12px_rgba(94,234,212,0.75)]" />
              </motion.div>
            ))}
          </div>
          <div className="relative mt-8 grid grid-cols-3 gap-3">
            {highlights.map((item, index) => (
              <motion.div key={item.label} whileHover={{ y: -10, rotate: index % 2 ? 3 : -3, scale: 1.04 }} transition={{ type: "spring", stiffness: 300, damping: 16 }} className={`relative rounded-3xl border border-white/15 ${item.color} p-4 text-slate-950 shadow-[0_8px_0_rgba(0,0,0,0.35)]`}>
                <Studs count={2} className="mb-5 opacity-45" />
                <Icon name={item.icon} className="mb-3 h-6 w-6" />
                <p className="text-[10px] font-black uppercase opacity-70">{item.label}</p>
                <p className="mt-1 text-sm font-black">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function SummaryPanel() {
  const lines = profile.tagline.split("\n");
  const metrics = [
    { label: "Focus", value: "AI systems" },
    { label: "Edge", value: "Automation" },
    { label: "Output", value: "Shipped tools" },
  ];

  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.75 }} className="relative mt-6 max-w-3xl overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/55 p-[1px] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:mt-8 sm:rounded-[2.25rem]">
      <motion.div animate={{ x: ["-120%", "120%"] }} transition={{ duration: 4.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }} className="absolute top-0 h-px w-2/3 bg-gradient-to-r from-transparent via-amber-200/80 to-transparent" />
      <div className="relative rounded-[1.7rem] bg-gradient-to-br from-white/[0.09] via-white/[0.045] to-white/[0.025] p-4 sm:rounded-[2.2rem] sm:p-6 md:p-7">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-amber-200/90 text-slate-950 shadow-[0_6px_0_rgba(146,64,14,0.55)]">
              <Icon name="sparkles" className="h-5 w-5" />
            </span>
            <div>
              <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-amber-200">Builder profile</p>
              <p className="text-sm font-semibold text-slate-400">Concise signal, no filler.</p>
            </div>
          </div>
          <div className="flex gap-2">
            {metrics.map((metric) => (
              <motion.div key={metric.label} whileHover={{ y: -4 }} className="hidden rounded-2xl border border-white/10 bg-white/[0.06] px-3 py-2 text-right md:block">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">{metric.label}</p>
                <p className="text-xs font-black text-white">{metric.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {lines.map((line, index) => (
            <motion.div key={line} initial={{ opacity: 0, x: -14 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55, delay: 0.8 + index * 0.18 }} className="group flex gap-3 rounded-2xl border border-white/[0.07] bg-black/20 p-3 transition hover:border-amber-200/20 hover:bg-white/[0.06] sm:p-4">
              <span className={`mt-2 h-3 w-3 shrink-0 rounded-full ${accentColors[index % accentColors.length].split(" ")[0]} shadow-lg`} />
              <p className="text-sm font-medium leading-6 text-slate-300 sm:text-base sm:leading-7 md:text-lg">{line}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ProjectWord({ word = "PROJECTS" }) {
  const palette = ["bg-rose-300/70", "bg-amber-200/75", "bg-sky-300/70", "bg-teal-300/65", "bg-purple-300/65", "bg-indigo-300/65"];
  return (
    <div className="relative mb-10 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_18px_0_rgba(0,0,0,0.25),0_35px_90px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:mb-12 sm:rounded-[2.5rem] sm:p-5 md:p-7">
      <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 5, repeat: Infinity, repeatDelay: 1 }} className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />
      <div className="relative flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
        {word.split("").map((letter, index) => (
          <motion.div key={`${letter}-${index}`} initial={{ opacity: 0, y: -30, rotate: index % 2 ? 8 : -8 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 220, damping: 16, delay: index * 0.055 }} whileHover={{ y: -10, rotate: index % 2 ? 4 : -4, scale: 1.04 }} className={`relative grid h-12 w-10 place-items-center rounded-xl border border-white/20 ${palette[index % palette.length]} text-xl font-black text-slate-950 shadow-[0_7px_0_rgba(0,0,0,0.35)] sm:h-16 sm:w-12 sm:rounded-2xl sm:text-2xl md:h-24 md:w-20 md:text-4xl`}>
            <Studs count={2} className="absolute top-2 opacity-45" />
            <span className="relative mt-4">{letter}</span>
          </motion.div>
        ))}
      </div>
      <div className="relative mt-7 grid gap-3 md:grid-cols-3">
        {["concept", "architecture", "deployment"].map((step, index) => (
          <motion.div key={step} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }} className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-center font-mono text-xs font-black uppercase tracking-[0.2em] text-slate-300">
            {step}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#0c101a] text-white selection:bg-amber-200 selection:text-slate-950">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.13)_1px,transparent_0)] bg-[size:30px_30px] opacity-20" />
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:90px_90px] opacity-30" />
      <motion.div animate={{ scale: [1, 1.08, 1], x: [0, 35, 0] }} transition={{ duration: 12, repeat: Infinity }} className="pointer-events-none fixed left-[-12rem] top-[-12rem] h-[34rem] w-[34rem] rounded-full bg-rose-300/10 blur-[120px]" />
      <motion.div animate={{ scale: [1, 1.1, 1], y: [0, -30, 0] }} transition={{ duration: 14, repeat: Infinity }} className="pointer-events-none fixed right-[-12rem] top-20 h-[36rem] w-[36rem] rounded-full bg-sky-300/10 blur-[130px]" />
      <motion.div animate={{ scale: [1, 1.12, 1], x: [0, -40, 0] }} transition={{ duration: 16, repeat: Infinity }} className="pointer-events-none fixed bottom-[-16rem] left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-amber-200/10 blur-[130px]" />

      <nav className="fixed left-0 right-0 top-0 z-50 px-3 py-3 sm:px-4 sm:py-4">
        <div className="mx-auto flex w-fit max-w-[calc(100vw-1rem)] items-center justify-center overflow-x-auto rounded-[1.5rem] border border-white/10 bg-slate-950/35 px-2 py-2 shadow-[0_18px_70px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 sm:max-w-[calc(100vw-2rem)] sm:rounded-[2rem] sm:px-4 sm:py-3 supports-[backdrop-filter]:bg-slate-950/25">
          <div className="flex min-w-max items-center justify-center gap-2 text-xs font-black text-slate-200 sm:gap-3 sm:text-sm md:gap-4">
            {["About", "Experience", "Projects", "Skills"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.075] px-3 py-2 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.13] sm:rounded-2xl sm:px-5 sm:py-2.5"
              >
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative">{item}</span>
              </a>
            ))}
            <a
              href={`mailto:${profile.email}`}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.075] px-3 py-2 font-black text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_10px_30px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-amber-200/30 hover:bg-amber-200/15 sm:rounded-2xl sm:px-5 sm:py-2.5"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-amber-100/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">contact</span>
            </a>
          </div>
        </div>
      </nav>

      <section id="top" className="relative mx-auto flex min-h-screen max-w-7xl items-center px-4 pb-16 pt-28 sm:px-5 sm:pb-24 md:px-8">
        <BuilderScene />
        <FloatingUnit className="right-20 top-32" color="bg-rose-300/70" delay={0.2} studs={4} />
        <FloatingUnit className="right-72 bottom-36 rotate-6" color="bg-amber-200/75" delay={1.1} studs={3} />
        <FloatingUnit className="right-[30rem] top-64" color="bg-sky-300/70" delay={1.8} studs={2} />
        <FloatingUnit className="left-10 bottom-24" color="bg-teal-300/65" delay={2.3} studs={4} />

        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14">
          <motion.div initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }} className="relative z-10">
            <motion.h1 variants={fadeUp} transition={{ duration: 0.75, ease: "easeOut" }} className="max-w-5xl text-[2.65rem] font-black leading-[0.92] tracking-[-0.055em] text-white sm:text-5xl md:text-7xl lg:text-8xl">
              {profile.name}
            </motion.h1>
            <motion.p variants={fadeUp} transition={{ duration: 0.75, ease: "easeOut" }} className="mt-5 max-w-4xl text-xl font-black leading-tight tracking-[-0.035em] text-slate-100 sm:mt-8 sm:text-2xl md:text-4xl">
              {profile.title}
            </motion.p>
            <motion.div variants={fadeUp} transition={{ duration: 0.75 }} className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              <ActionButton href={`mailto:${profile.email}`} icon="mail">Contact Me</ActionButton>
              <ActionButton href={profile.github} variant="secondary" icon="github">GitHub Profile</ActionButton>
              <ActionButton href={profile.resume} variant="secondary" icon="file">View Resume</ActionButton>
            </motion.div>
            <SummaryPanel />
            <motion.div variants={fadeUp} transition={{ duration: 0.75 }} className="mt-6 flex gap-2 overflow-x-auto pb-2 sm:mt-7 sm:flex-wrap sm:gap-3 sm:overflow-visible sm:pb-0">
              {["AI systems", "automation", "cloud infra", "API design", "computer vision"].map((tag, i) => (
                <motion.span key={tag} whileHover={{ y: -5, rotate: i % 2 ? 2 : -2 }} className={`shrink-0 rounded-2xl border border-white/10 px-3 py-2 text-xs font-black text-slate-950 shadow-[0_6px_0_rgba(0,0,0,0.28)] sm:px-4 sm:text-sm ${accentColors[i]}`}>
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
          <TechConsole />
        </div>
      </section>

      <section id="about" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 lg:py-24">
        <SectionHeader kicker="01 / About" title="A builder who turns complexity into something people can actually use.">
          I work across computer vision, automation, cloud infrastructure, data systems, and product-facing engineering — with a bias toward clean execution and fast iteration.
        </SectionHeader>
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((card, i) => (
            <motion.div key={card.label} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} transition={{ duration: 0.6, delay: i * 0.1 }} whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5 }}>
              <ElevatedCard color={card.color}>
                <Icon name={card.icon} className="mb-8 h-9 w-9 text-slate-950" />
                <h3 className="text-3xl font-black tracking-tight text-slate-950">{card.value}</h3>
                <p className="mt-3 font-bold leading-7 text-slate-800/80">{card.label} across AI tooling, automation workflows, and scalable web architecture.</p>
              </ElevatedCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 lg:py-24">
        <SectionHeader kicker="02 / Experience" title="A timeline of systems, experiments, and shipped work." />
        <div className="relative space-y-6 md:border-l-[6px] md:border-white/10 md:pl-12">
          {experiences.map((exp, i) => (
            <motion.article key={exp.role} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, delay: i * 0.1 }} whileHover={{ x: 8 }} className="relative mb-8 rounded-[1.6rem] border border-white/10 bg-white/[0.07] p-5 shadow-[0_12px_0_rgba(0,0,0,0.25),0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:rounded-[2rem] sm:p-7">
              <span className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-white/15 ${exp.color} shadow-[0_7px_0_rgba(0,0,0,0.35)] md:absolute md:-left-[4.65rem] md:top-8 md:mb-0`}>
                <Icon name={exp.icon} className="h-6 w-6 text-slate-950" />
              </span>
              <Studs count={4} className="absolute right-5 top-5 opacity-45" />
              <div className="flex flex-col justify-between gap-3 md:flex-row md:items-start">
                <div>
                  <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                  <p className="mt-2 font-mono text-sm font-bold text-sky-200">{exp.org}</p>
                </div>
                <p className="rounded-xl bg-white/10 px-3 py-2 font-mono text-sm font-black text-slate-300">{exp.date}</p>
              </div>
              <ul className="mt-6 space-y-3 text-slate-300">
                {exp.bullets.map((bullet, idx) => (
                  <li key={bullet} className="flex gap-3 font-medium leading-7">
                    <span className={`mt-2 h-3 w-3 shrink-0 rounded-full ${accentColors[idx % accentColors.length].split(" ")[0]} shadow-inner`} />
                    {bullet}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 lg:py-24">
        <SectionHeader kicker="03 / Projects" title="Product systems with APIs, automation, AI, and real-world utility.">
          Practical builds with the kind of backend logic, data flow, and interface polish that makes software feel effortless.
        </SectionHeader>
        <ProjectWord word="PROJECTS" />
        <div className="relative grid gap-5 lg:grid-cols-12">
          <div className="pointer-events-none absolute left-1/2 top-1/2 hidden h-[86%] w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 lg:block" />
          {projects.map((project, i) => (
            <motion.article key={project.name} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.65, delay: i * 0.1 }} whileHover={{ y: -12, rotate: i === 1 ? 1.2 : -1.2, scale: 1.015 }} className={`group relative min-h-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-5 shadow-[0_16px_0_rgba(0,0,0,0.28),0_30px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:rounded-[2.25rem] sm:p-7 md:min-h-[31rem] ${i === 0 ? "lg:col-span-7" : i === 1 ? "lg:col-span-5" : "lg:col-span-12"}`}>
              <motion.div animate={{ x: ["-100%", "100%"] }} transition={{ duration: 3.8, repeat: Infinity, repeatDelay: 2 + i }} className={`absolute inset-x-0 top-0 h-4 bg-gradient-to-r ${project.color}`} />
              <Studs count={i === 2 ? 8 : 4} className="absolute right-5 top-8 opacity-50" />
              <div className="relative z-10 flex h-full flex-col">
                <div className={`mb-10 mt-3 grid h-16 w-16 place-items-center rounded-3xl border border-white/15 bg-gradient-to-br ${project.color} text-slate-950 shadow-[0_8px_0_rgba(0,0,0,0.35)]`}>
                  <Icon name={project.icon} className="h-8 w-8" />
                </div>
                <p className="font-mono text-xs font-black uppercase tracking-[0.22em] text-slate-400">{project.type}</p>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-white sm:text-3xl md:text-4xl">{project.name}</h3>
                <p className="mt-5 max-w-3xl text-sm font-medium leading-7 text-slate-300 sm:text-base sm:leading-8">{project.description}</p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <motion.span key={tech} whileHover={{ y: -4, rotate: idx % 2 ? 2 : -2 }} className={`rounded-xl border border-white/10 px-2.5 py-1.5 text-[11px] font-black text-slate-950 shadow-[0_4px_0_rgba(0,0,0,0.28)] sm:rounded-2xl sm:px-3 sm:py-2 sm:text-xs ${accentColors[idx % accentColors.length]}`}>
                      {tech}
                    </motion.span>
                  ))}
                </div>
                <div className="mt-auto pt-8">
                  <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white shadow-[0_6px_0_rgba(0,0,0,0.5)] transition hover:-translate-y-1">
                    View build <Icon name="arrow" className="h-4 w-4" />
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute -bottom-12 -right-12 h-48 w-48 rounded-full bg-white/[0.05] blur-2xl transition group-hover:bg-white/[0.09]" />
            </motion.article>
          ))}
        </div>
      </section>

      <section id="skills" className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 lg:py-24">
        <SectionHeader kicker="04 / Skills" title="A stack built for AI products, automation, and scalable systems." />
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <motion.span key={skill} initial={{ opacity: 0, y: 16, rotate: -2 }} whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: Math.min(i * 0.022, 0.35) }} whileHover={{ y: -7, rotate: 0, scale: 1.04 }} className={`rounded-xl border border-white/10 px-3 py-2 text-xs font-black text-slate-950 shadow-[0_6px_0_rgba(0,0,0,0.28)] sm:rounded-2xl sm:px-4 sm:py-3 sm:text-sm ${accentColors[i % accentColors.length]}`}>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-white/45 shadow-inner" />
              {skill}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-20 md:px-8 lg:py-24">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7 }} className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/85 p-5 text-white shadow-[0_18px_0_rgba(0,0,0,0.35),0_35px_90px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:rounded-[2.5rem] sm:p-8 md:p-12">
          <motion.div animate={{ x: [0, 50, 0], y: [0, -20, 0] }} transition={{ duration: 10, repeat: Infinity }} className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber-200/20 blur-3xl" />
          <motion.div animate={{ x: [0, -35, 0], y: [0, 20, 0] }} transition={{ duration: 11, repeat: Infinity }} className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
          <Studs count={7} className="absolute right-7 top-7 opacity-35" />
          <p className="font-mono text-sm font-black uppercase tracking-[0.3em] text-amber-200">05 / Contact</p>
          <h2 className="mt-5 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl md:text-6xl">Let&apos;s build something clever, useful, and hard to ignore.</h2>
          <p className="mt-6 max-w-2xl text-base font-medium leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Based in {profile.location}. Open to engineering roles, automation projects, AI products, and systems that need someone who can connect the pieces fast.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
            <ActionButton href={`mailto:${profile.email}`} icon="mail">Email Me</ActionButton>
            <ActionButton href={profile.github} variant="secondary" icon="github">GitHub</ActionButton>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
