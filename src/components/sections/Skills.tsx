"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const CATEGORIES = [
  {
    id: "frontend",
    label: "Frontend",
    color: "#a78bfa",
    glow: "rgba(124,58,237,0.22)",
    skills: [
      { name: "React / Next.js", level: 80 },
      { name: "TypeScript",      level: 82 },
      { name: "HTML & CSS",      level: 95 },
      { name: "Tailwind CSS",    level: 88 },
      { name: "Framer Motion",   level: 78 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    color: "#22d3ee",
    glow: "rgba(6,182,212,0.18)",
    skills: [
      { name: "Node.js",         level: 75 },
      { name: "MongoDB",         level: 65 },
      { name: "REST APIs",       level: 80 },
      { name: "Next.js API",     level: 82 },
    ],
  },
  {
    id: "design",
    label: "Design",
    color: "#fbbf24",
    glow: "rgba(245,158,11,0.18)",
    skills: [
      { name: "UI/UX Design",    level: 78 },
      { name: "Photoshop",       level: 95 },
      { name: "Figma",           level: 90 },
      { name: "Motion Design",   level: 76 },
      { name: "Typography",      level: 84 },
    ],
  },
  {
    id: "tools",
    label: "Tools & AI",
    color: "#34d399",
    glow: "rgba(52,211,153,0.15)",
    skills: [
      { name: "Gemini",      level: 0 },
      { name: "Claude / GPT",    level: 85 },
      { name: "Photoshop & Adobe Softwares",       level: 80 },
      { name: "Git / GitHub",    level: 85 },
    ],
  },
];

function SkillBar({ name, level, color, delay }: { name: string; level: number; color: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col gap-1.5"
    >
      <div className="flex items-center justify-between">
        <span className="font-sans text-sm text-zinc-300 group-hover:text-white transition-colors duration-200">
          {name}
        </span>
        <span className="font-mono text-[10px] text-zinc-600">{level}%</span>
      </div>
      <div className="h-px w-full overflow-hidden rounded-full bg-white/5">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ delay: delay + 0.1, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full origin-left rounded-full"
          style={{ width: `${level}%`, background: color, boxShadow: `0 0 8px ${color}60` }}
        />
      </div>
    </motion.div>
  );
}

export function Skills() {
  const [active, setActive] = useState("frontend");
  const cat = CATEGORIES.find((c) => c.id === active) ?? CATEGORIES[0];

  return (
    <section id="skills" className="relative overflow-hidden bg-[#05050b] py-32 md:py-44">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2"
        style={{
          width: 700, height: 700,
          background: `radial-gradient(circle, ${cat.glow} 0%, transparent 60%)`,
          transition: "background 500ms ease",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12"
        >
          <EyebrowBadge>Skills</EyebrowBadge>
          <h2 className="mt-5 font-sans text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[0.92] tracking-tighter text-white">
            Tools of the
            <br />
            <span className="grad-vc">trade.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-8 lg:flex-row lg:gap-16">
          {/* Category tabs */}
          <div className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:pb-0 lg:gap-2 lg:min-w-[160px]">
            {CATEGORIES.map((c) => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`relative shrink-0 rounded-xl px-4 py-3 text-left font-sans text-sm font-medium transition-all duration-300 ${
                  active === c.id
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
                style={
                  active === c.id
                    ? {
                        background: `${c.glow}`,
                        border: `1px solid ${c.color}30`,
                        boxShadow: `0 0 20px ${c.glow}`,
                      }
                    : { background: "transparent", border: "1px solid transparent" }
                }
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Skill bars */}
          <div className="flex-1">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="card-dark flex flex-col gap-5 p-8"
            >
              <div className="mb-2 flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: cat.color, boxShadow: `0 0 8px ${cat.color}` }}
                />
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.28em]"
                  style={{ color: cat.color }}
                >
                  {cat.label}
                </span>
              </div>

              {cat.skills.map((s, i) => (
                <SkillBar
                  key={s.name}
                  name={s.name}
                  level={s.level}
                  color={cat.color}
                  delay={i * 0.06}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
