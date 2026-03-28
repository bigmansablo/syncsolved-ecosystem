import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";

export default function Research() {
  const papers = [
    {
      title: "The Dependency Trap",
      desc: "An analysis of the cognitive bottleneck in founder-led organizations.",
      link: "/research/dependency-trap"
    },
    {
      title: "Velocity Architecture",
      desc: "Technical specifications of the 8-tier autonomous protocol.",
      link: "/research/velocity-architecture"
    },
    {
      title: "The Economics of Encoding",
      desc: "Why traditional labor-scaling is a race to the bottom.",
      link: "/research/labor-economics"
    }
  ];

  return (
    <div className="bg-bg text-white min-h-screen">
      <Navbar />
      <main className="pt-40 pb-20">
        <section className="container mx-auto px-6 max-w-5xl">
          <div className="font-mono text-xs text-accent uppercase tracking-widest mb-12">Knowledge Base</div>
          <h1 className="text-7xl font-heading mb-16">RESEARCH HUB.</h1>
          
          <div className="grid gap-12">
            {papers.map((paper, i) => (
              <Link to={paper.link} key={i} className="block p-12 border border-white/10 hover:border-accent transition-colors group">
                <div className="font-mono text-[10px] text-white/40 mb-4 uppercase">Paper // 0{i+1}</div>
                <h2 className="text-3xl font-heading mb-6 group-hover:text-accent transition-colors">{paper.title}</h2>
                <p className="text-xl text-white opacity-80 mb-8 leading-relaxed">{paper.desc}</p>
                <div className="text-accent font-mono text-xs uppercase tracking-widest">[ READ_PAPER ]</div>
              </Link>
            ))}
          </div>

          <div className="mt-40 p-12 bg-white/5 border border-white/10">
            <h3 className="text-2xl font-heading mb-8">THE ARCHITECTURAL SHIFT.</h3>
            <p className="text-lg text-white leading-relaxed mb-8">
              At SyncSolved, we don't just build software. We perform architectural surgery on business logic. Our research focuses on the transition from "Hollow Engines" to autonomous, compounding assets.
            </p>
            <p className="text-lg text-white leading-relaxed">
              We study the unit economics of human labor versus encoded capability. The results are clear: the future belongs to the lean, the modular, and the architectural.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
