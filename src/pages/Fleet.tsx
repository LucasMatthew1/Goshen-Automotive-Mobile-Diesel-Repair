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
  Clock, 
  MapPin, 
  CaretRight,
  Handshake,
  HardHat,
  Engine,
  Wrench,
  Gauge,
  Users,
  Shield,
  Toolbox
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function Fleet() {
  usePageMeta({
    title: "Fleet Service & Maintenance | Goshen Mobile Diesel Tucson",
    description: "Priority mobile dispatch and maintenance for commercial fleets in Tucson. Minimize downtime with on-site diesel repairs for your work trucks.",
  });

  const fleetBenefits = [
    { title: "Priority Dispatch", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: <Clock weight="fill" /> },
    { title: "On-Site Maintenance", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: <MapPin weight="fill" /> },
    { title: "Detailed Records", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: <ShieldCheck weight="fill" /> },
    { title: "Volume Support", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: <Users weight="fill" /> }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/truck-fleet.jpg" 
            alt="Commercial Fleet Support" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <Container className="relative z-10">
          <Reveal hero>
            <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse" />
              Priority Dispatch Active
            </Badge>
            <h1 className="text-6xl md:text-8xl lg:text-[clamp(4rem,10vw,10.5rem)] font-display font-black leading-[0.8] mb-8 uppercase italic tracking-tighter text-white">
              Fleet <br />
              <span className="text-primary not-italic">Integrity</span>
            </h1>
            <p className="text-zinc-200 text-xl md:text-3xl font-medium max-w-2xl uppercase tracking-tight leading-none mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </Reveal>
        </Container>
      </Section>

      {/* Priority Support Grid */}
      <Section className="bg-black border-t border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="text-5xl md:text-7xl font-display font-black mb-10 leading-[0.9] uppercase italic text-white tracking-tighter">Priority Mobile <br /><span className="text-primary not-italic">Support</span></h2>
                <div className="space-y-6 mb-12">
                  {fleetBenefits.map((benefit, i) => (
                    <div key={i} className="flex gap-8 p-8 bg-zinc-900 border border-white/5 rounded-none hover:border-primary transition-all group relative overflow-hidden">
                      <div className="relative z-10 w-16 h-16 bg-black border border-white/10 flex items-center justify-center text-white group-hover:bg-primary group-hover:border-primary transition-all">
                        {benefit.icon}
                      </div>
                      <div className="relative z-10 text-left">
                        <h4 className="text-3xl font-display font-black text-white uppercase italic leading-none mb-3 tracking-tight group-hover:text-primary transition-colors">{benefit.title}</h4>
                        <p className="text-zinc-300 text-lg leading-snug">{benefit.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:sticky lg:top-32">
              <Reveal delay={0.2}>
                <div className="bg-zinc-900 border border-white/10 p-10 md:p-14 rounded-none shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                  <h3 className="text-4xl font-display font-black uppercase mb-10 tracking-tighter italic text-white text-left">Fleet Inquiry <span className="text-primary not-italic">Manifest</span></h3>
                  <form 
                    className="space-y-8"
                    onSubmit={(e) => {
                      e.preventDefault();
                      toast.success("Manifest dispatched. Our commercial rep will contact you shortly.");
                    }}
                  >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3 text-left">
                            <Label htmlFor="fleet_company" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Company Name</Label>
                            <Input id="fleet_company" required className="bg-zinc-950 border-white/10 focus:border-primary text-white h-14 rounded-none" />
                          </div>
                          <div className="space-y-3 text-left">
                            <Label htmlFor="fleet_contact" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Contact Name</Label>
                            <Input id="fleet_contact" required className="bg-zinc-950 border-white/10 focus:border-primary text-white h-14 rounded-none" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                          <div className="space-y-3 text-left">
                            <Label htmlFor="fleet_phone" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Phone</Label>
                            <Input id="fleet_phone" type="tel" required className="bg-zinc-950 border-white/10 focus:border-primary text-white h-14 rounded-none" />
                          </div>
                          <div className="space-y-3 text-left">
                            <Label htmlFor="fleet_email" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Email</Label>
                            <Input id="fleet_email" type="email" required className="bg-zinc-950 border-white/10 focus:border-primary text-white h-14 rounded-none" />
                          </div>
                        </div>

                        <div className="space-y-3 text-left">
                          <Label htmlFor="fleet_needs" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Vehicle Types & Locations</Label>
                          <Textarea id="fleet_needs" required className="bg-zinc-950 border-white/10 focus:border-primary text-white min-h-[140px] rounded-none" />
                        </div>

                    <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground font-display font-black text-3xl uppercase tracking-wider py-12 rounded-none btn-shine shadow-[0_0_30px_rgba(0,96,192,0.3)]">
                      Request Partnership
                    </Button>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Capabilities Section */}
      <Section className="bg-zinc-950 border-t border-white/5">
        <Container>
          <div className="text-center mb-24">
            <Reveal>
              <h2 className="text-5xl md:text-8xl font-display font-black uppercase mb-8 italic tracking-tighter text-white">Full Rig <span className="text-primary not-italic">Coverage</span></h2>
              <p className="text-zinc-300 max-w-2xl mx-auto font-logo text-base uppercase tracking-widest">Mobile Solutions For Heavy Assets</p>
            </Reveal>
          </div>
          
          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Diagnostics", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: <Gauge weight="fill" size={48} /> },
              { title: "Maintenance", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: <Toolbox weight="fill" size={48} /> },
              { title: "Heavy Repair", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", icon: <Engine weight="fill" size={48} /> }
            ].map((rig) => (
              <StaggerItem key={rig.title}>
                <div className="p-12 bg-zinc-900 border border-white/5 rounded-none text-center group hover:border-primary/50 transition-all flex flex-col h-full">
                   <div className="text-white mb-10 flex justify-center group-hover:text-primary group-hover:scale-110 transition-transform">{rig.icon}</div>
                   <h3 className="text-3xl font-display font-black uppercase text-white mb-6 tracking-tight italic leading-none">{rig.title}</h3>
                   <p className="text-zinc-200 text-lg leading-relaxed flex-grow">{rig.text}</p>
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
            src="/assets/semi-truck-hero.jpg" 
            alt="Technical Support" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <Container className="relative z-10 text-center">
          <Reveal hero>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-none mb-10 uppercase italic tracking-tighter">Protect Your <span className="text-primary not-italic">Bottom Line</span></h2>
            <p className="text-zinc-200 text-xl md:text-3xl mb-12 max-w-3xl mx-auto font-medium uppercase tracking-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
