"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { VelocityBackground } from "@/components/ui/VelocityBackground";

export default function ProcessPage() {
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
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12 font-bold">[ SYSTEM_PROCESS ]</div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-24">Encoding<br /> expertise.</h1>
          
          <div className="grid md:grid-cols-2 gap-24">
             <div className="space-y-12">
                <div className="border-l border-accent pl-8">
                   <h3 className="text-2xl font-bold mb-4 italic italic-text">01. CLINICAL DISCOVERY</h3>
                   <p className="text-white text-lg opacity-100">We map the expert knowledge and bottleneck processes that make your business founder-dependent.</p>
                </div>
                <div className="border-l border-accent pl-8">
                   <h3 className="text-2xl font-bold mb-4 italic italic-text">02. ARCHITECTURAL DESIGN</h3>
                   <p className="text-white text-lg opacity-100">We design the deterministic models and autonomous workflows that will replace the labor-heavy logic.</p>
                </div>
                <div className="border-l border-accent pl-8">
                   <h3 className="text-2xl font-bold mb-4 italic italic-text">03. ENCODING & LAUNCH</h3>
                   <p className="text-white text-lg opacity-100">We build and deploy the production-ready Velocity Architecture into your stack.</p>
                </div>
             </div>
             
             <div className="bg-white/5 border border-white/10 p-12 text-center flex flex-col justify-center items-center">
                <div className="text-accent text-6xl font-bold mb-8 italic italic-text">10X</div>
                <p className="text-white text-xl font-medium">Average increase in structural capacity within 90 days of deployment.</p>
             </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
