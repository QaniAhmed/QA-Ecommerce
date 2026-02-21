import React from 'react'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

function LoginIconSectoin() {
  return (
    <div>
       <div className="bottom-header-right">
          <div className="login-wrapper">
            <PersonOutlineIcon className="login-icon" />
            <span className="login-text">Login / Register</span>
          </div>
        </div>
    </div>
  )
}

export default LoginIconSectoin
