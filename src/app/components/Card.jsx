import React from 'react';
import { FaInstagram, FaFacebookF, FaWhatsapp } from 'react-icons/fa';

const Card = () => {
  const cards = [

    {
      icon: <FaInstagram className="text-pink-500 text-3xl" />,
      title: "My Instagram",
      subtitle: "@anshmehra.in",
      description: "Me building in public and sharing bits and pieces of my life.",
      link: "https://instagram.com",
    },
    {
      icon: <FaFacebookF className="text-blue-500 text-3xl" />,
      title: "Facebook",
      subtitle: "@arabian-mehek",
      description: "Quick thoughts, UX tips and AI experiments in 280 characters.",
      link: "https://twitter.com",
    },
    {
      icon: <FaWhatsapp  className="text-green-500 text-3xl" />,
      title: "What's App",
      subtitle: "+91 9560332766",
      description: "Connect for professional insights, talks and case studies.",
      link: "https://linkedin.com",
    },
  ];

  return (
    <section className="relative bg-white py-16 px-6">
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-yellow-50 to-transparent pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, i) => (
          <a
            key={i}
            href={card.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-neutral-100 hover:bg-neutral-200 transition duration-300 p-5 rounded-xl shadow-sm cursor-pointer"
          >
            <div className="flex items-start gap-4 mb-2">
              <div className="mt-1">{card.icon}</div>
              <div>
                <h3 className="font-semibold text-black text-lg  ">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-600">{card.subtitle}</p>
              </div>
            </div>
            <p className="text-gray-700 text-sm">{card.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Card;
