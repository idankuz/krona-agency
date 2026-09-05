export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  metric: string;
  metricLabel: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "KRONA didn't just build our website; they fundamentally elevated our entire product perception. Within 3 weeks of launching the new interface, our enterprise deal velocity doubled.",
    author: "Elena Rostova",
    role: "VP of Product",
    company: "Aura Spatial OS",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop",
    metric: "2.4x",
    metricLabel: "Enterprise Deal Velocity",
  },
  {
    id: "2",
    quote: "The attention to craft, typography, and micro-motion is unlike any agency we've ever hired. They operate as true design partners who push your vision far beyond what you thought possible.",
    author: "Marcus Vance",
    role: "Chief Executive Officer",
    company: "Vortex Intelligence",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop",
    metric: "$28M",
    metricLabel: "Raised Post-Launch",
  },
  {
    id: "3",
    quote: "They understand the elusive balance between raw technical speed and artistic beauty. The custom 3D shader work they delivered on our launch day blew our community away.",
    author: "Sophie Lindqvist",
    role: "Head of Brand",
    company: "Monolith Architecture",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300&auto=format&fit=crop",
    metric: "#1",
    metricLabel: "Site of the Day Winner",
  },
];
