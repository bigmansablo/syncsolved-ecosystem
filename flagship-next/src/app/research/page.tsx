"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { VelocityBackground } from "@/components/ui/VelocityBackground";

export default function ResearchPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <VelocityBackground className="fixed inset-0 z-0" quantity={80} staticity={30} ease={50} linkDistance={150} />
      <Navbar />
      
      <section className="pt-40 pb-20 container mx-auto px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12 font-bold">[ RESEARCH_HUB ]</div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-24">The velocity<br /> papers.</h1>
          
          <div className="grid md:grid-cols-2 gap-1 gap-y-16">
             <div className="border border-white/10 p-12 hover:bg-white/5 group transition-colors">
                <div className="font-mono text-xs text-accent mb-8">[ PAPER // 01 ]</div>
                <h3 className="text-2xl font-bold mb-6 italic italic-text">TRANSITION FROM LABOR TO LOGIC.</h3>
                <p className="text-white opacity-100 mb-8">A technical mapping of how founder-dependent businesses fail at scale.</p>
                <div className="text-accent text-[10px] font-bold uppercase tracking-widest group-hover:px-4 transition-all duration-300 inline-block border-l border-accent pl-4">READ ARTIFACT</div>
             </div>
             <div className="border border-white/10 p-12 hover:bg-white/5 group transition-colors">
                <div className="font-mono text-xs text-accent mb-8">[ PAPER // 02 ]</div>
                <h3 className="text-2xl font-bold mb-6 italic italic-text">ENCODING PERSUASION.</h3>
                <p className="text-white opacity-100 mb-8">How to systemize high-ticket sales without losing conversion fidelity.</p>
                <div className="text-accent text-[10px] font-bold uppercase tracking-widest group-hover:px-4 transition-all duration-300 inline-block border-l border-accent pl-4">READ ARTIFACT</div>
             </div>
             <div className="border border-white/10 p-12 hover:bg-white/5 group transition-colors">
                <div className="font-mono text-xs text-accent mb-8">[ PAPER // 03 ]</div>
                <h3 className="text-2xl font-bold mb-6 italic italic-text">AUTONOMOUS OPERATIONS.</h3>
                <p className="text-white opacity-100 mb-8">Structural governance in high-stakes deterministic environments.</p>
                <div className="text-accent text-[10px] font-bold uppercase tracking-widest group-hover:px-4 transition-all duration-300 inline-block border-l border-accent pl-4">READ ARTIFACT</div>
             </div>
             <div className="border border-white/10 p-12 hover:bg-white/5 group transition-colors">
                <div className="font-mono text-xs text-accent mb-8">[ PAPER // 04 ]</div>
                <h3 className="text-2xl font-bold mb-6 italic italic-text">FOUNDATION PROTOCOLS.</h3>
                <p className="text-white opacity-100 mb-8">Designing the security and audit trails for automated expertise.</p>
                <div className="text-accent text-[10px] font-bold uppercase tracking-widest group-hover:px-4 transition-all duration-300 inline-block border-l border-accent pl-4">READ ARTIFACT</div>
             </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
