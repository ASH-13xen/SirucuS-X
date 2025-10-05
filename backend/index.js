import express from "express";
import { connectDB } from "./db/connectDB.js";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";
import userRoutes from "./routes/user.routes.js";
import cors from "cors";
import passport from "passport";
import "./config/passport.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "http://localhost:5173", credentials: true }));

app.use(express.json());
app.use(cookieParser());

// --- INITIALIZE PASSPORT ---
app.use(passport.initialize());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.listen(PORT, () => { // Use PORT variable
  connectDB();
  console.log("Server is running on port: ", PORT);
});

