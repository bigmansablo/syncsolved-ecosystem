export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-32">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl">
          <p className="font-mono text-accent text-sm tracking-[0.2em] mb-12 uppercase opacity-80">
            [ PHASE 01: THE EXIT FROM DEPENDENCY ]
          </p>
          
          <h1 className="text-[clamp(48px,10vw,140px)] leading-[0.85] mb-12">
            YOU BUILT A BUSINESS<br />
            THAT CANNOT RUN<br />
            WITHOUT YOU.
          </h1>
          
          <p className="text-2xl md:text-3xl font-medium text-white max-w-3xl mb-16 leading-tight">
            We replace labor-heavy businesses with fixed, compounding infrastructure. Your expertise, encoded. Your business, autonomous.
          </p>

          <div className="flex flex-col md:flex-row gap-8 items-start">
            <a 
              href="https://audit.syncsolved.com" 
              className="btn-primary group relative overflow-hidden"
            >
              <span className="relative z-10">Secure Your Architecture</span>
              <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
            
            <div className="flex flex-col gap-2 pt-2">
              <span className="font-mono text-[10px] opacity-40 uppercase tracking-widest">System Load</span>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="px-2 py-0.5 bg-accent text-bg text-[8px] font-bold">LOCKED</div>)}
                {[1, 2, 3, 4, 5, 6, 7].map(i => <div key={i} className="px-2 py-0.5 border border-white/10 text-[8px] opacity-20">OPEN</div>)}
              </div>
              <span className="font-mono text-[10px] opacity-60 uppercase tracking-widest">78% SYNCED // INITIALIZING NEXT ACCESSION</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
