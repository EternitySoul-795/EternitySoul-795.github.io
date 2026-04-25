"use client";

import { useState } from "react";
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
  const [joined, setJoined] = useState(false);

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
              <a href="/not-found" className="mt-5 inline-block">
                <button className="join-btn" onClick={() => setJoined(true)}>
                  <div className="join-outline" />

                  {/* Default state */}
                  <div className={`join-state ${joined ? "join-state--hidden" : ""}`}>
                    <div className="join-icon">
                      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g style={{ filter: "url(#shadow)" }}>
                          <path d="M14.2199 21.63C13.0399 21.63 11.3699 20.8 10.0499 16.83L9.32988 14.67L7.16988 13.95C3.20988 12.63 2.37988 10.96 2.37988 9.78001C2.37988 8.61001 3.20988 6.93001 7.16988 5.60001L15.6599 2.77001C17.7799 2.06001 19.5499 2.27001 20.6399 3.35001C21.7299 4.43001 21.9399 6.21001 21.2299 8.33001L18.3999 16.82C17.0699 20.8 15.3999 21.63 14.2199 21.63ZM7.63988 7.03001C4.85988 7.96001 3.86988 9.06001 3.86988 9.78001C3.86988 10.5 4.85988 11.6 7.63988 12.52L10.1599 13.36C10.3799 13.43 10.5599 13.61 10.6299 13.83L11.4699 16.35C12.3899 19.13 13.4999 20.12 14.2199 20.12C14.9399 20.12 16.0399 19.13 16.9699 16.35L19.7999 7.86001C20.3099 6.32001 20.2199 5.06001 19.5699 4.41001C18.9199 3.76001 17.6599 3.68001 16.1299 4.19001L7.63988 7.03001Z" fill="currentColor" />
                          <path d="M10.11 14.4C9.92005 14.4 9.73005 14.33 9.58005 14.18C9.29005 13.89 9.29005 13.41 9.58005 13.12L13.16 9.53C13.45 9.24 13.93 9.24 14.22 9.53C14.51 9.82 14.51 10.3 14.22 10.59L10.64 14.18C10.5 14.33 10.3 14.4 10.11 14.4Z" fill="currentColor" />
                        </g>
                        <defs>
                          <filter id="shadow">
                            <feDropShadow dx="0" dy="1" stdDeviation="0.6" floodOpacity="0.5" />
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <p className="join-text">
                      {["J","o","i","n","N","o","w"].map((l, i) => (
                        <span key={i} style={{"--i": i} as React.CSSProperties}>{l}</span>
                      ))}
                    </p>
                  </div>

                  {/* Joined state */}
                  <div className={`join-state ${joined ? "" : "join-state--hidden"}`}>
                    <div className="join-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="1em" width="1em" strokeWidth="0.5px" stroke="black">
                        <g style={{ filter: "url(#shadow)" }}>
                          <path fill="currentColor" d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z" />
                          <path fill="currentColor" d="M10.5795 15.5801C10.3795 15.5801 10.1895 15.5001 10.0495 15.3601L7.21945 12.5301C6.92945 12.2401 6.92945 11.7601 7.21945 11.4701C7.50945 11.1801 7.98945 11.1801 8.27945 11.4701L10.5795 13.7701L15.7195 8.6301C16.0095 8.3401 16.4895 8.3401 16.7795 8.6301C17.0695 8.9201 17.0695 9.4001 16.7795 9.6901L11.1095 15.3601C10.9695 15.5001 10.7795 15.5801 10.5795 15.5801Z" />
                        </g>
                      </svg>
                    </div>
                    <p className="join-text">
                      {["J","o","i","n","e","d"].map((l, i) => (
                        <span key={i} style={{"--i": i} as React.CSSProperties}>{l}</span>
                      ))}
                    </p>
                  </div>
                </button>
              </a>
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
