"use client";

import React, { useEffect } from "react";
import { X, ArrowUpRight, CheckCircle2, ShieldAlert, Sparkles, Layers } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onOpenInquiry }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-zinc-800/80 bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-zinc-800 text-zinc-300">
              {project.category}
            </span>
            <span className="text-xs font-mono text-zinc-500">Year {project.year}</span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white rounded-full bg-zinc-850 hover:bg-zinc-800 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Banner Image */}
        <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-zinc-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-zinc-400">
                Client // {project.client}
              </p>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mt-1">
                {project.title}
              </h2>
            </div>
            <div className="px-4 py-2 rounded-2xl bg-zinc-900/90 border border-zinc-800 backdrop-blur-md flex items-center gap-3">
              <span className="text-2xl font-black text-emerald-400">{project.statNumber}</span>
              <span className="text-xs text-zinc-400 font-mono leading-tight">{project.statLabel}</span>
            </div>
          </div>
        </div>

        {/* Case Study Content Body */}
        <div className="p-6 sm:p-8 space-y-8">
          <div>
            <h3 className="text-sm font-mono uppercase tracking-wider text-zinc-500 mb-2">Executive Summary</h3>
            <p className="text-zinc-200 text-lg sm:text-xl font-light leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-zinc-850">
            {/* The Challenge */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-850/80">
              <div className="flex items-center gap-2 text-rose-400 text-sm font-semibold mb-3">
                <ShieldAlert className="w-4 h-4" />
                <span>The Challenge</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.challenge}
              </p>
            </div>

            {/* The Solution */}
            <div className="p-6 rounded-2xl bg-zinc-900/40 border border-zinc-850/80">
              <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold mb-3">
                <CheckCircle2 className="w-4 h-4" />
                <span>The Engineering Solution</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Impact Statement */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-850 border border-zinc-800 flex items-start gap-4">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <div className="text-xs font-mono text-zinc-400 uppercase tracking-wide">Key Business Impact</div>
              <div className="text-sm sm:text-base font-medium text-white mt-0.5">{project.impact}</div>
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Technologies & Architecture</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Drawer */}
          <div className="pt-6 border-t border-zinc-850 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-zinc-500 font-mono">
              Have a similar challenge for your brand?
            </span>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
              >
                <span>Request Project Proposal</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
