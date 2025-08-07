import React from 'react';
import { FaFacebookF,FaInstagram,FaLinkedinIn ,FaWhatsapp   } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-2 md:py-1 mt-auto shadow-md">
      <div className="container mx-auto px-4 md:px-8">
       
        <div className="flex flex-col items-center space-y-4">
            <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest">Stay in touch</h3>
            <div className="flex space-x-4">
            <a href="https://www.facebook.com/profile.php?id=61578595799721" aria-label="Facebook" className="text-gray-500 hover:text-pink-500 transition-colors duration-200">
                <FaInstagram size={24} />
              </a>
              <a href="https://wa.link/olfd8b" aria-label="LinkedIn" className="text-gray-500 hover:text-green-400 transition-colors duration-200">
                <FaWhatsapp  size={24} />
              </a>
              <a href="https://www.instagram.com/arabianmehek/" aria-label="Instagram" className="text-gray-500 hover:text-blue-500 transition-colors duration-200">
                <FaFacebookF size={24} />
              </a>
          
              <a href="https://www.linkedin.com/in/arabian-mehek-4b49a7378/" aria-label="Linked In" className="text-gray-500 hover:text-blue-500 transition-colors duration-200">
                <FaLinkedinIn  size={24} />
              </a>
            
            </div>
          </div>
        <hr className="my-8 md:my-12 border-gray-200" />
        <div className="flex justify-center text-center text-gray-500 text-sm">
          &copy; 2025 Arabian Mehek. All rights reserved.
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
