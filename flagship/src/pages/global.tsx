import Navbar from "@/components/Navbar";

export default function GlobalPresence() {
  const cities = [
    { name: "Cape Town", role: "Design & UX Architecture", desc: "Our southern hub focused on creative execution and high-status interface design." },
    { name: "London", role: "Financial & Regulatory Logic", desc: "The center of our European operations, specialized in compliance and legal-grade judgment nodes." },
    { name: "Los Angeles", role: "Engineering & Logic Encoding", desc: "Primary technical node for core engine development and architectural extraction." },
    { name: "Hong Kong", role: "Asian Market Strategy", desc: "Expanding the SyncSolved protocol into high-growth markets with unique structural needs." },
    { name: "Dubai", role: "Emerging Tech Hub", desc: "Our Middle East operational center, focused on rapid deployment and high-velocity scaling." }
  ];

  return (
    <div className="bg-bg text-white min-h-screen">
      <Navbar />
      <main className="pt-40 pb-20">
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12">Universal Operation</div>
          <h1 className="text-7xl font-heading mb-16">GLOBAL NODES.</h1>
          
          <div className="space-y-40">
            <h2 className="text-5xl md:text-7xl font-heading text-accent leading-tight">A DECENTRALIZED<br />ARCHITECTURAL FIRM.</h2>
            <p className="text-2xl text-white leading-relaxed max-w-4xl font-medium">
              SyncSolved operates as a decentralized network of capability nodes. We do not believe in central offices; we believe in <strong>Strategic Proximity</strong> to the world’s most critical financial, technical, and creative flows. 
            </p>

            {/* CAPE TOWN */}
            <div className="py-24 border-t border-white/10 group">
               <div className="flex flex-col md:flex-row gap-20">
                  <div className="md:w-1/3">
                    <div className="text-accent font-mono text-xs uppercase tracking-widest mb-6">[ NODE_ZA_01 ]</div>
                    <h3 className="text-6xl font-heading mb-8 group-hover:text-accent transition-colors">CAPE TOWN</h3>
                    <div className="font-mono text-white/40 uppercase text-[10px] tracking-widest">Aesthetic & Interface Hub</div>
                  </div>
                  <div className="md:w-2/3 space-y-8">
                    <p className="text-xl text-white opacity-80 leading-relaxed font-medium">
                      Cape Town is the birthplace of the <strong>Monolith & Void</strong> design language. Our southern hub is dedicated to the visual and psychological layer of our 8-tier protocol. We believe that high-status infrastructure must project the same clinical precision it performs. 
                    </p>
                    <p className="text-lg text-white opacity-60 leading-relaxed">
                      This node specializes in the <strong>Context-UX</strong>—how a founder interacts with their autonomous engine. We study human-system ergonomics to ensure the dashboard transition from 'Operator' to 'Architect' is frictionless. Our architects in Cape Town are responsible for every interface deployed into our clients' private clouds.
                    </p>
                    <div className="pt-8 grid grid-cols-2 gap-8 font-mono text-[10px] uppercase opacity-40">
                       <div>• Design Token Repository</div>
                       <div>• Interface Logic Library</div>
                       <div>• User Psychology Mapping</div>
                       <div>• Visual Integrity Audits</div>
                    </div>
                  </div>
               </div>
            </div>

            {/* LOS ANGELES */}
            <div className="py-24 border-t border-white/10 group">
               <div className="flex flex-col md:flex-row gap-20">
                  <div className="md:w-1/3">
                    <div className="text-accent font-mono text-xs uppercase tracking-widest mb-6">[ NODE_US_01 ]</div>
                    <h3 className="text-6xl font-heading mb-8 group-hover:text-accent transition-colors">LOS ANGELES</h3>
                    <div className="font-mono text-white/40 uppercase text-[10px] tracking-widest">Core Engineering & Logic Encoding</div>
                  </div>
                  <div className="md:w-2/3 space-y-8">
                    <p className="text-xl text-white opacity-80 leading-relaxed font-medium">
                      Los Angeles is our primary technical processing node. This is where the raw <strong>Deterministic Engines</strong> are refined. We leverage the massive technical density of the Californian ecosystem to build the primary logic gates for Tier 01 and Tier 02 of the SyncSolved protocol.
                    </p>
                    <p className="text-lg text-white opacity-60 leading-relaxed">
                      Our LA architects focus on the <strong>Extraction Layer</strong>. They are the clinical leads who interview founders to map their judgment logic. By being physically present in the heart of the global tech economy, this node ensures our encoding techniques remain 2-3 years ahead of secondary market offerings.
                    </p>
                    <div className="pt-8 grid grid-cols-2 gap-8 font-mono text-[10px] uppercase opacity-40">
                       <div>• Engine Refinement Hub</div>
                       <div>• Logic Gate Engineering</div>
                       <div>• Knowledge Extraction Lead</div>
                       <div>• Performance Scaling Tests</div>
                    </div>
                  </div>
               </div>
            </div>

            {/* LONDON */}
            <div className="py-24 border-t border-white/10 group">
               <div className="flex flex-col md:flex-row gap-20">
                  <div className="md:w-1/3">
                    <div className="text-accent font-mono text-xs uppercase tracking-widest mb-6">[ NODE_UK_01 ]</div>
                    <h3 className="text-6xl font-heading mb-8 group-hover:text-accent transition-colors">LONDON</h3>
                    <div className="font-mono text-white/40 uppercase text-[10px] tracking-widest">Financial & Regulatory Protocol</div>
                  </div>
                  <div className="md:w-2/3 space-y-8">
                    <p className="text-xl text-white opacity-80 leading-relaxed font-medium">
                      The London node is responsible for the <strong>Regulatory & Financial Layer</strong> of our implementations. We study the intersection of autonomous systems and international compliance standards to ensure every node we deploy is secured by design for institutional-grade operations.
                    </p>
                    <p className="text-lg text-white opacity-60 leading-relaxed">
                      Our London architects work closely with legal and financial frameworks to encode <strong>Judgment Logic</strong> that satisfies the complex requirements of the European and Middle Eastern markets. This is where we build the "Shield" for our client's autonomous infrastructure.
                    </p>
                    <div className="pt-8 grid grid-cols-2 gap-8 font-mono text-[10px] uppercase opacity-40">
                       <div>• Compliance Architecture</div>
                       <div>• Risk Mitigation Logic</div>
                       <div>• Institutional Handshake</div>
                       <div>• Security Protocol Audit</div>
                    </div>
                  </div>
               </div>
            </div>

            {/* HONG KONG & DUBAI */}
            <div className="py-24 border-t border-white/10 group">
               <div className="flex flex-col md:flex-row gap-20">
                  <div className="md:w-1/3">
                    <div className="text-accent font-mono text-xs uppercase tracking-widest mb-6">[ NODE_ASIA_ME_01 ]</div>
                    <h3 className="text-6xl font-heading mb-8 group-hover:text-accent transition-colors">HK / DUBAI</h3>
                    <div className="font-mono text-white/40 uppercase text-[10px] tracking-widest">Strategic Scaling & New Markets</div>
                  </div>
                  <div className="md:w-2/3 space-y-8">
                    <p className="text-xl text-white opacity-80 leading-relaxed font-medium">
                      Our Hong Kong and Dubai nodes represent the frontier of the <strong>Velocity Protocol</strong>. We study the rapid-scaling economies of Asia and the Middle East to bring those same architectural principles to our global client base. 
                    </p>
                    <p className="text-lg text-white opacity-60 leading-relaxed">
                      These nodes focus on <strong>Multi-Agent Orchestration</strong> at scale. How does a system handle 10,000 customers with zero latency? How does it adapt to different cultural judgment matrices? These are the questions our architects in HK and Dubai solve daily, ensuring the SyncSolved thesis is truly universal.
                    </p>
                    <div className="pt-8 grid grid-cols-2 gap-8 font-mono text-[10px] uppercase opacity-40">
                       <div>• Market Velocity Strategy</div>
                       <div>• Multi-Cultural Logic</div>
                       <div>• High-Volume Orchestration</div>
                       <div>• Regional Sync Protocols</div>
                    </div>
                  </div>
               </div>
            </div>

            <div className="py-40 border-t border-white/10">
                <h2 className="text-5xl font-heading mb-16 uppercase">OPERATIONAL CONTINUITY.</h2>
                <div className="grid md:grid-cols-2 gap-24 text-xl text-white font-medium leading-relaxed">
                    <p>
                        We do not believe in central offices. We believe in <strong>Strategic Proximity</strong>. By maintaining nodes in the world's most critical financial and technical centers, we ensure that our Velocity Architecture remains at the cutting edge of global business logic.
                    </p>
                    <p>
                        Our Dubai and London nodes focus heavily on the Regulatory Layer of our 8-tier protocol. This ensures that every autonomous system we deploy satisfies the complex legal requirements of international trade. We build infrastructure that is not only fast but <strong>Secured by Design</strong>.
                    </p>
                </div>
                <div className="mt-20 p-16 bg-white/5 border border-white/10 italic text-3xl leading-snug">
                   "Geography is no longer a restriction. It is a strategic layer of your business architecture. We use the world's cities as the processing units of our global vision."
                </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
