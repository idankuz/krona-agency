import React from "react";

const CLIENTS = [
  { name: "LINEAR", desc: "Issue Tracking" },
  { name: "VERCEL", desc: "Cloud Platform" },
  { name: "SUPABASE", desc: "Database Architecture" },
  { name: "RAYCAST", desc: "Developer Utilities" },
  { name: "STRIPE", desc: "Financial Infrastructure" },
  { name: "ARC BROWSER", desc: "Web Experience" },
  { name: "FIGMA", desc: "Collaborative Design" },
  { name: "NOTION", desc: "Connected Workspace" },
];

export const ClientMarquee: React.FC = () => {
  return (
    <section className="py-12 border-y border-zinc-850 bg-zinc-950/60 overflow-hidden relative">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-[#09090b] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-[#09090b] to-transparent z-10 pointer-events-none" />

      <div className="flex animate-marquee items-center gap-16 select-none whitespace-nowrap">
        {/* Double the array for infinite seamless looping */}
        {[...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <span className="text-xl font-mono font-black tracking-widest uppercase">
              {client.name}
            </span>
            <span className="text-zinc-700 text-xs">•</span>
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-600">
              {client.desc}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
