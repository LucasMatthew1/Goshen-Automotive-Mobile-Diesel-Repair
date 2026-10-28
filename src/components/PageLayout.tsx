import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Phone, 
  List, 
  X, 
  Engine, 
  MapPin, 
  Clock, 
  FacebookLogo, 
  InstagramLogo,
  CaretRight,
  Truck,
  Envelope
} from "@phosphor-icons/react";
import { businessConfig } from "@/data/businessConfig";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout";
import { SmoothScroll } from "@/components/smooth-scroll";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Truck Repair", href: "/commercial-truck-repair" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
        {/* Top Utility Bar */}
        <div className="hidden lg:block bg-black/60 backdrop-blur-md border-b border-white/10 py-2">
          <Container className="flex justify-between items-center text-[12px] font-logo uppercase tracking-widest text-zinc-100">
            <div className="flex gap-6">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-primary" />
                <span>Serving {businessConfig.serviceArea.primary} & Surrounding Areas</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-primary" />
                <span>{businessConfig.hours.weekdays}</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href={businessConfig.socials.facebook} target="_blank" className="hover:text-primary transition-colors">Facebook</a>
              <a href={businessConfig.socials.instagram} target="_blank" className="hover:text-primary transition-colors">Instagram</a>
            </div>
          </Container>
        </div>

        {/* Header */}
        <header 
          className={`fixed lg:sticky top-0 left-0 right-0 z-[100] transition-all duration-300 backdrop-blur-xl border-b border-white/10 ${
            isScrolled 
              ? "bg-black/90 py-2.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.6)]" 
              : "bg-black/60 py-3.5 shadow-md"
          }`}
        >
          <Container className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <img 
                src="/assets/Screenshot_2026-10-27_151512-removebg-preview-29dcfdea2e07.png" 
                alt="Goshen Automotive Logo" 
                className="h-7 md:h-11 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.href}
                  className={`text-sm font-black uppercase tracking-wider transition-all hover:text-primary ${
                    location.pathname === link.href ? "text-white border-b-2 border-primary" : "text-white"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-6">
              <a 
                href={`tel:${businessConfig.phoneRaw}`} 
                className="hidden xl:flex items-center gap-2 text-white hover:text-primary transition-all font-black tracking-tight uppercase text-lg font-display"
              >
                <Phone weight="fill" className="w-5 h-5 text-primary" />
                <span className="hover:underline">{businessConfig.phone}</span>
              </a>
              <Button asChild className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground font-black uppercase tracking-widest text-xs px-6 rounded-none btn-shine">
                <Link to="/contact">Request Service</Link>
              </Button>
              
              <button 
                className="lg:hidden p-2 text-white hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(true)}
              >
                <List size={32} />
              </button>
            </div>
          </Container>
        </header>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 z-[150] bg-black/60 backdrop-blur-sm"
              />
              <motion.div 
                initial={{ opacity: 0, x: "100%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm z-[200] bg-zinc-950/95 backdrop-blur-2xl border-l border-white/10 flex flex-col shadow-2xl"
              >
                <div className="p-6 flex justify-between items-center border-b border-white/10">
                  <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center">
                    <img 
                      src="/assets/Screenshot_2026-10-27_151512-removebg-preview-29dcfdea2e07.png" 
                      alt="Goshen Automotive Logo" 
                      className="h-10 w-auto object-contain"
                    />
                  </Link>
                  <button onClick={() => setIsMenuOpen(false)} className="p-2 text-white hover:text-primary transition-colors">
                    <X size={28} />
                  </button>
                </div>
                <nav className="flex-grow flex flex-col p-8 gap-6 overflow-y-auto">
                  {navLinks.map((link) => (
                    <Link 
                      key={link.name} 
                      to={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`text-3xl font-display font-black uppercase tracking-tight transition-colors ${
                        location.pathname === link.href ? "text-primary" : "text-white hover:text-primary"
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </nav>
                <div className="p-8 space-y-4 border-t border-white/10">
                  <a 
                    href={`tel:${businessConfig.phoneRaw}`} 
                    className="flex items-center justify-center gap-3 bg-primary text-primary-foreground py-4 px-6 rounded-none font-display font-black text-xl uppercase tracking-wider shadow-lg active:scale-[0.98] transition-transform"
                  >
                    <Phone weight="fill" size={20} />
                    <span>Call Now</span>
                  </a>
                  <Button asChild variant="outline" className="w-full border-white/10 text-white py-6 rounded-none font-display font-black text-xl uppercase">
                    <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Request Quote</Link>
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-zinc-950 border-t border-white/10 pt-20 pb-10">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
              <div className="space-y-8">
                <Link to="/" className="inline-block">
                  <img 
                    src="/assets/Screenshot_2026-10-27_151512-removebg-preview-29dcfdea2e07.png" 
                    alt="Goshen Automotive Logo" 
                    className="h-24 md:h-32 w-auto object-contain"
                  />
                </Link>
                <p className="text-zinc-100 text-base leading-relaxed max-w-xs font-medium">
                  Premium on-site diesel expertise in Tucson. Specializing in Ford, Ram, and GM platforms with dealer-level diagnostics.
                </p>
                <div className="flex gap-4">
                  <a href={businessConfig.socials.facebook} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                    <FacebookLogo size={24} weight="fill" />
                  </a>
                  <a href={businessConfig.socials.instagram} className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all shadow-sm">
                    <InstagramLogo size={24} weight="fill" />
                  </a>
                </div>
              </div>

              <div>
                <h4 className="text-white font-display font-black uppercase tracking-widest text-lg mb-8">Truck Services</h4>
                <ul className="space-y-4">
                  <li><Link to="/commercial-truck-repair" className="text-zinc-100 hover:text-primary transition-colors flex items-center gap-3 font-medium"><CaretRight size={14} className="text-primary" /> Semi-Truck Repair</Link></li>
                  <li><Link to="/services" className="text-zinc-100 hover:text-primary transition-colors flex items-center gap-3 font-medium"><CaretRight size={14} className="text-primary" /> Diesel Diagnostics</Link></li>
                  <li><Link to="/services" className="text-zinc-100 hover:text-primary transition-colors flex items-center gap-3 font-medium"><CaretRight size={14} className="text-primary" /> Preventive Maintenance</Link></li>
                  <li><Link to="/services" className="text-zinc-100 hover:text-primary transition-colors flex items-center gap-3 font-medium"><CaretRight size={14} className="text-primary" /> Engine Overhaul</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-display font-black uppercase tracking-widest text-lg mb-8">Quick Links</h4>
                <ul className="space-y-4">
                  <li><Link to="/about" className="text-zinc-100 hover:text-primary transition-colors flex items-center gap-3 font-medium"><CaretRight size={14} className="text-primary" /> About Us</Link></li>
                  <li><Link to="/fleet" className="text-zinc-100 hover:text-primary transition-colors flex items-center gap-3 font-medium"><CaretRight size={14} className="text-primary" /> Fleet Services</Link></li>
                  <li><Link to="/faq" className="text-zinc-100 hover:text-primary transition-colors flex items-center gap-3 font-medium"><CaretRight size={14} className="text-primary" /> FAQs</Link></li>
                  <li><Link to="/contact" className="text-zinc-100 hover:text-primary transition-colors flex items-center gap-3 font-medium"><CaretRight size={14} className="text-primary" /> Request Service</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-display font-black uppercase tracking-widest text-lg mb-8">Technical HQ</h4>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-primary" size={20} />
                    </div>
                    <span className="text-zinc-200 font-bold text-sm leading-snug">{businessConfig.address}</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-primary" size={20} />
                    </div>
                    <a href={`tel:${businessConfig.phoneRaw}`} className="text-zinc-200 hover:text-primary transition-colors font-black uppercase text-base">{businessConfig.phone}</a>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <Envelope className="text-primary" size={20} />
                    </div>
                    <a href={`mailto:${businessConfig.email}`} className="text-zinc-200 hover:text-primary transition-colors font-medium break-all">{businessConfig.email}</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-logo text-zinc-200 uppercase tracking-widest">
              <div className="text-center md:text-left font-medium text-zinc-100">© {new Date().getFullYear()} {businessConfig.name} <br className="md:hidden" /> <span className="hidden md:inline">|</span> Integrity in Repair</div>
              <div className="flex gap-10">
                <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </Container>
        </footer>

        {/* Mobile Sticky Bar */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-primary flex border-t border-white/10 shadow-[0_-10px_30px_rgba(0,0,0,0.5)]">
          <a 
            href={`tel:${businessConfig.phoneRaw}`} 
            className="flex-1 flex items-center justify-center gap-3 py-5 text-primary-foreground font-display font-black text-2xl uppercase tracking-wider"
          >
            <Phone weight="fill" size={24} />
            <span>Call</span>
          </a>
          <Link 
            to="/contact" 
            className="flex-1 flex items-center justify-center gap-3 py-5 bg-zinc-950 text-white font-display font-black text-2xl uppercase tracking-wider"
          >
            <Truck weight="fill" size={24} />
            <span>Book</span>
          </Link>
        </div>
      </div>
    </SmoothScroll>
  );
}
