import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";


import Home from "./component/Home";
import AllImages from "./component/AllImages";
import BirdLampsPreview from "./component/BirdL";
import WallLampAll from "./component/WallLamps";
import TableLampAll from "./component/TableLampAll";
import ProductGrid from "./component/ProductGrid";
import Img from "./component/Img";
import VideoGallery from "./component/VideoGallery";
import WallLampSlider from "./component/WallLamp";
import TableLampSlider from "./component/TableLamp";
import Footer from "./component/Footer";
import Nav from "./component/Nav";





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
