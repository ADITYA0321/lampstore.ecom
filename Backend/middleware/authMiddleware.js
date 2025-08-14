import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next) {
  // Support either:
  // 1) Authorization header: "Bearer <token>"
  // 2) Cookie: req.cookies.token (if you later decide to use cookies)
  const headerToken = req.header("Authorization")?.split(" ")[1];
  const cookieToken = req.cookies?.token;
  const token = headerToken || cookieToken;

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // { id: userId }
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token is not valid" });
  }
}
