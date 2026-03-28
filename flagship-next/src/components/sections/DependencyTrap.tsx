"use client";

import { motion } from "framer-motion";
import { BentoGrid, BentoCard } from "@/components/ui/BentoGrid";
import { Clock, Infinity as LucideInfinity, Cpu, Database } from "lucide-react";

const traps = [
  {
    name: "Commodity Agency",
    description: "Scale by adding human mass. As you grow, you get slower and more fragile.",
    href: "/process",
    cta: "Architecture fix",
    background: <div className="absolute inset-0 bg-accent/5 transition-opacity group-hover:opacity-10" />,
    Icon: Clock,
    className: "lg:col-span-2 lg:row-span-1 border-accent/10",
  },
  {
    name: "Linear Growth",
    description: "Every dollar in requires more labor. Your margin is a prisoner.",
    href: "/process",
    cta: "The Protocol",
    background: <div className="absolute inset-0 bg-accent/5 transition-opacity group-hover:opacity-10" />,
    Icon: LucideInfinity,
    className: "lg:col-span-1 lg:row-span-1 border-accent/10",
  },
  {
    name: "Rented Talent",
    description: "The skills live in employee heads. If they leave, the IP goes with them.",
    href: "/process",
    cta: "Systemize now",
    background: <div className="absolute inset-0 bg-accent/5 transition-opacity group-hover:opacity-10" />,
    Icon: Database,
    className: "lg:col-span-1 lg:row-span-1 border-accent/10",
  },
  {
    name: "Hero-Operating",
    description: "You are the bottleneck. Every decision travels through your inbox.",
    href: "/process",
    cta: "Exit now",
    background: <div className="absolute inset-0 bg-accent/5 transition-opacity group-hover:opacity-10" />,
    Icon: Cpu,
    className: "lg:col-span-2 lg:row-span-1 border-accent/10",
  },
];

export default function DependencyTrap() {
  return (
    <section className="py-40 bg-black/20 backdrop-blur-sm border-y border-white/5">
      <div className="container mx-auto px-8">
        <div className="max-w-4xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-12 uppercase"
          >
            THE<br />
            DEPENDENCY<br />
            <span className="text-accent">TRAP.</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-white leading-relaxed max-w-2xl">
            Effort isn't your problem. Structure is. Most businesses are built as labor-traps where scale equals suffering.
          </p>
        </div>
        
        <BentoGrid className="lg:grid-rows-2">
          {traps.map((trap) => (
            <BentoCard key={trap.name} {...trap} />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}
