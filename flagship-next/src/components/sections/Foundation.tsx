"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const tiers = [
  { id: "01", title: "Context Encoding", desc: "Your genius is static, probabilistic, and siloed. We map it into vector-accessible memory nodes that never forget." },
  { id: "02", title: "Deterministic Logic", desc: "Replacing prompt-tuning with hardcoded operational gates. 99.9% alignment with founder-intent." },
  { id: "03", title: "Active Hands", desc: "Direct API orchestration. The system doesn't just talk—it executes tasks, signs documents, and hands off results." },
  { id: "04", title: "Revenue Sync", desc: "Offer-stack integration that converts without human sales teams. High-status conversion at scale." },
  { id: "05", title: "Operational Triage", desc: "The system identifies, prioritizes, and resolves friction before it ever hits the founder's calendar." },
  { id: "06", title: "Recursive Feedback", desc: "Every founder interaction is high-density training data. The system gets sharper every single day." },
  { id: "07", title: "Global Expansion", desc: "Deploying the architecture across timezones and languages. Local relevance, global control." },
  { id: "08", title: "Sovereignty", desc: "The terminal state. You achieve total detachment and exit-readiness while the engine compounds." },
];

export default function Foundation() {
  return (
    <section className="py-40 bg-zinc-950/20 backdrop-blur-sm">
      <div className="container mx-auto px-8">
        <div className="text-center mb-32">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-7xl md:text-[10vw] font-bold tracking-tighter text-white mb-12 flex flex-col uppercase leading-none"
          >
            <span>THE</span>
            <span className="text-accent">FOUNDATION</span>
            <span>PROTOCOL.</span>
          </motion.h2>
          <p className="max-w-2xl mx-auto text-xl md:text-2xl text-accent font-mono uppercase tracking-[0.3em] font-bold">
            The 8-tier architecture for autonomous sovereignty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5 overflow-hidden">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <Card className="bg-black/40 backdrop-blur-md border-none rounded-none h-full relative overflow-hidden transition-all duration-500 hover:bg-zinc-900/60">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-accent transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />
                <CardHeader className="p-10 pb-4">
                   <div className="font-mono text-xs text-accent mb-8 font-bold tracking-widest">[ NODE // {tier.id} ]</div>
                   <CardTitle className="text-3xl font-bold tracking-tight text-white mb-4 uppercase leading-none">
                      {tier.title}
                   </CardTitle>
                </CardHeader>
                <CardContent className="p-10 pt-4">
                  <p className="text-white text-lg leading-relaxed mb-12">
                     {tier.desc}
                  </p>
                  <div className="flex items-center gap-4">
                     <div className="w-8 h-[2px] bg-white/10 group-hover:bg-accent transition-colors" />
                     <div className="font-mono text-[10px] text-white uppercase group-hover:text-accent transition-colors">Nominal</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
