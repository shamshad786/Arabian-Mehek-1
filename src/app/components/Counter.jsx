"use client";
import React, { useState, useEffect, useRef } from 'react';

// --- ContinuousSlider Component ---
const ContinuousSlider = () => {
  const images = [
    { src: "/Ameer.webp", alt: "Arabian Mehek Cologne Bottle", fallbackText: "Perfume 1"  },
    { src: "/Darham.webp", alt: "Another Perfume Bottle", fallbackText: "Perfume 2" },
    { src: "/Sabaya.webp", alt: "Third Perfume Bottle", fallbackText: "Perfume 3" },
    { src: "/Versatile.webp", alt: "Fourth Perfume Bottle", fallbackText: "Perfume 4" },
    { src: "/Club.webp", alt: "Fifth Perfume Bottle", fallbackText: "Perfume 5" },
    { src: "/Marquis.webp", alt: "Fifth Perfume Bottle", fallbackText: "Perfume 6" },
  ];
  // Duplicate images to create a seamless continuous scroll effect
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-6 mb-10 container">
      {/* Define the keyframe animation for continuous sliding */}
      <style>
        {`
        @keyframes slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Slides exactly half of the duplicated content */
        }
        `}
      </style>
      <div
        className="flex flex-nowrap animate-slide-continuous" // Added flex-nowrap to keep all images in one line
        style={{
          animation: 'slide 30s linear infinite', // Adjust animation speed as needed
        }}
      >
        {duplicatedImages.map((image, index) => (
          // Each image container now takes up 1/4 of the width, showing 4 images at a time
          // Added fixed height for consistent image size
          <div key={index} className="flex-shrink-0 w-1/5 p-10 w-75 h-100"> {/* Increased height for better visibility */}
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full rounded-xl object-cover" // h-full ensures image fills the container
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://placehold.co/300x400/E0E0E0/333333?text=${image.fallbackText}`;
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

// --- Countdown Component ---
const targetDate = new Date('2025-12-31T23:59:59').getTime();

const Countdown = () => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [imageInView, setImageInView] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageInView(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      clearInterval(timer);
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <section className="bg-white text-gray-900 flex flex-col items-center justify-center text-center px-4 py-2 md:py-20 font-inter">
      {/* SVG for "Coming soon" text - consider replacing with actual text if not purely decorative */}
      
	<svg>
		<text x="50%" y="45%" dy="0.1em" text-anchor="middle">
			Coming Soon
		</text>
	</svg>


      {/* Title with responsive font sizes and margins. */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight max-w-5xl animate-pop-in my-6 md:my-10 px-2">
        Your Signature Scent Shouldn’t Be Local — It Should Be Legendary{' '}
        <h2 className="bg-gradient-to-b from-amber-700 via-yellow-500 to-amber-500 text-transparent bg-clip-text text-5xl">Arabian Mehek is Coming</h2> to Make You Unforgettable
      </h2>

      {/* Subtitle with responsive font sizes and margins. */}
      <h3 className="text-sm sm:text-base md:text-xl text-lime-950 max-w-3xl animate-pop-in font-semibold mb-6 md:mb-10 px-2">
        <span className="text-amber-400 text-shadow-xs">Arabian Mehek</span> is coming soon and the countdown has begun <br />
        Be the First to Smell the Difference{' '}
        <span className="text-amber-400 text-shadow-xs text-xl sm:text-2xl">Arabian Mehek is Coming</span>
      </h3>

      {/* Original Image container for the pop-out animation - this div was empty, so I've removed the ref and kept it for structure if needed */}
      <div
      
        className={`
          mb-10 w-full max-w-sm mx-auto transition-all duration-1000 ease-out transform
          ${imageInView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
        `}
      >

      </div>

      {/* The ContinuousSlider component is now placed here */}
      <ContinuousSlider />

      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10">
        {/* Days timer box */}
        <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-200 rounded-xl backdrop-blur-md min-w-[70px] sm:min-w-[90px] md:min-w-[110px] animate-pop-in shadow-md">
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{timeLeft.days}</span>
          <span className="text-xs sm:text-sm mt-1 uppercase text-gray-600">Days</span>
        </div>

        {/* Hours timer box */}
        <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-200 rounded-xl backdrop-blur-md min-w-[70px] sm:min-w-[90px] md:min-w-[110px] animate-pop-in shadow-md">
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{timeLeft.hours}</span>
          <span className="text-xs sm:text-sm mt-1 uppercase text-gray-600">Hours</span>
        </div>

        {/* Minutes timer box */}
        <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-200 rounded-xl backdrop-blur-md min-w-[70px] sm:min-w-[90px] md:min-w-[110px] animate-pop-in shadow-md">
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{timeLeft.minutes}</span>
          <span className="text-xs sm:text-sm mt-1 uppercase text-gray-600">Minutes</span>
        </div>

        {/* Seconds timer box */}
        <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-200 rounded-xl backdrop-blur-md min-w-[70px] sm:min-w-[90px] md:min-w-[110px] animate-pop-in shadow-md">
          <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{timeLeft.seconds}</span>
          <span className="text-xs sm:text-sm mt-1 uppercase text-gray-600">Seconds</span>
        </div>
      </div>

      <p className="mt-8 text-sm sm:text-base px-2">
        Only for Pre-Subscribers – Subscribe Now for 20% Launch Discount{' '}
        <a href="#form" className="text-blue-600 hover:text-blue-800 underline">
          Click Here
        </a>
      </p>
      <a
        href="#"
        className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-10 rounded-full mt-8 shadow-lg transition-colors duration-300"
      >
        Shop Now
      </a>
    </section>
  );
};

export default Countdown;
