import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";

interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory: string;
  image_url: string;
}

const Gallery = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[][]>([]);
  const [subcategories, setSubcategories] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchSubcategories();
  }, []);

  const fetchSubcategories = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('subcategory')
      .order('subcategory', { ascending: true })
      .not('subcategory', 'is', null);

    if (error) {
      console.error('Error fetching subcategories:', error);
      return;
    }

    const uniqueSubcategories = Array.from(
      new Set(data.map((item: { subcategory: string | null }) => item.subcategory).filter((subcat): subcat is string => subcat !== null))
    ) as string[];

    setSubcategories(uniqueSubcategories);

    const randomSubcategories = uniqueSubcategories
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);

    fetchProductsForSubcategories(randomSubcategories);
  };

  const fetchProductsForSubcategories = async (subcategories: string[]) => {
    const promises = subcategories.map(async (subcategory) => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('subcategory', subcategory);

      if (error) {
        console.error(`Error fetching products for ${subcategory}:`, error);
        return [];
      }

      return [...(data || []), ...(data || [])];
    });

    const results = await Promise.all(promises);
    setFeaturedProducts(results as Product[][]);
  };

  const handleProductClick = (subcategory: string) => {
    navigate(`/products?subcategory=${subcategory}`);
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeOverlay = () => {
    setSelectedImage(null);
  };

  return (
    <div 
      className="py-10 mx-auto" 
      style={{ 
        padding: '1.5% 10%' 
      }}
    >
      <h1 
        className="text-4xl md:text-5xl font-bold text-center mb-4"
        style={{ color: '#302c2c' }} // Secondary color for heading
      >
        Showcase Your <span style={{ color: '#0E0E55' }}>Brand</span> with Style
      </h1>
      <p 
        className="text-center text-lg text-gray-600 mb-8"
        style={{ color: '#302c2c' }} // Secondary color for description
      >
        Explore our handpicked collections of corporate gifts, tech innovations, and printing
        solutions crafted to elevate your business and leave a lasting impression.
      </p>

      {/* Looping Sliders */}
      {featuredProducts.map((products, index) => (
        <div
          key={index}
          className="slider-container overflow-hidden relative w-full mb-8"
        >
          <div 
            className="flex animate-loop-scroll"
            style={{
              animation: index === 0 
                ? 'loop-scroll-left 40s linear infinite'
                : 'loop-scroll-right 40s linear infinite',
            }}
          >
            {products.map((product, productIndex) => (
              <div
                key={`${product.id}-${productIndex}`}
                className="hover-card relative flex-shrink-0 w-64 mx-4 cursor-pointer"
                onClick={() => handleProductClick(product.subcategory)}
              >
                <div className="relative">
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="w-full h-[300px] object-cover transition-transform duration-800 ease-in-out hover:scale-110"
                    style={{ borderRadius: "7px" }}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleImageClick(product.image_url);
                    }}
                    loading="lazy"
                  />
                  <div
                    className="absolute bottom-2 right-2 p-1"
                    style={{
                      width: 'fit-content',
                      backgroundColor: '#0E0E55', // Primary color for product name background
                      opacity: '0.9',
                      borderRadius: '5px',
                    }}
                  >
                    <h3
                      style={{
                        color: 'white',
                        textAlign: 'right',
                        fontWeight: '400',
                        fontSize: '15px',
                      }}
                    >
                      #{product.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Image Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeOverlay}
        >
          <div 
            className="relative max-w-3xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected product"
              className="w-full h-auto object-contain"
            />
            <button
              className="absolute top-2 right-2 text-white rounded-full w-8 h-8 flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: '#0E0E55', // Primary color for close button
                opacity: '0.9',
              }}
              onClick={closeOverlay}
            >
              ×
            </button>
          </div>
        </div>
      )}

      {/* Global CSS for animations */}
      <style jsx global>{`
        @keyframes loop-scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes loop-scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .slider-container {
          position: relative;
          overflow: hidden;
        }
        .animate-loop-scroll {
          display: flex;
        }
        .slider-container:hover .animate-loop-scroll {
          animation-play-state: paused !important;
        }
      `}</style>
    </div>
  );
};

export default Gallery;