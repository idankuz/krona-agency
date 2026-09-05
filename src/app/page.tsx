"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ClientMarquee } from "@/components/ClientMarquee";
import { WorksSection } from "@/components/WorksSection";
import { ProjectModal } from "@/components/ProjectModal";
import { ServicesSection } from "@/components/ServicesSection";
import { PricingCalculator } from "@/components/PricingCalculator";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { InquiryModal } from "@/components/InquiryModal";
import { Project } from "@/data/projects";

export default function Home() {
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState<string>("partner");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const handleOpenInquiry = () => {
    setSelectedTier("partner");
    setInquiryOpen(true);
  };

  const handleOpenInquiryWithTier = (tier: string) => {
    setSelectedTier(tier);
    setInquiryOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-[#f4f4f5] selection:bg-[#f4f4f5] selection:text-[#09090b]">
      {/* Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Hero Section */}
      <Hero onOpenInquiry={handleOpenInquiry} />

      {/* Client / Partner Marquee */}
      <ClientMarquee />

      {/* Selected Works Portfolio */}
      <WorksSection onSelectProject={(project) => setActiveProject(project)} />

      {/* Capabilities & Services Accordion */}
      <ServicesSection onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Engagement & Pricing Calculator */}
      <PricingCalculator onOpenInquiryWithTier={handleOpenInquiryWithTier} />

      {/* Client Endorsements / Testimonials */}
      <Testimonials />

      {/* Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Multi-Step Project Inquiry Modal */}
      <InquiryModal
        isOpen={inquiryOpen}
        onClose={() => setInquiryOpen(false)}
        initialTier={selectedTier}
      />
    </main>
  );
}
