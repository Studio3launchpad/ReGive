import React from 'react';
import { useState } from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="profile-wrapper">
      <h1 className="profile-title">Profile</h1>

      <div className="profile-grid">

        {/* LEFT SIDE */}
        <div className="profile-menu">
          <div className="menu-card active">
            <h3>Profile</h3>
            <p>Edit profile details</p>
          </div>

          <div className="menu-card">
            <h3>Settings</h3>
            <p>App settings and preferences</p>
          </div>

          <div className="menu-card">
            <h3>Security</h3>
            <p>Password & login</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="profile-form">
          <label>Name</label>
          <input 
            name="name"
            value={user.name}
            onChange={handleChange}
          />

          <label>Email</label>
          <input 
            name="email"
            value={user.email}
            onChange={handleChange}
          />

          <label>Address</label>
          <input 
            name="address"
            value={user.address}
            onChange={handleChange}
          />

          <label>Phone</label>
          <input 
            name="phone"
            value={user.phone}
            onChange={handleChange}
          />

          <button className="edit-btn">Update Profile</button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;