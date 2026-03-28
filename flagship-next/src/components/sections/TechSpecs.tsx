"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MagicCard } from "@/components/ui/magic-card";

// Recreate React Bits BlurText behavior
const BlurText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  return (
    <motion.span
      initial={{ filter: "blur(10px)", opacity: 0, y: 10 }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {text}
    </motion.span>
  );
};

export default function TechSpecs() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const specs = [
    {
      id: "01",
      title: "Cognitive Infrastructure",
      subtitle: "Deterministic layers vs probabilistic AI.",
      content: "Recursive calibration ensures 99.9% alignment with founder-intent. Knowledge encoding for permanent IP assets. We don't train models; we engineer judgment gates.",
      metrics: ["99.9% Alignment", "Zero Output Drift", "Persistent Memory Context"]
    },
    {
      id: "02",
      title: "Autonomous Logic Gates",
      subtitle: "Multi-agent orchestration removing founder bottlenecks.",
      content: "Decentralized processing nodes that don't sleep, don't vary, and don't pause. Systemic triggers firing APIs identically, creating absolute operational fidelity.",
      metrics: ["0ms Hesitation", "Multi-Threaded Nodes", "API Native Orchestra"]
    },
    {
      id: "03",
      title: "Structural Optionality",
      subtitle: "Exit-readiness as a default state.",
      content: "Shifting from labor-dependent mass to capital-efficient architecture. Unit economics redefined by pushing operational load entirely into autonomous logic layers.",
      metrics: ["Balance Sheet Shift", "Labor De-Coupling", "Infinite Scale Ceiling"]
    },
    {
      id: "04",
      title: "Recursive Calibration",
      subtitle: "Founder judgment as High-Density Training Data.",
      content: "Correction loops that instantly encode logic into context libraries. Every correction becomes permanent architecture. Exponential refinement without management drag.",
      metrics: ["Instant Compilation", "Feedback Retention", "Architectural Scaling"]
    }
  ];

  return (
    <section ref={containerRef} className="py-40 bg-black/10 backdrop-blur-sm relative overflow-hidden">
      <div className="container mx-auto px-8 max-w-7xl relative z-10">
        
        <div className="mb-24 flex flex-col md:flex-row items-end justify-between gap-12 border-b border-white/10 pb-12">
          <div>
            <div className="font-mono text-[10px] text-accent uppercase tracking-[0.3em] mb-8 font-bold flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              [ CLINICAL ARCHITECTURAL BUILD ]
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white uppercase leading-none">
              <BlurText text="TECHNICAL" delay={0.1} className="block" />
              <BlurText text="SPECIFICATIONS." delay={0.2} className="block text-accent" />
            </h2>
          </div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-white uppercase tracking-widest text-right leading-loose"
          >
            Density: Extreme<br />
            Status: Synchronized<br />
            Node Check: Nominal
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5 mx-auto">
          {specs.map((spec, i) => (
            <MagicCard
              key={spec.id}
              className="group cursor-pointer bg-black/40 backdrop-blur-md rounded-none border-none p-12 md:p-16 h-full relative overflow-hidden flex-col justify-between transition-all duration-700"
              gradientColor="rgba(0, 255, 157, 0.08)"
            >
              <div className="relative z-10 space-y-12">
                <div className="flex justify-between items-start">
                  <div className="font-mono text-accent text-[10px] uppercase font-bold tracking-[0.3em] group-hover:text-accent transition-colors duration-500">
                    Module // {spec.id}
                  </div>
                  <div className="w-1.5 h-1.5 bg-white/20 rounded-full group-hover:bg-accent group-hover:shadow-[0_0_10px_rgba(251,191,36,0.8)] transition-all duration-500" />
                </div>
                
                <div>
                  <h3 className="text-3xl lg:text-4xl text-white font-bold tracking-tight uppercase leading-[0.9] mb-4 group-hover:text-white transition-colors duration-300">
                    {spec.title}
                  </h3>
                  <p className="font-mono text-xs text-accent mb-6 uppercase tracking-widest h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 group-hover:mb-6 transition-all duration-500 overflow-hidden transform translate-y-4 group-hover:translate-y-0">
                    {spec.subtitle}
                  </p>
                  <p className="text-white text-lg leading-relaxed font-medium group-hover:text-white transition-colors duration-500">
                    {spec.content}
                  </p>
                </div>
              </div>

              {/* Reveal Specs on Hover */}
              <div className="absolute left-12 right-12 bottom-0 h-0 opacity-0 group-hover:h-24 group-hover:opacity-100 transition-all duration-500 flex items-end pb-8">
                <div className="grid grid-cols-3 gap-4 w-full border-t border-white/10 pt-6">
                  {spec.metrics.map((metric, idx) => (
                    <div key={idx} className="font-mono text-[9px] text-white uppercase tracking-widest">
                      <div className="text-accent mb-1 inline-block">[+]</div>
                      <br/>{metric}
                    </div>
                  ))}
                </div>
              </div>

              {/* Paradoxical Heavy Tech Background on Hover */}
              <div className="absolute -bottom-24 -right-24 font-mono text-[120px] font-extrabold text-white/[0.02] group-hover:text-accent/[0.04] transition-colors duration-700 pointer-events-none tracking-tighter">
                {spec.id}
              </div>
            </MagicCard>
          ))}
        </div>
      </div>

      <motion.div style={{ y: y1 }} className="absolute left-[5%] top-1/4 w-[1px] h-64 bg-gradient-to-b from-transparent via-accent/50 to-transparent blur-[1px]" />
      <motion.div style={{ y: y2 }} className="absolute right-[5%] bottom-1/4 w-[1px] h-64 bg-gradient-to-b from-transparent via-accent/30 to-transparent blur-[1px]" />
    </section>
  );
}
