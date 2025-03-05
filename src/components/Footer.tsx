import whatsappLogo from '../images/whatsapp.png'; // Import the WhatsApp QR code image

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We specialize in creating memorable corporate gifts that strengthen business relationships
              and enhance brand recognition.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>#924, 17th Main Road,3rd Block</li>
              <li> Rajajinagar, Bangalore - 560010</li>
              <li>vijay@thesrisaienterprises.com</li>
              <li>+91 9663467040</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Chat with us on WhatsApp</h3>
            <div className="mt-6 text-center">
              <div className="flex justify-center">
                <img 
                  src={whatsappLogo} 
                  alt="WhatsApp QR Code" 
                  className="w-24 h-24" // Adjust size as needed (96x96px)
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2018 Corporate Gifting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;