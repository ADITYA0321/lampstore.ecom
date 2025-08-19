// src/Nav.jsx
import { useState, useEffect } from "react";
import { User, Search, ShoppingBag } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Nav() {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  
 
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between transition-colors duration-300 ${
        isHovered ? "bg-black bg-opacity-90" : "bg-transparent"
      } text-white`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Logo */}
      <div className="flex flex-col items-center justify-center w-24 leading-none">
        <div className="text-6xl font-bold tracking-tight">RR</div>
        <div className="text-[13px] tracking-widest text-gray-400 mt-[-4px]">
          Lights
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-sm font-normal">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/pendants" className="hover:text-gray-300">Pendants</Link>
        <Link to="/chandeliers" className="hover:text-gray-300">Chandeliers</Link>
        <Link to="/tablelampall" className="hover:text-gray-300">Table Lamps</Link>
        <Link to="/floor" className="hover:text-gray-300">Floor Lamps</Link>
        <Link to="/wall-lamps" className="hover:text-gray-300">Wall Lights</Link>
        <Link to="/outdoor" className="hover:text-gray-300">Outdoor</Link>
        <Link to="/gallery" className="hover:text-gray-300">Gallery</Link>
        <Link to="/sale" className="text-red-600 hover:text-red-700">Sale</Link>
        <Link to="/design" className="text-red-600 relative pb-1 hover:text-red-700">
          Design Partner
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-red-600"></span>
        </Link>
      </nav>

      {/* Icons with Login/Logout */}
      <div className="flex items-center space-x-6">
       {isLoggedIn ? (
        <>
          <Link to="/account">My Account</Link>
          <button onClick={handleLogout}>Logout</button>
        </>
        ) : (
          <Link to="/account/login">
            <User className="w-5 h-5 cursor-pointer hover:text-gray-300" />
          </Link>
        )}
        <Search className="w-5 h-5 cursor-pointer hover:text-gray-300" />
        <ShoppingBag className="w-5 h-5 cursor-pointer hover:text-gray-300" />
      </div>
    </header>
  );
}
