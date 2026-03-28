"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-transparent">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 blur-[160px] rounded-full z-0" />

      {/* Content */}
      <div className="container mx-auto px-8 relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent mb-8 font-bold opacity-80">
            [ PHASE 01: THE EXIT FROM DEPENDENCY ]
          </div>
          
          <h1 className="text-[clamp(48px,10vw,140px)] font-bold leading-[0.85] tracking-tighter text-white mb-12">
            YOU BUILT A BUSINESS<br />
            THAT CANNOT RUN<br />
            WITHOUT YOU.
          </h1>

          <p className="max-w-3xl mx-auto text-xl md:text-3xl text-white font-medium mb-16 leading-tight">
            We replace labor-heavy businesses with fixed, compounding infrastructure. Your expertise, encoded. Your business, autonomous.
          </p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <Link 
              href="https://manifesto.syncsolved.com" 
              className="px-12 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all transform hover:scale-105 active:scale-95 duration-300"
            >
              Read the Manifesto
            </Link>
            
            <div className="font-mono text-[9px] text-white uppercase tracking-[0.15em] text-left border-l border-white/10 pl-6 leading-relaxed">
              System Ready // v2.0.26<br />
              Latency: 0.04ms<br />
              Status: Operational
            </div>
          </div>
        </motion.div>
      </div>

      {/* Coordinate Scroll */}
      <div className="absolute bottom-12 left-8 right-8 flex justify-between items-end font-mono text-[8px] uppercase tracking-widest text-white">
        <div className="space-y-1">
          <div>LOC: 34.0522° N, 118.2437° W</div>
          <div>TIMESTAMP: 2026.03.26.04.12</div>
        </div>
        <div className="text-right space-y-1">
          <div>78% SYNCED // INITIALIZING NEXT ACCESSION</div>
        </div>
      </div>
    </section>
  );
}
