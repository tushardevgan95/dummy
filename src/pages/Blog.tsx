import { ArrowRight, Calendar, User } from 'lucide-react';

import SEO from '../components/SEO';

const articles = [
  {
    id: 1,
    title: "How Smart Appliances Are Transforming Modern Homes",
    excerpt: "Smart appliances provide convenience, energy efficiency, and enhanced user experiences. Learn how connected devices can simplify your daily routine and reduce electricity costs.",
    date: "Oct 12, 2026",
    author: "Tech Team",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Top 5 Energy-Saving Appliances for 2026",
    excerpt: "Discover appliances that help lower energy bills while maintaining exceptional performance and reliability in your everyday life.",
    date: "Sep 28, 2026",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1521656693074-0af32947e80f?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Refrigerator Buying Guide",
    excerpt: "Choosing the right refrigerator depends on storage needs, energy ratings, and available kitchen space. This guide covers everything you need to know before purchasing.",
    date: "Sep 15, 2026",
    author: "Home Expert",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=1926&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Benefits of Air Purifiers for Indoor Health",
    excerpt: "Air purifiers help remove dust, allergens, and harmful pollutants, creating a healthier indoor environment for your family.",
    date: "Aug 30, 2026",
    author: "Health Tips",
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Smart TV Features Explained",
    excerpt: "Understand the latest smart TV technologies, including 4K resolution, HDR, voice control, and integrated streaming services.",
    date: "Aug 10, 2026",
    author: "Media Review",
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      <SEO 
        title="Smart Home Appliance Blog & Buying Guides | Buytech" 
        description="Stay updated with the Buytech blog. Read expert buying guides, smart home trends, and maintenance tips for your modern appliances."
      />
      <div className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">Latest Insights, Trends, & Guides for Smart Appliances</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">Stay updated with the latest trends, tips, and guides on smart home appliances.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
             <article key={article.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow">
               <div className="h-48 overflow-hidden">
                 <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" referrerPolicy="no-referrer" />
               </div>
               <div className="p-6 flex flex-col flex-grow">
                 <div className="flex items-center text-sm text-gray-500 mb-3 space-x-4">
                   <span className="flex items-center"><Calendar className="h-4 w-4 mr-1" /> {article.date}</span>
                   <span className="flex items-center"><User className="h-4 w-4 mr-1" /> {article.author}</span>
                 </div>
                 <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors cursor-pointer">
                   {article.title}
                 </h2>
                 <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                   {article.excerpt}
                 </p>
                 <a href="#" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
                   Read More <ArrowRight className="ml-1.5 h-4 w-4" />
                 </a>
               </div>
             </article>
          ))}
        </div>
      </div>
    </div>
  );
}
