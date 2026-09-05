"use client";

import React, { useState, useEffect } from "react";
import { X, Check, ArrowRight, Sparkles, CheckCircle, Send } from "lucide-react";

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTier?: string;
}

const SERVICE_OPTIONS = [
  "Web Design & Development",
  "Brand Identity System",
  "Product UI/UX Design",
  "3D / Motion / WebGL",
  "Full Digital Transformation",
];

const BUDGET_RANGES = [
  "$10,000 – $20,000",
  "$20,000 – $40,000",
  "$40,000 – $80,000",
  "$80,000+",
];

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialTier,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web Design & Development",
  ]);
  const [selectedBudget, setSelectedBudget] = useState<string>("$20,000 – $40,000");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (initialTier === "sprint") {
      setSelectedBudget("$10,000 – $20,000");
    } else if (initialTier === "partner") {
      setSelectedBudget("$20,000 – $40,000");
    } else if (initialTier === "flagship") {
      setSelectedBudget("$40,000 – $80,000");
    }
  }, [initialTier]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setSubmitted(false);
      setStep(1);
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-10 my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-zinc-400 hover:text-white bg-zinc-900 border border-zinc-800 transition-colors"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          /* Success Screen */
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              Inquiry Dispatched.
            </h3>
            <p className="mt-3 text-zinc-400 max-w-md text-sm sm:text-base font-light">
              Thank you for considering KRONA Studio. Our partners will review your project brief and reply within 24 hours with scheduling options.
            </p>
            <div className="mt-8">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
              >
                Back to Site
              </button>
            </div>
          </div>
        ) : (
          /* Interactive Multi-Step Form */
          <div>
            <div className="mb-8">
              <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2">
                <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                <span>Project Inquiry // Step {step} of 3</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {step === 1 && "What capabilities do you need?"}
                {step === 2 && "What is your target investment?"}
                {step === 3 && "Tell us about your venture"}
              </h3>
            </div>

            {/* Step 1: Select Services */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="flex flex-wrap gap-3">
                  {SERVICE_OPTIONS.map((service) => {
                    const active = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-4 py-3 rounded-2xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 border ${
                          active
                            ? "bg-white text-zinc-950 border-white shadow-md"
                            : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                        }`}
                      >
                        {active && <Check className="w-4 h-4 stroke-[3]" />}
                        <span>{service}</span>
                      </button>
                    );
                  })}
                </div>

                <div className="pt-6 flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    disabled={selectedServices.length === 0}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 disabled:opacity-40 transition-all"
                  >
                    <span>Next: Target Investment</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Select Budget */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {BUDGET_RANGES.map((budget) => {
                    const active = selectedBudget === budget;
                    return (
                      <button
                        type="button"
                        key={budget}
                        onClick={() => setSelectedBudget(budget)}
                        className={`p-4 rounded-2xl text-sm font-mono text-left transition-all border ${
                          active
                            ? "bg-white text-zinc-950 border-white font-bold shadow-md"
                            : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                        }`}
                      >
                        {budget}
                      </button>
                    );
                  })}
                </div>

                <div className="pt-6 flex justify-between items-center">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    ← Back to Services
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-zinc-950 font-semibold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact & Brief */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Alex Mercer"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                      Work Email *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="Venture Labs Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-zinc-400 mb-1.5">
                    Project Brief & Goals *
                  </label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Briefly describe what you're building, target timeline, and any reference links..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-600 text-sm focus:outline-none focus:border-zinc-500 resize-none"
                  />
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                  >
                    ← Back
                  </button>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg"
                  >
                    <span>Submit Inquiry</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
