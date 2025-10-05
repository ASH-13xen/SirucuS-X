import React, { useState, useEffect } from 'react';
import '../css/UserProfile.css';
import UserProfileCard from '../components/UserProfileCard';
import SkillRadarChart from '../components/SkillRadarChart';
import UserProfileEditForm from '../components/UserProfileEditForm';

const Userprofile = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const res = await fetch('/api/users/profile', {
          credentials: 'include',
        });
        if (!res.ok) {
          throw new Error('Could not fetch user profile. Please log in.');
        }
        const data = await res.json();
        setUser(data);
        if (!data.collegeDetails || !data.collegeDetails.rollNo) {
          setIsEditMode(true);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUserProfile();
  }, []);

  const handleSaveProfile = async (formData) => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/users/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          // Include auth token if needed, e.g., from localStorage
        },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to update profile');
      const updatedUser = await res.json();
      setUser(updatedUser);
      setIsEditMode(false);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <h2 className="page-message">Loading Profile...</h2>;
  }
  if (error) {
    return <h2 className="page-message error">{error}</h2>;
  }
  if (!user) {
    return <h2 className="page-message">User data could not be loaded.</h2>;
  }

  return (
    <div className="profile-page-container">
      <div className="profile-grid">
        {isEditMode ? (
          <UserProfileEditForm
            user={user}
            onSave={handleSaveProfile}
            onCancel={() => setIsEditMode(false)}
          />
        ) : (
          <UserProfileCard user={user} onEditClick={() => setIsEditMode(true)} />
        )}

        <div className="skills-card">
          <h2>Skill Proficiency</h2>
          {user.individualRatings && Object.keys(user.individualRatings).length > 0 ? (
            <SkillRadarChart ratings={user.individualRatings} />
          ) : (
            <div className="empty-chart-message">
              <p>No skill ratings available yet.</p>
              <p className="highlight">
                Give tests for respective skills to see your ratings here!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Userprofile;
