"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const PROJECTS = [
  {
    id: "echoSpace",
    number: "01",
    title: "EchoSpace",
    subtitle: "AI Memory Visualizer",
    href: "https://echo-space-3-d.vercel.app",
    description:
      "An AI-powered 3D environment where your memories become navigable spatial experiences. Language models process memory inputs and render them as explorable 3D nodes — blending intelligence with immersive design.",
    tags: ["Next.js", "Three.js", "OpenAI", "Framer Motion"],
    status: "In Development",
    color: "#a78bfa",
    glow: "rgba(124,58,237,0.25)",
    border: "rgba(124,58,237,0.2)",
    gradient: "linear-gradient(135deg, rgba(124,58,237,0.12) 0%, transparent 60%)",
    icon: "⬡",
  },
  {
    id: "lordCloud",
    number: "02",
    title: "LordCloud",
    subtitle: "Cloud Infrastructure Platform",
    href: "https://lordcloud.vercel.app",
    description:
      "An advanced cloud computing platform designed to deliver high-performance, scalable, and secure infrastructure for modern applications. LordCloud integrates intelligent automation, real-time monitoring, and seamless deployment pipelines — enabling developers to build, deploy, and scale without limitations.",
    tags: ["Next.js", "Three.js", "Node.js", "MongoDB", "Docker"],
    status: "In Development",
    color: "#22d3ee",
    glow: "rgba(6,182,212,0.22)",
    border: "rgba(6,182,212,0.2)",
    gradient: "linear-gradient(135deg, rgba(6,182,212,0.1) 0%, transparent 60%)",
    icon: "◈",
  },
  {
    id: "publicSafety",
    number: "03",
    title: "AI for Public Safety",
    subtitle: "Smart Monitoring System",
    href: "https://public-safety-ai.vercel.app",
    description:
      "An AI-powered public safety platform designed to monitor environments, detect potential threats, and respond in real time. Using computer vision and intelligent alert systems, it enhances security across public spaces — enabling faster response, improved awareness, and proactive risk prevention.",
    tags: ["Python", "OpenCV", "YOLO", "TensorFlow", "Arduino"],
    status: "In Development",
    color: "#fbbf24",
    glow: "rgba(245,158,11,0.2)",
    border: "rgba(245,158,11,0.2)",
    gradient: "linear-gradient(135deg, rgba(245,158,11,0.1) 0%, transparent 60%)",
    icon: "◇",
  },
];

export function Projects() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="work" className="relative overflow-hidden bg-[#05050b] py-32 md:py-44">
      {/* Subtle section divider glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(124,58,237,0.3), transparent)" }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <EyebrowBadge>Work</EyebrowBadge>
            <h2 className="mt-5 font-sans text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[0.92] tracking-tighter text-white">
              Featured
              <br />
              <span className="grad-vc">Projects.</span>
            </h2>
          </div>
          <p className="max-w-[36ch] font-sans text-sm leading-relaxed text-zinc-500 md:text-right">
            Real things I built — from AI systems to hardware to visual design.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="flex flex-col gap-5">
          {PROJECTS.map((p, i) => (
            <motion.a
              key={p.id}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              className="group relative cursor-pointer overflow-hidden rounded-[20px] border transition-all duration-500"
              style={{
                borderColor: hovered === p.id ? p.border : "rgba(255,255,255,0.06)",
                background: hovered === p.id
                  ? `linear-gradient(135deg, rgba(13,13,26,0.9) 0%, rgba(13,13,26,0.7) 100%)`
                  : "rgba(13,13,26,0.6)",
              }}
            >
              {/* Glow bleed on hover */}
              <AnimatePresence>
                {hovered === p.id && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="pointer-events-none absolute inset-0"
                    style={{ background: p.gradient }}
                  />
                )}
              </AnimatePresence>

              <div className="relative flex flex-col gap-4 p-6 md:flex-row md:items-start md:gap-8 md:p-8">
                {/* Number + icon */}
                <div className="flex shrink-0 items-center gap-4 md:flex-col md:items-start md:gap-2">
                  <span className="font-mono text-[10px] tracking-[0.28em] text-zinc-600">
                    {p.number}
                  </span>
                  <span
                    className="text-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ color: p.color, filter: `drop-shadow(0 0 6px ${p.color})` }}
                  >
                    {p.icon}
                  </span>
                </div>

                {/* Main content */}
                <div className="flex-1">
                  <div className="mb-3 flex flex-wrap items-center gap-3">
                    <h3 className="font-sans text-xl font-semibold text-white md:text-2xl">
                      {p.title}
                    </h3>
                    <span className="font-sans text-sm text-zinc-500">— {p.subtitle}</span>
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.22em]"
                      style={{ color: p.color, background: `${p.glow}`, border: `1px solid ${p.border}` }}
                    >
                      {p.status}
                    </span>
                  </div>
                  <p className="max-w-[64ch] font-sans text-sm leading-relaxed text-zinc-400">
                    {p.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/6 bg-white/[0.04] px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex items-start justify-end md:pt-1">
                  <motion.div
                    animate={hovered === p.id ? { x: 2, y: -2 } : { x: 0, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight
                      size={20}
                      weight="bold"
                      style={{ color: hovered === p.id ? p.color : "#4b5563" }}
                      className="transition-colors duration-300"
                    />
                  </motion.div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
