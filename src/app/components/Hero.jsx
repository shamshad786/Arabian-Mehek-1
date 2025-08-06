"use client";
import React, { useState } from "react";
import axios from "axios";
import { nanoid } from 'nanoid';

const Hero = () => {
 
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [verificationCode, setVerificationCode] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showInitialPopup, setShowInitialPopup] = useState(true); // Controls the welcome popup visibility

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); 

    if (!email) {
      setError("Please enter your email.");
      setLoading(false);
      return;
    }

    try {
      const code = nanoid(3); 
      const couponCode = `ARB${code.toUpperCase()}20OFF`;

      const res = await axios.post('https://arb-mhk-coupon.onrender.com/api/v1/subscribe', {
        email: email,
        coupon: couponCode
      });

      if (res.data.status === 'success') {
        const userData = res.data.subscribe;
        setVerificationCode(userData.coupon);
        setShowPopup(true); 
      } else {
      
        setError(res.data.message || "Subscription failed. Please try again.");
      }
    } catch (err) {
      console.error("Subscription error:", err);
   
      if (err.response) {
        setError(err.response.data.message || "An error occurred during subscription.");
      } else if (err.request) {
        setError("No response from server. Please check your internet connection.");
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setEmail(""); 
  };

  const handleCloseInitialPopup = () => {
    setShowInitialPopup(false);
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center p-4">
      <style jsx>{`
        @keyframes gradient-animation {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>

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
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Initial Welcome Pop-up */}
      {showInitialPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="relative bg-white text-black p-8 rounded-lg shadow-xl max-w-sm sm:max-w-md md:max-w-lg w-full text-center flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl font-bold -mt-3">Welcome</h3>
            <h3 className="text-3xl sm:text-4xl font-bold">ARABIAN MEHEK</h3>
            <p className="text-sm sm:text-base -mt-2">Not Made Here. Not Made Ordinary. 100% Imported Perfume</p>
            <p className="text-base sm:text-lg mt-2">Subscribe now and claim your exclusive discount before launch.</p>
            <h3 className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text text-2xl sm:text-3xl font-bold -mt-1">
              <span className="font-extrabold">20% OFF</span> Only for Pre-Subscribers
            </h3>
            <p className="text-2xl sm:text-3xl -mt-1">🥳🎉</p>
            <button
              onClick={handleCloseInitialPopup}
              className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition duration-300 ease-in-out -mt-1"
            >
              Continue to Site
            </button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl w-full flex flex-col items-center gap-6 text-white px-4 md:px-8">

        {/* Logo */}
        <a href="/">
          <img
            src="/Logo-1.png"
            alt="Arabian Mehek Logo"
            className="w-30 md:w-48 mb-2 mt-10"
          />
        </a>

        {/* Tagline */}
        <p className="bg-gradient-to-r from-yellow-500 via-amber-200 to-amber-300 text-transparent bg-clip-text text-lg sm:text-xl" id="form">
          No local blends, no compromises. Only pure, high-quality imports
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold leading-tight tracking-tight max-w-8xl px-2 text-amber-100">
          <span
            className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-amber-300 bg-clip-text text-transparent font-bold"
            style={{
              backgroundSize: '200% auto',
              animation: 'gradient-animation 3s linear infinite',
            }}
          >
            Arabian Mehek
          </span>{" "}
          isn’t just a fragrance—it's an experience. Discover 100% authentic imported perfumes from the Middle East, now launching exclusively in{" "}
          <span
            className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-amber-300 bg-clip-text text-transparent font-bold"
            style={{
              backgroundSize: '200% auto',
              animation: 'gradient-animation 3s linear infinite',
            }}
          >
            India
          </span>
        </h1>

        {/* Secondary Tagline */}
        <p className="bg-gradient-to-r from-yellow-400 via-amber-200 to-amber-300 text-transparent bg-clip-text text-lg sm:text-xl">
          Signature scents for both men and women, crafted to reflect personality and power
        </p>

        {/* Email Subscription Form */}
        <form onSubmit={handleSubscribe} className="w-full max-w-md mx-auto">
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <input
              type="email"
              placeholder="Enter email to get 20% off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              className="px-4 py-3 w-full rounded-full bg-white/20 border border-yellow-400 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-yellow-400 transition backdrop-blur-sm"
              aria-label="Enter your email"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Loading...' : "Subscribe"}
            </button>
          </div>
        </form>

        <p className="text-sm md:text-base">
          Don’t Just Wait for the Launch – <span className="underline">Subscribe & Save 20% Instantly</span>
        </p>

        {/* Error message display */}
        {error && (
          <p className="text-red-400 mt-2 text-sm font-medium" role="alert">{error}</p>
        )}
      </div>

      {/* Subscription Success Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white text-black p-8 rounded-lg shadow-xl max-w-sm w-full text-center flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl font-bold">
              Only Early Subscribers Get 20% OFF – Don’t Miss Your Chance to Own Authentic Arabian Perfume at a Special Price!
            </h3>
            <p className="text-base sm:text-lg">
              Use Your 20% Discount and Be Among the First to Experience Arabian Mehek.
            </p>
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg py-3 px-6 text-2xl sm:text-3xl font-mono tracking-widest font-bold">
              <h2>Thank you 🥳🥳🥳</h2>
              {verificationCode && <p className="mt-2 text-xl sm:text-2xl">{verificationCode}</p>}
            </div>
            <p className="text-sm text-gray-600">
              Use this code to avail a special offer on your first purchase.
            </p>
            <button
              onClick={closePopup}
              className="mt-4 px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition duration-300 ease-in-out"
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
