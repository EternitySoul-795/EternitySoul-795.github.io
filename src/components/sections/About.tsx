"use client";

import { motion } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const CARDS = [
  {
    year: "2022",
    tag: "Origin",
    title: "Full-Stack Development",
    body: "Started with HTML & CSS, dove into React, then Next.js. Built production-ready apps with Node.js backends — learning everything by shipping real things.",
    glow: "rgba(124,58,237,0.12)",
    accent: "#a78bfa",
    lineColor: "#7c3aed",
  },
  {
    year: "2023",
    tag: "Creative",
    title: "Graphic Design & Branding",
    body: "Took on freelance design work — logo systems, social media branding, UI/UX mockups. Vision: grow this into a full-service design agency.",
    glow: "rgba(6,182,212,0.10)",
    accent: "#22d3ee",
    lineColor: "#06b6d4",
  },
  {
    year: "2024",
    tag: "AI Builder",
    title: "EchoSpace — AI Memory Visualizer",
    body: "Building EchoSpace: an AI-powered 3D space where your memories become navigable environments. Blending language models with immersive 3D visualization.",
    glow: "rgba(245,158,11,0.10)",
    accent: "#fbbf24",
    lineColor: "#f59e0b",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#05050b] py-32 md:py-44"
    >
      {/* Section glow bg */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
        style={{
          width: 900, height: 500,
          background: "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.05) 0%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 md:mb-20"
        >
          <EyebrowBadge>About Me</EyebrowBadge>
          <h2 className="mt-5 font-sans text-[clamp(2.2rem,5.5vw,4.5rem)] font-semibold leading-[0.92] tracking-tighter text-white">
            Journey, craft,
            <br />
            <span className="grad-vc">and vision.</span>
          </h2>
          <p className="mt-5 max-w-[52ch] font-sans text-base leading-relaxed text-zinc-400">
            From writing my first line of HTML to shipping AI-powered 3D experiences — every chapter
            has been about building things that feel alive.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid gap-5 md:grid-cols-3">
          {CARDS.map((card, i) => (
            <motion.div
              key={card.year}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="card-dark relative overflow-hidden p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 rounded-[20px]"
                style={{ background: `radial-gradient(ellipse 70% 50% at 30% 0%, ${card.glow} 0%, transparent 70%)` }}
              />
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8" style={{ background: card.lineColor }} />
                <span
                  className="rounded-full px-2.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.28em]"
                  style={{ color: card.accent, background: `${card.lineColor}18`, border: `1px solid ${card.lineColor}30` }}
                >
                  {card.tag}
                </span>
                <span className="font-mono text-[10px] text-zinc-600">{card.year}</span>
              </div>
              <h3 className="font-sans text-xl font-semibold leading-snug tracking-tight text-white">
                {card.title}
              </h3>
              <p className="mt-3 font-sans text-sm leading-relaxed text-zinc-400">{card.body}</p>
              <div
                className="absolute bottom-0 left-7 right-7 h-px"
                style={{ background: `linear-gradient(to right, ${card.lineColor}50, transparent)` }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-white/5 pt-12 md:grid-cols-4"
        >
          {[
            { n: "3+", label: "Years Building" },
            { n: "15+", label: "Projects Shipped" },
            { n: "∞",  label: "Things Learned" },
            { n: "1",  label: "Obsession: Craft" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-1">
              <span className="font-sans text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-none tracking-tight text-white">
                {s.n}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-zinc-500">
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
