import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-10 py-12 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Left Section */}
        <div>
          <p className="text-gray-300 text-sm leading-relaxed">
            RR Lights, the largest purveyor of modern and contemporary
            lighting, with over 35 years of endeavours, is committed towards
            impeccable craftsmanship and innovation to provide cutting edge
            lighting solutions.
          </p>
          <div className="mt-4">
            <div className="text-4xl font-bold">RR</div>
            <div className="text-[10px] text-gray-400 tracking-widest">
              Lights
            </div>
          </div>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">Pendants</a></li>
            <li><a href="#">Chandeliers</a></li>
            <li><a href="#">Table Lamps</a></li>
            <li><a href="#">Floor Lamps</a></li>
            <li><a href="#">Wall Lights</a></li>
            <li><a href="#">Outdoor</a></li>
            <li><a href="#" className="text-red-500">Sale</a></li>
          </ul>
        </div>

        {/* Important Links */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Important</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Shipping and Delivery</a></li>
            <li><a href="#">Exchange Policy</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Download Catalogue</a></li>
            <li><a href="#">FAQs</a></li>
            <li><a href="#">Gallery</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-3">Newsletter</h3>
          <p className="text-gray-300 text-sm mb-3">
            Sign up for exclusive offers, original stories, events and more.
          </p>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full p-2 rounded-md text-white mb-3"
          />
          <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-md w-full">
            SIGN UP
          </button>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2025 Powered By Aditya Rangari.
      </div>
    </footer>
  );
}
