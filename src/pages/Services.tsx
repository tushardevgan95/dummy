import SEO from '../components/SEO';
import { Wrench, Shield, Clock, ThumbsUp } from 'lucide-react';

export default function Services() {
  return (
    <div className="bg-white pb-16 min-h-screen">
      <SEO 
        title="Appliance Repair & Installation Services | Buytech" 
        description="Trust Buytech for expert smart appliance repair, free installation, and comprehensive maintenance agreements to keep your home running smoothly."
      />
      {/* Hero */}
      <div className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Professional Appliance Repair & Installation Services</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Expert installation, repair, and maintenance for your smart home appliances.
          </p>
        </div>
      </div>

      {/* Services List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <Wrench className="h-12 w-12 mx-auto text-blue-600 mb-6" />
            <h2 className="text-xl font-bold text-gray-900 mb-3">Professional Repair</h2>
            <p className="text-gray-600">Quick and reliable repairs for all major appliance brands with certified technicians.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <Shield className="h-12 w-12 mx-auto text-indigo-600 mb-6" />
            <h2 className="text-xl font-bold text-gray-900 mb-3">Extended Warranty</h2>
            <p className="text-gray-600">Protect your investment with our comprehensive extended warranty plans.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <Clock className="h-12 w-12 mx-auto text-green-500 mb-6" />
            <h2 className="text-xl font-bold text-gray-900 mb-3">Maintenance Agreements</h2>
            <p className="text-gray-600">Regular tune-ups and inspections to keep your appliances running efficiently.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <ThumbsUp className="h-12 w-12 mx-auto text-red-500 mb-6" />
            <h2 className="text-xl font-bold text-gray-900 mb-3">Free Installation</h2>
            <p className="text-gray-600">Complimentary professional installation on all premium appliance purchases.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
