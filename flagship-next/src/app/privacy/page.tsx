"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function PrivacyPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 container mx-auto px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12 font-bold">[ LEGAL_01 ]</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-24">Privacy<br /> Policy.</h1>
          
          <div className="max-w-4xl space-y-12 text-lg text-white font-medium opacity-100 leading-relaxed">
             <p>We do not sell your data. We do not use your proprietary workflows to train models that are not your own. All expertise encoded into SyncSolved systems remains your protected Intellectual Property.</p>
             <p>Our commitment to privacy is architectural. Encryption at rest and in transit is the baseline. We operate under clinical data isolation protocols for every business asset.</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
