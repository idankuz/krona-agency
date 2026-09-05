"use client";

import React, { useState } from "react";
import { Plus, Minus, ArrowRight, Check } from "lucide-react";
import { SERVICES } from "@/data/services";

interface ServicesSectionProps {
  onOpenInquiry: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  const [activeService, setActiveService] = useState<number>(0);

  return (
    <section id="services" className="py-24 sm:py-32 bg-zinc-950/70 border-t border-zinc-850 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-zinc-400" />
            <span>Capabilities & Focus</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            End-to-end design engineering. Zero bloat.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
            We operate as an agile, high-density senior team. No junior pass-offs, no multi-layered bureaucracy. Just meticulous execution from initial wireframe to production deployment.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-zinc-800 border-y border-zinc-800">
          {SERVICES.map((service, index) => {
            const isOpen = activeService === index;
            return (
              <div
                key={service.number}
                className="py-8 transition-colors group cursor-pointer"
                onClick={() => setActiveService(isOpen ? -1 : index)}
              >
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-baseline gap-6 sm:gap-10">
                    <span className="font-mono text-xs sm:text-sm text-zinc-600 font-bold">
                      {service.number}
                    </span>
                    <h3 className="text-xl sm:text-3xl font-bold text-white group-hover:text-zinc-300 transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <div className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 shrink-0 group-hover:border-zinc-700 transition-colors">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </div>

                {isOpen && (
                  <div className="mt-8 pl-0 sm:pl-16 grid grid-cols-1 lg:grid-cols-12 gap-8 animate-in fade-in duration-300">
                    <div className="lg:col-span-6">
                      <p className="text-zinc-300 text-base leading-relaxed font-light mb-6">
                        {service.description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenInquiry();
                        }}
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white hover:text-zinc-300 transition-colors font-semibold"
                      >
                        <span>Discuss this capability</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="lg:col-span-6 space-y-6">
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-3">
                          Core Deliverables
                        </div>
                        <ul className="space-y-2">
                          {service.deliverables.map((item) => (
                            <li key={item} className="flex items-center gap-2.5 text-sm text-zinc-300">
                              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2">
                          Tools & Frameworks
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {service.techStack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded bg-zinc-900 border border-zinc-800 text-xs font-mono text-zinc-400"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
