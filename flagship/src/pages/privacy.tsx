import Navbar from "@/components/Navbar";

export default function Privacy() {
  return (
    <div className="bg-bg text-white min-h-screen">
      <Navbar />
      <main className="pt-40 pb-20">
        <section className="container mx-auto px-6 max-w-4xl">
          <h1 className="text-5xl font-heading mb-16">PRIVACY POLICY.</h1>
          <div className="space-y-8 text-lg text-white font-medium leading-relaxed">
            <p><strong>Effective Date: March 25, 2024</strong></p>
            <p>At SyncSolved, we take your data architecture seriously. This Privacy Policy explains how we collect, use, and protect your information when you interact with our digital ecosystem.</p>
            
            <h2 className="text-2xl text-accent font-heading mt-12 mb-4">1. DATA OWNERSHIP.</h2>
            <p>We believe in absolute data sovereignty. Unlike traditional platforms that rent you access to your own data, we build your Capability Modules into your private cloud environment. You own the IP. You own the data. Forever.</p>

            <h2 className="text-2xl text-accent font-heading mt-12 mb-4">2. DATA COLLECTION.</h2>
            <p>We collect information necessary to perform the Sync. This includes your business logic, decision frameworks, and expertise nodes. This information is extracted through clinical interviews and system mapping. We do not sell your data. We do not use your data to train public models.</p>

            <h2 className="text-2xl text-accent font-heading mt-12 mb-4">3. SECURITY PROTOCOLS.</h2>
            <p>All data is protected by Tier 1 encryption and sandboxed execution. We implement human-in-the-loop governance to ensure you maintain control over every automated process. We perform regular security audits of all agent infrastructure we deploy.</p>

            <h2 className="text-2xl text-accent font-heading mt-12 mb-4">4. YOUR RIGHTS.</h2>
            <p>You have the right to access, modify, or delete your data at any time. Since the infrastructure is owned by you, you have full control over the persistence of the logic we build.</p>

            <h2 className="text-2xl text-accent font-heading mt-12 mb-4">5. CONTACT.</h2>
            <p>For any privacy-related inquiries, contact our protocol lead at hello@syncsolved.com.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
