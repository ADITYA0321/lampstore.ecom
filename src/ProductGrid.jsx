// src/ProductGrid.jsx
import React from "react";

const products = [
  { title: "CHANDALIERS", image: "/frontimg/1.jpg", link: "/chandeliers" },
  { title: "PENDANTS LIGHTS", image: "/frontimg/4.jpg", link: "/pendants" },
  { title: "OUTDOOR LAMPS", image: "frontimg/3.jpg", link: "/outdoor" },
  { title: "FLOOR LAMPS", image: "/frontimg/2.jpg", link: "/floor" },
  { title: "TABLE LAMPS", image: "/frontimg/5.jpg", link: "/table" },
  { title: "WALL LIGHTS", image: "/frontimg/6.jpg", link: "/wall" },
];

export default function ProductGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((item, index) => (
          <a
            key={index}
            href={item.link}
            className="block transition-transform hover:scale-105"
          >
            <div className="aspect-[1/1] w-full overflow-hidden bg-gray-100 rounded-lg shadow">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-center text-xl font-semibold text-white bg-black py-2 mt-2">
              {item.title}
            </h3>
          </a>
        ))}
      </div>
    </div>
  );
}
