import { PageLayout } from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { usePageMeta } from "@/lib/seo";
import { businessConfig } from "@/data/businessConfig";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, Question, ShieldCheck, CaretRight } from "@phosphor-icons/react";

export default function FAQ() {
  usePageMeta({
    title: "Frequently Asked Questions | Goshen Mobile Diesel",
    description: "Common questions about our mobile diesel repair services in Tucson. Pricing, service area, and technical capabilities explained.",
  });

  const faqs = [
    {
      q: "Lorem ipsum dolor sit amet?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      q: "Lorem ipsum dolor sit amet?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      q: "Lorem ipsum dolor sit amet?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      q: "Lorem ipsum dolor sit amet?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      q: "Lorem ipsum dolor sit amet?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
      q: "Lorem ipsum dolor sit amet?",
      a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/assets/engine-bay.jpg" alt="Technical Info" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <Container className="relative z-10">
          <Reveal hero>
            <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse" />
              Information Repository
            </Badge>
            <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.8] mb-8 text-white uppercase italic tracking-tighter">
              Common <br />
              <span className="text-primary not-italic">Inquiries</span>
            </h1>
            <p className="text-zinc-200 text-xl md:text-3xl font-medium max-w-2xl uppercase tracking-tight leading-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-black border-t border-white/10">
        <Container className="max-w-4xl">
          <Reveal>
            <Accordion type="single" collapsible className="w-full space-y-6">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="bg-zinc-900 border border-white/10 rounded-none px-8 py-2 hover:border-primary/50 transition-all shadow-xl group">
                  <AccordionTrigger className="text-2xl font-display font-black uppercase py-8 hover:no-underline hover:text-primary transition-colors text-left italic tracking-tight text-white leading-none">
                    <div className="flex items-center gap-6">
                      <span className="text-primary group-hover:scale-110 transition-transform"><Question weight="bold" size={28} /></span>
                      {faq.q}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-300 text-lg leading-relaxed pb-10 border-t border-white/5 pt-8 italic font-medium">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
        <Container className="text-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-display font-black uppercase mb-8 italic tracking-tighter text-white">Still Have <span className="text-primary not-italic">Questions?</span></h2>
            <p className="text-zinc-200 text-xl md:text-2xl mb-12 max-w-xl mx-auto font-medium uppercase tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex justify-center gap-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-display font-black text-3xl uppercase tracking-wider py-10 px-16 rounded-none hover:scale-105 transition-all shadow-2xl btn-shine">
                <a href={`tel:${businessConfig.phoneRaw}`}>Call {businessConfig.phone}</a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </PageLayout>
  );
}
