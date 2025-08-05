'use client';
import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

const FloatingWhatsappWrapper = () => {
  return (
    <div>
      {/* Your other page content */}

      <FloatingWhatsApp 
        phoneNumber="+1234567890" 
        accountName="My Company Name" 
        avatar="/path/to/your/avatar.jpg" 
        statusMessage="Typically replies within an hour"
        chatMessage="Hello there! How can we help you?"
      />
    </div>
  );
};

export default FloatingWhatsappWrapper;