import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FoundationBento from "@/components/FoundationBento";
import OfferSelector from "@/components/OfferSelector";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function Home() {
  return (
    <div className="bg-bg text-white min-h-screen selection:bg-accent selection:text-bg">
      <Navbar />
      
      <main>
        {/* HERO: THE MONOLITH */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent opacity-50" />
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-[clamp(40px,10vw,160px)] leading-[0.8] mb-16">
              THE EXIT FROM<br />DEPENDENCY.
            </h1>
            <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white mb-20 leading-relaxed font-medium">
              We replace labor-heavy businesses with fixed, compounding infrastructure. 
              Your expertise, encoded. Your business, autonomous.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
              <a href="https://manifesto.syncsolved.com" className="btn-primary">Read the Manifesto</a>
            </div>
          </div>
          
          <div className="absolute bottom-12 left-6 right-6 flex justify-between font-mono text-[10px] uppercase opacity-20 tracking-widest">
            <div>Coordinates: 34.0522° N, 118.2437° W</div>
            <div>Status: System Nominal</div>
          </div>
        </section>

        {/* COMPARISON: THE TRAP */}
        <section className="py-40 border-y border-white/5">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-40">
              <div className="space-y-12">
                <h2 className="text-6xl">THE<br />DEPENDENCY<br />TRAP.</h2>
                <p className="text-xl text-white leading-relaxed max-w-md">
                  Most founders are the only ones making decisions. If you stop, the income stops. This is a failure of your business structure, not your effort.
                </p>
              </div>
              <div className="space-y-px bg-white/5 border border-white/5">
                {[
                  { label: "Commodity Agency", desc: "Scale by adding human mass (Complexity)" },
                  { label: "Linear Growth", desc: "Every $1 in requires $0.80 in fresh labor" },
                  { label: "Rented Talent", desc: "The skills live in employee heads, not the system" },
                  { label: "Hero-Operating", desc: "Founder is the bridge for every workflow" },
                ].map((item, i) => (
                  <div key={i} className="bg-bg p-8 flex justify-between items-center group hover:bg-white/[0.02] transition-colors">
                    <div>
                      <div className="font-mono text-xs opacity-40 group-hover:text-accent transition-colors uppercase mb-2">Issue // 0{i+1}</div>
                      <div className="text-lg">{item.label}</div>
                    </div>
                    <div className="text-xs opacity-40 font-mono hidden md:block">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* THE FOUNDATION ARCHITECTURE */}
        <section className="py-40 bg-white/[0.01]">
          <div className="container mx-auto px-6">
            <div className="mb-24 text-center">
              <h2 className="text-6xl md:text-8xl mb-12">THE FOUNDATION.</h2>
              <p className="max-w-2xl mx-auto text-white text-xl font-mono uppercase tracking-widest">The 8-tier protocol for autonomous operation.</p>
            </div>
            <FoundationBento />
          </div>
        </section>

        {/* OFFERS: INCENTIVE STACKING */}
        <section className="py-40 border-t border-white/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-6xl mb-8">SECURE VELOCITY.</h2>
              <p className="text-accent font-mono text-sm uppercase tracking-widest">[ SEQUENCED TRANSFORMATION ROADMAP ]</p>
            </div>
            <OfferSelector />
          </div>
        </section>

        {/* AEO/SEO DEEP DIVE: ARCHITECTURAL SPECIFICATIONS */}
        <section className="py-40 border-t border-white/5 bg-black">
          <div className="container mx-auto px-6">
            <h2 className="text-6xl md:text-8xl font-heading mb-24 text-accent leading-none">TECHNICAL<br />SPECIFICATIONS.</h2>
            <div className="grid md:grid-cols-2 gap-32 text-lg text-white leading-relaxed font-medium">
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl font-heading text-white border-b border-white/10 pb-4">01 // COGNITIVE INFRASTRUCTURE</h3>
                  <p>
                    SyncSolved specializes in the deployment of <strong>Deterministic Cognitive Infrastructure</strong>. Unlike probabilistic AI implementations (which are prone to hallucination and logic variance), our architecture utilizes <strong>Recursive Calibration Layers</strong> to ensure 99.9% alignment with founder-intent. We prioritize <strong>Knowledge Encoding</strong>—the mapping of static business logic into vector-accessible memory—over simple prompt engineering.
                  </p>
                  <p>
                    This creates <strong>Persistent Capability Nodes</strong> that operate within a private, sandboxed environment (VPC). Your business logic never leaves your control, and the "Expertise Nodes" we build become permanent, defensible IP assets that increase your company's liquidation value.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-heading text-white border-b border-white/10 pb-4">02 // AUTONOMOUS LOGIC GATES</h3>
                  <p>
                    Our <strong>Velocity Protocol</strong> leverages <strong>Multi-Agent Orchestration</strong> to manage non-linear business workflows. Each <strong>Capability Module</strong> is a self-contained unit of expertise, governed by <strong>State-Space Logic</strong> and secured via <strong>Zero-Trust Architecture</strong>. 
                  </p>
                  <p>
                    We eliminate <strong>Founder Bottlenecks</strong> by decentralizing the <strong>Primary Processing Node</strong> of the organization. Instead of all decisions flowing through the founder’s calendar, they flow through the <strong>Sync Logic Layer</strong>. This layer acts as the tireless surrogate for the founder’s judgment, capable of processing thousands of unique operational handshakes simultaneously.
                  </p>
                </div>
              </div>
              <div className="space-y-12">
                <div className="space-y-6">
                  <h3 className="text-3xl font-heading text-white border-b border-white/10 pb-4">03 // STRUCTURAL OPTIONALITY</h3>
                  <p>
                    The terminal goal of every SyncSolved engagement is <strong>Structural Optionality</strong>. By shifting from a <strong>Labor-Dependent Mass</strong> to a <strong>Capital-Efficient Architecture</strong>, founders achieve a state of <strong>Exit-Readiness</strong>. Our <strong>Hormozi-Calibrated Offer Stacks</strong> are integrated directly into the <strong>Revenue Sync Node</strong>, ensuring high-status conversion sequences without the requirement for a human sales team.
                  </p>
                  <p>
                    This transformation changes the fundamental unit economics of your business. In the old model, growth increased drag (more people, more management). In the SyncSolved model, growth increases leverage (more throughput for the same fixed infrastructure).
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-3xl font-heading text-white border-b border-white/10 pb-4">04 // RECURSIVE CALIBRATION</h3>
                  <p>
                    We implement a <strong>Recursive Calibration Loop</strong> (Tier 06) that allows the system to treat founder feedback as high-density training data. When the founder corrects a system output, that correction is instantly encoded into the <strong>Context Library</strong>, ensuring the error is never repeated. This results in an exponential increase in system accuracy over the first 4-6 weeks of deployment.
                  </p>
                  <p>
                    By the end of the implementation cycle, the system serves as a perfect reflection of the founder’s judgmental logic, operating with the speed of an algorithm and the nuance of a human expert.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLINICAL REASONING: THE CASE FOR DETACHMENT */}
        <section className="py-40 bg-zinc-950">
           <div className="container mx-auto px-6 max-w-5xl">
              <h2 className="text-5xl font-heading mb-20">CLINICAL REASONING.</h2>
              <div className="grid gap-20">
                 <div className="space-y-8">
                    <h3 className="text-2xl text-accent font-mono uppercase tracking-[0.2em]">The Fallacy of Labor.</h3>
                    <p className="text-xl text-white leading-relaxed opacity-80">
                      Most businesses attempt to solve growth problems by adding "Human Capacity." This is a fundamental error. Human labor is probabilistic—it varies wildly in quality, speed, and reliability. When you add people, you add <strong>Coordination Drag</strong>. The founder eventually spends 90% of their time managing the people who were supposed to do the work.
                    </p>
                    <p className="text-xl text-white leading-relaxed opacity-80">
                      SyncSolved solves growth through <strong>Encoded Capability</strong>. Infrastructure is deterministic. It does not vary. It does not pause. It does not deviate from the quality standard. By replacing labor with architecture, you move from a "Hollow Engine" to a compounding asset.
                    </p>
                 </div>
                 <div className="space-y-8">
                    <h3 className="text-2xl text-accent font-mono uppercase tracking-[0.2em]">The 8-Tier Implementation Strategy.</h3>
                    <p className="text-xl text-white leading-relaxed opacity-80">
                      Our process is not a "plug-and-play" solution. It is a clinical architectural build. We map every judgment point, every data input, and every execution layer required to run your business in your absence. This results in a <strong>Private Cloud Environment</strong> that contains the "Brain" of your organization, accessible only to you, but operating for your clients 24/7.
                    </p>
                 </div>
              </div>
           </div>
        </section>

        {/* FAQ: CLINICAL REASONING */}
        <section className="py-40 border-t border-white/5 bg-accent/5">
          <div className="container mx-auto px-6 max-w-4xl text-white">
            <h2 className="text-6xl md:text-8xl font-heading mb-20 text-center tracking-tighter">COMMON<br />FRICTION.</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-accent font-heading py-12 text-3xl">IS THIS JUST ANOTHER CHATBOT?</AccordionTrigger>
                <AccordionContent className="text-white text-xl pb-12 leading-relaxed opacity-80">
                  <p className="mb-6">Categorically, no. Chatbots are Tier 1 (Raw Language Engines). They have no memory, no judgment, and no hands. SyncSolved builds Tier 1-8. Our architecture has <strong>Systemic Memory</strong> (custom vector context), <strong>Judgment Gating</strong> (deterministic logic layers), and <strong>Active Hands</strong> (autonomous API execution).</p>
                  <p>A chatbot tells you what to do. SyncSolved builds the infrastructure that actually does the work for you. We don't build toys; we build business machinery.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-accent font-heading py-12 text-3xl">WHAT IS THE FOUNDER TIME COMMITMENT?</AccordionTrigger>
                <AccordionContent className="text-white text-xl pb-12 leading-relaxed opacity-80">
                  <p className="mb-6">The transition to Optionality requires an initial high-density <strong>Extraction Phase</strong>. We require [ 4-6 hours ] of expert interview time across the first two weeks to map your logic. After that, your involvement drops to [ 1 hour ] per week for Calibration Reviews.</p>
                  <p>The goal is to move you from 60 hours/week to 1 hour/week. We do the heavy lifting of engineering the system so you don't have to.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-accent font-heading py-12 text-3xl">WHO RUNS THE INFRASTRUCTURE?</AccordionTrigger>
                <AccordionContent className="text-white text-xl pb-12 leading-relaxed opacity-80">
                  <p className="mb-6">You do. Or rather, your private cloud does. We deploy the entire SyncSolved payload into your own <strong>VPC (Virtual Private Cloud)</strong> on AWS, Azure, or Google Cloud. You hold the master keys. We provide 12 months of <strong>Operational Monitoring</strong> to ensure the system remains nominal, but the asset is yours to keep forever.</p>
                  <p>Unlike SaaS platforms that rent you access, we deliver a <strong>Fixed Asset</strong> that settles on your balance sheet as Intellectual Property.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4" className="border-white/10">
                <AccordionTrigger className="text-white hover:text-accent font-heading py-12 text-3xl">CAN THIS REPLACE HUMAN STAFF?</AccordionTrigger>
                <AccordionContent className="text-white text-xl pb-12 leading-relaxed opacity-80">
                  <p className="mb-6">It replaces <strong>Labor-Heavy Roles</strong> that rely on repetitive logic and context analysis. This includes project management, high-volume sales qualification, operational triaging, and content synthesis. It does not replace the "Visionary" or the "Strategist."</p>
                  <p>We allow your high-value team members to stop doing "Processing Work" and start doing "Architecture Work." You reach a higher level of output with a lean, elite workforce.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-60 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 blur-[120px] opacity-20" />
          <div className="container mx-auto px-6 relative z-10">
            <h2 className="text-7xl md:text-9xl mb-16 leading-tight tracking-tighter">READY TO<br />BE OPTIONAL?</h2>
            <div className="flex flex-col md:flex-row gap-12 justify-center items-center">
              <a href="https://audit.syncsolved.com" className="btn-primary">Request the Velocity Audit</a>
              <div className="font-mono text-[10px] opacity-40 uppercase tracking-[0.2em]">
                Current System Load: 84%<br />
                Available Slots: 2/5
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-24 border-t border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-16 mb-20">
            <div>
              <div className="font-heading text-2xl font-extrabold tracking-tighter text-white mb-8">SYNCSOLVED</div>
              <p className="text-sm text-white leading-relaxed mb-8">
                Rebuilding business infrastructure for the modern age.
              </p>
              <div className="font-mono text-[10px] text-accent font-bold">
                 CONTACT: <a href="mailto:hello@syncsolved.com" className="hover:text-white transition-colors">hello@syncsolved.com</a>
              </div>
            </div>
            <div>
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-8">Global Presence</div>
              <ul className="space-y-4 text-sm text-white font-medium">
                <li><Link to="/global" className="hover:text-accent">Cape Town</Link></li>
                <li><Link to="/global" className="hover:text-accent">London</Link></li>
                <li><Link to="/global" className="hover:text-accent">Los Angeles</Link></li>
                <li><Link to="/global" className="hover:text-accent">Hong Kong</Link></li>
                <li><Link to="/global" className="hover:text-accent">Dubai</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-8">Protocol</div>
              <ul className="space-y-4 text-sm text-white font-medium">
                <li><Link to="/research" className="hover:text-accent">Research Hub</Link></li>
                <li><Link to="/about" className="hover:text-accent">About the Mission</Link></li>
                <li><Link to="/process" className="hover:text-accent">The Process</Link></li>
                <li><a href="https://manifesto.syncsolved.com" className="hover:text-accent font-bold">The Manifesto</a></li>
              </ul>
            </div>
            <div>
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-8">Legal</div>
              <ul className="space-y-4 text-sm text-white font-medium">
                <li><Link to="/privacy" className="hover:text-accent">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-accent">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
            <p className="font-mono text-[10px] text-white uppercase tracking-widest">IN SYNC.</p>
            <p className="font-mono text-[10px] text-white/40 uppercase tracking-widest">© 2026 SyncSolved. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
