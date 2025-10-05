import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    // Password is no longer required for OAuth users
    password: {
      type: String,
      required: false, // CHANGED
    },
    username: {
      type: String,
      required: true,
    },
    // Field to store the user's Google ID
    googleId: {
      type: String,
      unique: true,
      sparse: true, // Allows multiple null values for non-Google users
    },
    // You might want to store the avatar from Google
    avatar: {
      type: String,
    },
    lastlogin: { // Note: 'lastLogin' is a more standard casing
      type: Date,
      default: Date.now,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    resetPasswordToken: String,
    resetPasswordExpiresAt: Date,
    verificationToken: String,
    verificationTokenExpiresAt: Date,
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
