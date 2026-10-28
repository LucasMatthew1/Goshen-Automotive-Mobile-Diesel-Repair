import { PageLayout } from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { businessConfig } from "@/data/businessConfig";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { MapPin, NavigationArrow, CheckCircle, Star } from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

export default function ServiceAreas() {
  usePageMeta({
    title: "Service Areas | Goshen Mobile Diesel Tucson",
    description: "Mobile diesel repair coverage in Tucson, Marana, Oro Valley, Sahuarita, Vail, and Green Valley. We come to your location.",
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0 opacity-40">
          <img src="/assets/white-semi-truck.jpg" alt="Service Coverage" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <Container className="relative z-10">
          <Reveal hero>
            <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse" />
              Coverage Protocol
            </Badge>
            <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.8] mb-8 text-white uppercase italic tracking-tighter">
              Service <br />
              <span className="text-primary not-italic">Areas</span>
            </h1>
            <p className="text-zinc-200 text-xl md:text-3xl font-medium max-w-2xl uppercase tracking-tight leading-none">
              Bringing professional diesel shop expertise directly to you across Southern Arizona.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-black border-t border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-10 uppercase italic tracking-tighter text-white leading-none">Tucson & <br /><span className="text-primary not-italic">Beyond</span></h2>
              <div className="space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed font-medium italic mb-10">
                <p>
                  Goshen Automotive is a mobile-first repair service. Our primary model is dispatching technical expertise to your home, job site, or commercial yard.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {businessConfig.serviceArea.cities.map((city) => (
                  <div key={city} className="flex items-center gap-4 p-6 bg-black/40 border border-white/5 rounded-none group hover:border-primary transition-all">
                    <MapPin className="text-primary group-hover:scale-110 transition-transform" weight="fill" size={24} />
                    <span className="text-white font-display font-black uppercase italic text-2xl tracking-tight leading-none">{city}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-zinc-500 font-logo text-xs uppercase tracking-widest">
                * Service to areas beyond a 30-mile radius is subject to availability and travel surcharge.
              </p>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="aspect-square bg-zinc-900 rounded-none border border-white/10 flex flex-col items-center justify-center text-center p-12 relative overflow-hidden group shadow-2xl">
                 <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#0060c0_1px,transparent_1px)] [background-size:20px_20px] group-hover:opacity-10 transition-opacity" />
                 <NavigationArrow size={120} weight="fill" className="text-white mb-10 group-hover:text-primary group-hover:scale-110 transition-all animate-float" />
                 <h3 className="text-4xl font-display font-black uppercase text-white mb-6 italic tracking-tighter leading-none">Request On-Site <br /><span className="text-primary not-italic">Dispatch</span></h3>
                 <p className="text-zinc-400 text-lg font-medium italic mb-10 max-w-xs mx-auto">Provide your location for a fast mobile feasibility check and repair quote.</p>
                 <Button asChild size="lg" className="bg-primary text-primary-foreground font-display font-black text-3xl uppercase tracking-wider py-10 px-16 rounded-none hover:scale-105 transition-all shadow-2xl btn-shine">
                   <a href={`tel:${businessConfig.phoneRaw}`}>Check Availability</a>
                 </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="relative overflow-hidden py-32 bg-zinc-950 border-t border-white/5">
        <div className="absolute top-0 right-0 w-2 h-full bg-primary" />
        <Container className="relative z-10 text-center">
          <Reveal>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-none mb-10 uppercase italic tracking-tighter">Ready for <span className="text-primary not-italic">Service?</span></h2>
            <p className="text-zinc-200 text-xl md:text-3xl mb-12 max-w-3xl mx-auto font-medium uppercase tracking-tight">
              Southern Arizona's technical mobile diesel experts are ready to keep your assets moving.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
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
