import { PageLayout } from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { businessConfig } from "@/data/businessConfig";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Truck, 
  ShieldCheck, 
  Wrench, 
  Users, 
  CaretRight,
  Handshake,
  HardHat,
  Star,
  Shield,
  Clock,
  MapPin
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

export default function About() {
  usePageMeta({
    title: "About Goshen Automotive | Tucson Mobile Diesel Experts",
    description: "Learn about Goshen Automotive Mobile Diesel Repair. We provide professional on-site diesel service for Ford, Ram, and GM trucks in Tucson.",
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/kenworth-semi.jpg" 
            alt="Commercial Semi-Truck Service Integrity" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <Container className="relative z-10">
          <Reveal hero>
            <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse" />
              Operational History
            </Badge>
            <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.8] mb-8 text-white uppercase italic tracking-tighter">
              Built on <br />
              <span className="text-primary not-italic">Integrity</span>
            </h1>
            <p className="text-zinc-200 text-xl md:text-3xl font-medium max-w-2xl uppercase tracking-tight leading-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-black border-t border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="aspect-square bg-zinc-900 rounded-none overflow-hidden border border-white/10 relative group shadow-2xl">
                 <img 
                    src="/assets/semi-truck-mechanic-service.jpg" 
                    alt="Semi-Truck Diagnostic & Maintenance Service" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-70"
                 />
                 <div className="absolute inset-0 bg-black/20" />
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-10 uppercase italic tracking-tighter text-white leading-none">The Mobile <br /><span className="text-primary not-italic">Advantage</span></h2>
              <div className="space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed font-medium italic">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12">
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-zinc-950 border border-white/10 flex items-center justify-center rounded-none text-white group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0 shadow-lg">
                    <Handshake weight="fill" size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-black uppercase text-2xl italic leading-none mb-2">Transparency</h4>
                    <p className="text-zinc-400 text-sm font-logo uppercase tracking-wider">Honest billing and diagnostics.</p>
                  </div>
                </div>
                <div className="flex items-start gap-5 group">
                  <div className="w-14 h-14 bg-zinc-950 border border-white/10 flex items-center justify-center rounded-none text-white group-hover:bg-primary group-hover:text-primary-foreground transition-all shrink-0 shadow-lg">
                    <HardHat weight="fill" size={28} />
                  </div>
                  <div>
                    <h4 className="text-white font-display font-black uppercase text-2xl italic leading-none mb-2">Expertise</h4>
                    <p className="text-zinc-400 text-sm font-logo uppercase tracking-wider">Certified diesel technicians.</p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <Container>
          <div className="text-center mb-24">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter italic text-white mb-8">Service <span className="text-primary not-italic">Manifest</span></h2>
              <p className="text-zinc-300 max-w-2xl mx-auto font-logo text-base uppercase tracking-widest leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Convenience", icon: <Truck weight="fill" size={48} />, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { title: "Technical Skill", icon: <Wrench weight="fill" size={48} />, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
              { title: "Integrity", icon: <ShieldCheck weight="fill" size={48} />, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="bg-zinc-900 border border-white/5 p-12 rounded-none h-full flex flex-col items-center text-center group hover:border-primary/50 transition-all shadow-2xl">
                  <div className="text-primary mb-10 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h3 className="text-3xl font-display font-black uppercase text-white mb-6 italic tracking-tight leading-none">{item.title}</h3>
                  <p className="text-zinc-200 text-lg leading-relaxed flex-grow italic">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>
      
      {/* Final CTA */}
      <Section className="relative overflow-hidden py-32 bg-black border-t border-white/10">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/assets/commercial-semi-yard.jpg" 
            alt="Semi-Truck Fleet Logistics Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <Container className="relative z-10 text-center">
          <Reveal hero>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-none mb-10 uppercase italic tracking-tighter">Ready for <span className="text-primary not-italic">Dispatch?</span></h2>
            <p className="text-zinc-200 text-xl md:text-3xl mb-12 max-w-3xl mx-auto font-medium uppercase tracking-tight">
              Experience professional mobile diesel service designed for commercial trucking.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
               <Button asChild size="lg" className="bg-primary text-primary-foreground font-display font-black text-3xl uppercase tracking-wider py-10 px-16 rounded-none hover:scale-105 transition-all shadow-2xl btn-shine">
                 <a href={`tel:${businessConfig.phoneRaw}`}>Call {businessConfig.phone}</a>
               </Button>
               <Button asChild variant="outline" size="lg" className="border-white/20 text-white font-display font-black text-3xl uppercase tracking-wider py-10 px-16 rounded-none hover:bg-white/5 transition-all">
                 <Link to="/contact">Request Manifest</Link>
               </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </PageLayout>
  );
}
