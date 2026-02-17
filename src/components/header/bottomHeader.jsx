import React, { useEffect, useState } from 'react';
import './BottomHeader.css';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// const [category,setCategory]= useState()
const BottomHeader = () => {
  const [categories,setCategories]= useState([])
  useEffect(()=>
    {
     async function GetProducts(){

    try
    {
      const response = await fetch("https://dummyjson.com/products/categories");
      const result = await response.json()
      setCategories(result);
    }
    catch(e){console.log(e)}

  }
  GetProducts();
  },[])
  
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
            {categories.map((category)=>( <li key={category.slug} >{category.name}</li>))}
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