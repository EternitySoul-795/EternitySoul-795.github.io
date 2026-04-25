"use client";

import { motion } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const FLOW = [
  {
    id: "you",
    label: "You",
    sub: "The client",
    color: "#a78bfa",
    glow: "rgba(124,58,237,0.25)",
    icon: "◎",
    desc: "Bring your vision, brand challenges, or product idea.",
  },
  {
    id: "studio",
    label: "Studio",
    sub: "Design & Build",
    color: "#22d3ee",
    glow: "rgba(6,182,212,0.22)",
    icon: "⬡",
    desc: "Strategy, design systems, full-stack dev, and motion — under one roof.",
  },
  {
    id: "ship",
    label: "Ship",
    sub: "Live & polished",
    color: "#fbbf24",
    glow: "rgba(245,158,11,0.2)",
    icon: "◈",
    desc: "Production-ready product, branded assets, and ongoing growth.",
  },
];

const COMMUNITY = [
  { label: "Design Feedback", icon: "◇", color: "#a78bfa" },
  { label: "Dev Resources",   icon: "◈", color: "#22d3ee" },
  { label: "AI Tools Hub",    icon: "◎", color: "#34d399" },
  { label: "Job Board",       icon: "⬡", color: "#fbbf24" },
];

export function BusinessVision() {
  return (
    <section className="relative overflow-hidden bg-[#05050b] py-32 md:py-44">
      {/* Divider glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(6,182,212,0.25), transparent)" }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 max-w-[52ch]"
        >
          <EyebrowBadge>Vision</EyebrowBadge>
          <h2 className="mt-5 font-sans text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[0.92] tracking-tighter text-white">
            Building a
            <br />
            <span className="grad-vc">design agency.</span>
          </h2>
          <p className="mt-5 font-sans text-base leading-relaxed text-zinc-400">
            The goal is a full-service creative studio — design, code, and strategy together. Right now
            I'm growing the foundation: clients, community, and systems.
          </p>
        </motion.div>

        {/* Flow diagram */}
        <div className="mb-16 flex flex-col items-center gap-4 md:flex-row md:items-stretch md:gap-0">
          {FLOW.map((node, i) => (
            <div key={node.id} className="flex items-center">
              {/* Node card */}
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="card-dark relative flex min-w-[180px] flex-col items-center gap-3 overflow-hidden p-6 text-center"
                style={{ borderColor: node.glow }}
              >
                {/* Icon */}
                <span
                  className="text-3xl"
                  style={{ color: node.color, filter: `drop-shadow(0 0 10px ${node.color})` }}
                >
                  {node.icon}
                </span>

                {/* Label */}
                <div>
                  <p className="font-sans text-lg font-semibold text-white">{node.label}</p>
                  <p className="font-mono text-[9px] uppercase tracking-[0.26em]" style={{ color: node.color }}>
                    {node.sub}
                  </p>
                </div>

                <p className="font-sans text-xs leading-relaxed text-zinc-500">{node.desc}</p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: `linear-gradient(to right, transparent, ${node.color}50, transparent)` }}
                />
              </motion.div>

              {/* Arrow connector */}
              {i < FLOW.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleX: 0 }}
                  whileInView={{ opacity: 1, scaleX: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.12 + 0.2, duration: 0.5 }}
                  className="hidden origin-left md:block"
                  style={{ width: 48, height: 1, background: "rgba(255,255,255,0.1)" }}
                >
                  <div className="relative flex h-full items-center justify-end">
                    <div
                      className="absolute right-0 h-1.5 w-1.5 rotate-45 border-r border-t"
                      style={{ borderColor: "rgba(255,255,255,0.2)" }}
                    />
                  </div>
                </motion.div>
              )}
            </div>
          ))}
        </div>

        {/* Discord community section */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="card-dark overflow-hidden"
        >
          <div className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:gap-12">
            <div className="flex-1">
              <div className="mb-3 flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-violet-400">
                  Community
                </span>
              </div>
              <h3 className="font-sans text-2xl font-semibold text-white">Discord Server</h3>
              <p className="mt-2 font-sans text-sm leading-relaxed text-zinc-400">
                A growing community for developers & designers. Share work, get feedback, find
                collaborators, and access curated resources — all in one place.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {COMMUNITY.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.5 }}
                  className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5"
                >
                  <span style={{ color: item.color, fontSize: 14 }}>{item.icon}</span>
                  <span className="font-sans text-xs text-zinc-400">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
