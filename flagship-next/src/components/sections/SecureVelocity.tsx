"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";
import { User, Database, Cpu, Rocket, ShieldCheck, Globe } from "lucide-react";

export default function SecureVelocity() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="py-40 bg-transparent overflow-hidden relative" ref={containerRef}>
      <div className="container mx-auto px-8 relative z-10">
        <div className="text-center mb-32">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-8 uppercase">SECURE VELOCITY.</h2>
          <p className="text-accent font-mono text-sm tracking-[0.3em] font-bold uppercase">[ SEQUENCED TRANSFORMATION ROADMAP ]</p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-20 relative max-w-6xl mx-auto">
          {/* Node 1: Context */}
          <div className="flex flex-col items-center gap-12 z-20">
            <div ref={div1Ref} className="w-24 h-24 rounded-full bg-zinc-900/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-[0_0_40px_-10px_rgba(0,255,157,0.3)]">
              <User size={32} />
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-2">EXTRACTION</div>
              <div className="text-white font-mono text-[10px] uppercase">Tier 01 // Mapping</div>
            </div>
          </div>

          {/* Node 2: Logic */}
          <div className="flex flex-col items-center gap-12 z-20">
            <div ref={div2Ref} className="w-24 h-24 rounded-full bg-zinc-900/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-[0_0_40px_-10px_rgba(0,255,157,0.3)]">
              <Database size={32} />
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-2">IP ENCODING</div>
              <div className="text-white font-mono text-[10px] uppercase">Tier 02-04 // Build</div>
            </div>
          </div>

          {/* Node 3: Autonomous */}
          <div className="flex flex-col items-center gap-12 z-20">
            <div ref={div3Ref} className="w-24 h-24 rounded-full bg-zinc-900/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-white shadow-[0_0_40px_-10px_rgba(0,255,157,0.3)]">
              <Cpu size={32} />
            </div>
            <div className="text-center">
              <div className="font-bold text-xl mb-2">ORCHESTRATION</div>
              <div className="text-white font-mono text-[10px] uppercase">Tier 05-08 // Exit</div>
            </div>
          </div>

          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div1Ref}
            toRef={div2Ref}
            gradientStartColor="#3b82f6"
            gradientStopColor="#60a5fa"
            duration={3}
          />
          <AnimatedBeam
            containerRef={containerRef}
            fromRef={div2Ref}
            toRef={div3Ref}
            gradientStartColor="#3b82f6"
            gradientStopColor="#60a5fa"
            duration={3}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-40">
           <div className="p-8 bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-xl">
              <h4 className="text-accent font-mono text-xs mb-4 font-bold uppercase tracking-widest">Phase 01 // 14 Days</h4>
              <p className="text-white leading-relaxed">Expert interview cycle. We map every judgment gate and operational handshake in your organization. Your genius, documented.</p>
           </div>
           <div className="p-8 bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-xl">
              <h4 className="text-accent font-mono text-xs mb-4 font-bold uppercase tracking-widest">Phase 02 // 30 Days</h4>
              <p className="text-white leading-relaxed">Infrastructure development. We build the vector memory, logic gates, and API orchestration layer in your private cloud.</p>
           </div>
           <div className="p-8 bg-zinc-900/30 backdrop-blur-md border border-white/5 rounded-xl">
              <h4 className="text-accent font-mono text-xs mb-4 font-bold uppercase tracking-widest">Phase 03 // Continuous</h4>
              <p className="text-white leading-relaxed">The Detachment State. You transition to Architectural Governance while the system manages the day-to-day profit engine.</p>
           </div>
        </div>
      </div>
    </section>
  );
}
