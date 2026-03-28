import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import DependencyTrap from "@/components/sections/DependencyTrap";
import Foundation from "@/components/sections/Foundation";
import SecureVelocity from "@/components/sections/SecureVelocity";
import TechSpecs from "@/components/sections/TechSpecs";
import ClinicalReasoning from "@/components/sections/ClinicalReasoning";
import Link from "next/link";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { VelocityBackground } from "@/components/ui/VelocityBackground";

export default function Home() {
  return (
    <div className="bg-transparent text-white selection:bg-accent selection:text-white relative min-h-screen">
      <VelocityBackground className="fixed inset-0 z-0" quantity={80} staticity={30} ease={50} linkDistance={150} />
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

      
      <main>
        <Hero />
        <DependencyTrap />
        <Foundation />
        <SecureVelocity />
        <TechSpecs />
        <ClinicalReasoning />

        {/* FAQ - Reimaged */}
        <section className="py-40 bg-zinc-950/20 backdrop-blur-sm">
          <div className="container mx-auto px-8 max-w-4xl text-white">
            <h2 className="text-6xl md:text-8xl font-bold tracking-tighter mb-20 text-center uppercase leading-none">COMMON<br /><span className="text-accent">FRICTION.</span></h2>
            <Accordion className="w-full">
              <AccordionItem value="item-1" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-accent font-bold py-16 text-3xl uppercase text-left transition-all tracking-tighter">IS THIS JUST another CHATBOT?</AccordionTrigger>
                <AccordionContent className="text-white text-xl pb-12 leading-relaxed font-medium">
                  <p className="mb-6">Categorically, no. Chatbots are Tier 1 (Raw Language Engines). They have no memory, no judgment, and no hands. SyncSolved builds Tier 1-8. Our architecture has <strong>Systemic Memory</strong> (custom vector context), <strong>Judgment Gating</strong> (deterministic logic layers), and <strong>Active Hands</strong> (autonomous API execution).</p>
                  <p>A chatbot tells you what to do. SyncSolved builds the infrastructure that actually does the work for you. We don't build toys; we build business machinery.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-accent font-bold py-16 text-3xl uppercase text-left transition-all tracking-tighter">WHAT IS THE FOUNDER TIME COMMITMENT?</AccordionTrigger>
                <AccordionContent className="text-white text-xl pb-12 leading-relaxed font-medium">
                  <p className="mb-6">The transition to Optionality requires an initial high-density <strong>Extraction Phase</strong>. We require [ 4-6 hours ] of expert interview time across the first two weeks to map your logic. After that, your involvement drops to [ 1 hour ] per week for Calibration Reviews.</p>
                  <p>The goal is to move you from 60 hours/week to 1 hour/week. We do the heavy lifting of engineering the system so you don't have to.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-accent font-bold py-16 text-3xl uppercase text-left transition-all tracking-tighter">WHO RUNS THE INFRASTRUCTURE?</AccordionTrigger>
                <AccordionContent className="text-white text-xl pb-12 leading-relaxed font-medium">
                  <p className="mb-6">You do. Or rather, your private cloud does. We deploy the entire SyncSolved payload into your own <strong>VPC (Virtual Private Cloud)</strong> on AWS, Azure, or Google Cloud. You hold the master keys. We provide 12 months of <strong>Operational Monitoring</strong> to ensure the system remains nominal, but the asset is yours to keep forever.</p>
                  <p>Unlike SaaS platforms that rent you access, we deliver a <strong>Fixed Asset</strong> that settles on your balance sheet as Intellectual Property.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-80 text-center relative overflow-hidden bg-black/40 backdrop-blur-xl">
          <div className="absolute inset-0 bg-accent/5 blur-[160px] opacity-20 pointer-events-none" />
          <div className="container mx-auto px-8 relative z-10">
            <h2 className="text-[clamp(40px,12vw,160px)] font-bold tracking-tighter text-white mb-20 uppercase leading-[0.85]">READY TO BE<br /><span className="text-accent">OPTIONAL?</span></h2>
            <div className="flex flex-col md:flex-row gap-16 justify-center items-center">
              <Link 
                href="https://audit.syncsolved.com" 
                className="px-16 py-6 bg-white text-black font-extrabold uppercase tracking-widest text-sm hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95 duration-300"
              >
                Request the Velocity Audit
              </Link>
              <div className="font-mono text-[10px] text-white uppercase tracking-[0.3em] font-bold text-left border-l border-white/10 pl-10 leading-relaxed">
                Current System Load: 84%<br />
                Available Slots: 2/5<br />
                Priority Level: Extreme
              </div>
            </div>
          </div>
        </section>
      </main>

      </div>
      <Footer />
    </div>
  );
}
