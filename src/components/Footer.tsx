"use client";

import React from "react";
import { ArrowUp, ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="pt-24 pb-12 border-t border-zinc-850 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Massive Typographic Callout */}
        <div className="pb-20 border-b border-zinc-900">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">
              Initiate Collaboration
            </span>
            <span className="text-zinc-700 font-mono text-xs">•</span>
            <a
              href="https://idankuz.dev"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              idankuz.dev
            </a>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.95] max-w-5xl">
            LET’S BUILD SOMETHING UNFORGETTABLE.
          </h2>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-xl"
            >
              <span>Start an Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href="mailto:partners@krona.studio"
              className="px-8 py-4 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 text-xs font-mono tracking-wider transition-colors"
            >
              partners@krona.studio
            </a>
          </div>
        </div>

        {/* Global Hubs & Directory */}
        <div className="py-16 grid grid-cols-2 sm:grid-cols-4 gap-10 border-b border-zinc-900 text-xs font-mono">
          <div>
            <div className="text-zinc-500 uppercase tracking-wider mb-3">London (HQ)</div>
            <p className="text-zinc-300 leading-relaxed">
              24 Shoreditch High St<br />
              London, E1 6PG<br />
              United Kingdom
            </p>
          </div>

          <div>
            <div className="text-zinc-500 uppercase tracking-wider mb-3">New York</div>
            <p className="text-zinc-300 leading-relaxed">
              472 Broome Street, SoHo<br />
              New York, NY 10013<br />
              United States
            </p>
          </div>

          <div>
            <div className="text-zinc-500 uppercase tracking-wider mb-3">Tokyo</div>
            <p className="text-zinc-300 leading-relaxed">
              5-7-1 Minami-Aoyama<br />
              Minato-ku, Tokyo 107-0062<br />
              Japan
            </p>
          </div>

          <div>
            <div className="text-zinc-500 uppercase tracking-wider mb-3">Creator & Direct Connect</div>
            <div className="flex flex-col gap-2 text-zinc-400">
              <a
                href="https://idankuz.dev"
                target="_blank"
                rel="noreferrer"
                className="text-white font-semibold hover:text-emerald-400 transition-colors flex items-center gap-1"
              >
                <span>idankuz.dev</span>
                <span className="text-[10px] text-zinc-500 font-normal">(Portfolio ↗)</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                Twitter / X ↗
              </a>
              <a href="https://github.com/idankuz" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                GitHub ↗
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Subfooter */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} KRONA Digital Studio Ltd. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <span className="text-zinc-400">
              Made with precision by{" "}
              <a
                href="https://idankuz.dev"
                target="_blank"
                rel="noreferrer"
                className="text-white font-bold hover:text-emerald-400 transition-colors underline underline-offset-4 decoration-zinc-700"
              >
                idankuz.dev
              </a>
            </span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors p-1"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
