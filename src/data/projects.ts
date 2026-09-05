export interface Project {
  id: string;
  title: string;
  client: string;
  category: "Digital Products" | "Brand Systems" | "Web Experiences" | "Motion / 3D";
  year: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string;
  tags: string[];
  image: string;
  accentGradient: string;
  statNumber: string;
  statLabel: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "aura-os",
    title: "Aura Spatial OS",
    client: "Aura Labs Inc.",
    category: "Digital Products",
    year: "2026",
    description: "Next-generation spatial computing operating interface and unified design system for mixed reality environments.",
    challenge: "Traditional 2D interfaces feel disjointed when mapped into spatial 3D environments, causing disorientation and high cognitive load.",
    solution: "We engineered an adaptive, depth-aware interface system utilizing micro-physics, depth layering, and tactile acoustic feedback.",
    impact: "Adopted by over 450,000 spatial developers; rated #1 Spatial Design System at Awwwards 2026.",
    tags: ["React", "WebGL", "Design System", "Spatial UI"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    accentGradient: "from-purple-900/40 via-indigo-900/20 to-zinc-950",
    statNumber: "450k+",
    statLabel: "Active Developers",
    featured: true,
  },
  {
    id: "monolith-arch",
    title: "Monolith Collective",
    client: "Monolith Architecture",
    category: "Web Experiences",
    year: "2026",
    description: "An immersive digital archive and material study lookbook for a brutalist architecture studio based in Zurich.",
    challenge: "Translating the visceral, monumental texture of concrete, stone, and glass into an online browser medium.",
    solution: "Custom WebGL shader transitions simulating light passing through monolithic architectural geometries with inertia scrolling.",
    impact: "+320% client inquiry volume in the first 60 days following launch.",
    tags: ["Next.js", "Three.js", "Editorial Grid", "Smooth Motion"],
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    accentGradient: "from-zinc-800/40 via-stone-900/20 to-zinc-950",
    statNumber: "+320%",
    statLabel: "Inquiry Growth",
    featured: true,
  },
  {
    id: "vortex-ai",
    title: "Vortex AI Workspace",
    client: "Vortex Intelligence",
    category: "Digital Products",
    year: "2025",
    description: "Generative intelligence workspace featuring real-time collaborative nodes and low-latency code distillation.",
    challenge: "Presenting multi-modal model interactions without overwhelming users with cluttered dashboards and endless dropdowns.",
    solution: "A distraction-free, canvas-first interface where complex LLM chains are represented as elegant, draggable visual magnetic cards.",
    impact: "Secured $28M Series A funding led by Sequoia shortly after public product launch.",
    tags: ["TypeScript", "Canvas API", "Tailwind CSS", "Real-Time"],
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    accentGradient: "from-cyan-900/40 via-blue-900/20 to-zinc-950",
    statNumber: "$28M",
    statLabel: "Series A Raised",
    featured: true,
  },
  {
    id: "noir-atelier",
    title: "Noir Parfumerie",
    client: "Atelier Noir Paris",
    category: "Brand Systems",
    year: "2025",
    description: "Sensory digital boutique and bespoke olfactory brand identity for an exclusive Parisian perfume house.",
    challenge: "Communicating scent, mood, and exclusivity in a purely visual and auditory digital environment.",
    solution: "Bespoke typography, sound design pairings for each note profile, and an interactive scent pyramid selector.",
    impact: "Sold out initial 5,000-unit batch in 4 hours; 68% direct-to-consumer conversion rate.",
    tags: ["Brand Identity", "E-Commerce", "Sound Design", "Typography"],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1200&auto=format&fit=crop",
    accentGradient: "from-amber-900/30 via-stone-900/20 to-zinc-950",
    statNumber: "68%",
    statLabel: "Conversion Rate",
  },
  {
    id: "velocity-motors",
    title: "Velocity Hypercar 01",
    client: "Velocity Automotive",
    category: "Motion / 3D",
    year: "2025",
    description: "Real-time 3D aerodynamic vehicle configurator and telemetry dashboard for electric hypercars.",
    challenge: "Rendering photorealistic ray-marched materials and aerodynamics on mobile devices at a consistent 60fps.",
    solution: "Progressive level-of-detail asset streaming and custom GLSL aerodynamic wind tunnel simulations.",
    impact: "FWA of the Month & Site of the Day award winner; 1.2M unique interactive sessions.",
    tags: ["3D Configurator", "GLSL", "Three.js", "Performance"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    accentGradient: "from-red-900/30 via-zinc-900/20 to-zinc-950",
    statNumber: "1.2M",
    statLabel: "Live Sessions",
  },
  {
    id: "solaris-energy",
    title: "Solaris Power Grid",
    client: "Solaris CleanTech",
    category: "Brand Systems",
    year: "2024",
    description: "Complete visual rebranding and real-time smart grid telemetry console for distributed solar networks.",
    challenge: "Transforming complex, dry utility data into intuitive, human-centered insights for city managers.",
    solution: "A unified dark-mode design system with high-contrast data indicators and predictive anomaly alerts.",
    impact: "Adopted across 14 municipal energy hubs across the European Union.",
    tags: ["Brand Identity", "Design System", "Data Viz", "Clean Energy"],
    image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=1200&auto=format&fit=crop",
    accentGradient: "from-emerald-900/30 via-zinc-900/20 to-zinc-950",
    statNumber: "14",
    statLabel: "EU Municipalities",
  },
];
