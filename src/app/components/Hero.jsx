"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { nanoid } from 'nanoid'

const Hero = () => {
  // State for email input, popup visibility, error message, and verification code
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const [verificationCode, setVerificationCode] = useState(null);
  const [loading, setLoading] = useState(false);

  // New state for the initial pop-up visibility. Initialized to true to show on load.
  const [showInitialPopup, setShowInitialPopup] = useState(true);

  // Function to handle the "Subscribe" button click
  const handleSubscribe = async(e) => {
    e.preventDefault();
    setLoading(true);
   try {
        

        //  const code = Math.floor(10000 + Math.random() * 90000).toString();
        const code = nanoid (3)
        
   
     if (!email) {
      setError("Please enter your email");
      return;
    }

    //  pending 
     if (!code  )  return console.log("stop command")

    const res = await axios.post('https://arb-mhk-coupon.onrender.com/api/v1/subscribe', {
      email:email,
      coupon:`ARB${code.toUpperCase()}20OFF`
      
    } );

    if (res.data.status === 'success') {
     const userdata = res.data.subscribe
     setVerificationCode(userdata.coupon); 
     if (userdata){
      setShowPopup(true);

     }
    
    }
    
 
    console.log(res.data);


   

    
    
   } catch (error) {
    console.log(error);
    
   } finally {
    setError("");
    setLoading(false);

   }
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
          <div className="relative bg-white text-black p-10 rounded-lg shadow-xl max-w-xl w-full text-center flex flex-col gap-4">
            <h3 className="text-3xl font-bold -mt-5">Welcome</h3>
            <h3 className="text-4xl font-bold">ARABIAN MEHEK </h3>
            <p className="-mt-3 text-xs"> Not Made Here. Not Made Ordinary. 100% Imported Perfume</p>
            <p className="text-l mt-3">Subscribe now and claim your exclusive discount before launch. </p>
            <h3 className="bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 text-transparent bg-clip-text text-3xl font-bold -mt-3"> <span className="font-extrabold">20% OFF</span> Only for Pre-Subscribers</h3>
            <p className="text-3xl -mt-3 ">🥳🎉</p>
            <button
              onClick={handleCloseInitialPopup}
              className=" px-4 py-1 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition -mt-3 "
            >
              Continue to Site
            </button>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-20 max-w-7xl w-full flex flex-col items-center gap-6 text-white px-4 md:px-8">
        {/* Logo */}
        <a href="/"> <img         
          src="/Logo-1.png"
          alt="Arabian Mehek Logo"
          className="w-28 md:w-48 mb-2 mt-10"
        /></a>
      

        {/* Heading */}
        <p className="bg-gradient-to-r from-yellow-500 via-amber-200 to-amber-300 text-transparent bg-clip-text text-xl" id="form">
          No local blends, no compromises. Only pure, high-quality imports
        </p>
        <h1 className="text-6xl sm:text-4xl md:text-5xl font-semibold leading-tight tracking-tight max-w-8xl px-2 text-amber-100">
        <span className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-amber-300 bg-clip-text text-transparent text-6xl font-bold" style={{
    backgroundSize: '200% auto', 
    animation: 'gradient-animation 3s linear infinite', 
  }} >  Arabian Mehek </span> isn’t just a fragrance—it's an{" "}
          experience Discover{" "}
          100% authentic imported perfumes from the Middle East, now launching exclusively in{" "}
          <span className="inline-block bg-gradient-to-r from-yellow-400 via-red-500 to-amber-300 bg-clip-text text-transparent text-6xl font-bold" style={{
    backgroundSize: '200% auto', 
    animation: 'gradient-animation 3s linear infinite', 
  }} >  India </span>
        </h1>
        <p className="bg-gradient-to-r from-yellow-400 via-amber-200 to-amber-300 text-transparent bg-clip-text text-xl">
          Signature scents for both men and women, crafted to reflect personality and power
        </p>

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
            disabled= {loading}
              type="submit"
              className="w-full sm:w-auto px-6 py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold rounded-full transition"
            >
              {
                loading ? 'Loading...' : "Subscribe"
              }
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
            <h3 className="text-2xl font-bold">Only Early Subscribers Get 20% OFF – Don’t Miss Your Chance to Own Authentic Arabian Perfume at a Special Price!
</h3>
            <p className="text-l">
              Use Your 20% Discount and Be Among the First to Experience Arabian Mehek.
            </p>
            <div className="bg-yellow-100 border-2 border-yellow-400 rounded-lg py-3 px-6 text-3xl font-mono tracking-widest font-bold">
             <h2>Thankyou 🥳🥳🥳</h2>
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
