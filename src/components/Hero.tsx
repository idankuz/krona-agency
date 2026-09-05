"use client";

import React, { useState } from "react";
import { ArrowDown, ArrowUpRight, Play, Sparkles, X } from "lucide-react";

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  const [showreelOpen, setShowreelOpen] = useState(false);

  return (
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
      {/* Background Gradients & Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-b from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-12 left-1/4 w-72 h-72 bg-blue-500/5 rounded-full blur-2xl pointer-events-none -z-10" />

      {/* Subtle Grid Accent */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800/80 text-xs font-mono text-zinc-400 mb-8 tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
          <span>Independent Digital Atelier & Creative Engineering Lab</span>
        </div>

        {/* Main Headline */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white leading-[1.05] text-balance">
            Crafting digital identities &{" "}
            <span className="bg-gradient-to-r from-zinc-100 via-zinc-400 to-zinc-600 bg-clip-text text-transparent">
              immersive products
            </span>{" "}
            for category leaders.
          </h1>

          <p className="mt-8 text-lg sm:text-xl md:text-2xl text-zinc-400 max-w-2xl font-light leading-relaxed">
            We partner with visionary founders and global brands to design, engineer, and launch unforgettable digital experiences that command attention.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-zinc-950 font-semibold text-sm tracking-wide hover:bg-zinc-200 transition-all shadow-lg shadow-white/5"
            >
              <span>Explore Selected Work</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </a>

            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-zinc-900 border border-zinc-800 text-white font-medium text-sm hover:bg-zinc-800 transition-all"
            >
              <span>Initiate Project</span>
              <ArrowUpRight className="w-4 h-4 text-zinc-400" />
            </button>

            <button
              onClick={() => setShowreelOpen(true)}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-transparent border border-zinc-800 text-zinc-300 font-medium text-sm hover:border-zinc-700 hover:text-white transition-all group"
            >
              <span className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-zinc-700 transition-colors">
                <Play className="w-3 h-3 fill-current text-white ml-0.5" />
              </span>
              <span>Watch Reel</span>
            </button>
          </div>
        </div>

        {/* Studio Metrics Row */}
        <div className="mt-20 pt-12 border-t border-zinc-800/80 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">34+</div>
            <div className="text-xs sm:text-sm text-zinc-500 mt-1 font-mono uppercase tracking-wider">
              Awwwards & FWA Honors
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">$140M+</div>
            <div className="text-xs sm:text-sm text-zinc-500 mt-1 font-mono uppercase tracking-wider">
              Client Capital Raised
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">99.8%</div>
            <div className="text-xs sm:text-sm text-zinc-500 mt-1 font-mono uppercase tracking-wider">
              Client Satisfaction
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">0.05s</div>
            <div className="text-xs sm:text-sm text-zinc-500 mt-1 font-mono uppercase tracking-wider">
              Avg Page Interaction Speed
            </div>
          </div>
        </div>
      </div>

      {/* Showreel Lightbox Modal */}
      {showreelOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
          <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                <span className="text-sm font-mono text-zinc-300">KRONA Studio Showreel // 2026 Capsule</span>
              </div>
              <button
                onClick={() => setShowreelOpen(false)}
                className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-video bg-zinc-950 flex flex-col items-center justify-center p-8 text-center">
              <div className="w-20 h-20 rounded-full bg-zinc-800/80 border border-zinc-700 flex items-center justify-center mb-4">
                <Play className="w-8 h-8 fill-current text-white ml-1" />
              </div>
              <h4 className="text-xl font-bold text-white mb-2">Kinetic Experience Montage</h4>
              <p className="text-sm text-zinc-400 max-w-md">
                Featuring WebGL interactions, spatial UI, generative shaders, and award-winning brand systems developed for Aura, Monolith, and Vortex.
              </p>
              <div className="mt-6 flex gap-3 text-xs font-mono text-zinc-500">
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">4K 60FPS</span>
                <span className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800">Dolby Atmos Audio</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
