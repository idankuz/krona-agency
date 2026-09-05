"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="py-24 sm:py-32 border-t border-zinc-850 bg-zinc-950/40 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
              <span>Partner Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Backed by industry founders.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Testimonial Feature Card */}
        <div className="p-8 sm:p-14 rounded-3xl bg-zinc-900/40 border border-zinc-800/80 relative overflow-hidden backdrop-blur-sm">
          <Quote className="w-16 h-16 text-zinc-800 absolute top-8 right-8 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <p className="text-xl sm:text-3xl font-light text-white leading-snug tracking-tight">
                “{current.quote}”
              </p>

              <div className="mt-8 flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.author}
                  className="w-14 h-14 rounded-full object-cover border-2 border-zinc-700"
                />
                <div>
                  <h4 className="text-base font-bold text-white">{current.author}</h4>
                  <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                    {current.role}, <span className="text-zinc-200">{current.company}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Impact Metric Callout */}
            <div className="lg:col-span-4 flex lg:justify-end">
              <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 text-center w-full max-w-xs">
                <div className="text-4xl sm:text-5xl font-black text-emerald-400 font-mono">
                  {current.metric}
                </div>
                <div className="text-xs text-zinc-400 font-mono uppercase tracking-wider mt-1">
                  {current.metricLabel}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Dots Navigator */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {TESTIMONIALS.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === currentIndex ? "w-8 bg-white" : "w-2 bg-zinc-800 hover:bg-zinc-700"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
