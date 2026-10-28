import { PageLayout } from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { businessConfig } from "@/data/businessConfig";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Truck, 
  Engine, 
  Wrench, 
  Gauge, 
  Pulse, 
  ShieldCheck, 
  Toolbox, 
  HardHat,
  ArrowRight,
  CheckCircle,
  Phone
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

export default function CommercialTruckRepair() {
  usePageMeta({
    title: "Semi-Truck & Commercial Diesel Repair | Goshen Tucson",
    description: "Specialized mobile repair for semi-trucks, tractor-trailers, and commercial diesel fleets in Tucson, AZ. Professional on-site diagnostics and maintenance.",
  });

  const capabilities = [
    { 
      title: "Engine Overhaul & Repair", 
      icon: <Engine weight="fill" />, 
      text: "Comprehensive engine diagnostics and repair for all major commercial platforms including Cummins, Detroit, PACCAR, and Volvo/Mack."
    },
    { 
      title: "Diagnostics & Programming", 
      icon: <Gauge weight="fill" />, 
      text: "Dealer-level computerized diagnostics and module programming to identify complex faults and electrical issues on-site."
    },
    { 
      title: "Brake & Drivetrain", 
      icon: <ShieldCheck weight="fill" />, 
      text: "Full service for commercial air brake systems, transmissions, and differentials to ensure safe and reliable operations."
    },
    { 
      title: "Preventive Maintenance", 
      icon: <Toolbox weight="fill" />, 
      text: "Scheduled PM services, oil changes, and filter replacements delivered to your yard to maximize uptime and efficiency."
    },
    { 
      title: "Electrical Systems", 
      icon: <Wrench weight="fill" />, 
      text: "Starting and charging system diagnostics, battery replacement, and complex CAN-bus circuit troubleshooting."
    },
    { 
      title: "Fuel & Cooling Systems", 
      icon: <Pulse weight="fill" />, 
      text: "Injector service, fuel pump repair, and radiator/cooling system maintenance specialized for heavy-duty trucking environments."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/white-semi-truck.jpg" 
            alt="Semi-Truck Commercial Repair" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <Container className="relative z-10 text-center lg:text-left">
          <Reveal hero>
            <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs">
              Commercial Specialization
            </Badge>
            <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.8] mb-8 text-white uppercase italic tracking-tighter">
              Commercial <br />
              <span className="text-primary not-italic">Truck Repair</span>
            </h1>
            <p className="text-zinc-200 text-xl md:text-3xl font-medium max-w-3xl uppercase tracking-tight leading-none mx-auto lg:mx-0">
              Professional mobile diesel repair for semi-trucks, tractor-trailers, and logistics fleets. We bring the heavy-duty workshop to you.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Main Content */}
      <Section className="bg-black border-t border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-display font-black mb-10 leading-[0.9] uppercase italic text-white">Keeping Your <span className="text-primary not-italic">Business Moving</span></h2>
              <div className="space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed font-medium">
                <p>
                  At Goshen Automotive, we specialize exclusively in the repair and maintenance of commercial diesel vehicles. From Class 7 delivery trucks to Class 8 tractor-trailers, our mobile technical team is equipped for the most demanding repairs.
                </p>
                <p>
                  We understand the logistics industry. Downtime isn't just an inconvenience—it's a loss. Our mobile-first model eliminates towing fees and gets your rig back on the road faster by performing professional repairs at your location.
                </p>
              </div>
              <ul className="mt-12 space-y-4">
                {[
                  "Dealer-Level Diagnostics",
                  "Major Engine Platform Support",
                  "On-Site Fleet Maintenance",
                  "Certified Mobile Technicians"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white font-logo font-bold uppercase tracking-widest italic">
                    <CheckCircle className="text-primary" size={24} weight="fill" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="relative aspect-[4/5] bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden">
                <img 
                  src="/assets/semi-truck-detail.jpg" 
                  alt="Semi-Truck Detail" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>

          <div className="mb-20">
            <Reveal>
              <h3 className="text-4xl md:text-6xl font-display font-black uppercase text-white mb-16 text-center italic tracking-tight">Our <span className="text-primary not-italic">Capabilities</span></h3>
            </Reveal>
            <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((item, i) => (
                <StaggerItem key={i}>
                  <div className="bg-zinc-900/50 border border-white/10 p-10 rounded-none hover:border-primary/50 transition-all group h-full">
                    <div className="w-16 h-16 bg-black border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-display font-black uppercase text-white mb-4 italic tracking-tight leading-none">{item.title}</h4>
                    <p className="text-zinc-400 text-base leading-relaxed">{item.text}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </Section>

      {/* Fleet Partnership Section */}
      <Section className="bg-zinc-950 py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/truck-fleet.jpg" 
            alt="Fleet Maintenance" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <Container className="relative z-10">
          <div className="max-w-4xl">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.8] mb-10 uppercase italic tracking-tighter">Fleet <br /> <span className="text-primary not-italic">Partnerships</span></h2>
              <p className="text-zinc-300 text-xl md:text-3xl font-medium mb-12 uppercase tracking-tight">
                Scheduled maintenance and priority emergency dispatch for commercial trucking fleets in Tucson.
              </p>
              <div className="flex flex-wrap gap-6">
                <Button asChild size="lg" className="bg-primary text-primary-foreground font-display font-black text-2xl uppercase tracking-wider py-8 px-12 rounded-none btn-shine">
                  <Link to="/contact">Discuss Fleet Plan</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/20 text-white font-display font-black text-2xl uppercase tracking-wider py-8 px-12 rounded-none hover:bg-white/5 transition-all">
                  <a href={`tel:${businessConfig.phoneRaw}`}>Immediate Dispatch</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Conversion Section */}
      <Section className="bg-black py-48 border-t border-white/10">
        <Container className="text-center">
          <Reveal>
            <h2 className="text-5xl md:text-8xl font-display font-black text-white leading-[0.8] mb-12 uppercase italic tracking-tighter">Get Your Rig <br /> <span className="text-primary not-italic">Back On Track</span></h2>
            <p className="text-zinc-200 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium uppercase tracking-tight">
              Southern Arizona's mobile commercial diesel experts are ready to handle your repair.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-display font-black text-3xl md:text-4xl uppercase tracking-wider py-10 md:py-12 px-10 md:px-16 rounded-none hover:scale-105 transition-all shadow-2xl btn-shine">
                 <a href={`tel:${businessConfig.phoneRaw}`} className="flex items-center gap-4">
                   <Phone weight="fill" />
                   Call for Service
                 </a>
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
