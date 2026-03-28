"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { VelocityBackground } from "@/components/ui/VelocityBackground";

export default function GlobalPage() {
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
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12 font-bold">[ GLOBAL_NODES ]</div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter uppercase mb-24">A borderless<br /> framework.</h1>
          
          <div className="grid md:grid-cols-2 gap-24">
             <div className="space-y-12">
                <p className="text-white text-2xl font-medium leading-relaxed opacity-100">
                   SyncSolved is optimized for borderless coordination. Our system architecture allows expertise to be encoded once and deployed across all timezones simultaneously.
                </p>
                <div className="grid grid-cols-2 gap-8 font-mono text-xs text-white opacity-100 uppercase tracking-widest">
                   <div>[ 01 ] CAPE TOWN</div>
                   <div>[ 02 ] LONDON</div>
                   <div>[ 03 ] LOS ANGELES</div>
                   <div>[ 04 ] HONG KONG</div>
                   <div>[ 05 ] DUBAI</div>
                </div>
             </div>
             
             <div className="bg-white/5 border border-white/10 p-12 text-center flex flex-col justify-center items-center">
                <div className="text-accent text-6xl font-bold mb-8 italic italic-text">24/7</div>
                <p className="text-white text-xl font-medium opacity-100">Operational uptime on all autonomous business modules across 5 major global nodes.</p>
             </div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
