import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function MyAccount({ setIsLoggedIn }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/account/login"); // ✅ Correct route
      return;
    }

    fetch("http://localhost:8000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(async (res) => {
        if (!res.ok) {
          // Token invalid → clear login state
          localStorage.removeItem("token");
          setIsLoggedIn(false);
          navigate("/account/login");
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data) {
          setUser(data);
          if (data?.name) {
            toast.success(`Welcome back, ${data.name}!`);
          }
        }
      })
      .catch((err) => {
        console.error(err);
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        navigate("/account/login");
      })
      .finally(() => setLoading(false));
  }, [navigate, setIsLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false); // ✅ Update state
    toast.success("Logged out successfully!");
    navigate("/account/login"); // ✅ Correct route
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-6">
      {user ? (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-50">
          <h1 className="text-2xl font-bold mb-4">My Account</h1>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          {user.address && (
            <p>
              <strong>Address:</strong> {user.address}
            </p>
          )}
          <button
            onClick={handleLogout}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      ) : (
        <p>No account info found.</p>
      )}
    </div>
  );
}
