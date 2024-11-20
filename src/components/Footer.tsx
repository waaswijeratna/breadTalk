
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  MapPin, 
  Phone, 
  Mail,
  Clock,
  CreditCard,
 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About BreadTalk</h3>
            <img 
              src="src\assets\icons\logo.png" 
              alt="BreadTalk Logo" 
              className="mb-4 h-12"
            />
            <p className="text-sm leading-relaxed mb-4">
              Bringing you the finest freshly baked goods across Sri Lanka. 
              Our commitment to quality and taste makes every bite special.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#f37a1f] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#f37a1f] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-[#f37a1f] transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#f37a1f] transition-colors">Home</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f37a1f] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f37a1f] transition-colors">Menu</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f37a1f] transition-colors">Locations</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f37a1f] transition-colors">Franchise</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#f37a1f] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#f37a1f]" />
                <span>123 Galle Road, Colombo 03, Sri Lanka</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#f37a1f]" />
                <span>+94 11 234 5678</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#f37a1f]" />
                <span>info@breadtalk.lk</span>
              </li>
              <li className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-[#f37a1f]" />
                <span>Daily: 7:00 AM - 9:00 PM</span>
              </li>
            </ul>
          </div>

          {/* We Accept */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">We Accept</h3>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center space-x-2 mb-3">
                <CreditCard className="w-5 h-5 text-[#f37a1f]" />
                <span className="text-white">Secure Payments</span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://www.giftcards.com/content/dam/bhn/live/nam/us/en/catalog-assets/product-images/07675022697/07675022697_81054_master.png/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" 
                  alt="Visa" 
                  className="bg-white rounded p-2"
                />
                <img 
                  src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg" 
                  alt="Mastercard" 
                  className="bg-white rounded p-2"
                />
                <img 
                  src="https://i0.wp.com/becleverwithyourcash.com/wp-content/uploads/2024/01/Amex-gold-deal-24-1.jpg?resize=951%2C535&ssl=1" 
                  alt="American Express" 
                  className="bg-white rounded p-2"
                />
                <img 
                  src="https://i.pcmag.com/imagery/reviews/068BjcjwBw0snwHIq0KNo5m-15.fit_lim.size_1050x591.v1602794215.png" 
                  alt="PayPal" 
                  className="bg-white rounded p-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm">
              © {currentYear} BreadTalk Sri Lanka. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="hover:text-[#f37a1f] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#f37a1f] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#f37a1f] transition-colors">
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;