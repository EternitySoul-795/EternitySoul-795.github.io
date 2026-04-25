export const TUNNEL_FRAME_COUNT = 169;
export const TUNNEL_TEXT_FADE_END = 0.06;

export const tunnelFramePath = (n: number) =>
  `/tunnel-frames/frame_${String(n).padStart(4, "0")}.jpg`;

export type Project = {
  id: string;
  show: number;
  hide: number;
  name: string;
  category: string;
  stack: string;
  year: string;
};

export const PROJECTS: Project[] = [
  {
    id: "p1",
    show: 0.04,
    hide: 0.17,
    name: "SaaS Dashboard",
    category: "Web Application",
    stack: "Next.js · TypeScript · PostgreSQL",
    year: "2024",
  },
  {
    id: "p2",
    show: 0.2,
    hide: 0.33,
    name: "E-Commerce Platform",
    category: "Full Stack",
    stack: "Next.js · Stripe · Tailwind CSS",
    year: "2024",
  },
  {
    id: "p3",
    show: 0.36,
    hide: 0.49,
    name: "Analytics Dashboard",
    category: "Data Visualisation",
    stack: "React · D3.js · Node.js",
    year: "2023",
  },
  {
    id: "p4",
    show: 0.52,
    hide: 0.64,
    name: "Mobile App",
    category: "Cross-Platform",
    stack: "React Native · Expo · Firebase",
    year: "2023",
  },
  {
    id: "p5",
    show: 0.67,
    hide: 0.78,
    name: "AI Chat Interface",
    category: "AI Integration",
    stack: "Next.js · OpenAI API · WebSockets",
    year: "2024",
  },
];
