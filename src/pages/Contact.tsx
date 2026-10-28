import { PageLayout } from "@/components/PageLayout";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { Section, Container } from "@/components/layout";
import { businessConfig } from "@/data/businessConfig";
import { usePageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Phone, 
  MapPin, 
  Clock, 
  Envelope,
  CheckCircle,
  Truck,
  Warning,
  Camera,
  Star,
  ShieldCheck
} from "@phosphor-icons/react";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

export default function Contact() {
  usePageMeta({
    title: "Request Mobile Diesel Service | Goshen Tucson",
    description: "Book your on-site diesel diagnostic or repair in Tucson. Complete our intake form with vehicle details and DTC codes for professional mobile service.",
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <Section className="relative min-h-[60vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <img 
            src="/assets/freightliner-semi.jpg" 
            alt="Commercial Semi-Truck Fleet Dispatch" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <Container className="relative z-10 text-center lg:text-left">
          <Reveal hero>
            <Badge className="mb-6 bg-primary text-primary-foreground border-none font-logo uppercase tracking-[0.3em] font-black px-4 py-2 text-xs">
              <span className="w-2 h-2 rounded-full bg-black mr-2 animate-pulse" />
              Manifest Request
            </Badge>
            <h1 className="text-6xl md:text-9xl font-display font-black leading-[0.8] mb-8 text-white uppercase italic tracking-tighter">
              Request <br />
              <span className="text-primary not-italic">Dispatch</span>
            </h1>
            <p className="text-zinc-200 text-xl md:text-3xl font-medium max-w-2xl uppercase tracking-tight leading-none mx-auto lg:mx-0">
              Provide vehicle details and symptoms for a mobile feasibility assessment and repair quote.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section className="bg-black border-t border-white/10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Details */}
            <div className="lg:col-span-4 space-y-12">
              <Reveal>
                <div className="space-y-10">
                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-zinc-900 border border-white/10 flex items-center justify-center rounded-none text-white flex-shrink-0 shadow-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Phone size={28} weight="fill" />
                    </div>
                    <div>
                      <h4 className="font-display font-black uppercase text-white text-2xl mb-1 italic leading-none tracking-tight">Direct Dispatch</h4>
                      <a href={`tel:${businessConfig.phoneRaw}`} className="text-3xl font-display font-black text-white hover:text-primary transition-colors tracking-tighter leading-none block mt-2">{businessConfig.phone}</a>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-zinc-900 border border-white/10 flex items-center justify-center rounded-none text-white flex-shrink-0 shadow-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <MapPin size={28} weight="fill" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-black uppercase text-white text-2xl mb-1 italic leading-none tracking-tight">Service Area</h4>
                      <p className="text-zinc-200 leading-snug italic font-medium">Tucson, AZ and surrounding 30-mile radius. We come to you.</p>
                      <p className="text-zinc-400 text-xs mt-3 font-logo uppercase tracking-[0.2em]">{businessConfig.address}</p>
                    </div>
                  </div>

                  <div className="flex gap-6 group">
                    <div className="w-16 h-16 bg-zinc-900 border border-white/10 flex items-center justify-center rounded-none text-white flex-shrink-0 shadow-xl group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                      <Clock size={28} weight="fill" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-display font-black uppercase text-white text-2xl mb-1 italic leading-none tracking-tight">Operational Hours</h4>
                      <p className="text-zinc-200 leading-snug italic font-medium">{businessConfig.hours.weekdays}</p>
                      <p className="text-zinc-200 leading-snug italic font-medium">{businessConfig.hours.saturday}</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="bg-zinc-900 border border-white/10 p-10 rounded-none relative overflow-hidden">
                   <div className="absolute top-0 right-0 w-2 h-full bg-primary/20" />
                   <h4 className="text-white font-display font-black uppercase text-2xl mb-6 italic tracking-tight flex items-center gap-3">
                     <ShieldCheck weight="fill" className="text-white" /> Feasibility
                   </h4>
                   <p className="text-zinc-400 text-base leading-relaxed italic font-medium">
                     While we perform most diagnostics and repairs on-site, mobile availability depends on repair scope, parts, safety, and location.
                   </p>
                </div>
              </Reveal>
            </div>

            {/* Comprehensive Intake Form */}
            <div className="lg:col-span-8">
              <Reveal delay={0.3}>
                <div className="bg-zinc-900 border border-white/10 p-10 md:p-14 rounded-none shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-primary" />
                  <h3 className="text-4xl font-display font-black uppercase mb-12 tracking-tighter italic text-white text-left">Repair Intake <span className="text-primary not-italic">Manifest</span></h3>
                  <form 
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                    onSubmit={(e) => {
                      e.preventDefault();
                      toast.success("Service request submitted. We'll contact you for dispatch.");
                    }}
                  >
                    {/* Customer Info */}
                    <div className="space-y-3 text-left">
                      <Label htmlFor="cust_name" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Full Name</Label>
                      <Input id="cust_name" required className="bg-zinc-950 border-white/10 focus:border-primary text-white h-14 rounded-none" />
                    </div>
                    <div className="space-y-3 text-left">
                      <Label htmlFor="cust_phone" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Phone Number</Label>
                      <Input id="cust_phone" type="tel" required className="bg-zinc-950 border-white/10 focus:border-primary text-white h-14 rounded-none" />
                    </div>

                    <div className="space-y-3 text-left">
                      <Label htmlFor="cust_email" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Email Address</Label>
                      <Input id="cust_email" type="email" required className="bg-zinc-950 border-white/10 focus:border-primary text-white h-14 rounded-none" />
                    </div>
                    <div className="space-y-3 text-left">
                      <Label htmlFor="contact_pref" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Preferred Contact</Label>
                      <Select>
                        <SelectTrigger id="contact_pref" className="bg-zinc-950 border-white/10 text-white h-14 rounded-none" aria-label="Preferred Contact Method">
                          <SelectValue placeholder="Select method" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white rounded-none">
                          <SelectItem value="phone">Phone Call</SelectItem>
                          <SelectItem value="text">Text Message</SelectItem>
                          <SelectItem value="email">Email</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Vehicle Info */}
                    <div className="space-y-3 md:col-span-2 border-t border-white/5 pt-8 mt-4 text-left">
                      <Label htmlFor="truck_details" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Truck Details (Year/Make/Model or Fleet Unit #)</Label>
                      <Input id="truck_details" required placeholder="e.g. 2020 Freightliner Cascadia or Unit #452" className="bg-zinc-950 border-white/10 focus:border-primary text-white h-14 rounded-none" />
                    </div>

                    <div className="space-y-3 md:col-span-2 text-left">
                      <Label htmlFor="service_needed" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Service Needed</Label>
                      <Select>
                        <SelectTrigger id="service_needed" className="bg-zinc-950 border-white/10 text-white h-14 rounded-none" aria-label="Service Needed">
                          <SelectValue placeholder="Select service category" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white rounded-none">
                          <SelectItem value="diagnostics">Diesel Diagnostics</SelectItem>
                          <SelectItem value="engine">Engine Repair</SelectItem>
                          <SelectItem value="maintenance">Preventive Maintenance (PM)</SelectItem>
                          <SelectItem value="electrical">Electrical System</SelectItem>
                          <SelectItem value="brakes">Brakes & Drivetrain</SelectItem>
                          <SelectItem value="other">Other Commercial Repair</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3 md:col-span-2 text-left">
                      <Label htmlFor="issue_description" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Issue Description</Label>
                      <Textarea id="issue_description" required placeholder="Describe the problem or symptoms. Include any active fault codes if available." className="bg-zinc-950 border-white/10 focus:border-primary text-white min-h-[140px] rounded-none" />
                    </div>

                    <div className="space-y-3 text-left">
                      <Label htmlFor="location" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Vehicle Location (City/ZIP)</Label>
                      <Input id="location" required className="bg-zinc-950 border-white/10 focus:border-primary text-white h-14 rounded-none" />
                    </div>
                    <div className="space-y-3 text-left">
                      <Label htmlFor="drivable" className="text-sm uppercase tracking-widest text-zinc-300 font-logo font-bold">Is Vehicle Drivable?</Label>
                      <Select>
                        <SelectTrigger id="drivable" className="bg-zinc-950 border-white/10 text-white h-14 rounded-none" aria-label="Drivable Status">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-white/10 text-white rounded-none">
                          <SelectItem value="yes">Yes</SelectItem>
                          <SelectItem value="no">No</SelectItem>
                          <SelectItem value="limited">Limited (Limp Mode)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="md:col-span-2 pt-10">
                       <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground font-display font-black text-4xl uppercase tracking-wider py-12 rounded-none shadow-2xl btn-shine hover:scale-[1.02] transition-all">
                         Request Dispatch Quote
                       </Button>
                       <p className="text-xs text-zinc-400 font-logo uppercase tracking-[0.2em] mt-8 text-center">
                         Transmission encrypted. Operational security protocols in place.
                       </p>
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>
    </PageLayout>
  );
}
