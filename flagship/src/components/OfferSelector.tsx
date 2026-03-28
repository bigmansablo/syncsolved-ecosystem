import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

export default function OfferSelector() {
  return (
    <div className="max-w-5xl mx-auto py-24">
      <Tabs defaultValue="phase1" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-16 h-16">
          <TabsTrigger value="audit">00. Velocity Audit</TabsTrigger>
          <TabsTrigger value="phase1">01. Foundation Stack</TabsTrigger>
          <TabsTrigger value="phase2">02. Velocity System</TabsTrigger>
        </TabsList>

        <TabsContent value="audit">
          <Card className="bg-bg border-white/5 p-12">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-4xl mb-8 text-accent">THE ATTRACTION OFFER.</h3>
                <p className="text-xl opacity-60 mb-8 leading-relaxed">
                  Most businesses are running a <b>Dependency Trap</b>—producing value only while the founder works. We prove the gap before you pay.
                </p>
                <div className="space-y-4 font-mono text-sm opacity-40">
                  <p>• 5-page Architecture Report</p>
                  <p>• Dependency Trap Score (0-100)</p>
                  <p>• Friction vs. Value Engine mapping</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-white/[0.02] p-12 border border-white/5">
                <div className="text-4xl font-heading mb-4 text-center">ARCHITECTURE<br/>SYNC</div>
                <div className="font-mono text-xs opacity-40 uppercase tracking-[0.3em] mb-12">[ CLINICAL DIAGNOSSTIC ]</div>
                <a href="https://velocity.syncsolved.com" className="btn-primary w-full text-center">Initialize Sync</a>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="phase1">
          <Card className="bg-bg border-white/5 p-12">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-4xl mb-8 text-accent">THE ENTRY POINT.</h3>
                <p className="text-xl opacity-60 mb-8 leading-relaxed">
                  In 30 days, we encode your core expertise into 3 Capability Modules that execute without your daily involvement.
                </p>
                <div className="space-y-4 font-mono text-sm opacity-40">
                  <p>• Layer 1: Domain-Optimized Engine</p>
                  <p>• Layer 2: Encoded Context Store</p>
                  <p>• Layer 3: 3x Capability Modules</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-white/[0.02] p-12 border border-white/5">
                <div className="text-4xl font-heading mb-4 text-center">FOUNDATION<br/>STACK</div>
                <div className="font-mono text-xs opacity-40 uppercase tracking-[0.3em] mb-12">[ VELOCITY_T1 ]</div>
                <a href="https://velocity.syncsolved.com" className="btn-primary w-full text-center">View Protocol</a>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="phase2">
          <Card className="bg-bg border-white/5 p-12">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-4xl mb-8 text-accent">THE TRANSFORMATION.</h3>
                <p className="text-xl opacity-60 mb-8 leading-relaxed">
                  90 days to a full production system. You set direction; the architecture executes. Your expertise becomes compounding IP.
                </p>
                <div className="space-y-4 font-mono text-sm opacity-40">
                  <p>• Multi-Module Orchestration</p>
                  <p>• Protection & Governance Layers</p>
                  <p>• Recursive Calibration Engine</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center bg-white/[0.02] p-12 border border-white/5">
                <div className="text-4xl font-heading mb-4 text-center">VELOCITY<br/>SYSTEM</div>
                <div className="font-mono text-xs opacity-40 uppercase tracking-[0.3em] mb-12">[ VELOCITY_T2 ]</div>
                <a href="https://velocity.syncsolved.com" className="btn-primary w-full text-center">View Protocol</a>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
