"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { VelocityBackground } from "@/components/ui/VelocityBackground";

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <VelocityBackground className="fixed inset-0 z-0" quantity={80} staticity={30} ease={50} linkDistance={150} />
      <Navbar />
      
      <section className="pt-40 pb-20 container mx-auto px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12 font-bold">[ OUR_THESIS ]</div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-16">The end of<br /> labor dependency.</h1>
          <p className="max-w-3xl mx-auto text-2xl text-white font-medium leading-relaxed mb-24 opacity-100">
            Most businesses are built as cages where scale equals suffering. We believe scale should equal simplicity.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
             <div className="p-12 bg-white/5 border border-white/10">
                <div className="text-accent text-2xl font-bold mb-6 italic italic-text">MONOLITHIC</div>
                <p className="text-white font-medium opacity-100">Single source of truth architecture. No distributed fragility.</p>
             </div>
             <div className="p-12 bg-white/5 border border-white/10">
                <div className="text-accent text-2xl font-bold mb-6 italic italic-text">DETERMINISTIC</div>
                <p className="text-white font-medium opacity-100">Consistent outputs. Guaranteed quality. Zero probabilistic drift.</p>
             </div>
             <div className="p-12 bg-white/5 border border-white/10">
                <div className="text-accent text-2xl font-bold mb-6 italic italic-text">AUTONOMOUS</div>
                <p className="text-white font-medium opacity-100">Systems that run, protect, and repair themselves without human mass.</p>
             </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
