import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Lazy loading non-critical components
const Hero = lazy(() => import("@/components/Hero"));
const Gallery = lazy(() => import("@/components/Gallery"));
const GiftPlatform = lazy(() => import("@/components/Features"));
const CustomerReviews = lazy(() => import("@/components/Review"));

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      {/* SEO Metadata */}
      <Helmet>
        <title>Best Gifting Platform - Exclusive Collections</title>
        <meta name="description" content="Discover unique and exclusive gifts on our platform. Shop now for personalized gifting options!" />
        <meta name="keywords" content="gifts, online shopping, personalized gifts, best gifting platform" />
        <meta name="author" content="Sri Sai Enterprises" />
      </Helmet>

      <Navbar />

      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
        <Gallery />
        <GiftPlatform />
        <CustomerReviews />
      </Suspense>

      <Footer />

      {/* Call Now Button - Mobile Only */}
      <Link
        to="/contact"
        className="fixed bottom-4 right-4 md:hidden bg-[#0E0E55] text-white p-3 rounded-full shadow-lg hover:bg-[#302c2c] transition-colors duration-300 z-50"
        aria-label="Call Now"
      >
        <Phone size={24} aria-hidden="true" />
      </Link>
    </div>
  );
};

export default Index;
