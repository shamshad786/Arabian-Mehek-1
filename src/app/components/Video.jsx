'use client';
import React, { useState, useRef, useEffect } from 'react';

const Video = () => {
  const videos = [
    {
      id: 1,
      title: 'Elegant Marqui Perfume',
      url: '/Marqui 2.mp4',
    },
    {
      id: 2,
      title: 'Fresh Marquis Scent',
      url: '/Marquis.mp4',
    },
    {
      id: 3,
      title: 'Warm & Spicy Cologne',
      url: '/Rumba.mp4',
    },
    {
      id: 4,
      title: 'Mysterious Oriental Eau',
      url: '/Rumba2.mp4',
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
    <div className="bg-white p-6 md:p- flex flex-col items-center ">
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
                  controls
                  loop
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Overlay only when not hovered */}
                {hoveredVideoId !== video.id && (
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-white text-sm font-semibold pointer-events-none">
                    {video.title}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <a
  href="#"
  type="button"
  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl 
         focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 
         font-medium rounded-lg 
         text-base sm:text-lg md:text-xl 
         px-6 sm:px-8 md:px-10 
         py-3 sm:py-4
         mt-6 sm:mt-8 
         text-center inline-block "
>
  Follow on Instagram
</a>

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
