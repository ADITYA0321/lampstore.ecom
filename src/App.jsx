import { useEffect, useState } from "react";
import { User, Search, ShoppingBag } from "lucide-react";
import Img from "./Img";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import AllImages from "./AllImages";
import ProductGrid from "./ProductGrid";
import BirdLamps from "./BirdLamps"; // Full gallery
import BirdLampsPreview from "./birdl"; // Preview component
import "./App.css"; // Assuming you have a CSS file for styles
import VideoGallery from "./VideoGallery";





function Layout() {
  const [isHovered, setIsHovered] = useState(false);
  const [todo, setTodo] = useState({});
  const location = useLocation();

  const isHomePage = location.pathname === "/";



  return (
    <div className="relative">
      {/* Fixed Transparent Navbar */}
      <header
        className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-colors duration-300 ${
          isHovered ? "bg-black bg-opacity-90" : "bg-transparent"
        } text-white`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Logo */}
        <div className="flex flex-col items-center justify-center w-24 leading-none">
          <div className="text-6xl font-bold tracking-tight">JE</div>
          <div className="text-[9px] tracking-widest text-gray-400 mt-[-4px]">
            JAINSONS EMPORIO
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex space-x-6 text-sm font-normal">
          {[
            "Explore",
            "Pendants",
            "Chandeliers",
            "Table Lamps",
            "Floor Lamps",
            "Wall Lights",
            "Outdoor",
            "Gallery",
          ].map((item) => (
            <a key={item} href="#" className="hover:text-gray-300">
              {item}
            </a>
          ))}
          <a href="#" className="text-red-600 hover:text-red-700">Sale</a>
          <a href="#" className="text-red-600 relative pb-1 hover:text-red-700">
            Design Partner
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-600"></span><br />
            <>{todo.title}
            </>
          </a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-6">
          <User className="w-5 h-5 cursor-pointer" />
          <Search className="w-5 h-5 cursor-pointer" />
          <ShoppingBag className="w-5 h-5 cursor-pointer" />
        </div>
      </header>

      {/* Only show on homepage */}
      {isHomePage && <Img />}
      {isHomePage && <ProductGrid />}
      {isHomePage && <BirdLampsPreview />}
      {isHomePage && <VideoGallery />}

      {/* Main Content */}
      

    
     

      

      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/view-all" element={<AllImages />} />
  <Route path="/bird-lamps" element={<BirdLamps />} /> 
  <Route path="/bird-lamps-preview" element={<BirdLampsPreview />} />

 



  
      </Routes>

    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
