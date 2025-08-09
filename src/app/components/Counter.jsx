'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';



// --- ContinuousSlider Component ---
// (Your ContinuousSlider component remains unchanged)
const ContinuousSlider = () => {
  const images = [
    { src: "/Ameer.webp", alt: "Arabian Mehek Cologne Bottle", fallbackText: "Perfume 1" },
    { src: "/Darham.webp", alt: "Another Perfume Bottle", fallbackText: "Perfume 2" },
    { src: "/Sabaya.webp", alt: "Third Perfume Bottle", fallbackText: "Perfume 3" },
    { src: "/Versatile.webp", alt: "Fourth Perfume Bottle", fallbackText: "Perfume 4" },
    { src: "/Club.webp", alt: "Fifth Perfume Bottle", fallbackText: "Perfume 5" },
    { src: "/Marquis.webp", alt: "Fifth Perfume Bottle", fallbackText: "Perfume 6" },
  ];
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden py-6 mb-10 container">
      <style>
        {`
        @keyframes slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-320%); }
        }
        `}
      </style>
      <div
        className="flex flex-nowrap animate-slide-continuous"
        style={{ animation: 'slide 30s linear infinite' }}
      >
        {duplicatedImages.map((image, index) => (
          <div key={index} className="flex-shrink-0 w-1/5 p-10 w-75 h-100">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full rounded-xl object-cover"
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
const targetDate = new Date('2025-09-01T00:00:00').getTime();

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
      {/* SVG for "Coming soon" text - FIX: adjusted text positioning and added responsive classes */}
      <svg viewBox="0 0 1800 200" preserveAspectRatio="xMidYMid meet">
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle">
    Coming soon
  </text>
</svg>


      {/* Title with responsive font sizes and margins. */}
      
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight max-w-5xl animate-pop-in my-6 md:my-10 px-2">
  Your Signature Scent Shouldn’t Be Local — It Should Be Legendary{' '}
</h2>
<h2 className="w-full text-center text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text leading-tight px-4 break-words -m-5 mb-1">  Arabian Mehek is Coming </h2>
  <h2 className='text-xl sm:text-2xl md:text-3xl  leading-tight max-w-5xl animate-pop-in  px-2'>  to Make You Unforgettable </h2>


    

      {/* The ContinuousSlider component is now placed here */}
      <ContinuousSlider />
        {/* Subtitle with responsive font sizes and margins. */}
 

        <h3 className="text-sm sm:text-base md:text-xl text-lime-950 max-w-3xl animate-pop-in font-semibold mb-6 md:mb-10 px-2">
        <span className="bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">Arabian Mehek</span> is coming soon and the <span className='text-4xl'> countdown </span>has begun <br />
        Be the First to Smell the Difference{' '}
        <span className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text text-xl sm:text-2xl">Arabian Mehek is Coming</span>
      </h3>
      <h2 className="w-full text-center text-xl sm:text-xl md:text-2xl font-bold bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text leading-tight px-4 break-words -mt-6  mb-3"> Launch In </h2>

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
        <div className="flex flex-col items-center p-6 sm:p-8 bg-gray-200 rounded-xl backdrop-blur-md w-[70px] sm:w-[90px] md:w-[110px] animate-pop-in shadow-md">
  <span className="text-3xl sm:text-4xl md:text-5xl font-extrabold">{timeLeft.seconds}</span>
  <span className="text-xs sm:text-sm mt-1 uppercase text-gray-600">Seconds</span>
</div>

      </div>

      {/* text */}

      <h3 className="text-sm sm:text-base md:text-l text-lime-950 max-w-3xl animate-pop-in font-semibold mb-6 md:mb-10 px-">
         Only for Pre-Subscribers – Subscribe Now for 20% Launch Discount Coupon     <span className="bg-gradient-to-l from-purple-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text"> <a href="#form" className=" text-pink-500 underline"> click here  
         </a> </span> </h3>



         <h3 className="text-sm sm:text-base md:text-xl text-pink-500 max-w-3xl animate-pop-in mb-6 md:mb-10 px-2 flex items-center justify-center text-center gap-2 flex-wrap">     Beat the Rush – Pre-Order Now & Save 20% Off Before It’s Gone.
{" "}
  <a href="https://wa.link/olfd8b">

  </a>
 
</h3>

<Link href="/"  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-base sm:text-lg md:text-xl px-5 py-3 text-center -mt-5"> Pre Order Now</Link>



   
        
    

    </section>
  );
};

export default Countdown;