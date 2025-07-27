import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  { id: 1, src: "/video/vid1.mp4", title: "Celeste Orb Wall Light", price: "₹ 64,400" },
  { id: 2, src: "/video/vid2.mp4", title: "Lunar Flare Wall Light", price: "₹ 52,500" },
  { id: 3, src: "/video/vid1.mp4", title: "Aurora Marble Wall Light", price: "₹ 18,900" },
  { id: 4, src: "/video/vid2.mp4", title: "Astra Gleam Wall Light", price: "₹ 53,200" },
  { id: 5, src: "/videos/video5.mp4", title: "Celestial Drop Wall Light", price: "₹ 53,550" },
];

export default function VideoCarousel() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="mt-20 px-8">
      <h2 className="text-2xl font-bold mb-6 text-center">Watch and Buy</h2>

      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Videos */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {videos.map((video) => (
            <div
              key={video.id}
              className="flex-shrink-0 w-[280px] bg-white rounded-xl shadow-md overflow-hidden"
            >
              <video
                src={video.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-medium">{video.title}</h3>
                <p className="text-gray-700 font-semibold">{video.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
