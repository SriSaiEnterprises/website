import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Phone } from 'lucide-react'; // Import Phone icon from Lucide
import Index from "./pages/Index";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="relative">
          {/* Add Structured Data for SEO */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sri Sai Enterprises",
              "url": "https://thesrisaienterprises.com",
              "logo": "https://thesrisaienterprises.com/logo.png",
              "description": "Sri Sai Enterprises offers the best corporate gifting solutions. Discover unique and exclusive gifts for your business needs.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9663467040",
                "contactType": "customer service"
              }
            })}
          </script>

          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Call Now Button - Mobile Only */}
            <a
              href="https://wa.me/919663467040?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Can%20you%20please%20provide%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="fixed bottom-4 right-4 md:hidden bg-[#0E0E55] text-white p-3 rounded-full shadow-lg hover:bg-[#302c2c] transition-colors duration-300 z-50"
              aria-label="WhatsApp Now"
            >
              <Phone size={24} />
            </a>

            {/* Contact Div - Larger Screens Only */}
            <a
              href="https://wa.me/919663467040?text=Hello%2C%20I%20am%20interested%20in%20your%20products.%20Can%20you%20please%20provide%20more%20details%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:block fixed bottom-4 right-4 bg-[#0E0E55] text-white rounded-lg shadow-lg hover:bg-[#302c2c] transition-colors duration-300 z-50 animate-subtle-zoom"
            >
              <div className="p-4 flex flex-col items-center">
                <p className="text-sm font-semibold">Get in touch</p>
                <div className="flex items-center gap-2 mt-1">
                  <Phone size={20} />
                  <span className="text-lg">+91 9663467040</span>
                </div>
              </div>
            </a>

        </div>

        {/* Inline CSS for Animation */}
        <style>
          {`
            @keyframes subtle-zoom {
              0%, 100% {
                transform: scale(1);
              }
              50% {
                transform: scale(1.05);
              }
            }
            .animate-subtle-zoom {
              animation: subtle-zoom 2s ease-in-out infinite;
            }
          `}
        </style>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;