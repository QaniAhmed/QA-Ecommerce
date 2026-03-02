import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { Link } from 'react-router-dom';


function LoginIconSectoin() {
  return (
    <div>
       <div className="bottom-header-right">
        <Link to={'/Register'} className='LinkStyle'>
          <div className="login-wrapper">
            <PersonOutlineIcon className="login-icon" />
            <span className="login-text">Login / Register</span>
          </div>
          </Link>
        </div>
    </div>
  )
}

export default LoginIconSectoin
