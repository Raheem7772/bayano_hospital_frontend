// ProfileCard.js
import React, { useState } from 'react';
import './profile.css';
import { Link } from "react-router-dom";

const ProfileCard = ({ profile }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleMouseEnter = () => {
    setShowDetails(true);
  };

  const handleMouseLeave = () => {
    setShowDetails(false);
  };

  return (
    <div
      className="profile-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={profile.avatar} alt="Profile Avatar" className='Profile-Avatar' />
      <div className='profile-desc'>
      <h4 className='profile-desc-heading'>{profile.skill}</h4>
      <h3 className='profile-desc-name'>{profile.name}</h3>
      </div>
      {showDetails && (
        <div className="profile-details">
          <p><b>Email:</b>{profile.email}</p>
          <p><b>Address:</b> {profile.Address}</p>
          <p><b>Phone:</b> {profile.Phone}</p>
          <p><b>Degrees:</b> {profile.Degrees}</p>
          <p><b>Profile</b><br/>
             {profile.Profile}</p>
             <button className="btn btn1">
             <Link to="/appointment" >Book An Appointment </Link>
            </button>
          {/* Add more profile details as needed */}
        </div>
      )}
    </div>
  );
};

export default ProfileCard;

