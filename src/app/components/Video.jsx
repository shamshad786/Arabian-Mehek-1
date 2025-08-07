'use client';
import React, { useState, useRef, useEffect } from 'react';

const Video = () => {
  const videos = [
    { id: 1, title: 'Elegant Marqui Perfume', url: '/Marqui 2.mp4' },
    { id: 2, title: 'Fresh Marquis Scent', url: '/Marquis.mp4' },
    { id: 3, title: 'Warm & Spicy Cologne', url: '/Rumba.mp4' },
    { id: 4, title: 'Mysterious Oriental Eau', url: '/Rumba2.mp4' },
  ];

  const sliderRef = useRef(null);
  const videoRefs = useRef({});
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredVideoId, setHoveredVideoId] = useState(null);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      const slider = sliderRef.current;
      if (slider && slider.children.length > 0) {
        const card = slider.children[0];
        const cardStyle = getComputedStyle(card);
        const gap = parseInt(cardStyle.marginRight || '16', 10) || 16;
        const cardWidth = card.offsetWidth + gap;

        const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
        let nextScroll = slider.scrollLeft + cardWidth;
        if (nextScroll > maxScrollLeft) nextScroll = 0;

        slider.scrollTo({ left: nextScroll, behavior: 'smooth' });
      }
    }, 30000);
  };

  useEffect(() => {
    if (!isHovered) startAutoSlide();
    return () => clearInterval(intervalRef.current);
  }, [isHovered]);

  return (
    <div className="bg-white flex flex-col items-center w-full justify-center">
      <div
        className="relative w-full max-w-4xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={sliderRef}
          className="flex gap-4 overflow-x-auto scroll-snap-x snap-x snap-mandatory scroll-smooth p-4 sm:p-10"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-none w-[90vw] sm:w-1/3 md:w-1/4 lg:w-1/4 5snap-center"
              onMouseEnter={() => {
                setHoveredVideoId(video.id);
                videoRefs.current[video.id]?.play();
              }}
              onMouseLeave={() => {
                setHoveredVideoId(null);
                const vid = videoRefs.current[video.id];
                if (vid) {
                  vid.pause();
                  vid.currentTime = 0;
                }
              }}
            >
              <div className="relative group rounded-xl overflow-hidden shadow-lg transition-transform duration-300 transform hover:scale-105">
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  className="w-100 h-auto aspect-[9/16] object-cover"
                  src={video.url}
                  controls
                  loop
                  preload="metadata"
                />
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
        href="https://www.instagram.com/arabianmehek/"
        className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 font-medium rounded-lg text-base sm:text-lg md:text-xl px-5 py-3 mt-6 text-center"
      >
        Follow on Instagram
      </a>
    </div>
  );
};

const App = () => (
  <div className="bg-white font-sans">
    <Video />
  </div>
);

export default App;
