import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { usePageMeta } from "@/lib/seo";

export default function Terms() {
  usePageMeta({
    title: "Terms of Service | Goshen Automotive Mobile Diesel Repair",
    description: "Terms and conditions for mobile diesel repair services provided by Goshen Automotive in Tucson, AZ.",
  });

  return (
    <PageLayout>
      <Section className="pt-32 pb-20 bg-zinc-950">
        <Container>
          <Reveal>
            <h1 className="text-4xl md:text-7xl font-display font-black leading-none mb-12 uppercase italic">Service Terms</h1>
            <div className="prose prose-invert max-w-4xl text-zinc-400 space-y-6">
               <p>By requesting service from Goshen Automotive Mobile Diesel Repair, you agree to the following terms:</p>
               
               <h2 className="text-white font-bold uppercase text-2xl mt-8">1. Mobile Feasibility</h2>
               <p>Mobile service availability is subject to technician assessment. We reserve the right to decline on-site service if the location or repair scope is deemed unsafe or technically unfeasible for mobile execution.</p>
               
               <h2 className="text-white font-bold uppercase text-2xl mt-8">2. Quotes & Estimates</h2>
               <p>Initial remote quotes are estimates based on customer-provided symptoms. Final pricing is determined after on-site fault isolation and diagnostic verification.</p>
               
               <h2 className="text-white font-bold uppercase text-2xl mt-8">3. Parts & Warranty</h2>
               <p>We use high-quality OEM or equivalent parts. Warranties are provided by the part manufacturers. Our workmanship is warrantied for a period of 90 days from the date of service unless otherwise specified.</p>
               
               <h2 className="text-white font-bold uppercase text-2xl mt-8">4. Liability</h2>
               <p>Goshen Automotive is not liable for pre-existing damage or consequential losses arising from vehicle downtime. Customer must provide a safe, level area for on-site repairs.</p>

               <h2 className="text-white font-bold uppercase text-2xl mt-8">5. Emissions Compliance</h2>
               <p>We strictly adhere to state and federal emissions laws. We will not perform deletes or install any device intended to bypass emissions control systems.</p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </PageLayout>
  );
}
