'use client';
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const FloatingWhatsappWrapper = () => {
  return (
    <div>
      {/* Your other page content */}

      <FloatingWhatsApp 
        phoneNumber="+91 9211961238" 
        accountName="Arabian Mehek" 
        avatar="/Logo.jpg" 
        statusMessage="Pre-orders are now available with a 20% discount on  products."
        chatMessage="Hello there! Place your order"
      />
    </div>
  );
};

export default FloatingWhatsappWrapper;