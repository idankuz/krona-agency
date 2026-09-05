export interface Service {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  techStack: string[];
}

export const SERVICES: Service[] = [
  {
    number: "01",
    title: "Design Engineering & Web Architecture",
    subtitle: "High-performance digital products engineered without compromise.",
    description: "We bridge the gap between world-class visual aesthetics and rigorous software engineering. Every interface is built for lightning-fast speeds, accessibility, and responsiveness.",
    deliverables: [
      "Custom Next.js & React Web Applications",
      "Interactive 3D / WebGL Canvas Experiences",
      "Headless E-Commerce Architecture",
      "Micro-animations & Component Libraries",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Three.js", "GraphQL"],
  },
  {
    number: "02",
    title: "Brand Strategy & Visual Identity",
    subtitle: "Distinctive, category-defining systems built to endure.",
    description: "We develop comprehensive design systems, custom typography, tone of voice, and brand guidelines that set you miles apart from conventional competitors.",
    deliverables: [
      "Brand Positioning & Strategic Narrative",
      "Comprehensive Digital Design Systems",
      "Bespoke Typography & Logo Suites",
      "Multi-channel Guidelines & Asset Kits",
    ],
    techStack: ["Figma", "Design Tokens", "Typography", "Motion Guidelines"],
  },
  {
    number: "03",
    title: "Product UI/UX & Spatial Interfaces",
    subtitle: "Intuitive workflows designed for effortless engagement.",
    description: "From complex SaaS analytics to spatial computing interfaces, we craft ergonomic digital products that users genuinely love to use every single day.",
    deliverables: [
      "User Journey Mapping & Architecture",
      "High-Fidelity Interactive Prototypes",
      "Design System Engineering in Code",
      "Conversion Rate Optimization (CRO)",
    ],
    techStack: ["Figma", "UserTesting", "Framer", "Storybook"],
  },
  {
    number: "04",
    title: "Creative Direction & Motion Design",
    subtitle: "Cinematic digital storytelling that captures attention.",
    description: "We add the polish and kinetic energy that separates ordinary websites from Site-of-the-Year contenders. Sound, light, and physics crafted in harmony.",
    deliverables: [
      "Interactive 3D Asset Creation",
      "Product Launch Reel Production",
      "Micro-interactions & Physics Prototyping",
      "Sensory Sound & Audio Direction",
    ],
    techStack: ["Blender", "After Effects", "Web Audio API", "GSAP"],
  },
];
