import React from "react";
import { useNavigate } from "react-router-dom";

const images = Array.from({ length: 102 }, (_, i) => ({
  id: i + 1,
  src: `/lamp/image-${i + 1}.jpeg`,
  title: `Lamp ${i + 1}`,
  price: Math.floor(Math.random() * 50000) + 10000,
}));

export default function Home() {
  const navigate = useNavigate();
  const previewImages = images.slice(0, 4); // 👈 show only 4

  return (
    <div className="p-8 mt-32  ">
      <h2 className="text-2xl font-bold mb-4">Welcome to the Lamp Store</h2>

      {/* 4-image preview grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {previewImages.map((img) => (
          <div key={img.id} className="bg-white p-2 shadow-md">
            <img
              src={img.src}
              alt={img.title}
              className="w-full h-[300px] object-cover rounded"
            />
            <h3 className="text-sm mt-2 font-medium">{img.title}</h3>
            <p className="text-gray-600 text-sm">Rs. {img.price}</p>
          </div>
        ))}
      </div>

      {/* View All button */}
      <button
        onClick={() => navigate("/view-all")}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View All Lamps
      </button>
    </div>
  );
}
