import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { MotionConfig } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getPreviewRouterBasename } from "@/lib/previewBase";
import Index from "./pages/Index";
import Services from "./pages/Services";
import EnginePlatformPage from "./pages/EnginePlatform";
import Fleet from "./pages/Fleet";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import ServiceAreas from "./pages/ServiceAreas";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import SpecializedService from "./pages/SpecializedService";
import NotFound from "./pages/NotFound";

const App = () => (
  <MotionConfig reducedMotion="user">
    <TooltipProvider>
      <Sonner />
      <BrowserRouter
        basename={getPreviewRouterBasename()}
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          
          {/* Platform Pages */}
          <Route path="/ford-powerstroke" element={<EnginePlatformPage platform="ford" />} />
          <Route path="/ram-cummins" element={<EnginePlatformPage platform="ram" />} />
          <Route path="/gm-duramax" element={<EnginePlatformPage platform="gm" />} />
          
          {/* Specialized Service Pages */}
          <Route path="/diagnostics" element={<SpecializedService type="diagnostics" />} />
          <Route path="/reliability" element={<SpecializedService type="reliability" />} />
          <Route path="/fuel-systems" element={<SpecializedService type="fuel-systems" />} />
          <Route path="/electrical" element={<SpecializedService type="electrical" />} />
          <Route path="/emissions" element={<SpecializedService type="emissions" />} />
          <Route path="/maintenance" element={<SpecializedService type="maintenance" />} />
          <Route path="/brakes" element={<SpecializedService type="brakes" />} />
          <Route path="/performance" element={<SpecializedService type="performance" />} />
          <Route path="/heavy-duty-gas" element={<SpecializedService type="heavy-duty-gas" />} />
          
          <Route path="/fleet" element={<Fleet />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service-areas" element={<ServiceAreas />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </MotionConfig>
);

export default App;
