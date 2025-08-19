import React, { useState } from "react";

const images = Array.from({ length: 102 }, (_, i) => ({
  id: i + 1,  
  src: `/lamp/image-${i + 1}.jpeg`,
  title: `Lamp ${i + 1}`,
  price: Math.floor(Math.random() * 50000) + 10000,
  category: i % 2 === 0 ? "Wall Lights" : "Floor Lamps",
}));

export default function AllImages() {
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => setVisibleCount(prev => prev + 8);

  const visibleImages = images.slice(0, visibleCount);

  return (
    <div className="p-8 mt-32">
      <h2 className="text-2xl font-bold mb-4">All Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {visibleImages.map((img) => (
          <div key={img.id} className="bg-white p-2 shadow-md">
            <img
              src={img.src}
              alt={img.title}
              className="w-90 h-80 object-fill rounded-lg mb-2"
            />
            <h3 className="text-sm mt-2">{img.title}</h3>
            <p className="text-gray-600 text-sm">Rs. {img.price}</p>
          </div>
        ))}
      </div>

      {visibleCount < images.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleShowMore}
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
}
