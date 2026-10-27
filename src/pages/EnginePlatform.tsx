import { PageLayout } from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { enginePlatforms, businessConfig } from "@/data/businessConfig";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  CaretRight, 
  Warning,
  Gear,
  Toolbox,
  Engine,
  Shield,
  ArrowRight,
  Star
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

interface EnginePlatformPageProps {
  platform: keyof typeof enginePlatforms;
}

export default function EnginePlatformPage({ platform }: EnginePlatformPageProps) {
  const data = enginePlatforms[platform];
  
  usePageMeta({
    title: `${data.name} Repair & Service | Tucson Mobile Diesel`,
    description: `Specialized mobile repair for ${data.name} platforms in Tucson. We service ${data.engines.join(", ")} engines and their gas counterparts.`,
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src={platform === "ford" ? "/assets/engine-bay.jpg" : platform === "ram" ? "/assets/mechanic-action.jpg" : "/assets/engine-inspection.jpg"} 
            alt={data.name} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <Container className="relative z-10">
          <Reveal hero>
            <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse" />
              Platform Specialist
            </Badge>
            <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.8] mb-8 text-white uppercase italic tracking-tighter">
              {data.name.split(" ")[0]} <br />
              <span className="text-primary not-italic">{data.name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="text-zinc-200 text-xl md:text-3xl font-medium max-w-2xl uppercase tracking-tight leading-none">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-black border-t border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-12 uppercase italic tracking-tighter text-white">Supported <span className="text-primary not-italic">Engines</span></h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-zinc-900 border border-white/5 p-10 rounded-none relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                  <h3 className="text-white font-display font-black text-3xl uppercase mb-8 italic tracking-tight leading-none">Diesel Platforms</h3>
                  <ul className="space-y-4">
                    {data.engines.map((eng) => (
                      <li key={eng} className="text-zinc-200 flex items-center gap-3 font-logo text-sm uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full shadow-[0_0_8px_rgba(0,96,192,0.8)]" />
                        {eng}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-zinc-900 border border-white/5 p-10 rounded-none relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-zinc-700" />
                  <h3 className="text-zinc-400 font-display font-black text-3xl uppercase mb-8 italic tracking-tight leading-none">Gas Alternatives</h3>
                  <ul className="space-y-4">
                    {data.gas.map((eng) => (
                      <li key={eng} className="text-zinc-400 flex items-center gap-3 font-logo text-sm uppercase tracking-wider">
                        <div className="w-1.5 h-1.5 bg-zinc-700 rounded-full" />
                        {eng}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-12 uppercase italic tracking-tighter text-white">Common <span className="text-primary not-italic">Services</span></h2>
              <div className="space-y-4">
                {[
                  "Diagnostics & Electrical Troubleshooting",
                  "Reliability & Bulletproofing Packages",
                  "Fuel System Repairs (Injectors, Pumps)",
                  "Cooling System Maintenance",
                  "Transmission & Drivetrain Service",
                  "Brake & Suspension Repairs"
                ].map((service) => (
                  <div key={service} className="flex items-center justify-between p-8 bg-zinc-900 border border-white/5 rounded-none group hover:border-primary transition-all relative overflow-hidden">
                    <div className="flex items-center gap-6 relative z-10">
                      <div className="w-12 h-12 bg-black border border-white/10 flex items-center justify-center rounded-none text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <Gear weight="fill" size={24} />
                      </div>
                      <span className="text-white font-display font-black uppercase text-2xl italic leading-none tracking-tight">{service}</span>
                    </div>
                    <CaretRight weight="bold" className="text-primary relative z-10 group-hover:translate-x-2 transition-transform" />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      <Section className="bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-zinc-900 rounded-none border border-white/10 overflow-hidden flex items-center justify-center group">
                  <img 
                    src="/assets/mechanic-action.jpg" 
                    alt="Mobile Tech" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  
                  <div className="absolute bottom-8 left-8 right-8 p-10 bg-zinc-950/90 backdrop-blur border border-white/10 rounded-none">
                     <div className="flex gap-1 mb-6">
                       {[...Array(5)].map((_, i) => <Star key={i} weight="fill" className="text-primary" />)}
                     </div>
                     <p className="text-white font-display font-black italic mb-6 text-3xl tracking-tighter leading-none uppercase">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."</p>
                     <p className="text-zinc-300 text-sm font-logo uppercase tracking-[0.2em]">— Lorem Ipsum</p>
                  </div>
               </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-zinc-900 border border-white/10 p-12 rounded-none relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-2 h-full bg-primary" />
                <h2 className="text-4xl font-display font-black mb-8 uppercase italic tracking-tighter text-white">Deployment <span className="text-primary not-italic">Notice</span></h2>
                <p className="text-zinc-200 text-xl leading-relaxed mb-10 font-medium italic">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="space-y-6 mb-12">
                   <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-zinc-950 flex items-center justify-center rounded text-primary border border-white/10 shrink-0">
                        <Shield weight="fill" />
                      </div>
                      <p className="text-zinc-300 text-sm font-logo uppercase tracking-wider">Lorem ipsum dolor sit amet.</p>
                   </div>
                   <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-zinc-950 flex items-center justify-center rounded text-primary border border-white/10 shrink-0">
                        <Toolbox weight="fill" />
                      </div>
                      <p className="text-zinc-300 text-sm font-logo uppercase tracking-wider">Lorem ipsum dolor sit amet.</p>
                   </div>
                </div>
                <Button asChild size="lg" className="w-full bg-primary text-primary-foreground font-display font-black text-3xl uppercase tracking-wider py-12 rounded-none hover:scale-[1.02] transition-all btn-shine shadow-[0_0_30px_rgba(0,96,192,0.3)]">
                  <Link to="/contact">Request {data.name.split(" ")[0]} Quote</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
