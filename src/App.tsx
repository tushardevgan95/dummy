import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-sans">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:p-4 focus:bg-white focus:text-blue-600 focus:font-bold">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="flex-grow focus:outline-none" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
