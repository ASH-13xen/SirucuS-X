import React, { useState } from 'react';
import '../css/UserProfileForm.css';

const UserProfileEditForm = ({ user, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    username: user.username || '',
    contactNo: user.contactNo || '',
    collegeDetails: {
      rollNo: user.collegeDetails?.rollNo || '',
      branch: user.collegeDetails?.branch || '',
      year: user.collegeDetails?.year || '',
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'rollNo' || name === 'branch' || name === 'year') {
      setFormData((prev) => ({
        ...prev,
        collegeDetails: { ...prev.collegeDetails, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="profile-card">
      <h2 className="form-title">Update Your Profile</h2>
      <form onSubmit={handleSubmit} className="user-profile-form">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" value={formData.username} onChange={handleChange} />

        <label htmlFor="contactNo">Contact Number</label>
        <input id="contactNo" type="tel" name="contactNo" value={formData.contactNo} onChange={handleChange} />
        
        <label htmlFor="rollNo">Roll Number</label>
        <input id="rollNo" type="text" name="rollNo" value={formData.collegeDetails.rollNo} onChange={handleChange} required/>

        <label htmlFor="branch">Branch</label>
        <input id="branch" type="text" name="branch" value={formData.collegeDetails.branch} onChange={handleChange} />

        <label htmlFor="year">Year</label>
        <input id="year" type="text" name="year" value={formData.collegeDetails.year} onChange={handleChange} />

        <div className="form-buttons">
          <button type="submit" className="btn-save">Save Changes</button>
          <button type="button" className="btn-cancel" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default UserProfileEditForm;