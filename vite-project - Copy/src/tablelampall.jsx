import React from "react";
import { Link } from "react-router-dom";

const images = Array.from({ length: 19 }, (_, i) => ({
  id: i + 1,
  src: `/tablelamp/image${i + 1}.jpg`,
  title: `Wall Lamp ${i + 1}`,
  price: `₹ ${(Math.random() * 50000 + 2000).toFixed(0)}`
}));

export default function TableLampAll() {
  return (
    <section className="p-8 mt-32">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">All Table Lamps</h2>
        <Link to="/" className="px-4 py-1 bg-blue-600 text-white rounded-lg">
          Back
        </Link>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {images.map((img) => (
          <div
            key={img.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-[250px] object-contain bg-gray-100"
            />
            <div className="p-2">
              <h3 className="text-sm font-medium">{img.title}</h3>
              <p className="text-gray-700 font-semibold">{img.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
