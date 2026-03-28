"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { VelocityBackground } from "@/components/ui/VelocityBackground";

export default function ManifestoPage() {
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
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12 font-bold">[ SYSTEM_MANIFESTO ]</div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-24">The exit from<br /> human middleware.</h1>
          
          <div className="max-w-4xl mx-auto space-y-16 text-left text-xl text-white font-medium opacity-100 leading-relaxed">
             <div className="border border-white/10 p-12">
                <h3 className="text-2xl font-bold mb-8 italic italic-text">01. THE FALLACY OF MASS.</h3>
                <p>Scaling a business by adding people is not growth—it is the accumulation of drag. Every person added increases communication entropy. Every person added makes the system slower and more fragile.</p>
             </div>
             
             <div className="border border-white/10 p-12">
                <h3 className="text-2xl font-bold mb-8 italic italic-text">02. THE DEPENDECY TRAP.</h3>
                <p>If the business stops if the founder stops, you don't own a business. You own a high-status job. The only exit is the transition from labor-heavy logic to deterministic architecture.</p>
             </div>
             
             <div className="border border-white/10 p-12">
                <h3 className="text-2xl font-bold mb-8 italic italic-text">03. ARCHITECTURAL SUPERIORITY.</h3>
                <p>We do not automate tasks. We encode expertise. Algorithms do not sleep. They do not drift. They do not get bored. They provide clinical, high-fidelity execution for the life of the enterprise.</p>
             </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
