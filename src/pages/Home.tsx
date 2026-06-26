import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, DollarSign, Truck, HeadphonesIcon, ArrowRight, Star } from 'lucide-react';
import SEO from '../components/SEO';

export default function Home() {
  return (
    <div className="bg-white">
      <SEO 
        title="Buytech: Premium Smart Home Appliances & Electronics" 
        description="Discover top-rated smart home appliances at Buytech. From energy-efficient refrigerators to smart TVs, we offer the best in modern living technology."
      />
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop"
            alt="Modern Kitchen"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4">
            Upgrade Your Lifestyle with Smart Home Appliances
          </h1>
          <p className="text-xl md:text-2xl font-light mb-4 max-w-2xl text-blue-100">
            Smart Appliances for Modern Living.
          </p>
          <p className="text-lg mb-10 max-w-2xl text-blue-200">
            At buytech, we bring innovation, performance, and reliability into every home. From energy-efficient kitchen appliances to advanced home entertainment systems, our products are designed to make life easier and smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-blue-50 transition-colors">
              Shop Now
            </Link>
            <Link to="/about-us" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-blue-900 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Buytech for Your Appliances</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <ShieldCheck className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="font-semibold text-gray-900">Premium Quality</h3>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <Zap className="h-10 w-10 text-yellow-500 mb-4" />
              <h3 className="font-semibold text-gray-900">Energy Efficient</h3>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <DollarSign className="h-10 w-10 text-green-500 mb-4" />
              <h3 className="font-semibold text-gray-900">Affordable Pricing</h3>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
              <Truck className="h-10 w-10 text-indigo-500 mb-4" />
              <h3 className="font-semibold text-gray-900">Fast Delivery</h3>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm sm:col-span-2 lg:col-span-1">
              <HeadphonesIcon className="h-10 w-10 text-red-500 mb-4" />
              <h3 className="font-semibold text-gray-900">24/7 Support</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Featured Smart Appliances</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Product 1 */}
            <div className="bg-white flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                 <img src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop" alt="Air Purifier" className="max-h-full object-contain group-hover:scale-105 transition-transform mix-blend-multiply" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Smart Air Purifier X5</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">Breathe cleaner air with intelligent filtration and real-time air quality monitoring.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-bold text-blue-600">$299</span>
                  <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="bg-white flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                 <img src="https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1926&auto=format&fit=crop" alt="Refrigerator" className="max-h-full object-contain group-hover:scale-105 transition-transform mix-blend-multiply" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">UltraCool Refrigerator 450L</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">Energy-saving refrigerator with smart temperature control and spacious storage.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-bold text-blue-600">$899</span>
                  <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="bg-white flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                 <img src="https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop" alt="Smart TV" className="max-h-full object-contain group-hover:scale-105 transition-transform mix-blend-multiply" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Quantum Smart TV 55"</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">Experience stunning 4K visuals and immersive sound powered by the latest smart technology.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-bold text-blue-600">$699</span>
                  <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="bg-white flex flex-col rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-gray-100 flex items-center justify-center p-4">
                 <img src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2070&auto=format&fit=crop" alt="Washing Machine" className="max-h-full object-contain group-hover:scale-105 transition-transform mix-blend-multiply" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">TurboWash Washing Machine</h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2 flex-grow">High-performance washing machine with AI-powered fabric care.</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-xl font-bold text-blue-600">$549</span>
                  <button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-colors">Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Special Offer */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Special Offer</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Get up to <span className="font-bold text-yellow-300">30% OFF</span> on selected appliances this month. Shop now and upgrade your home with the latest technology.
          </p>
          <Link to="/products" className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-blue-700 bg-yellow-400 hover:bg-yellow-300 shadow-lg transition-colors">
            Shop the Sale
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Customer Reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-6 italic flex-grow">"Excellent product quality and fast delivery. Highly recommend buytech for home appliances!"</p>
              <div className="font-medium text-gray-900">— Sarah M.</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-6 italic flex-grow">"The Smart TV exceeded my expectations. The picture quality is stunning and the interface is so smooth."</p>
              <div className="font-medium text-gray-900">— David R.</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-gray-700 mb-6 italic flex-grow">"Outstanding customer support and warranty service. They really stand behind their products."</p>
              <div className="font-medium text-gray-900">— Emily K.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
