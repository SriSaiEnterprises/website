import React from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { useRef, useEffect, useState } from 'react'; // Added useState
import boy from '../images/boy.avif';
import boy2 from '../images/boy2.webp';
import boy3 from '../images/boy3.webp';
import girl from '../images/girl.avif';
import girl2 from '../images/girl2.avif';
import girl3 from '../images/girl3.webp';
import girl4 from '../images/girl4.png';
import girl5 from '../images/girl5.png';
import oldman from '../images/oldman.avif';
import oldman2 from '../images/oldman2.webp';
import oldman3 from '../images/oldman3.webp';
import logo1 from '../images/Equal-experts.webp';
import logo2 from '../images/TaeguTec.png';
import logo3 from '../images/zeno.png';
import logo4 from '../images/transNeuron.gif';
import logo5 from '../images/relics.png';

const reviews = [
  {
    name: 'Priya',
    review: 'I was skeptical about online gifting platforms, but this exceeded my expectations. The personalized options and timely delivery won me over!',
    image: girl,
  },
  {
    name: 'Rahul C',
    review: 'Used it for our company’s employee appreciation program. The bulk ordering system is a lifesaver, though tracking could be a bit smoother.',
    image: boy,
  },
  {
    name: 'Anita',
    review: 'The gift selection is impressive, and I love how they handle custom requests. Delivered my friend’s birthday gift right on time!',
    image: girl2,
  },
  {
    name: 'Vikram Singh',
    review: 'Solid platform for corporate gifting. The automation saved us tons of time, though I wish there were more eco-friendly options.',
    image: oldman,
  },
  {
    name: 'Arjun',
    review: 'The interface is intuitive, and the team store feature worked perfectly for our startup. Customer service was quick to resolve a minor issue.',
    image: boy2,
  },
  {
    name: 'Karthik ',
    review: 'Really streamlined our client gifting process. The products feel premium, and the delivery updates kept me in the loop.',
    image: oldman2,
  },
  {
    name: 'Lakshmi',
    review: 'Set up a team reward system through this platform. It’s easy to use, and the recipients loved their gifts—great experience overall!',
    image: girl3,
  },
  {
    name: 'Rohan',
    review: 'The customization options are a big plus. Had a slight delay once, but their support team sorted it out quickly.',
    image: boy3,
  },
  {
    name: 'Meera J',
    review: 'Perfect for sending thoughtful gifts across cities. The packaging was lovely, though I’d love more budget-friendly choices.',
    image: girl4,
  },
  {
    name: 'Suresh Iyer',
    review: 'Managed our festive gifting for 50+ employees effortlessly. Reliable service, and the gift quality matched the descriptions!',
    image: oldman3,
  },
];
const clientLogos = [logo1, logo2, logo3, logo4, logo5];

interface ReviewCardProps {
  name: string;
  review: string;
  image: string;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, review, image }) => {
  return (
    <div
      className="bg-white p-6 rounded-lg shadow-lg flex-shrink-0 mx-8 w-[320px] min-h-[200px]"
      style={{ borderRadius: '15px' }}
    >
      <div className="flex items-center mb-4">
        <img
          src={image}
          alt={`${name}'s profile`}
          className="w-12 h-12 rounded-full mr-4 object-cover border-2 border-[#0E0E55]"
        />
        <h3 className="font-bold text-lg" style={{ color: '#302c2c' }}>
          {name}
        </h3>
      </div>
      <p className="text-gray-600 text-sm" style={{ color: '#302c2c' }}>
        "{review}"
      </p>
    </div>
  );
};

const Reviews: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [currentX, setCurrentX] = useState(0); // Track current position

  useEffect(() => {
    if (isInView) {
      controls.start({
        x: '-100%',
        transition: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 25,
          ease: 'linear',
        },
      });
    }
  }, [isInView, controls]);

  // Update current position when animation changes
  const handleAnimationUpdate = (latest: { x: string | number }) => {
    if (typeof latest.x === 'string') {
      setCurrentX(parseFloat(latest.x));
    } else {
      setCurrentX(latest.x);
    }
  };

  const handleMouseEnter = () => {
    controls.stop();
  };

  const handleMouseLeave = () => {
    controls.start({
      x: [currentX, '-100%'], // Start from current position
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 25, // Keep consistent duration
        ease: 'linear',
      },
    });
  };

  return (
    <div className="py-16" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Client Logos Section - unchanged */}
        <div className="mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-8"
            style={{ color: '#302c2c' }}
          >
            Trusted by Leading Companies
          </h2>
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: ['0%', '-50%'],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 20,
                  ease: 'linear',
                },
              }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6"
                  style={{ width: '150px', height: '80px' }}
                >
                  <img
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Reviews Section */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-12"
          style={{ color: '#302c2c' }}
        >
          What Our Customers Say
        </h2>
        <div
          className="overflow-hidden py-8"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <motion.div
            className="flex gap-6"
            initial={{ x: '0%' }}
            animate={controls}
            onUpdate={handleAnimationUpdate} // Track position updates
            style={{ width: '200%' }}
          >
            {reviews.map((review, index) => (
              <ReviewCard
                key={`first-${index}`}
                name={review.name}
                review={review.review}
                image={review.image}
              />
            ))}
            {reviews.map((review, index) => (
              <ReviewCard
                key={`second-${index}`}
                name={review.name}
                review={review.review}
                image={review.image}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;