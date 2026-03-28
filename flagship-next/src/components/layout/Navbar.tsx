"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const navItems = [
  { name: "Thesis", href: "/manifesto" },
  { name: "Protocol", href: "/process" },
  { name: "Global", href: "/global" },
];

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 backdrop-blur-sm border-b border-white/5 bg-black/20"
    >
      <Link href="/" className="flex items-center gap-2 group italic font-extrabold uppercase">
        <span className="font-heading text-xl tracking-tighter text-white">SYNCSOLVED</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-12 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
        {navItems.map((item) => (
          <Link 
            key={item.name} 
            href={item.href} 
            className="hover:text-accent transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden lg:block font-mono text-[8px] text-accent uppercase tracking-widest text-right leading-none">
          SYSTEM STATUS: NOMINAL<br />
          LOAD: 0.12ms
        </div>
        <Link 
          href="https://audit.syncsolved.com" 
          className="px-4 py-2 bg-white text-black text-[10px] uppercase font-bold tracking-widest hover:bg-accent hover:text-white transition-all duration-300 rounded-px"
        >
          Audit
        </Link>
      </div>
    </motion.nav>
  );
}
