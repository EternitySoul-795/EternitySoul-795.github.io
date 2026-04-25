"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";

const ROLES = ["Developer", "Designer", "AI Builder"];

export function Hero() {
  const sectionRef    = useRef<HTMLElement>(null);
  const videoRef      = useRef<HTMLVideoElement>(null);
  const videoWrapRef  = useRef<HTMLDivElement>(null);
  const heroTextRef   = useRef<HTMLDivElement>(null);
  const bigRevealRef  = useRef<HTMLDivElement>(null);
  const progressRef   = useRef<HTMLDivElement>(null);
  const mouseLayerRef = useRef<HTMLDivElement>(null);
  const tickingRef    = useRef(false);
  const mouseRef      = useRef({ x: 0, y: 0 });

  const [videoReady, setVideoReady] = useState(false);
  const [roleIdx, setRoleIdx]       = useState(0);

  // ── Video ready ────────────────────────────────────────────────────────────
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onReady = () => setVideoReady(true);
    video.addEventListener("canplaythrough", onReady);
    video.addEventListener("loadeddata",     onReady);
    return () => {
      video.removeEventListener("canplaythrough", onReady);
      video.removeEventListener("loadeddata",     onReady);
    };
  }, []);

  // ── Role cycling ──────────────────────────────────────────────────────────
  useEffect(() => {
    const t = setInterval(() => setRoleIdx((i) => (i + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, []);

  // ── Mouse parallax ────────────────────────────────────────────────────────
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth  - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      };
    };
    let raf: number;
    const tick = () => {
      if (mouseLayerRef.current) {
        const { x, y } = mouseRef.current;
        mouseLayerRef.current.style.transform = `translate3d(${x * 18}px, ${y * 10}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => { cancelAnimationFrame(raf); window.removeEventListener("mousemove", onMove); };
  }, []);

  // ── Scroll handler ────────────────────────────────────────────────────────
  const handleScroll = useCallback(() => {
    if (tickingRef.current) return;
    tickingRef.current = true;
    requestAnimationFrame(() => {
      tickingRef.current = false;
      const section = sectionRef.current;
      const video   = videoRef.current;
      if (!section) return;

      const rect      = section.getBoundingClientRect();
      const scrollable = section.offsetHeight - window.innerHeight;
      const progress  = scrollable <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / scrollable));

      // Scrub video
      if (video && video.readyState >= 2 && video.duration) {
        const target = progress * video.duration;
        if (typeof (video as HTMLVideoElement & { fastSeek?: (t: number) => void }).fastSeek === "function") {
          (video as HTMLVideoElement & { fastSeek: (t: number) => void }).fastSeek(target);
        } else {
          video.currentTime = target;
        }
      }

      // Video subtle float up on scroll
      if (videoWrapRef.current) {
        const ty = progress * -40;
        const s  = 1 + Math.min(progress / 0.4, 1) * 0.06;
        videoWrapRef.current.style.transform = `translateY(${ty}px) scale(${s})`;
      }

      // Hero text fade 0→10%
      if (heroTextRef.current) {
        const op = Math.max(0, 1 - progress / 0.1);
        heroTextRef.current.style.opacity   = String(op);
        heroTextRef.current.style.transform = `translateY(${(1 - op) * 22}px)`;
      }

      // Big reveal 14→24%
      if (bigRevealRef.current) {
        const op = Math.min(1, Math.max(0, (progress - 0.14) / 0.1));
        bigRevealRef.current.style.opacity   = String(op);
        bigRevealRef.current.style.transform = `translateY(${(1 - op) * 14}px)`;
      }

      // Progress bar
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <section ref={sectionRef} className="scroll-animation relative">
      <div
        className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-[#05050b]"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >

        {/* ── Ambient background glows ─────────────────────────────────────── */}
        <div ref={mouseLayerRef} className="pointer-events-none absolute inset-0">
          <div className="absolute" style={{
            top: "40%", left: "30%", width: 700, height: 700,
            background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 60%)",
            transform: "translate(-50%,-50%)",
          }} />
          <div className="absolute" style={{
            top: "50%", left: "65%", width: 500, height: 500,
            background: "radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 60%)",
            transform: "translate(-50%,-50%)",
          }} />
        </div>

        {/* ── Mobile text readability overlay ──────────────────────────────── */}
        <div
          className="pointer-events-none absolute inset-0 z-10 md:hidden"
          style={{
            background:
              "linear-gradient(to right, rgba(5,5,11,0.88) 0%, rgba(5,5,11,0.6) 55%, rgba(5,5,11,0.15) 100%)",
          }}
        />

        {/* ── Video — full screen on mobile, right half on desktop ─────────── */}
        <div
          ref={videoWrapRef}
          className="hero-video-wrap absolute right-0 top-0 h-full w-full md:w-1/2"
          style={{ opacity: 0.72 }}
        >
          <video
            ref={videoRef}
            className="h-full w-full object-cover object-center md:object-right"
            src="/hero.mp4"
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
          />
        </div>

        {/* ── Bottom fade ───────────────────────────────────────────────────── */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-56 z-10"
          style={{ background: "linear-gradient(to top, #05050b 0%, transparent 100%)" }}
        />

        {/* ── Status badge ─────────────────────────────────────────────────── */}
        <div className="absolute left-6 top-20 z-20 flex items-center gap-2.5 md:left-10 md:top-24">
          <span className="relative flex h-2 w-2">
            <span className="ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-zinc-300">
            Available for work
          </span>
        </div>

        {/* Year label */}
        <div className="absolute right-6 top-20 z-20 md:right-10 md:top-24">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
            _
          </span>
        </div>

        {/* ── Hero text — left side ─────────────────────────────────────────── */}
        <motion.div
          className="absolute inset-y-0 left-0 z-20 flex w-full items-center md:w-[56%]"
          initial={{ opacity: 0, y: 28 }}
          animate={videoReady ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
          transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div
            ref={heroTextRef}
            className="flex flex-col gap-5 px-6 md:px-12"
            style={{ transition: "opacity 80ms linear, transform 80ms linear" }}
          >
            <EyebrowBadge>Creative Developer &amp; Designer</EyebrowBadge>

            <h1 className="font-sans font-semibold leading-[0.9] tracking-tighter text-white text-[clamp(3rem,7vw,6.5rem)]">
              Khileshwar
              <br />
              <span className="grad-vc">Dewangan</span>
            </h1>

            {/* Cycling role tag */}
            <div className="flex items-center gap-3 h-6">
              <span className="h-px w-6 bg-violet-500/60" />
              <motion.span
                key={roleIdx}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-mono text-[11px] uppercase tracking-[0.28em] text-violet-400"
              >
                {ROLES[roleIdx]}
              </motion.span>
            </div>

            <p className="max-w-[38ch] font-sans text-sm leading-relaxed text-zinc-400 md:text-base">
              Building immersive digital experiences &amp; AI-powered products.
            </p>

            {/* CTA row */}
            <div className="mt-2 flex items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white/[0.07] border border-white/10 px-5 py-2.5 font-sans text-sm text-zinc-200 backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.12] hover:text-white"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="font-sans text-sm text-zinc-500 transition-colors duration-200 hover:text-white"
              >
                Contact →
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Big reveal (scroll) ───────────────────────────────────────────── */}
        <div
          ref={bigRevealRef}
          className="pointer-events-none absolute bottom-20 left-6 z-20 hidden flex-col gap-3 md:flex md:bottom-24 md:left-12"
          style={{ opacity: 0, transition: "opacity 80ms linear, transform 80ms linear" }}
        >
          <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-violet-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400 shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
            Khileshwar Dewangan — 2025
          </span>
          <h2 className="font-sans font-semibold leading-[0.88] tracking-tighter text-white text-[clamp(2.8rem,7.5vw,7.5rem)]">
            Code.
            <br />
            <span className="grad-vc">Design.</span>
            <br />
            Create.
          </h2>
        </div>

        {/* ── Scroll progress bar ───────────────────────────────────────────── */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
          <div className="mx-6 mb-3 h-px bg-white/8 md:mx-10">
            <div
              ref={progressRef}
              className="h-full origin-left"
              style={{
                background: "linear-gradient(to right, #7c3aed, #06b6d4)",
                transform: "scaleX(0)",
                transition: "transform 80ms linear",
              }}
            />
          </div>
          <div className="mx-6 flex items-center justify-between pb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-600 md:mx-10">
            <span>Khileshwar Dewangan</span>
            <span>Scroll to explore</span>
            <span>↓</span>
          </div>
        </div>

        {/* ── Loading screen ────────────────────────────────────────────────── */}
        {!videoReady && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-5 bg-[#05050b]">
            <div className="h-px w-56 overflow-hidden rounded-full bg-white/8">
              <div
                className="h-full w-2/3 animate-pulse rounded-full"
                style={{ background: "linear-gradient(to right,#7c3aed,#06b6d4)" }}
              />
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-600">
              Loading experience…
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
