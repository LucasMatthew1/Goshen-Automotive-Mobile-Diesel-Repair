import { PageLayout } from "@/components/PageLayout";
import { Reveal } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { businessConfig } from "@/data/businessConfig";
import { usePageMeta } from "@/lib/seo";

export default function Privacy() {
  usePageMeta({
    title: "Privacy Policy | Goshen Automotive Mobile Diesel Repair",
    description: "Privacy policy and data protection protocols for Goshen Automotive in Tucson, AZ.",
  });

  return (
    <PageLayout>
      <Section className="pt-32 pb-20 bg-zinc-950">
        <Container>
          <Reveal>
            <h1 className="text-4xl md:text-7xl font-display font-black leading-none mb-12 uppercase italic">Privacy Protocol</h1>
            <div className="prose prose-invert max-w-4xl text-zinc-400 space-y-6">
               <p>At Goshen Automotive Mobile Diesel Repair, we respect your privacy. This policy outlines how we handle vehicle data and personal information.</p>
               <h2 className="text-white font-bold uppercase text-2xl mt-8">1. Information Collection</h2>
               <p>We collect information necessary to provide mobile diagnostics and repairs, including vehicle VIN, diagnostic trouble codes (DTC), and contact details.</p>
               <h2 className="text-white font-bold uppercase text-2xl mt-8">2. Data Usage</h2>
               <p>Vehicle data is used solely for the purpose of repair feasibility, execution, and verification. We do not sell your personal or vehicle data to third parties.</p>
               <h2 className="text-white font-bold uppercase text-2xl mt-8">3. Communication</h2>
               <p>By requesting a quote, you agree to receive technical communications regarding your repair dispatch via phone, text, or email.</p>
            </div>
          </Reveal>
        </Container>
      </Section>
    </PageLayout>
  );
}
