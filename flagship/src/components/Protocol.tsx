export default function Protocol() {
  const layers = [
    { id: "01", name: "Engine", desc: "The foundational compute and primary automation runtime." },
    { id: "02", name: "Context", desc: "Your unique business intelligence and decision frameworks encoded." },
    { id: "03", name: "Registry", desc: "The central nervous system for all operational protocols." },
    { id: "04", name: "Capability", desc: "High-value skills transformed into executable modules." },
    { id: "05", name: "Momentum", desc: "Orchestration layers that maintain speed without human input." },
    { id: "06", name: "Protection", desc: "Security and compliance guardrails for autonomous assets." },
    { id: "07", name: "Governance", desc: "Human-in-the-loop protocols for high-variance decisions." },
    { id: "08", name: "Calibration", desc: "Recursive feedback loops that maintain output quality." }
  ];

  return (
    <section id="protocol" className="py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="font-mono text-accent text-sm tracking-widest mb-6 uppercase">The 8-Layer Foundation Architecture</p>
            <h2 className="text-6xl md:text-8xl">TERMINAL<br />INFRASTRUCTURE.</h2>
          </div>
          <p className="max-w-sm text-lg opacity-60 leading-relaxed font-medium">
            We don't "automate" workflows. We encode your expertise into a self-sustaining protocol that grows without your consent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {layers.map((layer) => (
            <div key={layer.id} className="bg-bg p-10 hover:bg-glass transition-colors group">
              <span className="font-mono text-accent text-4xl block mb-8 opacity-40 group-hover:opacity-100 transition-opacity">
                {layer.id}
              </span>
              <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">{layer.name}</h3>
              <p className="opacity-50 text-sm leading-relaxed">{layer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
