import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Eligibility from "./pages/Eligibility";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Service Pages
import Immigration from "./pages/services/Immigration";
import Formation from "./pages/services/Formation";
import Coaching from "./pages/services/Coaching";
import Orientation from "./pages/services/Orientation";
import Recrutement from "./pages/services/Recrutement";

// Other Pages
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import About from "./pages/About";

// Legal Pages
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Sitemap from "./pages/Sitemap";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/eligibility" element={<Eligibility />} />
                <Route path="/contact" element={<Contact />} />
                
                {/* Service Routes */}
                <Route path="/services/immigration" element={<Immigration />} />
                <Route path="/services/formation" element={<Formation />} />
                <Route path="/services/coaching" element={<Coaching />} />
                <Route path="/services/orientation" element={<Orientation />} />
                <Route path="/services/recrutement" element={<Recrutement />} />
                
                {/* Other Routes */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/about" element={<About />} />
                
                {/* Legal Pages */}
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="/sitemap" element={<Sitemap />} />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
