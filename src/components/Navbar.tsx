import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 w-full">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center pr-4">
              <span className="text-2xl font-bold text-blue-600 tracking-tight">buytech</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 md:space-x-8 overflow-x-auto flex-grow justify-end whitespace-nowrap pl-2">
            <Link to="/" className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors">Home</Link>
            <Link to="/about-us" className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors">About Us</Link>
            <Link to="/products" className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors">Products</Link>
            <Link to="/services" className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors">Services</Link>
            <Link to="/blog" className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors">Blog</Link>
            <Link to="/contact-us" className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors">Contact</Link>
            <button className="text-gray-700 hover:text-blue-600">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
