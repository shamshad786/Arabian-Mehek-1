'use client';
import React, { useState, useRef, useEffect } from 'react';

const Video = () => {
  const videos = [
    {
      id: 1,
      title: 'Elegant Floral Perfume',
      url: '/vid.mp4',
    },
    {
      id: 2,
      title: 'Fresh Citrus Scent',
      url: '/vid.mp4',
    },
    {
      id: 3,
      title: 'Warm & Spicy Cologne',
      url: '/vid.mp4',
    },
    {
      id: 4,
      title: 'Mysterious Oriental Eau',
      url: '/vid.mp4',
    },
  
  ];

  const sliderRef = useRef(null);
  const videoRefs = useRef({});
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredVideoId, setHoveredVideoId] = useState(null);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (sliderRef.current) {
        const slider = sliderRef.current;
        const cardWidth = slider.children[0].offsetWidth + 16;
        
        if (slider.scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
          slider.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
      }
    }, 30000);
  };

  useEffect(() => {
    if (!isHovered) {
      startAutoSlide();
    }
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  const handleMouseEnterContainer = () => {
    setIsHovered(true);
  };

  const handleMouseLeaveContainer = () => {
    setIsHovered(false);
  };

  const handleMouseEnterVideo = (videoId) => {
    setHoveredVideoId(videoId);
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.play();
    }
  };

  const handleMouseLeaveVideo = (videoId) => {
    setHoveredVideoId(null);
    const videoElement = videoRefs.current[videoId];
    if (videoElement) {
      videoElement.pause();
      videoElement.currentTime = 0;
    }
  };

  return (
    <div className="bg-white p-6 md:p-12 flex flex-col items-center min-h-screen">
      <div 
        className="relative mx-auto max-w-7xl w-full"
        onMouseEnter={handleMouseEnterContainer}
        onMouseLeave={handleMouseLeaveContainer}
      >
        <div
          ref={sliderRef}
          className="flex justify-center gap-4 overflow-hidden p-2"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-none w-1/4 sm:w-1/5 md:w-1/5 lg:w-1/5"
              onMouseEnter={() => handleMouseEnterVideo(video.id)}
              onMouseLeave={() => handleMouseLeaveVideo(video.id)}
            >
              <div className="relative group rounded-xl overflow-hidden shadow-xl transition-transform duration-300 transform hover:scale-105">
                <video
                  ref={el => videoRefs.current[video.id] = el}
                  className="w-full h-auto aspect-[9/16] object-cover"
                  src={video.url}
                  muted
                  loop
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 opacity-100 group-hover:opacity-0">
                  <span className="text-white text-base font-semibold text-center px-2">{video.title}</span>
                </div>
              </div>
              
            </div>
          ))}
        </div>
        
      </div>
      <a href="#" className='bg-amber-300 hover:bg-amber-400 text-white font-bold py-4 px-25 rounded mt-15'> Follow on instagram</a> 
    </div>
  );
};

const App = () => {
  return (
    <div className="bg-white font-sans">
      <Video />
   

    </div>
  );
};

export default App;
