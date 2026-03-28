"use client";

import { motion } from "framer-motion";

export default function ClinicalReasoning() {
  return (
    <section className="py-60 bg-zinc-950/40 backdrop-blur-md border-y border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none opacity-20">
         <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full" />
         <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-8 max-w-5xl relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="font-mono text-xs text-accent mb-12 uppercase tracking-[0.4em] font-bold">[ CLINICAL REASONING ]</div>
          <h2 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-20 uppercase leading-none">THE FALLACY<br /><span className="text-accent">OF LABOR.</span></h2>
          
          <div className="grid md:grid-cols-2 gap-24 text-left">
            <div className="space-y-8">
              <h3 className="text-2xl text-accent font-mono uppercase tracking-widest font-bold">Coordination Drag.</h3>
              <p className="text-xl text-white leading-relaxed font-medium">
                Human labor is probabilistic. It varies in quality, speed, and reliability. When you add people, you add drag. The founder eventually spends 90% of their time managing the people who were supposed to do the work.
              </p>
            </div>
            <div className="space-y-8">
              <h3 className="text-2xl text-accent font-mono uppercase tracking-widest font-bold">Encoded Capability.</h3>
              <p className="text-xl text-white leading-relaxed font-medium">
                Infrastructure is deterministic. It does not vary. It does not pause. It does not deviate from the quality standard. By replacing labor with architecture, you move from a "Hollow Engine" to a compounding asset.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
