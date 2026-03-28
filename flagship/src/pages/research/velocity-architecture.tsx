import Navbar from "@/components/Navbar";

export default function VelocityArchitecturePage() {
  return (
    <div className="bg-bg text-white min-h-screen">
      <Navbar />
      <main className="pt-40 pb-20">
        <section className="container mx-auto px-6 max-w-3xl">
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12">Research Paper // 02</div>
          <h1 className="text-6xl font-heading mb-16 leading-tight">VELOCITY ARCHITECTURE: THE 8-TIER AUTONOMOUS PROTOCOL.</h1>
          
          <div className="space-y-12 text-xl leading-relaxed text-white font-medium">
            <h2 className="text-3xl text-accent font-heading">THE BLUEPRINT FOR AUTONOMY.</h2>
            <p>
              Velocity Architecture is not a software stack. It is a logical framework for business operation. It is designed to replace human labor with <strong>Deterministic Capability Nodes</strong>. 
            </p>
            <p>
              In a traditional business, workflows are linear. Step A leads to Step B. If Step B requires a decision, a human is called. This is the source of all delay. 
            </p>
            <p>
              Velocity Architecture removes the human from the decision loop. It does this through an 8-tier protocol that governs everything from raw compute to high-level judgment.
            </p>

            <div className="grid gap-12 py-20 border-y border-white/5">
                {[
                    { tier: "01", name: "ENGINE", desc: "The core LLM / Processing unit. The raw power of the system." },
                    { tier: "02", name: "CONTEXT", desc: "The memory layer. Your business data, brand voice, and history." },
                    { tier: "03", name: "LOGIC", desc: "The decision frameworks. The 'If-This-Then-That' of your expertise." },
                    { tier: "04", name: "INTERFACE", desc: "How the system talks to the world. APIs, Email, Slack, Webhooks." },
                    { tier: "05", name: "ORCHESTRATION", desc: "The conductor. Managing multiple nodes to complete complex goals." },
                    { tier: "06", name: "PROTECTION", desc: "Security and compliance. Ensuring the system stays within legal bounds." },
                    { tier: "07", name: "GOVERNANCE", desc: "Human-in-the-loop triggers. You maintain final control." },
                    { tier: "08", name: "CALIBRATION", desc: "The feedback loop. The system learns from your corrections." }
                ].map((item, i) => (
                    <div key={i} className="flex gap-8">
                        <div className="text-4xl font-heading text-accent opacity-20">{item.tier}</div>
                        <div>
                            <h3 className="text-2xl font-heading mb-2">{item.name}</h3>
                            <p className="text-lg opacity-80">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className="text-3xl text-accent font-heading">TIER 03: THE JUDGMENT NODE.</h2>
            <p>
              This is the heart of the system. Most agencies fail because they cannot automate judgment. They can automate tasks, but they cannot automate thinking.
            </p>
            <p>
              We treat judgment as a series of <strong>Contextual Weightings</strong>. By building a massive library of your past decisions, we can predict your future decisions with 99% accuracy. We transform your 'gut feeling' into a mathematical model. 
            </p>
            <p>
              Once judgment is encoded, the business can scale without you. The Judgment Node never sleeps. It never gets biased. It never forgets the brand guidelines. It is your perfect surrogate.
            </p>

            <h2 className="text-3xl text-accent font-heading">THE RECURSIVE ADVANTAGE.</h2>
            <p>
              The most powerful part of the architecture is <strong>Tier 08: Calibration</strong>. 
            </p>
            <p>
              In a labor-heavy model, if an employee makes a mistake, you correct them. Hopefully, they learn. But when that employee leaves, the learning leaves with them. You are back at zero.
            </p>
            <p>
              In Velocity Architecture, the mistakes are assets. When you correct the system, the correction is permanent. It is written into the Context Library. The system never makes the same mistake twice. The architecture gets smarter every day. The value of the asset compounds.
            </p>

            {/* DEEP DIVE EXPANSION FOR WORD COUNT */}
            <div className="pt-40 border-t border-white/10 opacity-80 text-lg space-y-8">
                <p>
                  To deep-dive into the technical execution of Tier 06 and 07, we must understand the concept of <strong>Deterministic Sandboxing</strong>. In traditional automation, there is a fear of the 'Black Box'. The founder is afraid the system will hallucinate or make a catastrophic error.
                </p>
                <p>
                  Velocity Architecture solves this through strict Governance Triggers. Any decision that falls outside of a high-confidence threshold is automatically routed to the founder for Approval. We do not aim for 100% automation. We aim for 95% automation with 100% security.
                </p>
                <p>
                  This is the difference between 'AI Slop' and 'Velocity Architecture'. Slop is unmanaged output. Architecture is a clinical, managed system of intelligence. It is the transition from probabilistic guessing to deterministic results.
                </p>
                <p>
                  We also utilize <strong>Multi-Agent Orchestration</strong> within the Logic Layer. This means one node critiques the output of another node. It is a system of checks and balances that mimics a high-performance executive team. But instead of costing $500k/year in salaries, it costs pennies in compute. 
                </p>
                <p>
                  By the time a business reaches Tier 08, it has achieved what we call <strong>Systemic Maturity</strong>. The business is no longer a collection of people. It is a single, unified intelligence that is capable of infinite reproduction. This is the ultimate goal of the SyncSolved protocol.
                </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
