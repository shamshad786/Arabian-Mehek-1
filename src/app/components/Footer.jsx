import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12 md:py-16 mt-auto shadow-md">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center">
          <div className="flex flex-col items-center">
            <h2 className="text-xl font-bold text-gray-800">Arabian Mehek</h2>
          </div>
          <nav className="flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">Pricing</a>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">About</a>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">News</a>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">Reviews</a>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">Updates</a>
          </nav>
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Stay in touch</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-amber-300 transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-amber-300 transition-colors duration-200">
                <Facebook size={24} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-amber-300 transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-amber-300 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <hr className="my-8 md:my-12 border-gray-200" />
        <div className="flex justify-center text-center text-gray-500 text-sm">
          &copy; 2025 Whitespace UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  return (
     
      <Footer />
    
  );
};

export default App;
