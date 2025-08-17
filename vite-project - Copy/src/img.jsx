import React, { useState, useEffect } from "react";

const slides = [
  { img: "/1.jpg",   },
  { img: "/2.jpg",   },
  { img: "/3.jpg",   },
  { img: "/4.jpg",   },
  { img: "/5.jpg",   },
  { img: "/6.jpg",   },

];
export default function Img() {
  const [current, setCurrent] = useState(0);

  // Auto change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 h-[600px] relative">
            <img
              src={slide.img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/40 text-center px-4">
              <h1 className="text-5xl font-light tracking-wider mb-4">
                {slide.title}
              </h1>
              <p className="text-lg mb-6">{slide.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              current === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
