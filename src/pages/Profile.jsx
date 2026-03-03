import React from 'react';
import './Profile.css';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import BadgeIcon from '@mui/icons-material/Badge';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import {useNavigate} from 'react-router-dom'
import { useAuth, } from '../Context/AuthContext';
import axios from 'axios';
import { useEffect } from 'react';
const Profile = () => {
  const navigate = useNavigate()

const { user, loading,setUser } = useAuth(); 

 async function handleLogout(){
  try {
    await axios.post("http://localhost:5000/Logout",{},{
      withCredentials:true
    });
    setUser(null); 
    navigate("/login");
  } catch (error) {
    console.error("Logout failed", error);
  }
 }
 useEffect(()=>{
  if(!user)
    navigate("/login");
 },[user,navigate,loading])


 if (loading) {
    return <div className="profile-container">Loading...</div>;
  }

  if (!user) {
    return null; 
  }
  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <div className="avatar-wrapper">
            <img 
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png" 
              alt="Default User" 
              className="profile-avatar"
            />
          </div>
          <h2 className="user-name">{user.full_name}</h2>
          <span className="user-role">{user.role}</span>
        </div>

        <div className="profile-body">
          <div className="info-item">
            <div className="info-icon"><FingerprintIcon /></div>
            <div className="info-content">
              <p className="info-label">User ID</p>
              <p className="info-value">{user.data}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><EmailIcon /></div>
            <div className="info-content">
              <p className="info-label">Email Address</p>
              <p className="info-value">{user.email}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><PhoneIcon /></div>
            <div className="info-content">
              <p className="info-label">Phone Number</p>
              <p className="info-value">{user.phone_number}</p>
            </div>
          </div>

          <div className="info-item">
            <div className="info-icon"><BadgeIcon /></div>
            <div className="info-content">
              <p className="info-label">Account Role</p>
              <p className="info-value">authenticated</p>
            </div>
          </div>
        </div>

        <div className="profile-footer">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;