import { CheckCircle2, Shield } from 'lucide-react';
import SEO from '../components/SEO';

const products = [
  {
    id: 1,
    name: "Quantum Smart TV 55\"",
    price: 699,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop",
    features: [
      "4K Ultra HD Display",
      "Voice Assistant Integration",
      "HDR10 Support",
      "Smart Streaming Apps",
      "Dolby Audio"
    ]
  },
  {
    id: 2,
    name: "UltraCool Refrigerator 450L",
    price: 899,
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1926&auto=format&fit=crop",
    features: [
      "Inverter Technology",
      "Multi-Air Flow Cooling",
      "Smart Temperature Control",
      "Energy Efficient Design",
      "Spacious Storage Compartments"
    ]
  },
  {
    id: 3,
    name: "TurboWash Washing Machine",
    price: 549,
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?q=80&w=2070&auto=format&fit=crop",
    features: [
      "AI Fabric Detection",
      "Quick Wash Mode",
      "Low Water Consumption",
      "Child Safety Lock",
      "Smart App Connectivity"
    ]
  },
  {
    id: 4,
    name: "PureAir X5 Air Purifier",
    price: 299,
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop",
    features: [
      "HEPA Filtration",
      "Air Quality Sensor",
      "Silent Operation",
      "Smart Monitoring App",
      "Covers Large Rooms"
    ]
  },
  {
    id: 5,
    name: "HeatMaster Microwave Oven",
    price: 199,
    image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=2076&auto=format&fit=crop",
    features: [
      "25L Capacity",
      "Digital Control Panel",
      "Auto Cooking Programs",
      "Defrost Function",
      "Energy Saving Mode"
    ]
  },
  {
    id: 6,
    name: "BrewMaster Smart Coffee Machine",
    price: 149,
    image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2070&auto=format&fit=crop",
    features: [
      "App-Controlled Brewing",
      "Built-in Precision Grinder",
      "Customizable Timers",
      "Keep Warm Function",
      "Self-Cleaning Mode"
    ]
  },
  {
    id: 7,
    name: "CoolBreeze Smart Air Conditioner",
    price: 599,
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2070&auto=format&fit=crop",
    features: [
      "Wi-Fi Connectivity",
      "Energy Saving Inverter",
      "Voice Control Compatible",
      "Rapid Cooling Mode",
      "Air Purifying Filter"
    ]
  },
  {
    id: 8,
    name: "CleanSweep Robot Vacuum",
    price: 349,
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2070&auto=format&fit=crop",
    features: [
      "LiDAR Navigation Map",
      "Auto-Empty Station",
      "Multi-Floor Mapping",
      "App & Voice Control",
      "Pet Hair Extraction"
    ]
  }
];

export default function Products() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SEO 
        title="Shop Smart Home Appliances | Buytech Products" 
        description="Browse Buytech's comprehensive catalog of smart home appliances, including advanced refrigerators, 4K smart TVs, robotic vacuums, and air purifiers."
      />
      <div className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Explore Our Premium Smart Home Appliances</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">Explore our premium range of smart home appliances designed to elevate your living space.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row transition-shadow hover:shadow-md">
              <div className="md:w-2/5 p-6 bg-gray-50 flex items-center justify-center">
                 <img src={product.image} alt={product.name} className="w-full h-48 object-contain mix-blend-multiply" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-900 tracking-tight">{product.name}</h2>
                  <span className="text-2xl font-black text-blue-600">${product.price}</span>
                </div>
                <div className="mb-6 flex-grow">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm leading-tight pt-0.5">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors shadow-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
         <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-sm">
            <div className="mb-6 md:mb-0 md:mr-8 flex-grow">
              <div className="flex items-center justify-center md:justify-start mb-4">
                <Shield className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-blue-900">Product Warranty & Guarantees</h2>
              </div>
              <p className="text-blue-800 mb-4 text-lg">All buytech products come with our signature commitment to quality:</p>
              <ul className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 sm:gap-8 text-blue-700 font-medium">
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2" /> 2-Year Manufacturer Warranty</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2" /> Free Technical Support</li>
                <li className="flex items-center"><CheckCircle2 className="h-5 w-5 mr-2" /> Easy Replacement Policy</li>
              </ul>
            </div>
         </div>
      </div>
    </div>
  );
}
