
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Home as HomeIcon, 
  Mail, 
  PhoneCall, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin 
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <HomeIcon className="h-6 w-6 text-nexthome-green mr-2" />
              <span className="text-xl font-bold">NextHome</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Find your dream property with NextHome. Buy, sell, and rent properties with ease.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/buy" className="text-gray-400 hover:text-white">Buy Property</Link>
              </li>
              <li>
                <Link to="/rent" className="text-gray-400 hover:text-white">Rent Property</Link>
              </li>
              <li>
                <Link to="/list-property" className="text-gray-400 hover:text-white">List Your Property</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-nexthome-green mr-2 mt-0.5" />
                <span className="text-gray-400">123 Main Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="h-5 w-5 text-nexthome-green mr-2" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-nexthome-green mr-2" />
                <span className="text-gray-400">info@nexthome.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">Subscribe to get the latest property updates</p>
            <form className="flex flex-col space-y-2">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 bg-gray-800 text-white rounded focus:outline-none focus:ring-2 focus:ring-nexthome-green"
                required
              />
              <button 
                type="submit"
                className="bg-nexthome-green text-white py-2 px-4 rounded hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NextHome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
