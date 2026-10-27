import { PageLayout } from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { businessConfig } from "@/data/businessConfig";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Pulse, 
  Engine, 
  Drop, 
  ShieldCheck, 
  Lightning, 
  Gauge, 
  Wrench,
  Shield,
  Clock,
  ArrowRight,
  Truck,
  Warning,
  CheckCircle,
  Star
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";

interface SpecializedServiceProps {
  type: "diagnostics" | "reliability" | "fuel-systems" | "electrical" | "emissions" | "maintenance" | "brakes" | "performance" | "heavy-duty-gas";
}

const serviceContent = {
  diagnostics: {
    title: "Mobile Diesel Diagnostics",
    description: "Dealer-level troubleshooting for complex diesel and gasoline truck faults. We find what others miss.",
    icon: <Gauge weight="fill" size={48} />,
    img: "/assets/diagnostic-tool.jpg",
    details: [
      "Fault code analysis (DTC)",
      "CAN-bus troubleshooting",
      "Module programming & calibration",
      "Live data stream monitoring",
      "Power balance & cylinder contribution tests",
      "Electrical circuit analysis"
    ]
  },
  reliability: {
    title: "Reliability & Bulletproofing",
    description: "Addressing factory weak points to keep your truck on the road for the long haul.",
    icon: <Engine weight="fill" size={48} />,
    img: "/assets/engine-bay.jpg",
    details: [
      "Ford 6.0L oil cooler & head stud work",
      "S&S Diesel DCR pump conversions",
      "Timing chain & cam-phaser repairs",
      "Cooling system reliability upgrades",
      "High-pressure oil system service",
      "Preventive structural upgrades"
    ]
  },
  "fuel-systems": {
    title: "Fuel System Service",
    description: "Critical fuel system diagnostics and repair for high-pressure common rail engines.",
    icon: <Drop weight="fill" size={48} />,
    img: "/assets/engine-inspection.jpg",
    details: [
      "Injector diagnostics & replacement",
      "Injection pump (CP3, CP4, CP4.2) service",
      "Lift pump upgrades & repair",
      "Fuel contamination cleanup",
      "Filtration system optimization",
      "Pressure regulator testing"
    ]
  },
  electrical: {
    title: "Electrical & Modules",
    description: "Specialized electrical troubleshooting and control module configuration.",
    icon: <Lightning weight="fill" size={48} />,
    img: "/assets/mechanic-action.jpg",
    details: [
      "Chassis & engine wiring repair",
      "ECM/TCM/BCM programming",
      "Key programming & Immobilizer reset",
      "Custom wiring for fleet applications",
      "Secondary system troubleshooting",
      "Sensor & actuator calibration"
    ]
  },
  emissions: {
    title: "DPF & Emissions Diagnostics",
    description: "Lawful maintenance and diagnostics for complex exhaust aftertreatment systems.",
    icon: <Shield weight="fill" size={48} />,
    img: "/assets/fleet-service.jpg",
    details: [
      "Stationary forced DPF regeneration",
      "NOx & PM sensor diagnostics",
      "DEF pump & doser valve testing",
      "EGR system troubleshooting",
      "Exhaust temp sensor replacement",
      "Emissions system fault analysis"
    ]
  },
  maintenance: {
    title: "Maintenance & Fluids",
    description: "Convenient on-site preventive maintenance to extend vehicle life.",
    icon: <ShieldCheck weight="fill" size={48} />,
    img: "/assets/diesel-truck-hero.jpg",
    details: [
      "Synthetic oil & filtration service",
      "Transmission & drivetrain fluid exchange",
      "Coolant analysis & flush",
      "Differential & transfer case service",
      "Multi-point safety inspections",
      "Fleet maintenance scheduling"
    ]
  },
  brakes: {
    title: "Brakes, Steering & Suspension",
    description: "Critical chassis maintenance to ensure safe operation and load handling.",
    icon: <Wrench weight="fill" size={48} />,
    img: "/assets/engine-bay.jpg",
    details: [
      "Heavy-duty brake service & rotors",
      "Tie rod, drag link & ball joint replacement",
      "CV axle & hub bearing service",
      "Control arm & bushing replacement",
      "Shock & strut installation",
      "Steering box & pump diagnostics"
    ]
  },
  performance: {
    title: "Performance Upgrades",
    description: "Enhancing efficiency and power with high-quality aftermarket solutions.",
    icon: <Pulse weight="fill" size={48} />,
    img: "/assets/engine-detail.jpg",
    details: [
      "Banks Power induction & exhaust",
      "AMSOIL synthetic lubrication systems",
      "No Limit Fabrication components",
      "PPE performance upgrades",
      "Turbocharger optimization",
      "Intake & cooling improvements"
    ]
  },
  "heavy-duty-gas": {
    title: "Heavy-Duty Gas Trucks",
    description: "Specialized service for HD gas work trucks including Ford V10 and Chevy Vortec.",
    icon: <Truck weight="fill" size={48} />,
    img: "/assets/mechanic-action.jpg",
    details: [
      "Ford 7.3L Godzilla service",
      "HEMI exhaust manifold stud extraction",
      "Ford V10 spark plug/coil repair",
      "GM 6.0L & 6.2L timing repairs",
      "HD gas engine diagnostics",
      "Work truck maintenance"
    ]
  }
};

export default function SpecializedService({ type }: SpecializedServiceProps) {
  const content = serviceContent[type];
  
  usePageMeta({
    title: `${content.title} | Tucson Mobile Diesel Repair`,
    description: content.description,
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src={content.img} 
            alt={content.title} 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <Container className="relative z-10">
          <Reveal hero>
            <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse" />
              Deployment Active
            </Badge>
            <h1 className="text-6xl md:text-8xl lg:text-[clamp(4rem,9vw,9.5rem)] font-display font-black leading-[0.8] mb-8 uppercase italic tracking-tighter text-white">
              {content.title.split(" ").slice(0, -1).join(" ")} <br />
              <span className="text-primary not-italic">{content.title.split(" ").pop()}</span>
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
              <div className="bg-zinc-800 border border-white/10 p-12 rounded-none relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
                <div className="w-20 h-20 bg-zinc-950 border border-white/10 flex items-center justify-center rounded-none mb-10 text-primary">
                  {content.icon}
                </div>
                <h2 className="text-4xl font-display font-black uppercase mb-10 italic tracking-tighter text-white">Capabilities <span className="text-primary not-italic">Manifest</span></h2>
                <ul className="space-y-6">
                  {content.details.map((detail) => (
                    <li key={detail} className="flex items-center gap-4 text-zinc-200 font-logo text-sm uppercase tracking-wider">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(0,96,192,0.8)]" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <div className="space-y-16">
              <Reveal delay={0.2}>
                <h3 className="text-4xl font-display font-black uppercase mb-10 italic tracking-tighter text-white">Repair <span className="text-primary not-italic">Protocol</span></h3>
                <div className="space-y-10">
                  {[
                    { step: "01", title: "Remote Triage", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                    { step: "02", title: "On-Site Arrival", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
                    { step: "03", title: "Verified Fix", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-8 group">
                      <span className="text-5xl font-display font-black text-primary leading-none italic group-hover:scale-110 transition-transform">{item.step}</span>
                      <div>
                        <h4 className="text-2xl font-display font-black uppercase text-white mb-2 italic">{item.title}</h4>
                        <p className="text-zinc-400 text-lg leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <div className="bg-zinc-950 border border-white/10 p-10 rounded-none relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-2 h-full bg-primary/20" />
                  <h4 className="text-white font-display font-black uppercase mb-6 flex items-center gap-3 italic text-xl">
                    <Warning weight="fill" className="text-primary" /> Service Limitations
                  </h4>
                  <p className="text-zinc-400 text-base leading-relaxed font-medium">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-zinc-950 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="/assets/mechanic-action.jpg" alt="Dispatch" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <Container className="text-center relative z-10">
          <Reveal>
            <h2 className="text-6xl md:text-8xl font-display font-black uppercase mb-10 italic tracking-tighter text-white">Need This <span className="text-primary not-italic">Fixed?</span></h2>
            <p className="text-zinc-200 text-xl md:text-3xl mb-16 max-w-2xl mx-auto font-medium uppercase tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Button asChild size="lg" className="bg-primary text-primary-foreground font-display font-black text-3xl uppercase tracking-wider py-10 px-16 rounded-none hover:scale-105 transition-all shadow-2xl btn-shine">
                <Link to="/contact">Request {content.title.split(" ").pop()}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white/20 text-white font-display font-black text-3xl uppercase tracking-wider py-10 px-16 rounded-none hover:bg-white/5 transition-all">
                <a href={`tel:${businessConfig.phoneRaw}`}>Call Dispatch</a>
              </Button>
            </div>
          </Reveal>
        </Container>
      </Section>
    </PageLayout>
  );
}
