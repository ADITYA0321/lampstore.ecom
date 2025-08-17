import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";

import Home from "./Home";
import AllImages from "./AllImages";
import BirdLampsPreview from "./birdl";
import WallLampAll from "./wall-lamps";
import TableLampAll from "./tablelampall";
import ProductGrid from "./ProductGrid";
import Img from "./Img";
import VideoGallery from "./VideoGallery";
import WallLampSlider from "./WallLamp";
import TableLampSlider from "./tablelamp";
import Footer from "./Footer";
import Nav from "./Nav";

import Login from "./account/Login";
import Register from "./account/Register";
import MyAccount from "./account/MyAccount";

// ✅ Protected Route wrapper
function ProtectedRoute({ isLoggedIn, children }) {
  if (!isLoggedIn) {
    return <Navigate to="/account/login" replace />;
  }
  return children;
}

function Layout({ isLoggedIn, setIsLoggedIn }) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Nav isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

      {/* Page content */}
      <div className="flex-grow">
        {isHomePage && (
          <>
            <Img />
            <ProductGrid />
            <BirdLampsPreview />
            <VideoGallery />
            <WallLampSlider />
            <TableLampSlider />
          </>
        )}

        <Toaster position="top-right" reverseOrder={false} />

        <Routes>
          <Route path="/" element={<Home />} />

          {/* ✅ Login route with state update */}
          <Route
            path="/account/login"
            element={
              !isLoggedIn
                ? <Login setIsLoggedIn={setIsLoggedIn} />
                : <Navigate to="/account" />
            }
          />

          {/* ✅ Protected account page */}
          <Route
            path="/account"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <MyAccount setIsLoggedIn={setIsLoggedIn} />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Navigate to="/account/login" replace />} />
            

          <Route path="/account/register" element={<Register />} />
          <Route path="/view-all" element={<AllImages />} />
          <Route path="/bird-lamps-preview" element={<BirdLampsPreview />} />
          <Route path="/wall-lamps" element={<WallLampAll />} />
          <Route path="/tablelampall" element={<TableLampAll />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  return (
    <Router>
      <div className="min-h-screen">
        <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
    </Router>
  );
}
