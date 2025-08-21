import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Please enter both email and password");
      return;
    }

    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // ✅ Store token & update login state
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);

      toast.success("Login successful!");
      navigate("/account"); // ✅ Redirect after login
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#0a1f3c] to-[#001f4d]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="text-right text-sm text-blue-600 hover:underline">
            <Link to="/account/forgot-password">Forgot Password?</Link>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <Link to="/account/register" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
