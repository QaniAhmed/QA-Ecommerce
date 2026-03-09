import React, { useEffect, useState } from 'react';
import './Profile.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';
import axios from 'axios';

// Icons
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FingerprintIcon from '@mui/icons-material/Fingerprint';
import LogoutIcon from '@mui/icons-material/Logout';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CloseIcon from '@mui/icons-material/Close';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Profile = () => {
  const navigate = useNavigate();
  const { user, loading, setUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [UserData, setUserData] = useState(() => ({
    email: user?.email || "",
    full_name: user?.full_name || "",
    phone_number: user?.phone_number || ""
  }));



  async function handleLogout() {
    try {
      await axios.post("http://localhost:5000/Logout", {}, { withCredentials: true });
      setUser(null);
      navigate("/login");
    } catch (error) {
      console.error("Logout failed", error);
    }
  }


  function handleChange(e){
    const {name,value} = e.target;
    setUserData((prev)=>({...prev,[name]:value}))
  }

  async function handleSaveChanges() {
    try {
      console.log(UserData)
      const response = await axios.post("http://localhost:5000/Update",UserData,{withCredentials:true})
      console.log("response"+ response)
      console.log("Saving changes...");
      setIsEditing(false); 
    } catch (error) {
      console.error("Update failed", error);
    }
  }

  useEffect(() => {
    if (!loading && !user) navigate("/login");
  }, [user, navigate, loading]);

  if (loading) return <div className="loader-container"><div className="loader"></div></div>;
  if (!user) return null;

  return (
    <div className="pro-container">
      <div className="pro-wrapper">
        
        {/* --- Header Section --- */}
        <header className="pro-header">
          <div className="user-intro">
            <div className="avatar-shield">
              <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Profile" />
            </div>
            <div className="user-meta">
              {isEditing ? (
                <input type="text" className="edit-input-name" defaultValue={user.full_name} placeholder="Full Name" onChange={handleChange} name="full_name" />
              ) : (
                <h1>{user.full_name}</h1>
              )}
              <p className="role-tag">{user.role || 'Verified Member'}</p>
            </div>
          </div>

          <div className="header-actions">
            {!isEditing ? (
              <button className="btn-edit" onClick={() => setIsEditing(true)}>
                <EditIcon fontSize="small" /> Edit Profile
              </button>
            ) : (
              <div className="edit-controls">
                <button className="btn-cancel" onClick={() => setIsEditing(false)}>
                   Cancel
                </button>
                <button className="btn-save" onClick={handleSaveChanges}>
                  <SaveIcon fontSize="small" /> Save Changes
                </button>
              </div>
            )}
          </div>
        </header>

        <hr className="divider" />

        {/* --- Info Grid --- */}
        <section className="pro-grid">
          {/* ID - Read Only usually */}
          <div className="info-block readonly">
            <div className="block-icon"><FingerprintIcon /></div>
            <div className="block-text">
              <label>Account ID</label>
              <span>{user.id || user.data}</span>
            </div>
          </div>

          {/* Email */}
          <div className="info-block">
            <div className="block-icon"><MailOutlineIcon /></div>
            <div className="block-text">
              <label>Email Address</label>
              {isEditing ? (
                <input type="email" className="edit-input" defaultValue={user.email}  onChange={handleChange} name="email"/>
              ) : (
                <span>{user.email}</span>
              )}
            </div>
          </div>

          {/* Phone */}
          <div className="info-block">
            <div className="block-icon"><LocalPhoneIcon /></div>
            <div className="block-text">
              <label>Phone Number</label>
              {isEditing ? (
                <input type="text" className="edit-input" defaultValue={user.phone_number} onChange={handleChange} name="phone_number"  />
              ) : (
                <span>{user.phone_number || 'Not provided'}</span>
              )}
            </div>
          </div>

        </section>

        <footer className="pro-footer">
          <button className="btn-logout" onClick={handleLogout}>
            <LogoutIcon fontSize="small" /> Sign Out
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Profile;