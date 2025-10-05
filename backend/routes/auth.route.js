import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
  googleCallback, // Import the new controller
} from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";
import passport from "passport";

const router = express.Router();

// --- GOOGLE OAUTH ROUTES ---

// This route starts the Google OAuth flow
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// This is the callback route that Google redirects to
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/login`, // Redirect to login on fail
    session: false, // We are using JWT, not sessions
  }),
  googleCallback
);


router.get("/check-auth", verifyToken, checkAuth);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify-email", verifyEmail);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

export default router;