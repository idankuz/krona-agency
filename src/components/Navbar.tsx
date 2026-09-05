"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Update real-time clock for London/Studio
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-GB", {
        timeZone: "Europe/London",
        hour: "2-digit",
        minute: "2-digit",
      });
      setCurrentTime(timeString);
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(timer);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/85 backdrop-blur-md border-b border-zinc-800/80 py-4 shadow-2xl shadow-black/40"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="font-extrabold text-2xl tracking-tighter text-white group-hover:text-zinc-300 transition-colors">
            KRONA<span className="text-zinc-500 font-mono text-sm ml-0.5">™</span>
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-zinc-400 bg-zinc-900/90 border border-zinc-800 rounded-full">
            Studio
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <a href="#work" className="hover:text-white transition-colors">
            Work
          </a>
          <a href="#services" className="hover:text-white transition-colors">
            Services
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Engagement
          </a>
          <a href="#testimonials" className="hover:text-white transition-colors">
            Endorsements
          </a>
        </nav>

        {/* Status Pill & Inquiry Button */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/90 border border-zinc-800 text-xs font-mono text-zinc-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>London {currentTime || "12:00"}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-300">Open for Q4</span>
          </div>

          <button
            onClick={onOpenInquiry}
            className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white text-zinc-950 hover:bg-zinc-200 transition-all duration-200 shadow-sm hover:shadow-white/10"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={onOpenInquiry}
            className="text-xs px-3 py-1.5 rounded-full bg-white text-zinc-950 font-semibold uppercase tracking-wider"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-6 py-8 backdrop-blur-xl animate-fadeIn">
          <div className="flex flex-col gap-6 text-lg font-medium text-zinc-300">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Selected Work
            </a>
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Capabilities & Services
            </a>
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Engagement Models
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Client Endorsements
            </a>
            <div className="pt-4 border-t border-zinc-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry();
                }}
                className="w-full py-3 text-center rounded-xl bg-white text-zinc-950 font-bold tracking-wide uppercase text-sm"
              >
                Start a Project
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
