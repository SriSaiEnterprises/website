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
        <title>Sri Sai Enterprises - Best Corporate Gifting Platform</title>
        <meta name="description" content="Sri Sai Enterprises offers the best corporate gifting solutions. Discover unique and exclusive gifts for your business needs. Shop now for personalized gifting options!" />
        <meta name="keywords" content="Sri Sai Enterprises, corporate gifting, business gifts, personalized gifts, best gifting platform" />
        <meta name="author" content="Sri Sai Enterprises" />
        <meta property="og:title" content="Sri Sai Enterprises - Best Corporate Gifting Platform" />
        <meta property="og:description" content="Sri Sai Enterprises offers the best corporate gifting solutions. Discover unique and exclusive gifts for your business needs." />
        <meta property="og:image" content="https://thesrisaienterprises.com/logo.png" />
        <meta property="og:url" content="https://thesrisaienterprises.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sri Sai Enterprises - Best Corporate Gifting Platform" />
        <meta name="twitter:description" content="Sri Sai Enterprises offers the best corporate gifting solutions. Discover unique and exclusive gifts for your business needs." />
        <meta name="twitter:image" content="https://thesrisaienterprises.com/logo.png" />
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