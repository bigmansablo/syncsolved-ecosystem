"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function TermsPage() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      
      <section className="pt-40 pb-20 container mx-auto px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12 font-bold">[ LEGAL_02 ]</div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-24">Terms of<br /> Service.</h1>
          
          <div className="max-w-4xl space-y-12 text-lg text-white font-medium opacity-100 leading-relaxed">
             <p>The SyncSolved framework is a system designed to encode business expertise into deterministic assets. By using this system, you agree to maintain structural governance over all autonomous workflows deployed in your production environment.</p>
             <p>Liability for all business decisions remains with the authorized human operator. Our tools provide the infrastructure; the expert provides the logic.</p>
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
