import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';

export default function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <SEO 
        title="Contact Buytech | Support & Customer Service" 
        description="Get in touch with the Buytech team. We provide dedicated support for all your smart home appliance inquiries, repairs, and sales questions."
      />
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Contact Buytech for Smart Appliance Support</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">We'd love to hear from you. Get in touch with our team for any inquiries.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200">
                  <MapPin className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Office Address</h3>
                  <p className="mt-2 text-gray-600 leading-relaxed">
                    Buytech Headquarters<br />
                    Yamunanagar, Haryana<br />
                    India
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-green-100 flex items-center justify-center border border-green-200">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Contact Information</h3>
                  <p className="mt-2 text-gray-600">Phone: +91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center border border-purple-200">
                  <Mail className="h-6 w-6 text-purple-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Email Us</h3>
                  <p className="mt-2 text-gray-600">Email: support@buytech.com</p>
                  <p className="mt-1 text-gray-600">Sales: sales@buytech.com</p>
                  <p className="mt-1 text-gray-600">Support: help@buytech.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center border border-yellow-200">
                  <Clock className="h-6 w-6 text-yellow-600" />
                </div>
                <div className="ml-6">
                  <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                  <p className="mt-2 text-gray-600">Monday – Friday: 9:00 AM – 6:00 PM</p>
                  <p className="mt-1 text-gray-600">Saturday: 10:00 AM – 4:00 PM</p>
                  <p className="mt-1 text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10 pt-8 border-t border-gray-200">
               <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
               <div className="flex space-x-6">
                  <a href="#" className="text-gray-400 hover:text-blue-600 font-medium transition-colors">Facebook</a>
                  <a href="#" className="text-gray-400 hover:text-pink-600 font-medium transition-colors">Instagram</a>
                  <a href="#" className="text-gray-400 hover:text-blue-800 font-medium transition-colors">LinkedIn</a>
                  <a href="#" className="text-gray-400 hover:text-red-600 font-medium transition-colors">YouTube</a>
               </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 pt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                <input type="text" id="name" className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white border border-gray-300 p-3 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                <input type="email" id="email" className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white border border-gray-300 p-3 outline-none" placeholder="john@example.com" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="tel" id="phone" className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white border border-gray-300 p-3 outline-none" placeholder="+91 00000 00000" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                <input type="text" id="subject" className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white border border-gray-300 p-3 outline-none" placeholder="How can we help you?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white border border-gray-300 p-3 outline-none resize-none" placeholder="Write your message here..."></textarea>
              </div>
              <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                Submit Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
