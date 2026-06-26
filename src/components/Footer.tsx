import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <span className="text-2xl font-bold text-white tracking-tight mb-4 inline-block">buytech</span>
            <p className="text-sm text-gray-400 mb-6">
              Smart Appliances for Modern Living. Bringing innovation, performance, and reliability into every home.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded" aria-label="Visit our Facebook page">
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded" aria-label="Visit our Instagram page">
                <Instagram className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded" aria-label="Visit our LinkedIn page">
                <Linkedin className="h-5 w-5" aria-hidden="true" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded" aria-label="Visit our YouTube channel">
                <Youtube className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about-us" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1 -mx-1">About Us</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1 -mx-1">Products</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1 -mx-1">Services</Link></li>
              <li><Link to="/blog" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1 -mx-1">Blog</Link></li>
              <li><Link to="/contact-us" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1 -mx-1">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1 -mx-1">FAQ</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1 -mx-1">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1 -mx-1">Warranty Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded px-1 -mx-1">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Yamunanagar, Haryana<br />India</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" aria-hidden="true" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" aria-hidden="true" />
                <span>support@buytech.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} buytech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
