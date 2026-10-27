import { PageLayout } from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { businessConfig } from "@/data/businessConfig";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Truck, 
  ShieldCheck, 
  Engine, 
  Wrench, 
  CaretRight,
  Shield,
  Gauge,
  Toolbox,
  Pulse,
  HardHat,
  CheckCircle,
  Star
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

export default function ServicesOverview() {
  usePageMeta({
    title: "Diesel & Gas Truck Repair Services | Goshen Mobile Tucson",
    description: "Complete list of mobile diesel repair services in Tucson. Ford Powerstroke, Ram Cummins, and GM Duramax experts coming to your location.",
  });

  const mainServices = [
    {
      title: "Mobile Diagnostics",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "/diagnostics",
      icon: <Gauge weight="fill" />,
      img: "/assets/diagnostic-tool.jpg"
    },
    {
      title: "Reliability & Engine",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "/reliability",
      icon: <ShieldCheck weight="fill" />,
      img: "/assets/engine-bay.jpg"
    },
    {
      title: "Fuel Systems",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "/fuel-systems",
      icon: <Pulse weight="fill" />,
      img: "/assets/engine-inspection.jpg"
    },
    {
      title: "Electrical & Modules",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "/electrical",
      icon: <Wrench weight="fill" />,
      img: "/assets/mechanic-action.jpg"
    },
    {
      title: "Emissions Control",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "/emissions",
      icon: <Shield weight="fill" />,
      img: "/assets/fleet-service.jpg"
    },
    {
      title: "Maintenance",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      href: "/maintenance",
      icon: <Toolbox weight="fill" />,
      img: "/assets/diesel-truck-hero.jpg"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/engine-detail.jpg" 
            alt="Technical Service" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <Container className="relative z-10">
          <Reveal hero>
            <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse" />
              Service Catalog 01
            </Badge>
            <h1 className="text-6xl md:text-8xl lg:text-[clamp(4rem,10vw,10.5rem)] font-display font-black leading-[0.8] mb-8 uppercase italic tracking-tighter text-white">
              Technical <br />
              <span className="text-primary not-italic">Manifest</span>
            </h1>
            <p className="text-zinc-200 text-xl md:text-3xl font-medium max-w-2xl uppercase tracking-tight leading-none mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Main Services Grid */}
      <Section className="bg-black border-t border-white/10">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-[0.8] italic text-white">Repair <br /> <span className="text-primary not-italic">Capabilities</span></h2>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((s) => (
              <StaggerItem key={s.href}>
                <Link to={s.href} className="group block h-full bg-zinc-900 border border-white/10 rounded-none overflow-hidden hover:border-primary/50 transition-all shadow-2xl">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700 opacity-60 group-hover:opacity-100" 
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="absolute top-6 left-6 w-14 h-14 bg-black/90 backdrop-blur flex items-center justify-center text-white border border-white/10 group-hover:bg-primary group-hover:border-primary transition-all">
                      {s.icon}
                    </div>
                  </div>
                  <div className="p-10">
                    <h4 className="text-white font-display font-black text-3xl uppercase tracking-tight mb-4 group-hover:text-primary transition-colors italic leading-none">{s.title}</h4>
                    <p className="text-zinc-300 text-base leading-relaxed mb-8">{s.description}</p>
                    <div className="flex items-center gap-3 text-primary font-display font-black text-xl uppercase italic tracking-widest group-hover:translate-x-2 transition-transform">
                      <span className="text-primary-foreground bg-primary px-3 py-1 font-black">Details</span>
                      <ArrowRight className="text-primary" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Specialty Platforms */}
      <Section className="bg-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/2" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[0.9] uppercase italic text-white">The <span className="text-primary not-italic">Specialists</span></h2>
              <p className="text-zinc-200 text-xl font-medium uppercase tracking-tight leading-none mb-12 border-l-4 border-primary pl-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              
              <div className="space-y-4">
                {[
                  { name: "Ford Powerstroke", href: "/ford-powerstroke", subtitle: "6.0L / 6.4L / 6.7L Expert Support" },
                  { name: "Ram Cummins", href: "/ram-cummins", subtitle: "High-Pressure Rail & Performance" },
                  { name: "GM Duramax", href: "/gm-duramax", subtitle: "Injector & Allison Transmission Service" },
                  { name: "Heavy-Duty Gas", href: "/heavy-duty-gas", subtitle: "Fleet Gas Platform Diagnostics" }
                ].map((plat) => (
                  <Link key={plat.href} to={plat.href} className="flex items-center justify-between p-8 bg-zinc-900 border border-white/5 rounded-none hover:border-primary transition-all group relative overflow-hidden">
                    <div className="relative z-10 text-left">
                      <span className="text-3xl font-display font-black text-white uppercase italic block leading-none mb-2 group-hover:text-primary transition-colors">{plat.name}</span>
                      <span className="text-zinc-400 font-logo text-xs uppercase tracking-widest">{plat.subtitle}</span>
                    </div>
                    <div className="relative z-10 w-12 h-12 bg-zinc-950 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <CaretRight weight="bold" />
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
               <div className="relative aspect-square bg-zinc-900 rounded-none border border-white/10 overflow-hidden flex items-center justify-center group">
                  <img 
                    src="/assets/mechanic-working.jpg" 
                    alt="Platform Specialist at Work" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-70"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  
                  <div className="absolute bottom-8 left-8 right-8 p-8 bg-zinc-950/90 backdrop-blur border border-white/10 rounded-none">
                     <div className="flex gap-1 mb-4 text-left">
                       {[...Array(5)].map((_, i) => <Star key={i} weight="fill" className="text-primary" />)}
                     </div>
                     <p className="text-white font-bold italic mb-4 text-xl tracking-tight leading-snug text-left">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."</p>
                     <p className="text-zinc-300 text-sm font-logo uppercase tracking-widest text-left">— Lorem Ipsum</p>
                  </div>
               </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* CTA Section */}
      <Section className="relative overflow-hidden py-28 bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/diesel-truck-hero.jpg" 
            alt="Ready for Service" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
        </div>
        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-left lg:max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-logo font-bold text-primary leading-tight mb-5 uppercase tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Ready for <br /> Mobile Service?</h2>
              <p className="text-zinc-200 font-sans text-lg md:text-2xl font-normal leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 md:gap-6 w-full lg:w-auto">
              <Button asChild size="lg" className="flex-1 sm:flex-none bg-black text-white font-display font-black text-2xl md:text-3xl uppercase tracking-wider py-8 md:py-10 px-10 md:px-14 rounded-none hover:scale-105 transition-all shadow-2xl btn-shine">
                <a href={`tel:${businessConfig.phoneRaw}`}>Call Now</a>
              </Button>
              <Button asChild variant="outline" size="lg" className="flex-1 sm:flex-none border-white/20 text-white font-display font-black text-2xl md:text-3xl uppercase tracking-wider py-8 md:py-10 px-10 md:px-14 rounded-none hover:bg-white/5 transition-all">
                <Link to="/contact">Request Manifest</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
