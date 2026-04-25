"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, EnvelopeSimple, GithubLogo, InstagramLogo } from "@phosphor-icons/react";

const SOCIALS = [
  { label: "GitHub",    icon: GithubLogo,    href: "https://github.com/surajdewangan" },
  { label: "Instagram", icon: InstagramLogo, href: "https://instagram.com/surajdewangan" },
  { label: "Email",     icon: EnvelopeSimple, href: "mailto:khileshwar.uiux@gmail.com" },
];

export function CTA() {
  const [copied, setCopied] = useState(false);
  const email = "khileshwar.uiux@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#05050b] py-32 md:py-52"
    >
      {/* Divider glow */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(245,158,11,0.2), transparent)" }}
      />

      {/* Centre radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: 800, height: 800,
          background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, rgba(6,182,212,0.04) 40%, transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-[900px] px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="mb-5 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-violet-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(124,58,237,0.9)]" />
            Available for Work
          </span>

          <h2 className="font-sans text-[clamp(2.4rem,6.5vw,5.5rem)] font-semibold leading-[0.9] tracking-tighter text-white">
            Let&rsquo;s build something
            <br />
            <span className="grad-vc">extraordinary.</span>
          </h2>

          <p className="mx-auto mt-7 max-w-[46ch] font-sans text-base leading-relaxed text-zinc-400">
            Got a project, collab idea, or just want to talk design and code? My inbox is open.
          </p>

          {/* Email row */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`mailto:${email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-sans text-sm font-semibold text-white shadow-[0_0_28px_rgba(124,58,237,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:scale-[1.03] active:scale-[0.98]"
            >
              Send an Email
              <ArrowUpRight
                size={14}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 font-mono text-[11px] tracking-wide text-zinc-400 backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:text-white"
            >
              {copied ? "Copied!" : email}
            </button>
          </div>

          {/* Socials */}
          <div className="mt-10 flex items-center justify-center gap-4">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/8 bg-white/[0.04] text-zinc-500 transition-all duration-200 hover:border-white/20 hover:text-white hover:scale-110"
                aria-label={s.label}
              >
                <s.icon size={17} />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
