"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Link from "next/link";

const cities = ["Cape Town", "London", "Los Angeles", "Hong Kong", "Dubai"];

export default function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-screen pointer-events-none">
         <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[100px] rounded-full" />
      </div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="font-heading text-xl font-extrabold text-white tracking-tighter uppercase mb-12 inline-block">
               SYNCSOLVED
            </Link>
            <p className="text-white text-lg leading-relaxed mb-12">
               Rebuilding business infrastructure for the modern age. Your expertise, encoded into deterministic assets.
            </p>
            <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
              CONTACT // <a href="mailto:hello@syncsolved.com" className="text-white hover:text-accent transition-colors">hello@syncsolved.com</a>
            </div>
          </div>

          <div>
            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12 font-bold">[ GLOBAL NODES ]</div>
            <ul className="space-y-6 text-lg text-white font-medium">
               {cities.map((city) => (
                 <li key={city}><Link href="/global" className="hover:text-accent transition-colors">{city}</Link></li>
               ))}
            </ul>
          </div>

          <div>
             <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12 font-bold">[ SYSTEM PROTOCOL ]</div>
             <ul className="space-y-6 text-lg text-white font-medium">
                <li><Link href="/manifesto" className="hover:text-accent transition-colors">The Manifesto</Link></li>
                <li><Link href="/process" className="hover:text-accent transition-colors">The Process</Link></li>
                <li><Link href="/research" className="hover:text-accent transition-colors">Research Hub</Link></li>
                <li><Link href="/about" className="hover:text-accent transition-colors">Our Mission</Link></li>
             </ul>
          </div>

          <div>
             <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12 font-bold">[ LEGAL / OPS ]</div>
             <ul className="space-y-6 text-lg text-white font-medium">
                <li><Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link></li>
                <li><div className="pt-4 font-mono text-xs text-white uppercase tracking-tighter">Status: Nominal<br />Load: 0.12ms<br />Build: v2.0.26</div></li>
             </ul>
          </div>
        </div>

        {/* System Terminal Bar */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-12 font-mono text-[10px] uppercase tracking-widest">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                 <span className="text-accent">IN SYNC.</span>
              </div>
              <div className="text-white">GMT {time}</div>
           </div>
           
           <div className="flex items-center gap-12">
              <div className="text-white">© 2026 SYNCSOLVED</div>
           </div>
        </div>
      </div>
    </footer>
  );
}
