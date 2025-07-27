import React, { useState, useEffect } from "react";

const slides = [
  {
    img: "/1.jpg",
  
  },
  {
    img: "/2.jpg",
    
  },
  {
    img: "/3.jpg",
    
  },
  {
    img: "/4.jpg",
   
  },
  {
    img: "/5.jpg",
   
  },
  {
    img: "/6.jpg",
   
  },
];

export default function Img() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 visible z-10" : "opacity-0 invisible z-0"
          }`}
        >
          <img
            src={slide.img}
            alt={slide.title}
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
  );
}
