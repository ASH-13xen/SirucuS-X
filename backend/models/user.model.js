import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: false, // Not required for OAuth users
    },
    username: {
      type: String,
      required: true,
    },
    googleId: {
      type: String,
      unique: true,
      sparse: true,
    },
    avatar: {
      type: String,
      default: 'https://placehold.co/150x150/a2d5c6/000000?text=S',
    },
    lastlogin: {
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
    
    // --- PROFILE FIELDS ---
    contactNo: {
      type: String,
      default: '',
    },
    collegeDetails: {
      year: { type: String, default: '' },
      branch: { type: String, default: '' },
      rollNo: { type: String, default: '' },
    },
    individualRatings: {
      type: Map,
      of: Number,
      default: {},
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);