import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about-us', label: 'About Us' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact-us', label: 'Contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex justify-between h-16 w-full">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center pr-4" aria-label="buytech Home">
              <span className="text-2xl font-bold text-blue-600 tracking-tight">buytech</span>
            </Link>
          </div>
          <div className="flex items-center space-x-2 md:space-x-8 overflow-x-auto flex-grow justify-end whitespace-nowrap pl-2">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`px-2 py-2 text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}
                aria-current={location.pathname === link.path ? 'page' : undefined}
              >
                {link.label}
              </Link>
            ))}
            <button className="text-gray-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md p-1" aria-label="Shopping Cart">
              <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
