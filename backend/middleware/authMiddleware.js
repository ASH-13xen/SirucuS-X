import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";

export const protect = async (req, res, next) => {
  let token;

  // Read the JWT from the cookie
  token = req.cookies.token;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      
      // Attach the user object to the request, excluding the password
      req.user = await User.findById(decoded.userId).select("-password");

      if (!req.user) {
        return res.status(401).json({ success: false, message: "Unauthorized - User not found" });
      }

      next();
    } catch (error) {
      console.error("Token verification failed:", error);
      return res.status(401).json({ success: false, message: "Unauthorized - Invalid token" });
    }
  } else {
    return res.status(401).json({ success: false, message: "Unauthorized - No token provided" });
  }
};