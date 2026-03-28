import Navbar from "@/components/Navbar";

export default function Terms() {
  return (
    <div className="bg-bg text-white min-h-screen">
      <Navbar />
      <main className="pt-40 pb-20">
        <section className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-heading mb-16">TERMS OF SERVICE.</h1>
          <div className="space-y-8 text-lg text-white font-medium leading-relaxed">
            <p><strong>Last Updated: March 25, 2024</strong></p>
            <p>Welcome to SyncSolved. By accessing our websites, you agree to these terms.</p>
            
            <h2 className="text-2xl text-accent font-heading mt-12 mb-4">1. ARCHITECTURAL SERVICES.</h2>
            <p>SyncSolved provides architectural transformation services aimed at replacing founder-dependency with fixed infrastructure. We provide expertise extraction, encoding, and deployment of autonomous capability nodes.</p>

            <h2 className="text-2xl text-accent font-heading mt-12 mb-4">2. INTELLECTUAL PROPERTY.</h2>
            <p>Upon final payment, you own the specific implementation of the Capability Modules we build for you. SyncSolved retains the rights to the underlying core protocols and foundational architecture used to build these modules.</p>

            <h2 className="text-2xl text-accent font-heading mt-12 mb-4">3. LIMITATION OF LIABILITY.</h2>
            <p>SyncSolved is not responsible for the business results of the autonomous systems deployed. Our goal is to encode your judgment. If your judgment is flawed, the system's output will reflect that. We provide calibration layers to mitigate this risk.</p>

            <h2 className="text-2xl text-accent font-heading mt-12 mb-4">4. TERMINATION.</h2>
            <p>You may terminate your engagement with the protocol at any time. Since the infrastructure is built into your private environment, the systems will continue to function unless you choose to dismantle them.</p>

            <h2 className="text-2xl text-accent font-heading mt-12 mb-4">5. GOVERNING LAW.</h2>
            <p>These terms are governed by the laws applicable in the jurisdictions where we operate (LA / London / Dubai).</p>
          </div>
        </section>
      </main>
    </div>
  );
}
