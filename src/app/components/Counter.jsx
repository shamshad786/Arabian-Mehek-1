"use client";
import React, { useState, useEffect, useRef } from 'react';

// Setting the target date for the countdown.
const targetDate = new Date('2025-12-31T23:59:59').getTime();

const Countdown = () => {
  // Function to calculate the time left until the target date.
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let timeLeft = {};

    // Check if the countdown is still active.
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      // If the countdown is over, all values are set to 0.
      timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  // State to track if the image is in view
  const [imageInView, setImageInView] = useState(false);
  // Ref to attach to the image container
  const imageRef = useRef(null);

  useEffect(() => {
    // Set up an interval to update the countdown every second.
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // IntersectionObserver to detect when the image is visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update the state based on the intersection
        if (entry.isIntersecting) {
          setImageInView(true);
        }
      },
      {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the image is visible
      }
    );

    // Start observing the image element if it exists
    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    // Clean up the interval and observer when the component unmounts
    return () => {
      clearInterval(timer);
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    // Main section with responsive padding and centering.
    <section className="bg-white text-gray-900 flex flex-col items-center justify-center text-center px-4 py-12 md:py-20">
      {/* Title with responsive font sizes and margins. */}
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight max-w-5xl animate-pop-in my-6 md:my-10 px-2">
        Your Signature Scent Shouldn’t Be Local — It Should Be Legendary <span className='text-yellow-500 text-5xl'> Arabian Mehek is Coming </span> to Make You Unforgettable
      </h2>

      {/* Subtitle with responsive font sizes and margins. */}
      <h3 className="text-sm sm:text-base md:text-xl text-lime-950 max-w-3xl animate-pop-in font-semibold mb-8 md:mb-12 px-2">
        <span className='text-amber-400 text-shadow-xs'> Arabian Mehek </span> is coming soon and the countdown has begun <br/>
        Be the First to Smell the Difference <span className='text-amber-400 text-shadow-xs text-2xl'> Arabian Mehek is Coming </span>
      </h3>

      {/* Image container for the pop-out animation */}
      <div 
        ref={imageRef} 
        className={`
          mb-10 w-full max-w-sm mx-auto transition-all duration-1000 ease-out transform
          ${imageInView ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}
        `}
      >
        <img
          src="Perfume.png" 
          alt="Arabian Mehek Cologne Bottle"
          className="w-full h-auto rounded-xl shadow-2xl"
        />
      </div>

      {/* Countdown Timer container with responsive spacing and wrapping. */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mb-10">
        {/* Days timer box */}
        <div className="flex flex-col items-center p-8 sm:p-10 bg-gray-200 rounded-xl backdrop-blur-md min-w-[80px] sm:min-w-[100px] animate-pop-in">
          <span className="text-4xl sm:text-5xl md:text-7xl font-extrabold">{timeLeft.days}</span>
          <span className="text-xs sm:text-sm mt-1 uppercase text-gray-600">Days</span>
        </div>
        
        {/* Hours timer box */}
        <div className="flex flex-col items-center p-8 sm:p-10 bg-gray-200 rounded-xl backdrop-blur-md min-w-[80px] sm:min-w-[100px] animate-pop-in">
          <span className="text-4xl sm:text-5xl md:text-7xl font-extrabold">{timeLeft.hours}</span>
          <span className="text-xs sm:text-sm mt-1 uppercase text-gray-600">Hours</span>
        </div>
        
        {/* Minutes timer box */}
        <div className="flex flex-col items-center p-8 sm:p-10 bg-gray-200 rounded-xl backdrop-blur-md min-w-[80px] sm:min-w-[100px] animate-pop-in">
          <span className="text-4xl sm:text-5xl md:text-7xl font-extrabold">{timeLeft.minutes}</span>
          <span className="text-xs sm:text-sm mt-1 uppercase text-gray-600">Minutes</span>
        </div>
        
        {/* Seconds timer box */}
        <div className="flex flex-col items-center p-8 sm:p-10 bg-gray-200 rounded-xl backdrop-blur-md min-w-[80px] sm:min-w-[100px] animate-pop-in">
          <span className="text-4xl sm:text-6xl md:text-7xl font-extrabold">{timeLeft.seconds}</span>
          <span className="text-xs sm:text-sm mt-1 uppercase text-gray-600">Seconds</span>
        </div>
      </div>
      
      <p>Only for Pre-Subscribers – Subscribe Now for 20% Launch Discount <a href="#"><span className='underline' text-blue>Click Here</span></a></p>
    </section>
  );
};

export default Countdown;