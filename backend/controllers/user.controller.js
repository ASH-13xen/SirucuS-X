import { User } from '../models/user.model.js';
import asyncHandler from 'express-async-handler';

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private (requires login)
export const getUserProfile = asyncHandler(async (req, res) => {
  // The 'protect' middleware has already verified the user and attached their ID to req.user._id
  const user = await User.findById(req.user._id).select('-password'); // Find user but exclude the password

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private (requires login)
export const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    const { username, contactNo, collegeDetails } = req.body;

    // Update fields only if they were provided in the request
    user.username = username || user.username;
    user.contactNo = contactNo ?? user.contactNo; // Use ?? to allow empty strings
    
    // Update the nested college details object
    if (collegeDetails) {
      user.collegeDetails.year = collegeDetails.year ?? user.collegeDetails.year;
      user.collegeDetails.branch = collegeDetails.branch ?? user.collegeDetails.branch;
      user.collegeDetails.rollNo = collegeDetails.rollNo ?? user.collegeDetails.rollNo;
    }

    const updatedUser = await user.save();

    // Send back the updated user data
    res.status(200).json(updatedUser);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});