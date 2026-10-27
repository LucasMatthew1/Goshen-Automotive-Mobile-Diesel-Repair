import { PageLayout } from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { businessConfig, enginePlatforms } from "@/data/businessConfig";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Phone, 
  Truck, 
  ShieldCheck, 
  Engine, 
  Wrench, 
  CaretRight,
  Gauge,
  Clock,
  ArrowRight,
  Shield,
  Toolbox,
  Star,
  MapPin,
  CheckCircle,
  Pulse,
  HardHat,
  Handshake
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

export default function Index() {
  usePageMeta({
    title: "Goshen Automotive Mobile Diesel Repair | Tucson, AZ",
    description: "Expert on-site diesel diagnostics and repair in Tucson. Specializing in Powerstroke, Cummins, and Duramax. We come to you.",
  });

  const highlights = [
    { title: "On-Site Repair", text: "We come to your location, saving you towing fees.", icon: <MapPin size={32} /> },
    { title: "Diesel Experts", icon: <Engine size={32} />, text: "Specialized knowledge for the Big Three diesel platforms." },
    { title: "Dealer Tech", icon: <Gauge size={32} />, text: "Equipped with advanced diagnostic and programming gear." },
    { title: "Fleet Focused", icon: <ShieldCheck size={32} />, text: "Keeping commercial work trucks on the road." },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <video 
            autoPlay 
            muted 
            loop 
            playsInline 
            poster="/assets/diesel-truck-hero.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/assets/diesel-mechanic-hero.mp4" type="video/mp4" />
          </video>
          {/* Scanline animation removed for original colors */}
        </div>

        <Container className="relative z-20">
          <div className="max-w-4xl">
            <Reveal hero>
              <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs animate-flicker">
                <span className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse" />
                Dispatching Now: Tucson & Surrounding
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[clamp(3.5rem,8vw,8.75rem)] font-display font-black leading-[0.9] md:leading-[0.8] mb-6 md:mb-8 uppercase tracking-tighter italic text-white animate-float">
                Diesel Expertise <br />
                <span className="text-primary not-italic">That Comes To You</span>
              </h1>
              <p className="text-zinc-200 text-lg sm:text-xl md:text-3xl font-medium max-w-2xl mb-8 md:mb-12 uppercase tracking-tight leading-tight md:leading-none">
                Mobile diagnostics, reliability upgrades, and professional maintenance for heavy-duty trucks.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground font-display font-black text-xl md:text-2xl uppercase tracking-wider py-8 md:py-10 px-10 md:px-12 rounded-none btn-shine shadow-[0_0_30px_rgba(0,96,192,0.3)]">
                  <a href={`tel:${businessConfig.phoneRaw}`}>Call {businessConfig.phone}</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white font-display font-black text-xl md:text-2xl uppercase tracking-wider py-8 md:py-10 px-10 md:px-12 rounded-none hover:bg-white/5 transition-all">
                  <Link to="/contact">Request Service</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-sm font-logo uppercase tracking-widest text-zinc-300">Scroll to Explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* Trust Highlights */}
      <div className="bg-zinc-950 border-y border-white/5 relative z-30">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/5">
            {highlights.map((h, i) => (
              <div key={i} className="py-10 px-8 flex items-center gap-6 group hover:bg-white/5 transition-colors">
                <div className="text-primary group-hover:scale-110 transition-transform">{h.icon}</div>
                <div>
                  <h4 className="text-white font-logo font-bold text-lg uppercase leading-none mb-2 tracking-widest">{h.title}</h4>
                  <p className="text-zinc-300 text-xs font-logo uppercase tracking-widest leading-tight">{h.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Intro Section */}
      <Section className="bg-black relative overflow-hidden">
        {/* Adjusted skew to avoid overlap on small screens */}
        <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 opacity-20 md:opacity-100" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[0.9] uppercase italic text-white">The Workshop <br /> That <span className="text-primary not-italic">Finds You</span></h2>
              <div className="space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  Goshen Automotive Mobile Diesel Repair eliminates the downtime and towing costs of traditional shops. We bring professional-grade diagnostics and technical knowledge directly to your driveway, job site, or fleet yard.
                </p>
                <p>
                  Specializing in the "Big Three" diesel platforms and heavy-duty gas trucks, our mobile setup is equipped for everything from complex electrical troubleshooting to major mechanical reliability upgrades.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex items-center gap-3 group">
                   <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary font-black text-xl group-hover:scale-110 transition-transform">20+</div>
                   <span className="text-sm font-logo uppercase tracking-widest text-zinc-300 group-hover:text-primary transition-colors">Experience In Field</span>
                </div>
                <div className="flex items-center gap-3 group">
                   <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform"><Handshake size={24} /></div>
                   <span className="text-sm font-logo uppercase tracking-widest text-zinc-300 group-hover:text-primary transition-colors">A+ BBB Accredited</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
               <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-zinc-800 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center group">
                  <img 
                    src="/assets/mechanic-action.jpg" 
                    alt="Mobile Mechanic at Work" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  
                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                     <Badge className="bg-primary text-primary-foreground border-none font-logo tracking-widest font-black animate-flicker">DIAGNOSTIC_ACTIVE</Badge>
                     <Badge className="bg-black/60 text-zinc-300 border border-white/10 backdrop-blur-sm font-logo tracking-widest">SYSTEM_READY</Badge>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-zinc-950/90 backdrop-blur border border-white/10 rounded-xl group-hover:border-primary/50 transition-colors">
                     <div className="flex gap-1 mb-3">
                       {[...Array(5)].map((_, i) => <Star key={i} weight="fill" className="text-primary" />)}
                     </div>
                     <p className="text-white font-bold italic mb-2 tracking-tight leading-snug">"Found the high-pressure oil leak on my 6.0L Powerstroke while it sat in my driveway. Saved me a massive towing bill and shop wait time."</p>
                     <p className="text-zinc-300 text-xs font-logo uppercase tracking-widest">— Verified Local Owner</p>
                  </div>
               </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Engine Platform Section */}
      <Section className="bg-black">
        <Container>
          <div className="text-center mb-20">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black mb-6 uppercase text-white">Built For Performance</h2>
              <p className="text-zinc-300 text-xl max-w-2xl mx-auto font-logo uppercase tracking-widest">Platform Specific Expertise</p>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {Object.entries(enginePlatforms).map(([key, data], i) => (
              <StaggerItem key={key}>
                <Link to={`/${data.slug}`} className="group block h-full">
                  <div className="bg-zinc-800 border border-white/10 rounded-none h-full transition-all group-hover:border-primary/50 relative overflow-hidden flex flex-col min-h-[400px]">
                    <img 
                      src={i === 0 ? "/assets/engine-bay.jpg" : i === 1 ? "/assets/engine-inspection.jpg" : "/assets/fleet-service.jpg"} 
                      alt={data.name} 
                      className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                    
                    <div className="relative z-10 p-12 flex flex-col h-full text-left">
                      <h3 className="text-3xl font-logo font-bold mb-10 uppercase tracking-widest text-white group-hover:text-primary transition-colors leading-none">{data.name}</h3>
                      <ul className="space-y-4 mb-12 flex-grow">
                        {data.engines.map((eng) => (
                          <li key={eng} className="text-zinc-200 flex items-center gap-4 font-logo text-sm uppercase tracking-wider">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full group-hover:scale-150 transition-transform shadow-[0_0_8px_rgba(0,96,192,0.8)]" />
                            {eng}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-auto pt-8 border-t border-white/20 flex items-center gap-3 text-primary font-display font-black text-2xl uppercase italic tracking-widest group-hover:translate-x-2 transition-transform">
                        <span className="text-primary-foreground bg-primary px-3 py-1 font-black">Explore Platform</span>
                        <ArrowRight className="text-primary" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Services Grid Preview */}
      <Section className="bg-black">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-white/10 pb-10">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-[0.8] italic text-white">Technical <br /> <span className="text-primary not-italic">Capabilities</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Button asChild variant="link" className="text-zinc-300 font-logo font-bold text-sm uppercase tracking-[0.3em] p-0 hover:text-primary transition-colors">
                <Link to="/services" className="flex items-center gap-3 group">
                  View Full Manifest <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Diagnostics", icon: <Gauge weight="fill" />, href: "/diagnostics", text: "Complex fault analysis and electrical troubleshooting.", img: "/assets/diagnostic-tool.jpg" },
              { title: "Reliability", icon: <ShieldCheck weight="fill" />, href: "/reliability", text: "Head studs, oil coolers, and bulletproofing packages.", img: "/assets/engine-bay.jpg" },
              { title: "Fuel Systems", icon: <Pulse weight="fill" />, href: "/fuel-systems", text: "Injector service and injection pump conversions.", img: "/assets/engine-inspection.jpg" },
              { title: "Electrical", icon: <Wrench weight="fill" />, href: "/electrical", text: "Module programming and CAN-bus circuit repair.", img: "/assets/mechanic-action.jpg" },
              { title: "Emissions", icon: <Shield weight="fill" />, href: "/emissions", text: "Lawful DPF regeneration and exhaust diagnostics.", img: "/assets/fleet-service.jpg" },
              { title: "Maintenance", icon: <Toolbox weight="fill" />, href: "/maintenance", text: "Fluid exchanges and filter filtration services.", img: "/assets/diesel-truck-hero.jpg" },
              { title: "Brakes/Susp", icon: <HardHat weight="fill" />, href: "/brakes", text: "Heavy-duty chassis and steering components.", img: "/assets/engine-bay.jpg" },
              { title: "Fleet Service", icon: <Truck weight="fill" />, href: "/fleet", text: "Priority dispatch for commercial work vehicles.", img: "/assets/mechanic-action.jpg" }
            ].map((s) => (
              <StaggerItem key={s.href}>
                <Link to={s.href} className="group block h-full bg-zinc-800 border border-white/10 rounded-xl overflow-hidden hover:border-primary/50 transition-all">
                  <div className="aspect-video relative overflow-hidden">
                    <img 
                      src={s.img} 
                      alt={s.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" 
                    />
                    <div className="absolute top-4 left-4 w-10 h-10 bg-black/80 backdrop-blur flex items-center justify-center text-primary rounded border border-white/10 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {s.icon}
                    </div>
                  </div>
                  <div className="p-8">
                    <h4 className="text-white font-logo font-bold text-xl uppercase tracking-widest mb-4 group-hover:text-primary transition-colors leading-none">{s.title}</h4>
                    <p className="text-zinc-300 text-sm leading-relaxed">{s.text}</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </Section>

      {/* Fleet Banner */}
      <Section className="bg-zinc-950 py-28 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/fleet-service.jpg" 
            alt="Commercial Fleets" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-left">
            <div className="lg:col-span-8">
              <Reveal>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-logo font-bold text-primary leading-tight mb-6 uppercase tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Fleet Integrity <br /> Priority Dispatch</h2>
                <p className="text-zinc-200 font-sans text-lg md:text-2xl font-normal max-w-3xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                  Southern Arizona's on-site maintenance partner for contractors and commercial fleets.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Reveal delay={0.2}>
                <Button asChild size="lg" className="bg-black text-white font-display font-black text-3xl uppercase tracking-wider py-10 px-14 rounded-none hover:scale-105 transition-all shadow-2xl btn-shine">
                  <Link to="/fleet">Fleet Manifest</Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process Section */}
      <Section className="bg-black">
        <Container>
          <div className="text-center mb-24">
            <Reveal>
               <span className="text-zinc-200 font-logo text-base uppercase tracking-[0.2em] mb-4 block">Deployment Protocol</span>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter italic text-white">The Repair Path</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-px bg-white/10 -z-0" />
            
            {[
              { step: "01", title: "Remote Triage", text: "Call with symptoms and DTC codes to determine mobile feasibility." },
              { step: "02", title: "Tech Dispatch", text: "Technician arrives at your location with specialized tools and diagnostics." },
              { step: "03", title: "Fault Isolation", text: "We identify the root cause and provide a clear repair path and quote." },
              { step: "04", title: "Verified Fix", text: "Repairs completed and validated via scan data before tech departure." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1} className="relative z-10">
                <div className="flex flex-col items-center text-center group">
                  <div className="w-20 h-20 bg-zinc-950 border-2 border-primary flex items-center justify-center rounded-full font-display font-black text-3xl text-white mb-8 group-hover:bg-primary group-hover:text-zinc-950 transition-all shadow-xl">
                    {item.step}
                  </div>
                  <h4 className="text-2xl font-logo font-bold uppercase text-white mb-4 tracking-widest group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-zinc-100 text-sm leading-relaxed max-w-[240px]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Contact CTA Section */}
      <Section className="relative overflow-hidden py-48 border-t border-white/10 bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/diesel-truck-hero.jpg" 
            alt="Dispatch Readiness" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <Container className="relative z-10 text-center">
          <Reveal hero>
            <h2 className="text-5xl md:text-7xl lg:text-[clamp(3.5rem,8vw,11.25rem)] font-display font-black leading-[0.75] mb-12 uppercase italic tracking-tighter text-white relative z-10 animate-float">
              Ready for <br /> <span className="text-primary not-italic tracking-normal">Dispatch?</span>
            </h2>
            <p className="text-zinc-200 text-xl md:text-3xl mb-16 max-w-3xl mx-auto font-medium uppercase tracking-tight">
              Southern Arizona's technical mobile diesel experts are ready to keep your truck on the road.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
               <Button asChild size="lg" className="bg-primary text-primary-foreground font-display font-black text-3xl md:text-4xl uppercase tracking-wider py-10 md:py-12 px-10 md:px-16 rounded-none hover:scale-105 transition-all shadow-2xl btn-shine">
                 <a href={`tel:${businessConfig.phoneRaw}`}>Call {businessConfig.phone}</a>
               </Button>
               <Button asChild variant="outline" size="lg" className="border-white/20 text-white font-display font-black text-3xl md:text-4xl uppercase tracking-wider py-10 md:py-12 px-10 md:px-16 rounded-none hover:bg-white/5 transition-all">
                 <Link to="/contact">Request Manifest</Link>
               </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </PageLayout>
  );
}
