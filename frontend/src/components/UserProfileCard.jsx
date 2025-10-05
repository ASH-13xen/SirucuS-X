import React from 'react';
import { FaEnvelope, FaPhone, FaUniversity, FaIdBadge, FaEdit } from 'react-icons/fa';

const UserProfileCard = ({ user, onEditClick }) => {
  return (
    <div className="profile-card">
      <img src={user.avatar} alt={user.username} className="profile-photo" />
      <h1 className="profile-username">{user.username}</h1>
      <p className="profile-college-branch">
        {user.collegeDetails?.branch || 'Branch not set'} - {user.collegeDetails?.year || 'Year not set'}
      </p>

      <div className="info-section">
        <div className="info-item">
          <FaEnvelope />
          <span>{user.email}</span>
        </div>
        <div className="info-item">
          <FaPhone />
          <span>{user.contactNo || 'Not available'}</span>
        </div>
        <div className="info-item">
          <FaUniversity />
          <span>IIIT Naya Raipur</span>
        </div>
        <div className="info-item">
          <FaIdBadge />
          <span>{user.collegeDetails?.rollNo || 'Not available'}</span>
        </div>
      </div>
      <button className="edit-profile-btn" onClick={onEditClick}>
        <FaEdit /> Edit Profile
      </button>
    </div>
  );
};

export default UserProfileCard;