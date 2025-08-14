import jwt from "jsonwebtoken";
import User from "../models/User.js";

// helper to create token
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Register
export const register = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Please provide name, email and password" });
    }

    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({ name, email, password, address });

    res.status(201).json({
      message: "User registered successfully",
      token: generateToken(user._id),
      user: { id: user._id, name: user.name, email: user.email, address: user.address },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ message: "Please provide email and password" });

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await user.matchPassword(password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = generateToken(user._id);

    // Optional: set cookie if you want cookie-based auth later
    // res.cookie("token", token, { httpOnly: true, sameSite: "strict", secure: false });

    res.json({
      message: "Login successful",
      token,
      user: { id: user._id, name: user.name, email: user.email, address: user.address },
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get current user (protected)
export const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Logout (optional)
export const logout = (req, res) => {
  // If using cookie-based auth, clear cookie here:
  // res.clearCookie("token");
  res.json({ message: "Logged out" });
};
