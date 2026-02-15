import React from 'react';
import './BottomHeader.css';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const BottomHeader = () => {
  return (
    <nav className="bottom-header">
      <div className="bottom-header-container">
        
        {/* Left: Browse Categories Dropdown */}
        <div className="categories-dropdown">
          <MenuIcon className="menu-icon" />
          <span className="dropdown-text">Browse Categories</span>
          <KeyboardArrowDownIcon className="arrow-icon" />
          
          {/* Simple Dropdown Menu (Hidden by default in CSS) */}
          <ul className="category-menu">
            <li>Electronics</li>
            <li>Fashion</li>
            <li>Home & Garden</li>
            <li>Beauty</li>
          </ul>
        </div>

        {/* Middle: Main Navigation Links */}
        <ul className="nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/accessories">Accessories</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>

        {/* Right: Login Icon Section */}
        <div className="bottom-header-right">
          <div className="login-wrapper">
            <PersonOutlineIcon className="login-icon" />
            <span className="login-text">Login / Register</span>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default BottomHeader;