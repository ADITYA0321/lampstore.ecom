import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      toast.error("Please provide name, email and password");
      return;
    }

    try {
      const res = await fetch("http://localhost:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include", // cookies allow
        body: JSON.stringify({
          name: form.firstName + " " + form.lastName, // send full name for backend
          email: form.email,
          password: form.password
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Registration failed");
      } else {
        toast.success("Account created successfully!");
        navigate("/account/login");
      }
    } catch (err) {
      toast.error("Server error");
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-black via-[#0a1f3c] to-[#001f4d]">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Create
          </button>
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          <Link to="/account/login" className="text-red-600 hover:underline">
            Log in with an existing account
          </Link>{" "}
          or{" "}
          <Link to="/" className="text-red-600 hover:underline">
            Return to Store
          </Link>
        </p>
      </div>
    </div>
  );
}
