import React from 'react';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../Context/AuthContext';

function LoginIconSection() {
  const { user, loading } = useAuth(); 

  if (loading) return <span>...</span>;

  return (
    <div className="bottom-header-right">
      <Link to={user ? "/profile" : "/login"} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="login-wrapper">
          <PersonOutlineIcon className="login-icon" />
          <span className="login-text">
            {user ? `Welcome, ${user.full_name}` : "Login / Register"}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default LoginIconSection;