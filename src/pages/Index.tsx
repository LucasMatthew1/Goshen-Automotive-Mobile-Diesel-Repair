import { PageLayout } from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { businessConfig } from "@/data/businessConfig";
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
    { title: "Semi-Truck Specialists", icon: <Truck size={32} />, text: "Professional repair for Class 7 & 8 vehicles." },
    { title: "Mobile Diesel Shop", icon: <MapPin size={32} />, text: "We bring the heavy-duty gear to your location." },
    { title: "Fleet Diagnostics", icon: <Gauge size={32} />, text: "Advanced fault isolation for commercial fleets." },
    { title: "24/7 Availability", icon: <Clock size={32} />, text: "Keeping your business moving day and night." },
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20 bg-zinc-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10" />
          <img 
            src="/assets/semi-truck-hero.jpg" 
            alt="Semi-Truck Diesel Repair" 
            className="w-full h-full object-cover"
          />
        </div>

        <Container className="relative z-20">
          <div className="max-w-4xl">
            <Reveal hero>
              <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs">
                <span className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse" />
                Dispatching Now: Semi-Truck & Commercial Repair
              </Badge>
              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[clamp(3rem,7vw,8rem)] font-display font-black leading-[0.9] md:leading-[0.8] mb-6 md:mb-8 uppercase tracking-tighter italic text-white animate-float">
                Semi-Truck Diesel Repair <br />
                <span className="text-primary not-italic">You Can Depend On</span>
              </h1>
              <p className="text-zinc-200 text-lg sm:text-xl md:text-2xl font-medium max-w-2xl mb-8 md:mb-12 uppercase tracking-tight leading-tight">
                Professional diesel repair and maintenance for semi-trucks and commercial trucks. Helping keep your trucks on the road and your business moving.
              </p>
              <div className="flex flex-wrap gap-4 md:gap-6">
                <Button asChild size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground font-display font-black text-xl md:text-2xl uppercase tracking-wider py-8 md:py-10 px-10 md:px-12 rounded-none btn-shine shadow-[0_0_30px_rgba(0,91,196,0.3)]">
                  <a href={`tel:${businessConfig.phoneRaw}`}>Call for Service</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white/20 text-white font-display font-black text-xl md:text-2xl uppercase tracking-wider py-8 md:py-10 px-10 md:px-12 rounded-none hover:bg-white/5 transition-all">
                  <Link to="/services">Explore Our Services</Link>
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
        <div className="absolute top-0 right-0 w-full md:w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 opacity-20 md:opacity-100" />
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black mb-10 leading-[0.9] uppercase italic text-white">Commercial <br /> Truck <span className="text-primary not-italic">Specialists</span></h2>
              <div className="space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  Goshen Automotive provides professional on-site diesel repair specifically for semi-trucks and commercial transport vehicles. We understand that downtime costs money, which is why we bring the shop to you.
                </p>
                <p>
                  Our technicians are equipped with advanced diagnostic tools to handle Class 7 and 8 vehicles, providing dealer-level service without the dealer-level wait times or towing costs.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-8">
                <div className="flex items-center gap-3 group">
                   <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-white font-black text-xl group-hover:scale-110 transition-transform">15+</div>
                   <span className="text-sm font-logo uppercase tracking-widest text-zinc-300 group-hover:text-primary transition-colors">Years Commercial Experience</span>
                </div>
                <div className="flex items-center gap-3 group">
                   <div className="w-12 h-12 rounded-full border border-primary/20 bg-primary/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform"><ShieldCheck size={24} weight="fill" /></div>
                   <span className="text-sm font-logo uppercase tracking-widest text-zinc-300 group-hover:text-primary transition-colors">Fully Insured & Certified</span>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2}>
               <div className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-zinc-800 rounded-3xl border border-white/10 overflow-hidden flex items-center justify-center group">
                  <img 
                    src="/assets/semi-mechanic-1.jpg" 
                    alt="Semi-Truck Mechanic at Work" 
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  
                  <div className="absolute top-8 left-8 flex flex-col gap-2">
                     <Badge className="bg-primary text-primary-foreground border-none font-logo tracking-widest font-black">DIAGNOSTIC_ACTIVE</Badge>
                     <Badge className="bg-black/60 text-zinc-300 border border-white/10 backdrop-blur-sm font-logo tracking-widest">SYSTEM_READY</Badge>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 right-8 p-6 bg-zinc-950/90 backdrop-blur border border-white/10 rounded-xl group-hover:border-primary/50 transition-colors">
                     <div className="flex gap-1 mb-3">
                       {[...Array(5)].map((_, i) => <Star key={i} weight="fill" className="text-primary" />)}
                     </div>
                     <p className="text-white font-bold italic mb-2 tracking-tight leading-snug">"Excellent mobile service for our fleet. They got our tractor-trailer back on the road in hours, not days. Highly recommend for any commercial diesel repair."</p>
                     <p className="text-zinc-300 text-xs font-logo uppercase tracking-widest">— Verified Fleet Manager</p>
                  </div>
               </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Services Grid Section */}
      <Section className="bg-black">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-white/10 pb-10">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase leading-[0.8] italic text-white">Commercial <br /> <span className="text-primary not-italic">Capabilities</span></h2>
            </Reveal>
            <Reveal delay={0.2}>
              <Button asChild variant="link" className="text-zinc-300 font-logo font-bold text-sm uppercase tracking-[0.3em] p-0 hover:text-primary transition-colors">
                <Link to="/services" className="flex items-center gap-3 group">
                  Full Service List <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Diesel Diagnostics", icon: <Gauge weight="fill" />, href: "/diagnostics", text: "Computerized fault isolation and electrical system troubleshooting.", img: "/assets/semi-truck-detail.jpg" },
              { title: "Engine Repair", icon: <Engine weight="fill" />, href: "/engine-repair", text: "Professional repair and performance fixes for all major diesel platforms.", img: "/assets/semi-mechanic-2.jpg" },
              { title: "Cooling Systems", icon: <Pulse weight="fill" />, href: "/cooling-systems", text: "Radiator, water pump, and cooling system maintenance for the long haul.", img: "/assets/semi-truck-hero.jpg" },
              { title: "Brake Service", icon: <ShieldCheck weight="fill" />, href: "/brakes", text: "Full air brake system diagnostics and component replacement.", img: "/assets/white-semi-truck.jpg" },
              { title: "Electrical Systems", icon: <Wrench weight="fill" />, href: "/electrical", text: "Starting and charging system diagnostics and repair on-site.", img: "/assets/semi-mechanic-1.jpg" },
              { title: "Fuel Systems", icon: <Toolbox weight="fill" />, href: "/fuel-systems", text: "Injector service and fuel pump repair to maintain efficiency.", img: "/assets/semi-truck-detail.jpg" },
              { title: "Drivetrain", icon: <HardHat weight="fill" />, href: "/drivetrain", text: "Transmission and differential troubleshooting for commercial rigs.", img: "/assets/truck-fleet.jpg" },
              { title: "Fleet Maintenance", icon: <Truck weight="fill" />, href: "/fleet", text: "Preventive maintenance programs to keep your fleet in top shape.", img: "/assets/truck-fleet.jpg" }
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
            src="/assets/truck-fleet.jpg" 
            alt="Commercial Semi-Truck Fleets" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/70" />
        </div>
        <Container className="relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center text-left">
            <div className="lg:col-span-8">
              <Reveal>
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-logo font-bold text-primary leading-tight mb-6 uppercase tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">Commercial Fleet <br /> Integrity First</h2>
                <p className="text-zinc-200 font-sans text-lg md:text-2xl font-normal max-w-3xl leading-relaxed drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                  Southern Arizona's on-site maintenance partner for logistics companies and commercial operators. Keeping your fleet moving without the shop wait times.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <Reveal delay={0.2}>
                <Button asChild size="lg" className="bg-black text-white font-display font-black text-3xl uppercase tracking-wider py-10 px-14 rounded-none hover:scale-105 transition-all shadow-2xl btn-shine">
                  <Link to="/contact">Priority Dispatch</Link>
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
               <span className="text-zinc-200 font-logo text-base uppercase tracking-[0.2em] mb-4 block">Commercial Protocol</span>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase tracking-tighter italic text-white">Service Deployment</h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
            <div className="hidden lg:block absolute top-1/4 left-0 right-0 h-px bg-white/10 -z-0" />
            
            {[
              { step: "01", title: "Technical Triage", text: "Contact us with symptoms and fault codes for a rapid mobile feasibility check." },
              { step: "02", title: "Mobile Dispatch", text: "A specialized technician arrives at your yard or location with the required tools." },
              { step: "03", title: "Advanced Diagnosis", text: "We identify the root cause using commercial-grade scan tools and deep expertise." },
              { step: "04", title: "Certified Fix", text: "Repairs are completed and verified before the technician leaves the site." }
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
            src="/assets/white-semi-truck.jpg" 
            alt="Commercial Truck Dispatch" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <Container className="relative z-10 text-center">
          <Reveal hero>
            <h2 className="text-5xl md:text-7xl lg:text-[clamp(3rem,8vw,10rem)] font-display font-black leading-[0.75] mb-12 uppercase italic tracking-tighter text-white relative z-10 animate-float">
              Ready for <br /> <span className="text-primary not-italic tracking-normal">Dispatch?</span>
            </h2>
            <p className="text-zinc-200 text-xl md:text-2xl mb-16 max-w-3xl mx-auto font-medium uppercase tracking-tight">
              Expert semi-truck repair delivered directly to you. Keep your business moving with Tucson's diesel professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
               <Button asChild size="lg" className="bg-primary text-primary-foreground font-display font-black text-3xl md:text-4xl uppercase tracking-wider py-10 md:py-12 px-10 md:px-16 rounded-none hover:scale-105 transition-all shadow-2xl btn-shine">
                 <a href={`tel:${businessConfig.phoneRaw}`}>Call for Service</a>
               </Button>
               <Button asChild variant="outline" size="lg" className="border-white/20 text-white font-display font-black text-3xl md:text-4xl uppercase tracking-wider py-10 md:py-12 px-10 md:px-16 rounded-none hover:bg-white/5 transition-all">
                 <Link to="/contact">Request Service</Link>
               </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </PageLayout>
  );
}
