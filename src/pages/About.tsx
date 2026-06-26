import { Target, Leaf, Cpu, HeadphonesIcon } from 'lucide-react';
import SEO from '../components/SEO';

export default function About() {
  return (
    <div className="bg-white pb-16">
      <SEO 
        title="About Buytech | Smart Home Appliance Experts" 
        description="Learn about Buytech's mission to deliver innovative, energy-efficient smart home appliances that enhance your daily life and protect the environment."
      />
      {/* Hero */}
      <header className="bg-gray-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">About Buytech: Leading the Smart Home Appliance Revolution</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Innovating your everyday home experience since 2015.
          </p>
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Buytech was founded in 2015 with a mission to provide innovative electronic appliances that improve everyday life. Our commitment to quality, technology, and customer satisfaction has made us a trusted brand among households nationwide.
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-10">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become a leading provider of smart and sustainable home appliances worldwide.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
             <img src="https://images.unsplash.com/photo-1549488344-c1fac1bf54ef?q=80&w=2070&auto=format&fit=crop" alt="Buytech Headquarters building exterior" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Mission</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 bg-blue-800 rounded-xl">
              <div className="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-xl font-bold text-blue-200" aria-hidden="true">1</div>
              <p className="text-lg font-medium">Deliver innovative products at competitive prices.</p>
            </div>
            <div className="p-6 bg-blue-800 rounded-xl">
              <div className="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-xl font-bold text-blue-200" aria-hidden="true">2</div>
              <p className="text-lg font-medium">Promote energy-efficient technology.</p>
            </div>
            <div className="p-6 bg-blue-800 rounded-xl">
              <div className="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-xl font-bold text-blue-200" aria-hidden="true">3</div>
              <p className="text-lg font-medium">Provide exceptional customer service.</p>
            </div>
            <div className="p-6 bg-blue-800 rounded-xl">
              <div className="bg-blue-700 w-12 h-12 flex items-center justify-center rounded-lg mb-4 text-xl font-bold text-blue-200" aria-hidden="true">4</div>
              <p className="text-lg font-medium">Build long-lasting customer relationships.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What We Offer</h2>
          <p className="mt-4 text-lg text-gray-600">Our extensive product range includes:</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {['Refrigerators', 'Washing Machines', 'Smart TVs', 'Air Purifiers', 'Microwave Ovens', 'Water Purifiers', 'Air Conditioners', 'Kitchen Appliances'].map((item) => (
             <span key={item} className="px-6 py-3 bg-gray-50 text-gray-800 rounded-full font-medium shadow-sm border border-gray-200">
               {item}
             </span>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-gray-50 py-16 border border-gray-200 rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <Cpu className="h-12 w-12 mx-auto text-blue-600 mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Innovation</h3>
            <p className="text-gray-600">We continuously invest in research and development to bring you the best.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <Target className="h-12 w-12 mx-auto text-indigo-600 mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Quality</h3>
            <p className="text-gray-600">Every product undergoes rigorous quality testing to ensure reliability.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <Leaf className="h-12 w-12 mx-auto text-green-500 mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Sustainability</h3>
            <p className="text-gray-600">We promote environmentally friendly technologies and manufacturing processes.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
            <HeadphonesIcon className="h-12 w-12 mx-auto text-red-500 mb-6" aria-hidden="true" />
            <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Focus</h3>
            <p className="text-gray-600">Customer satisfaction remains at the center of everything we do.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
