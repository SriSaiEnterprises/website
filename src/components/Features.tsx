import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import gift from '../images/gift.gif';
import delivery from '../images/delivery.gif';
import teamwork from '../images/teamwork.gif';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  icon: string;
  title: string;
  description: string;
  index: number; // Add index for animation delay
}

const Card: React.FC<CardProps> = ({ icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 }); // Trigger when 30% of the card is in view

  // Function to render description with highlighted words/phrases
  const renderDescription = (desc: string, index: number) => {
    if (index === 0) {
      // Highlight "gift" in the first card
      const parts = desc.split(/(business gift)/i); // Split on "gift" (case-insensitive)
      return parts.map((part, i) =>
        part.toLowerCase() === 'business gift' ? (
          <span key={i} style={{ color: '#0E0E55' }}>{part}</span>
        ) : (
          part
        )
      );
    } else if (index === 1) {
      // Highlight "send in bulk" in the second card
      const parts = desc.split(/(send gifts in bulk)/i); // Split on "send gifts in bulk" (case-insensitive)
      return parts.map((part, i) =>
        part.toLowerCase() === 'send gifts in bulk' ? (
          <span key={i} style={{ color: '#0E0E55' }}>{part}</span>
        ) : (
          part
        )
      );
    } else if (index === 2) {
      // Highlight "automatically" in the third card
      const parts = desc.split(/(automatically)/i); // Split on "automatically" (case-insensitive)
      return parts.map((part, i) =>
        part.toLowerCase() === 'automatically' ? (
          <span key={i} style={{ color: '#0E0E55' }}>{part}</span>
        ) : (
          part
        )
      );
    }
    return desc; // Fallback (shouldn't be reached with current data)
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }} // Slide from left for even index, right for odd
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      className="flex flex-col items-start text-left p-6 bg-white rounded-lg shadow-lg w-full max-w-xs hover:shadow-xl transition-shadow duration-300"
      style={{ borderRadius: '15px' }}
    >
      <img src={icon} alt={`${title} icon`} className="w-16 h-16 mb-4 object-contain" />
      <h3 
        className="font-bold mb-2"
        style={{ fontSize: '18px', color: '#302c2c' }} // Secondary color for title
      >
        {title}
      </h3>
      <p 
        className="text-gray-600"
        style={{ fontSize: '16px', color: '#302c2c' }} // Secondary color for description
      >
        {renderDescription(description, index)}
      </p>
    </motion.div>
  );
};

const GiftPlatform: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation

  const cards = [
    {
      icon: gift,
      title: 'Thousands of Gifts',
      description: 'One vendor of record. Shop our business gift marketplace. We handle all sourcing, vetting, and compliance for you.',
    },
    {
      icon: delivery,
      title: 'Send to Hundreds at Once',
      description: 'State-of-the-art, multi-recipient checkout that makes it easy to send gifts in bulk.',
    },
    {
      icon: teamwork,
      title: 'Automate Employee Gifting',
      description: 'Set up gift workflows, milestones, and triggers once, then gifts go out automatically.',
    },
  ];

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50"
    >
      <h1 
        className="font-bold mb-4 text-center text-4xl md:text-5xl lg:text-6xl"
        style={{ color: '#302c2c' }} // Secondary color for heading
      >
        Designed for <span style={{ color: '#0E0E55' }}>Frequent Gifters</span>
      </h1>
      <p 
        className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-3xl"
        style={{ color: '#302c2c' }} // Secondary color for description
      >
        Our gifting platform features make recurrent gifting as simple as clicking a button. We take care of the planning, sourcing, customizing, budgeting, storing, and logistics so you can focus on appreciation.
      </p>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <Card 
            key={index} 
            icon={card.icon} 
            title={card.title} 
            description={card.description} 
            index={index} 
          />
        ))}
      </div>
      <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => navigate('/contact')} // Navigate to /contact on click
          className="px-8 py-3 rounded-full border bg-white text-[#0E0E55] border-[#0E0E55] transition-all duration-300 hover:bg-[#0E0E55] hover:text-white"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default GiftPlatform;