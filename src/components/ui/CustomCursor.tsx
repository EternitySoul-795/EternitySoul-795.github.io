"use client";

import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef  = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [hidden, setHidden] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    // Don't show on touch devices
    if ("ontouchstart" in window) return;
    setHidden(false);

    let raf: number;

    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    const onDown  = () => setClicked(true);
    const onUp    = () => setClicked(false);
    const onEnter = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button,[data-hover]")) setHovered(true);
    };
    const onLeave = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a,button,[data-hover]")) setHovered(false);
    };

    // Lerp ring towards dot pos
    const animate = () => {
      const { x, y } = posRef.current;
      const lerp = 0.12;
      ringPos.current.x += (x - ringPos.current.x) * lerp;
      ringPos.current.y += (y - ringPos.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x - 4}px, ${y - 4}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    window.addEventListener("mousemove",   onMove,  { passive: true });
    window.addEventListener("mousedown",   onDown);
    window.addEventListener("mouseup",     onUp);
    window.addEventListener("mouseover",   onEnter);
    window.addEventListener("mouseout",    onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove",   onMove);
      window.removeEventListener("mousedown",   onDown);
      window.removeEventListener("mouseup",     onUp);
      window.removeEventListener("mouseover",   onEnter);
      window.removeEventListener("mouseout",    onLeave);
    };
  }, []);

  if (hidden) return null;

  return (
    <>
      {/* Outer glow ring — lags behind */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform"
        style={{
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: `1px solid ${hovered ? "rgba(124,58,237,0.7)" : "rgba(124,58,237,0.35)"}`,
          background: hovered ? "rgba(124,58,237,0.08)" : "transparent",
          transition: "border-color 200ms, background 200ms, width 200ms, height 200ms",
          ...(hovered ? { width: 56, height: 56 } : {}),
          ...(clicked ? { width: 28, height: 28 } : {}),
        }}
      />
      {/* Inner dot — snaps to pointer */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] will-change-transform rounded-full bg-violet-500"
        style={{
          width: 8,
          height: 8,
          boxShadow: "0 0 12px rgba(124,58,237,0.8)",
          transition: "width 150ms, height 150ms",
          ...(hovered ? { width: 6, height: 6 } : {}),
          ...(clicked ? { width: 10, height: 10 } : {}),
        }}
      />
    </>
  );
}
