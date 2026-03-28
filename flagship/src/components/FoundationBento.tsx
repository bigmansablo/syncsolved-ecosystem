import { Card } from "@/components/ui/card";

const layers = [
  { step: "01", title: "Engine", desc: "Domain-optimized neural compute. Pre-calibrated for high-status output.", tech: "Claude 3.5 / Custom Weights" },
  { step: "02", title: "Context", desc: "Encoded business DNA. Quality thresholds, decision history, and bias mapping.", tech: "Vector DB / Knowledge Graph" },
  { step: "03", title: "Modules", desc: "Packaged expertise modules that execute judgment without founder involvement.", tech: "Autonomous Logic" },
  { step: "04", title: "Connections", desc: "API orchestration. Giving the architecture 'hands' to act on the world.", tech: "Webhooks / Custom Bridges" },
  { step: "05", title: "Orchestration", desc: "Multi-agent coordination. Modules communicating to solve non-linear problems.", tech: "State-Space Logic" },
  { step: "06", title: "Protection", desc: "Clinical security layer. Sandboxing, audit trails, and prompt injection defense.", tech: "Zero Trust Protocol" },
  { step: "07", title: "Governance", desc: "Human-in-the-loop workflows. Transparency, liability, and regulatory compliance.", tech: "EU AI Act Ready" },
  { step: "08", title: "Calibration", desc: "Recursive feedback loops. The system identifies drift and self-optimizes.", tech: "Auto-Tuning" },
];

export default function FoundationBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5 border border-white/5">
      {layers.map((layer) => (
        <Card key={layer.step} className="bg-bg p-8 border-none flex flex-col justify-between min-h-[300px] hover:bg-white/[0.02] transition-colors group">
          <div>
            <div className="font-mono text-xs text-accent mb-8 group-hover:animate-pulse transition-opacity">PROTOCOL // {layer.step}</div>
            <h3 className="text-2xl mb-4 text-white">{layer.title}</h3>
            <p className="text-sm text-white leading-relaxed italic">{layer.desc}</p>
          </div>
          <div className="mt-8 pt-8 border-t border-white/5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-accent">{layer.tech}</span>
          </div>
        </Card>
      ))}
    </div>
  );
}
