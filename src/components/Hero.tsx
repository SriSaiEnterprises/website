import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import heroImg from '../images/heroImg10.png';
import { Gift, CircuitBoard, Printer, Smartphone } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();
  const [activeText, setActiveText] = useState(0);
  const texts = ['Corporate Gifting', 'Printing Solutions', 'Tech Products'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveText((prev) => (prev + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [texts.length]);

  // Function to handle navigation with category query parameter
  const handleCategoryClick = (category) => {
    const formattedCategory = encodeURIComponent(category);
    navigate(`/products?category=${formattedCategory}`);
  };

  return (
    <>
      {/* Hero Section - Full Page Height */}
      <div
        className="max-w-7xl mx-auto w-full min-h-screen flex flex-col md:flex-row items-center justify-between bg-white px-4 sm:px-6 py-12 relative overflow-hidden lg:pt-16 pt-24"
        style={{
          backgroundColor: 'white',
          position: 'relative',
        }}
      >
        {/* Left Section - Text and Buttons (50% on desktop, full on mobile) */}
        <div className="w-full md:w-1/2 z-10 text-left px-4 md:px-12">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ color: '#302c2c' }}
          >
            THE PERFECT <span style={{ color: '#0E0E55' }}>GIFT</span> IS WAITING FOR YOU
          </h1>
          <p
            className="md:text-xl text-gray-600 mb-6"
            style={{ color: '#302c2c', fontSize: '18px' }}
          >
            Discover premium corporate gifts, innovative printing solutions, and cutting-edge tech
            products. Shop directly from our site to impress clients.
          </p>

          {/* Four Buttons (Arranged in a 2x2 grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <button
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border bg-white text-[#0E0E55] border-[#0E0E55] flex items-center gap-2 transition-colors duration-300 hover:bg-[#0E0E55] hover:text-white"
              onClick={() => handleCategoryClick('Corporate Gifting')}
            >
              <Gift size={40} />
              Corporate Gifting
            </button>
            <button
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border bg-white text-[#0E0E55] border-[#0E0E55] flex items-center gap-2 transition-colors duration-300 hover:bg-[#0E0E55] hover:text-white"
              onClick={() => handleCategoryClick('Tech & Gadgets')}
            >
              <CircuitBoard size={40} />
              Tech & Gadgets
            </button>
            <button
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border bg-white text-[#0E0E55] border-[#0E0E55] flex items-center gap-2 transition-colors duration-300 hover:bg-[#0E0E55] hover:text-white"
              onClick={() => handleCategoryClick('Printing Solutions')}
            >
              <Printer size={40} />
              Printing Solutions
            </button>
            <button
              className="px-4 py-2 sm:px-6 sm:py-3 rounded-full border bg-white text-[#0E0E55] border-[#0E0E55] flex items-center gap-2 transition-colors duration-300 hover:bg-[#0E0E55] hover:text-white"
              onClick={() => handleCategoryClick('Electronics')}
            >
              <Smartphone size={30} />
              Electronics
            </button>
          </div>
        </div>

        {/* Right Section - Image with Shadow (50% on desktop, full on mobile) */}
        <div className="w-full md:w-1/2 h-[400px] md:h-auto flex items-center justify-center z-10 relative">
          <div className="relative w-[90%] h-[90%]">
            <div
              className="absolute w-full md:h-full h-[75%] bg-black opacity-80"
              style={{
                transform: 'translate(15px, 15px)', 
                zIndex: 5,
              }}
            />
            <img
              src={heroImg}
              alt="Corporate Gifting Adventure"
              className="relative w-full md:h-full object-contain max-h-[600px] md:max-h-[800px]"
              style={{ zIndex: 10 }} // Image above the shadow
            />
          </div>
        </div>


      </div>
    </>
  );
};

export default Hero;