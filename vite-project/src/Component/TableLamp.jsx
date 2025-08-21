import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/tablelamp/image${i + 1}.jpg`,
  title: `Wall Lamp ${i + 1}`,
  price: `₹ ${(Math.random() * 50000 + 2000).toFixed(0)}`
}));

export default function TableLampSlider() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <section className="mt-16 px-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Table Lamps</h2>
        {/* ✅ Link to new page */}
        <Link to="/TableLampAll" className="text-blue-600 hover:underline">
          View All
        </Link>
      </div>

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
        >
          {images.slice(0, 109).map((img) => (
            <div
              key={img.id}
              className="flex-shrink-0 w-[250px] bg-white rounded-xl shadow-md overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-[300px] object-contain bg-gray-100"
              />
              <div className="p-2">
                <h3 className="text-sm font-medium">{img.title}</h3>
                <p className="text-gray-700 font-semibold">{img.price}</p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}
