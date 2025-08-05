import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    // Main footer container with a dark background, padding, and responsive styling.
    // It's fixed to the bottom for this example.
    <footer className="bg-neutral-950 text-white py-12 md:py-16 mt-auto">
      {/* Container to center the content with a max-width */}
      <div className="container mx-auto px-4 md:px-8">
        {/* Main footer content grid. Stacks on mobile, and becomes a two-column layout on larger screens. */}
        <div className="flex flex-col items-center text-center space-y-8 md:space-y-0 md:flex-row md:justify-between md:items-center">
          {/* Logo and brand section */}
          <div className="flex flex-col items-center">
            {/* Using a placeholder for the logo text. You can replace this with an image. */}
            <h1 className="text-xl font-bold">Whitespace UI</h1>
          </div>

          {/* Navigation Links section. Arranged in a row on larger screens and a column on smaller screens. */}
          <nav className="flex flex-col items-center space-y-4 md:flex-row md:space-x-8 md:space-y-0">
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">Pricing</a>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">About</a>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">News</a>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">Reviews</a>
            <a href="#" className="hover:text-amber-300 transition-colors duration-200">Updates</a>
          </nav>

          {/* Social media links and "Stay in touch" section. Stacks on mobile. */}
          <div className="flex flex-col items-center space-y-4">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Stay in touch</h3>
            <div className="flex space-x-4">
              {/* Instagram Icon with hover effect */}
              <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-amber-300 transition-colors duration-200">
                <Instagram size={24} />
              </a>
              {/* Facebook Icon with hover effect */}
              <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-amber-300 transition-colors duration-200">
                <Facebook size={24} />
              </a>
              {/* Twitter Icon with hover effect */}
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-amber-300 transition-colors duration-200">
                <Twitter size={24} />
              </a>
              {/* LinkedIn Icon with hover effect */}
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-amber-300 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Separator line */}
        <hr className="my-8 md:my-12 border-neutral-700" />

        {/* Copyright section */}
        <div className="flex justify-center text-center text-gray-500 text-sm">
          &copy; 2025 Whitespace UI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};


const App = () => {
  return (
    <div className="min-h-screen bg-neutral-900 flex flex-col justify-end">
      {/* Main content of your page would go here */}
      <main className="flex-grow flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">Your Main Page Content</h1>
      </main>
      <Footer />
    </div>
  );
};

export default App;
