import Navbar from "@/components/Navbar";

export default function Process() {
  return (
    <div className="bg-bg text-white min-h-screen">
      <Navbar />
      <main className="pt-40 pb-20">
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12">The Protocol</div>
          <h1 className="text-7xl font-heading mb-16">THE PROCESS.</h1>
          
          <div className="space-y-60">
            {/* TIER 01-02: EXTRACTION & MAPPING */}
            <div className="relative pl-32 border-l border-white/10 py-12">
               <div className="absolute -left-4 top-12 h-8 w-8 bg-accent rounded-full border-4 border-bg" />
               <div className="absolute left-12 top-0 text-[180px] font-heading text-white opacity-[0.03] leading-none pointer-events-none">01</div>
               <h2 className="text-6xl text-accent font-heading mb-12 uppercase tracking-tighter">PHASE 01 // THE KNOWLEDGE EXTRACTION.</h2>
               <div className="grid md:grid-cols-2 gap-24">
                 <div className="space-y-8">
                   <p className="text-2xl text-white leading-relaxed font-bold">
                     We do not start with code. We start with the <strong>Neural Logic</strong> that currently lives in your head and nowhere else. 
                   </p>
                   <p className="text-lg text-white/70 leading-relaxed">
                     The greatest asset in your business is the judgment you apply to complex situations. Usually, this judgment is implicit. It is "the way we do things around here." We make it explicit. Through our <strong>Clinical Extraction Protocol</strong>, we map the variables you use to evaluate decisions. We interview the founder, the leadership team, and the key architects of your service delivery. 
                   </p>
                   <p className="text-lg text-white/70 leading-relaxed">
                     Outcome: A comprehensive <strong>Decision Matrix</strong> that serves as the blueprint for the entire autonomous build. We identify the "founder fingerprint"—the specific quality standards that cannot be compromised.
                   </p>
                 </div>
                 <div className="p-12 bg-white/5 border border-white/10 space-y-6">
                    <div className="font-mono text-xs text-accent">[ EXTRACTION_NODES ]</div>
                    <ul className="space-y-4 text-sm font-mono uppercase opacity-60">
                      <li>• Judgment Variable Mapping</li>
                      <li>• Quality Variance Identification</li>
                      <li>• Edge-Case Scenario Planning</li>
                      <li>• Context-Library Indexing</li>
                      <li>• Stakeholder Intent Alignment</li>
                    </ul>
                 </div>
               </div>
            </div>

            {/* TIER 03-05: ARCHITECTING THE ENGINE */}
            <div className="relative pl-32 border-l border-white/10 py-12">
               <div className="absolute -left-4 top-12 h-8 w-8 bg-accent rounded-full border-4 border-bg" />
               <div className="absolute left-12 top-0 text-[180px] font-heading text-white opacity-[0.03] leading-none pointer-events-none">02</div>
               <h2 className="text-6xl text-white font-heading mb-12 uppercase tracking-tighter">PHASE 02 // ENCODING THE CAPABILITY.</h2>
               <div className="grid md:grid-cols-2 gap-24">
                 <div className="space-y-8">
                   <p className="text-2xl text-white leading-relaxed font-bold">
                     Your logic is built into <strong>Fixed Infrastructure</strong> that lives within your own private cloud environment.
                   </p>
                   <p className="text-lg text-white/70 leading-relaxed">
                     This is the core engineering phase. We construct <strong>Capability Nodes</strong>—self-contained units of logic that perform specific, high-value tasks. Unlike traditional software, these nodes possess <strong>Judgment Layers</strong>. They can evaluate context, adjust their output based on nuance, and operate within the strict ethical and quality boundaries we extracted.
                   </p>
                   <p className="text-lg text-white/70 leading-relaxed">
                     Each node is designed to replace a human interaction point. Whether it's sales qualifying, operational triaging, or service delivery execution, the infrastructure becomes the primary processing layer of the company.
                   </p>
                 </div>
                 <div className="p-12 bg-white/5 border border-white/10 space-y-6">
                    <div className="font-mono text-xs text-accent">[ ENUMERATED_BUILD_STACK ]</div>
                    <ul className="space-y-4 text-sm font-mono uppercase opacity-60">
                      <li>• Private Cloud Provisioning (AWS/Azure)</li>
                      <li>• State-Space Logic Engineering</li>
                      <li>• Multi-Agent Handshake Protocols</li>
                      <li>• Secure Knowledge Graphing</li>
                      <li>• API Interoperability Hub</li>
                    </ul>
                 </div>
               </div>
            </div>

            {/* TIER 06-08: CALIBRATION & TRANSFER */}
            <div className="relative pl-32 border-l border-white/10 py-12">
               <div className="absolute -left-4 top-12 h-8 w-8 bg-accent rounded-full border-4 border-bg" />
               <div className="absolute left-12 top-0 text-[180px] font-heading text-white opacity-[0.03] leading-none pointer-events-none">03</div>
               <h2 className="text-6xl text-white font-heading mb-12 uppercase tracking-tighter">PHASE 03 // RECURSIVE CALIBRATION.</h2>
               <div className="grid md:grid-cols-2 gap-24">
                 <div className="space-y-8">
                   <p className="text-2xl text-white leading-relaxed font-bold">
                     The system reaches 99.9% founder-alignment through a <strong>Recursive Feedback Layer</strong>.
                   </p>
                   <p className="text-lg text-white/70 leading-relaxed">
                     A system is only as good as its feedback loop. We install a <strong>Calibration UI</strong> that allows you to review the system's outputs. When you make a correction, the system doesn't just fix that output; it updates its underlying <strong>Context Library</strong> so it never makes that mistake again. 
                   </p>
                   <p className="text-lg text-white/70 leading-relaxed">
                     Over 4-6 weeks, the system converges with your native capability. By the end of this phase, the system operates as a tireless extension of the founder’s brain, handling the volume of 10 employees with 0% of the overhead.
                   </p>
                 </div>
                 <div className="p-12 bg-white/5 border border-white/10 space-y-6">
                    <div className="font-mono text-xs text-accent">[ SYNC_PROTOCOL ]</div>
                    <ul className="space-y-4 text-sm font-mono uppercase opacity-60">
                      <li>• Intent Alignment Verification</li>
                      <li>• Error Matrix Resolution</li>
                      <li>• Context Density Expansion</li>
                      <li>• Final Architectural Handoff</li>
                      <li>• Autonomous Maintenance Handover</li>
                    </ul>
                 </div>
               </div>
            </div>

            {/* THE CONVERSION NODE */}
            <div className="py-40 border-y border-white/5 text-center">
               <h2 className="text-7xl md:text-9xl font-heading mb-12 leading-none">STRUCTURAL<br />INDEPENDENCE.</h2>
               <p className="text-3xl text-white max-w-4xl mx-auto leading-relaxed opacity-60 font-light italic">
                 "By encoding the logic, you kill the dependency. By killing the dependency, you free the founder. By freeing the founder, you unlock the enterprise."
               </p>
            </div>

            {/* DEEP DIVE SECTION FOR WORD COUNT */}
            <div className="space-y-32 py-20">
               <div className="max-w-4xl space-y-16">
                  <h3 className="text-5xl font-heading text-accent">THE 8-TIER ARCHITECTURE.</h3>
                  <div className="grid gap-20">
                     <div className="space-y-6">
                        <div className="text-accent font-mono text-lg font-bold border-b border-white/10 pb-4">[ TIER 1: MULTI-MODAL DATA INGESTION ]</div>
                        <p className="text-xl text-white/80 leading-relaxed">The system connects to all existing data silos—Slack, Email, CRM, Project Management tools—to build a comprehensive awareness of the current state of the business logic in real-time. We ingestion not just text, but sentiment, timing, and relationship graphs to ensure the context is absolute.</p>
                     </div>
                     <div className="space-y-6">
                        <div className="text-accent font-mono text-lg font-bold border-b border-white/10 pb-4">[ TIER 2: RECURSIVE CONTEXT PARSING ]</div>
                        <p className="text-xl text-white/80 leading-relaxed">The system doesn't just read data; it understands the *intent* behind it. We use localized vector databases to ensure the system knows which project, which client, and which stakeholder is involved in every internal interaction. It references the master "Philosophy Library" to align every data point with your brand thesis.</p>
                     </div>
                     <div className="space-y-6">
                        <div className="text-accent font-mono text-lg font-bold border-b border-white/10 pb-4">[ TIER 3: DETERMINISTIC LOGIC GATING ]</div>
                        <p className="text-xl text-white/80 leading-relaxed">Every potential output is filtered through a series of deterministic rules established during the Extraction phase. If an output violates a core principle of your brand or methodology, it is automatically flagged for review. This prevents the "AI hallucination" problem by enforcing a rigid logic layer on top of probabilistic models.</p>
                     </div>
                     <div className="space-y-6">
                        <div className="text-accent font-mono text-lg font-bold border-b border-white/10 pb-4">[ TIER 4: MULTI-AGENT HANDSHAKE & NEGOTIATION ]</div>
                        <p className="text-xl text-white/80 leading-relaxed">Different "specialist" agents are deployed for different functions—Sales, Operations, Quality Control. These agents "negotiate" with each other to reach a final decision, mimicking a high-performing leadership team. One agent might propose a solution, while the QC agent audits it for compliance, ensuring a multi-layered check before any action is taken.</p>
                     </div>
                     <div className="space-y-6">
                        <div className="text-accent font-mono text-lg font-bold border-b border-white/10 pb-4">[ TIER 5: AUTONOMOUS EXTERNAL EXECUTION ]</div>
                        <p className="text-xl text-white/80 leading-relaxed">Once a decision is reached and verified, the system takes action. It sends the email, updates the project board, generates the report, or communicates with the client via your established channels. This is where the labor replacement actually happens. The system becomes the worker, not just the advisor.</p>
                     </div>
                     <div className="space-y-6">
                        <div className="text-accent font-mono text-lg font-bold border-b border-white/10 pb-4">[ TIER 6: CONTINUOUS QUALITY CALIBRATION ]</div>
                        <p className="text-xl text-white/80 leading-relaxed">The system monitors its own success rate. We install quality monitors that track client sentiment and project velocity to alert humans if the system deviates from the master quality standard. It is a self-healing architecture that identifies its own weaknesses and requests founder-correction when it hits an edge case it hasn't mapped yet.</p>
                     </div>
                     <div className="space-y-6">
                        <div className="text-accent font-mono text-lg font-bold border-b border-white/10 pb-4">[ TIER 7: IP ENCRYPTION & ASSET INDEPENDENCE ]</div>
                        <p className="text-xl text-white/80 leading-relaxed">All encoded logic is encrypted within your private cloud. This ensures that the expertise we've built into the system becomes a unique, defensible intellectual property asset for your company. You are no longer renting a SaaS; you are building an appraisal-ready asset that significantly increases the multiple of your business.</p>
                     </div>
                     <div className="space-y-6">
                        <div className="text-accent font-mono text-lg font-bold border-b border-white/10 pb-4">[ TIER 8: FOUNDER OPTIONALITY LAYER ]</div>
                        <p className="text-xl text-white/80 leading-relaxed">The final tier is the removal of the founder. The dashboard provides a high-level view of system health, but requires 0% active intervention for daily operations. You move from being the Operator to the Owner. This is the true exit from dependency.</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
