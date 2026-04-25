"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "@phosphor-icons/react";
import { EyebrowBadge } from "@/components/ui/EyebrowBadge";
import {
  PROJECTS,
  TUNNEL_FRAME_COUNT,
  TUNNEL_TEXT_FADE_END,
  tunnelFramePath,
} from "@/lib/showcase";

export function ProjectsShowcase() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const ctaRef = useRef<HTMLDivElement | null>(null);
  const progressFillRef = useRef<HTMLDivElement | null>(null);

  const framesRef = useRef<HTMLImageElement[]>([]);
  const tickingRef = useRef(false);
  const loadedRef = useRef(false);
  const lastFrameRef = useRef(-1);
  const prevVisibleRef = useRef("");

  const [loadProgress, setLoadProgress] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<string>>(new Set());

  useEffect(() => {
    let cancelled = false;
    let count = 0;
    const imgs: HTMLImageElement[] = [];
    for (let i = 1; i <= TUNNEL_FRAME_COUNT; i++) {
      const img = new Image();
      img.src = tunnelFramePath(i);
      const done = () => {
        if (cancelled) return;
        count++;
        setLoadProgress(count / TUNNEL_FRAME_COUNT);
        if (count === TUNNEL_FRAME_COUNT) { loadedRef.current = true; setLoaded(true); }
      };
      img.onload = done;
      img.onerror = done;
      imgs.push(img);
    }
    framesRef.current = imgs;
    return () => { cancelled = true; };
  }, []);

  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img = framesRef.current[index];
    if (!canvas || !img?.complete || !img.naturalWidth) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cw = canvas.width, ch = canvas.height;
    const ir = img.naturalWidth / img.naturalHeight, cr = cw / ch;
    let dw: number, dh: number;
    if (cr > ir) { dw = cw; dh = cw / ir; }
    else { dh = ch; dw = ch * ir; }
    if (window.innerWidth <= 768) { dw *= 1.3; dh *= 1.3; }
    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(img, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
  }, []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    canvas.width = window.innerWidth * dpr;
    canvas.height = window.innerHeight * dpr;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
    drawFrame(lastFrameRef.current >= 0 ? lastFrameRef.current : 0);
  }, [drawFrame]);

  useEffect(() => {
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, [resizeCanvas]);

  useEffect(() => {
    if (!loaded) return;
    drawFrame(0);
    lastFrameRef.current = 0;
  }, [loaded, drawFrame]);

  useEffect(() => {
    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        tickingRef.current = false;
        const section = sectionRef.current;
        if (!section || !loadedRef.current) return;
        const rect = section.getBoundingClientRect();
        const scrollable = section.offsetHeight - window.innerHeight;
        const progress = scrollable <= 0 ? 0 : Math.min(1, Math.max(0, -rect.top / scrollable));

        const fi = Math.min(TUNNEL_FRAME_COUNT - 1, Math.floor(progress * TUNNEL_FRAME_COUNT));
        if (fi !== lastFrameRef.current) { lastFrameRef.current = fi; drawFrame(fi); }

        if (introRef.current) {
          const op = Math.max(0, 1 - progress / TUNNEL_TEXT_FADE_END);
          introRef.current.style.opacity = String(op);
          introRef.current.style.transform = `translateY(${(1 - op) * 14}px)`;
        }

        if (ctaRef.current) {
          const op = Math.min(1, Math.max(0, (progress - 0.84) / 0.06));
          ctaRef.current.style.opacity = String(op);
          ctaRef.current.style.transform = `translateY(${(1 - op) * 14}px)`;
        }

        if (progressFillRef.current) {
          progressFillRef.current.style.transform = `scaleX(${progress})`;
        }

        const newVisible = new Set<string>();
        for (const p of PROJECTS) {
          if (progress >= p.show && progress <= p.hide) newVisible.add(p.id);
        }
        const ids = [...newVisible].sort().join(",");
        if (ids !== prevVisibleRef.current) {
          prevVisibleRef.current = ids;
          setVisibleCards(newVisible);
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [drawFrame]);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="tunnel-animation relative border-t border-white/10 bg-zinc-950"
    >
      <div
        className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-zinc-950"
        style={{ willChange: "transform", transform: "translateZ(0)" }}
      >
        <canvas
          ref={canvasRef}
          className="absolute inset-0"
          style={{ willChange: "contents", transform: "translateZ(0)" }}
        />

        {/* Dark vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 90%, transparent 30%, rgba(9,9,11,0.5) 70%, rgba(9,9,11,0.88) 100%)",
          }}
        />

        {/* Intro text */}
        <motion.div
          ref={introRef}
          className="absolute left-6 top-24 z-10 flex flex-col items-start gap-4 md:left-12 md:top-28"
          initial={{ opacity: 0, y: 20 }}
          animate={loaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          style={{ transition: "opacity 80ms linear, transform 80ms linear" }}
        >
          <EyebrowBadge>Selected work</EyebrowBadge>
          <h2 className="max-w-[12ch] font-sans text-3xl font-semibold leading-[0.98] tracking-tighter text-white md:text-5xl lg:text-6xl">
            Projects
            <br />
            <span className="bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              I&rsquo;m proud of.
            </span>
          </h2>
        </motion.div>

        {/* Scroll progress bar */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10">
          <div className="mx-6 mb-3 h-px bg-white/10 md:mx-10">
            <div
              ref={progressFillRef}
              className="h-full origin-left bg-gradient-to-r from-indigo-500 to-violet-500"
              style={{ transform: "scaleX(0)", transition: "transform 80ms linear" }}
            />
          </div>
          <div className="mx-6 flex items-center justify-between pb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-500 md:mx-10">
            <span>Portfolio</span>
            <span>Scroll to explore</span>
            <span>Scroll &darr;</span>
          </div>
        </div>

        {/* End CTA */}
        <div
          ref={ctaRef}
          className="pointer-events-none absolute bottom-20 right-6 z-10 flex flex-col items-end gap-4 md:bottom-28 md:right-12"
          style={{ opacity: 0, transition: "opacity 80ms linear, transform 80ms linear" }}
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-400">
            Want to collaborate?
          </span>
          <a
            href="#contact"
            className="pointer-events-auto group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 font-sans text-sm font-medium text-white backdrop-blur-md transition-all duration-200 hover:bg-white/[0.12] active:translate-y-[1px]"
          >
            Get in touch
            <ArrowUpRight
              size={14}
              weight="bold"
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Project cards — desktop */}
        {PROJECTS.map((p, i) => {
          const visible = visibleCards.has(p.id);
          const pos =
            i % 2 === 0
              ? "top-1/2 -translate-y-1/2 right-6 md:right-12"
              : "top-1/2 -translate-y-1/2 left-6 md:left-12";
          return (
            <div
              key={p.id}
              className={`pointer-events-none absolute ${pos} z-20 hidden w-[400px] max-w-[44vw] md:block`}
            >
              <div
                className={`rounded-[20px] border border-white/10 bg-black/50 p-6 backdrop-blur-2xl transition-all duration-400 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-zinc-400">
                  {p.category} — {p.year}
                </span>
                <h3 className="mt-2 font-sans text-2xl font-semibold tracking-tight text-white">
                  {p.name}
                </h3>
                <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400">
                  {p.stack}
                </p>
              </div>
            </div>
          );
        })}

        {/* Project cards — mobile */}
        <div className="pointer-events-none absolute inset-x-0 top-[38%] z-20 flex flex-col gap-3 px-6 md:hidden">
          {PROJECTS.map((p) => {
            const visible = visibleCards.has(p.id);
            return (
              <div
                key={p.id}
                className={`rounded-[20px] border border-white/10 bg-black/50 p-5 backdrop-blur-2xl transition-all duration-400 ease-out ${
                  visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-zinc-400">
                  {p.category}
                </span>
                <h3 className="mt-1.5 font-sans text-lg font-semibold text-white">{p.name}</h3>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-zinc-500">
                  {p.stack}
                </p>
              </div>
            );
          })}
        </div>

        {/* Loading overlay */}
        {!loaded && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-5 bg-zinc-950 px-6">
            <EyebrowBadge>Loading work</EyebrowBadge>
            <div className="h-px w-64 overflow-hidden bg-white/10 md:w-80">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-[width] duration-150"
                style={{ width: `${Math.round(loadProgress * 100)}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
