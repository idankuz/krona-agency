"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS, Project } from "@/data/projects";

interface WorksSectionProps {
  onSelectProject: (project: Project) => void;
}

const CATEGORIES = [
  "All",
  "Digital Products",
  "Brand Systems",
  "Web Experiences",
  "Motion / 3D",
] as const;

export const WorksSection: React.FC<WorksSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>Selected Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Work that commands industry acclaim.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-white text-zinc-950 font-bold shadow-md"
                    : "bg-zinc-900 text-zinc-400 border border-zinc-800 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer relative flex flex-col rounded-3xl overflow-hidden bg-zinc-900/50 border border-zinc-800/80 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60"
            >
              {/* Image Container with Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent" />

                {/* Top Badge: Category & Year */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono uppercase text-zinc-300 tracking-wider">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-mono text-zinc-400">
                    {project.year}
                  </span>
                </div>

                {/* Stat Badge Overlay */}
                <div className="absolute bottom-5 left-5">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-900/85 backdrop-blur-md border border-zinc-800 text-xs">
                    <span className="font-mono font-bold text-emerald-400">{project.statNumber}</span>
                    <span className="text-zinc-400 font-mono text-[11px]">{project.statLabel}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Info */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-1">
                        {project.client}
                      </p>
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-zinc-200 transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="w-10 h-10 rounded-full bg-zinc-850 border border-zinc-800 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white group-hover:text-zinc-950 transition-all shrink-0 mt-1">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  <p className="mt-3 text-sm text-zinc-400 line-clamp-2 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                {/* Tags row */}
                <div className="mt-6 pt-5 border-t border-zinc-850/80 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-zinc-850/60 text-[11px] font-mono text-zinc-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
