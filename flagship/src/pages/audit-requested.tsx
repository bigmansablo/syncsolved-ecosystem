import Navbar from "@/components/Navbar";

export default function AuditRequested() {
  const steps = [
    { num: "01", label: "Diagnostic", description: "You describe the time-leaks and structural bottlenecks currently routing through your brain." },
    { num: "02", label: "Architecture", description: "We map the three specific protocols that will automate those decisions and free your bandwidth." },
    { num: "03", label: "Execution", description: "You choose between maintaining the status quo or deploying a systems-first growth engine." }
  ];

  return (
    <div className="bg-bg text-white min-h-screen">
      <Navbar />
      
      <main className="pt-40 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-block border border-accent/30 px-4 py-1 mb-12">
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">Protocol Secured // Ready for Access</span>
          </div>
          
          <h1 className="text-[clamp(40px,7vw,80px)] leading-[0.9] mb-12">
            INITIALIZE YOUR<br />VELOCITY AUDIT.
          </h1>
          
          <p className="max-w-xl mx-auto opacity-60 text-xl md:text-2xl mb-16 leading-relaxed">
            30 minutes. Absolute clinical mapping of your dependency traps. No theory. Just the architecture of your exit.
          </p>

          <a 
            href="https://cal.id/syncsolved/velocity-audit"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mb-32"
          >
            Choose your time slot →
          </a>

          <div className="grid md:grid-cols-3 gap-12 text-left border-t border-white/5 pt-24">
            {steps.map((step) => (
              <div key={step.num} className="group">
                <div className="font-mono text-accent text-sm mb-6 opacity-40 group-hover:opacity-100 transition-opacity">
                  STEP_{step.num}
                </div>
                <h3 className="text-2xl mb-4 group-hover:text-accent transition-colors">{step.label}</h3>
                <p className="opacity-50 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-32 pt-24 border-t border-white/5">
            <a href="/" className="font-mono text-[10px] uppercase tracking-widest opacity-40 hover:opacity-100 hover:text-accent transition-all duration-300">
              ← ABORT TO HOMEPAGE
            </a>
          </div>
        </div>
      </main>

      <footer className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="font-heading text-xl font-extrabold tracking-tighter opacity-40">SYNCSOLVED</div>
          <p className="font-mono text-[10px] opacity-40 uppercase tracking-widest">IN SYNC.</p>
        </div>
      </footer>
    </div>
  );
}
