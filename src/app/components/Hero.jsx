"use client";
import React, { useState, useEffect } from "react";

const Hero = () => {
  // State for email input, popup visibility, error message, and verification code
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [verificationCode, setVerificationCode] = useState("");

  // New state for the initial pop-up visibility. Initialized to true to show on load.
  const [showInitialPopup, setShowInitialPopup] = useState(true);

  // Function to handle the "Subscribe" button click
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Check if the email input is empty
    if (!email) {
      setError("Please enter your email");
      return;
    }
    
    // Clear any existing error message
    setError("");

    // Generate a random 5-digit code
    const code = Math.floor(10000 + Math.random() * 90000).toString();
    setVerificationCode(code);

    // Show the subscription popup
    setShowPopup(true);
  };

  // Function to close the subscription popup
  const closePopup = () => {
    setShowPopup(false);
    setEmail(""); // Optionally reset the email input
  };
  
  // New function to close the initial welcome pop-up
  const handleCloseInitialPopup = () => {
    setShowInitialPopup(false);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center p-4">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Subtle dark overlay with a gradient */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Initial Welcome Pop-up */}
      {showInitialPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-60 p-5 animate-fade-in">
          <div className="relative bg-white text-black p-10 rounded-lg shadow-xl max-w-xs w-full text-center flex flex-col gap-4">
            <h3 className="text-xl font-bold">Welcome!</h3>
            <p className="text-sm">
              Discover a new world of fragrances from the Middle East.
            </p>
            <button
              onClick={handleCloseInitialPopup}
              className="mt-2 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition"
            >
              Continue to Site
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full flex flex-col items-center gap-6 text-white px-4 md:px-8">
        {/* Logo */}
        <img
          src="/Logo-1.png"
          alt="Arabian Mehek Logo"
          className="w-28 md:w-48 mb-2 mt-10"
        />

        {/* Heading */}
        <h4 className="text-sm md:text-base font-medium">
          No local blends, no compromises. Only pure, high-quality imports
        </h4>
        <h1 className="text-xl sm:text-2xl md:text-4xl font-semibold leading-tight tracking-tight max-w-8xl px-2">
          <span className="text-yellow-400">Arabian Mehek</span> isn’t just a fragrance—it's an{" "}
          <span className="text-yellow-400">experience</span>. Discover{" "}
          <span className="text-yellow-400">100% authentic imported perfumes</span> from the Middle East, now launching exclusively in{" "}
          <span className="text-yellow-400">India</span>.
        </h1>
        <h4 className="text-sm md:text-base font-medium">
          Signature scents for both men and women, crafted to reflect personality and power
        </h4>

        {/* Email input + Join button */}
        <form onSubmit={handleSubscribe}>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-xmd mx-auto">
            <input
              type="email"
              placeholder="Enter email get 20% off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(""); 
              }}
              className="px-15 py-3 w-full rounded-full bg-white/20 border border-yellow-400 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition backdrop-blur-sm"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition"
            >
              Subscribe
            </button>
          </div>
        </form>
        <p className="text-xs md:text-base"> Don’t Just Wait for the Launch – <span className="underline "> Subscribe & Save 20% Instantly</span> </p>

        {/* Error message */}
        {error && (
          <p className="text-red-400 mt-2 text-sm font-medium">{error}</p>
        )}
      </div>

      {/* Subscription Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white text-black p-8 rounded-lg shadow-xl max-w-sm w-full text-center flex flex-col gap-4">
            <h3 className="text-2xl font-bold">Thank you for subscribing!</h3>
            <p className="text-l">
              Use Your 20% Discount and Be Among the First to Experience Arabian Mehek.
            </p>
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg py-3 px-6 text-3xl font-mono tracking-widest font-bold">
              {verificationCode}
            </div>
            <p className="text-sm text-gray-600">
              Use this code to avail a special offer on your first purchase.
            </p>
            <button
              onClick={closePopup}
              className="mt-4 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
