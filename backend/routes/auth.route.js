import express from "express";
import {
  login,
  logout,
  signup,
  verifyEmail,
  forgotPassword,
  resetPassword,
  checkAuth,
  googleCallback,
} from "../controllers/auth.controller.js";
// 1. IMPORT "protect" INSTEAD OF "verifyToken"
import { protect } from "../middleware/authMiddleware.js";
import passport from "passport";

const router = express.Router();

// --- GOOGLE OAUTH ROUTES ---
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: `${process.env.CLIENT_URL}/login`,
    session: false,
  }),
  googleCallback
);

// 2. USE "protect" INSTEAD OF "verifyToken"
router.get("/check-auth", protect, checkAuth);

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.post("/verify-email", verifyEmail);

router.post("/forgot-password", forgotPassword);

router.post("/reset-password/:token", resetPassword);

export default router;