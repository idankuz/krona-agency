"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowUpRight, Zap, Shield, Crown } from "lucide-react";

interface PricingCalculatorProps {
  onOpenInquiryWithTier: (tierName: string) => void;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  timeWeeks: number;
}

const ADD_ONS: AddOn[] = [
  { id: "3d", name: "Custom 3D / WebGL Shaders", price: 3500, timeWeeks: 1 },
  { id: "cms", name: "Headless CMS (Sanity / Strapi)", price: 2500, timeWeeks: 1 },
  { id: "motion", name: "Kinetic Motion & Sound Design", price: 2800, timeWeeks: 1 },
  { id: "system", name: "Full Component Design System", price: 4200, timeWeeks: 2 },
];

export const PricingCalculator: React.FC<PricingCalculatorProps> = ({
  onOpenInquiryWithTier,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<"sprint" | "partner" | "flagship">("partner");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["cms", "motion"]);

  const basePrice = {
    sprint: 9500,
    partner: 14500,
    flagship: 28000,
  }[selectedPlan];

  const baseTimeline = {
    sprint: 2,
    partner: 4,
    flagship: 8,
  }[selectedPlan];

  const addOnsTotal = selectedAddOns.reduce((sum, id) => {
    const item = ADD_ONS.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const addOnsTimeTotal = selectedAddOns.reduce((sum, id) => {
    const item = ADD_ONS.find((a) => a.id === id);
    return sum + (item ? item.timeWeeks : 0);
  }, 0);

  const totalPrice = basePrice + addOnsTotal;
  const totalTimeline = baseTimeline + Math.min(addOnsTimeTotal, 2);

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="pricing" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
            <span>Engagement Models</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Transparent investment. Proven ROI.
          </h2>
          <p className="mt-4 text-zinc-400 text-base sm:text-lg font-light">
            We operate with upfront pricing and clear deliverable timelines. Customize an engagement model to see an immediate estimate.
          </p>
        </div>

        {/* Tier Selector Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Sprint */}
          <div
            onClick={() => setSelectedPlan("sprint")}
            className={`cursor-pointer p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
              selectedPlan === "sprint"
                ? "bg-zinc-900 border-white/40 shadow-xl shadow-black/50"
                : "bg-zinc-950/60 border-zinc-850 hover:border-zinc-700"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-xl bg-zinc-800 text-zinc-300">
                <Zap className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-400">2-3 Weeks</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Launchpad Sprint</h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light mb-6">
              Ideal for high-velocity early startups needing a world-class landing experience before launch.
            </p>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              From $9.5k
            </div>
          </div>

          {/* Partner (Recommended) */}
          <div
            onClick={() => setSelectedPlan("partner")}
            className={`cursor-pointer p-6 sm:p-8 rounded-3xl border relative transition-all duration-300 ${
              selectedPlan === "partner"
                ? "bg-zinc-900 border-white/50 shadow-2xl shadow-white/5"
                : "bg-zinc-950/60 border-zinc-850 hover:border-zinc-700"
            }`}
          >
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-white text-zinc-950 text-[10px] font-mono uppercase font-black tracking-widest">
              Most Popular
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-xl bg-zinc-800 text-zinc-300">
                <Shield className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-400">4-6 Weeks</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Dedicated Studio Retainer</h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light mb-6">
              Full design and engineering immersion. Complete website, brand identity, and custom web application.
            </p>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              From $14.5k
            </div>
          </div>

          {/* Flagship */}
          <div
            onClick={() => setSelectedPlan("flagship")}
            className={`cursor-pointer p-6 sm:p-8 rounded-3xl border transition-all duration-300 ${
              selectedPlan === "flagship"
                ? "bg-zinc-900 border-white/40 shadow-xl shadow-black/50"
                : "bg-zinc-950/60 border-zinc-850 hover:border-zinc-700"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="p-2.5 rounded-xl bg-zinc-800 text-zinc-300">
                <Crown className="w-5 h-5" />
              </span>
              <span className="text-xs font-mono text-zinc-400">8-12 Weeks</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Custom Flagship Platform</h3>
            <p className="text-zinc-400 text-xs sm:text-sm font-light mb-6">
              Enterprise-grade digital transformation with bespoke WebGL shaders, headless architecture, and design systems.
            </p>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono">
              From $28.0k
            </div>
          </div>
        </div>

        {/* Interactive Scope Add-Ons & Total Bar */}
        <div className="p-6 sm:p-10 rounded-3xl bg-zinc-900/60 border border-zinc-800 backdrop-blur-md">
          <div className="text-sm font-mono uppercase tracking-wider text-zinc-400 mb-6 flex items-center justify-between">
            <span>Optional Scope Enhancements</span>
            <span className="text-xs text-zinc-500 lowercase">Click to toggle scope</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {ADD_ONS.map((addon) => {
              const active = selectedAddOns.includes(addon.id);
              return (
                <div
                  key={addon.id}
                  onClick={() => toggleAddOn(addon.id)}
                  className={`cursor-pointer p-4 rounded-2xl border transition-all flex items-center justify-between ${
                    active
                      ? "bg-zinc-800 border-zinc-600 text-white"
                      : "bg-zinc-950/40 border-zinc-850 text-zinc-400 hover:border-zinc-750"
                  }`}
                >
                  <div className="pr-2">
                    <div className="text-xs font-medium text-white">{addon.name}</div>
                    <div className="text-[11px] font-mono text-zinc-500 mt-0.5">
                      +${addon.price.toLocaleString()}
                    </div>
                  </div>
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors shrink-0 ${
                      active ? "bg-white border-white text-black" : "border-zinc-700 bg-zinc-900"
                    }`}
                  >
                    {active && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Real-Time Total Estimation Bar */}
          <div className="pt-6 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-baseline gap-4 text-center md:text-left">
              <div>
                <span className="text-xs font-mono uppercase text-zinc-500 block">
                  Estimated Investment
                </span>
                <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                  ${totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="border-l border-zinc-800 pl-4">
                <span className="text-xs font-mono uppercase text-zinc-500 block">
                  Est. Delivery Time
                </span>
                <span className="text-xl sm:text-2xl font-bold text-zinc-300 font-mono">
                  ~{totalTimeline} Weeks
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenInquiryWithTier(selectedPlan)}
              className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors shadow-lg"
            >
              <span>Lock in this Scope & Sprint</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
