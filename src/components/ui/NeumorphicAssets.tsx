"use client";

import { motion } from "framer-motion";

// ── CSS 3D Rotating Cube ───────────────────────────────────────────────────────
const face: React.CSSProperties = {
  position: "absolute",
  width: "100%",
  height: "100%",
  border: "1px solid rgba(99, 102, 241, 0.2)",
  background:
    "linear-gradient(135deg, rgba(99,102,241,0.06), rgba(139,92,246,0.04))",
  backfaceVisibility: "hidden",
  borderRadius: 6,
};

export function NeumorphicSync() {
  return (
    <div
      className="flex h-full items-center justify-center"
      style={{ perspective: 600 }}
    >
      <div className="relative">
        <motion.div
          style={{
            transformStyle: "preserve-3d",
            width: 120,
            height: 120,
            position: "relative",
          }}
          animate={{ rotateX: [0, 360], rotateY: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div style={{ ...face, transform: "translateZ(60px)" }} />
          <div style={{ ...face, transform: "rotateY(180deg) translateZ(60px)" }} />
          <div style={{ ...face, transform: "rotateY(90deg) translateZ(60px)" }} />
          <div style={{ ...face, transform: "rotateY(-90deg) translateZ(60px)" }} />
          <div style={{ ...face, transform: "rotateX(90deg) translateZ(60px)" }} />
          <div style={{ ...face, transform: "rotateX(-90deg) translateZ(60px)" }} />
        </motion.div>

        {/* centre glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 -z-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 180,
            height: 180,
            background:
              "radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)",
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

// ── Orbiting Badge ─────────────────────────────────────────────────────────────
const ORBIT_BADGES = [
  { label: "React", angle: 0, color: "bg-sky-100 text-sky-700 border-sky-200" },
  { label: "Next.js", angle: 90, color: "bg-zinc-100 text-zinc-700 border-zinc-200" },
  { label: "Node.js", angle: 180, color: "bg-emerald-100 text-emerald-700 border-emerald-200" },
  { label: "TypeScript", angle: 270, color: "bg-blue-100 text-blue-700 border-blue-200" },
];

export function OrbVisual() {
  return (
    <div className="relative flex h-full min-h-[200px] items-center justify-center">
      {/* Centre dot */}
      <div className="h-3 w-3 rounded-full bg-accent shadow-[0_0_16px_rgba(99,102,241,0.7)]" />

      {/* Orbit ring */}
      <motion.div
        className="absolute rounded-full border border-dashed border-accent/20"
        style={{ width: 160, height: 160 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
      >
        {ORBIT_BADGES.map((b) => {
          const rad = (b.angle * Math.PI) / 180;
          const r = 80;
          const x = Math.cos(rad) * r;
          const y = Math.sin(rad) * r;
          return (
            <div
              key={b.label}
              className={`absolute flex items-center rounded-full border px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider shadow-[var(--pill-shadow)] ${b.color}`}
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                whiteSpace: "nowrap",
              }}
            >
              {b.label}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}

// ── Animated Bar Chart ─────────────────────────────────────────────────────────
const BARS = [
  { heights: [55, 90, 40, 75, 55], delay: 0 },
  { heights: [85, 50, 100, 65, 85], delay: 0.4 },
  { heights: [40, 70, 55, 90, 40], delay: 0.8 },
  { heights: [70, 45, 80, 50, 70], delay: 1.2 },
  { heights: [95, 60, 45, 85, 95], delay: 0.6 },
];

export function NeumorphicBarChart() {
  return (
    <div className="flex h-full items-end justify-center gap-2 pb-3 pt-6">
      {BARS.map((bar, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <div
            className="w-8 rounded-t-lg"
            style={{ height: 100, display: "flex", alignItems: "flex-end" }}
          >
            <motion.div
              className="w-full rounded-t-lg"
              style={{
                background:
                  i % 2 === 0
                    ? "linear-gradient(to top, #6366f1, #8b5cf6)"
                    : "var(--background)",
                border: i % 2 !== 0 ? "1px solid var(--card-border)" : "none",
                boxShadow: i % 2 !== 0 ? "var(--card-shadow)" : "none",
              }}
              animate={{ height: bar.heights }}
              transition={{
                height: {
                  duration: 14,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: bar.delay,
                },
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Neumorphic Clock ───────────────────────────────────────────────────────────
export function NeumorphicClock() {
  return (
    <div className="flex h-full items-center justify-center">
      <div
        className="relative flex items-center justify-center rounded-full"
        style={{
          width: 120,
          height: 120,
          background: "var(--background)",
          boxShadow:
            "inset 2px 2px 6px rgba(0,0,0,0.08), inset -2px -2px 6px rgba(255,255,255,0.9), 0 0 0 8px var(--card-bg), var(--card-shadow)",
        }}
      >
        {/* tick marks */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              width: 1.5,
              height: i % 3 === 0 ? 8 : 5,
              background: i % 3 === 0 ? "var(--foreground)" : "var(--muted)",
              transformOrigin: "50% 54px",
              transform: `rotate(${i * 30}deg)`,
              top: "50%",
              left: "50%",
              marginLeft: -0.75,
              marginTop: -54,
            }}
          />
        ))}

        {/* hour hand */}
        <motion.div
          className="absolute rounded-full bg-zinc-800"
          style={{ width: 3, height: 28, bottom: "50%", left: "50%", marginLeft: -1.5, transformOrigin: "50% 100%" }}
          animate={{ rotate: 330 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        {/* minute hand */}
        <motion.div
          className="absolute rounded-full bg-accent"
          style={{ width: 2, height: 36, bottom: "50%", left: "50%", marginLeft: -1, transformOrigin: "50% 100%" }}
          animate={{ rotate: 420 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        {/* centre cap */}
        <div className="absolute h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
      </div>
    </div>
  );
}
