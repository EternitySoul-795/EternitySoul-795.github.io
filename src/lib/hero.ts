export const FRAME_COUNT = 169;
export const HERO_TEXT_FADE_END = 0.08;

export const framePath = (n: number) =>
  `/frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Annotation = {
  id: string;
  show: number;
  hide: number;
  label: string;
  body: string;
};

export const ANNOTATIONS: Annotation[] = [
  {
    id: "a1",
    show: 0.1,
    hide: 0.3,
    label: "Clean Code",
    body: "Readable, maintainable, scalable codebases — every project, no exceptions.",
  },
  {
    id: "a2",
    show: 0.35,
    hide: 0.55,
    label: "Full Stack",
    body: "End-to-end: pixel-perfect UI through to production-ready APIs and databases.",
  },
  {
    id: "a3",
    show: 0.6,
    hide: 0.8,
    label: "Performance",
    body: "Core Web Vitals optimized. Real-world speed that users and search engines reward.",
  },
];
