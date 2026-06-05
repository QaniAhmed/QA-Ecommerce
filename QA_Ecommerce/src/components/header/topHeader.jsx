import React, { useState } from 'react';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link, useNavigate } from 'react-router-dom';

export default function TopHeader(props) {
  const navigate = useNavigate();
  const [sercheditem, setsercheditem] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function FindItem() {
    if (!sercheditem.trim() || isLoading) return; 
    
    setIsLoading(true);
    console.log("searched item value::", sercheditem);
    
    fetch(`https://dummyjson.com/products/search?q=${sercheditem}`)
      .then(res => res.json())
      .then(data => {
        navigate('/search', { state: { products: data.products } });
      })
      .catch(err => console.error("Error fetching search results:", err))
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleChange(e) {
    setsercheditem(e.target.value);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') {
      FindItem();
    }
  }

  return (
    <header className="main-header">
      <div className="header-container">
        {/* Left: Logo/Icon */}
        <div className="header-left">
          <Link to={'/'} style={{ textDecoration: "none", color: 'inherit' }}>
            <div className="logo-icon">
              <span className="icon-placeholder">
                <img src='/assets/img/React Ecommerce Reda Tech/img/icon.png' alt="logo" height={'40px'} />
              </span>
              <span className="logo-text">QA Shop</span>
            </div>
          </Link>
        </div>

        {/* Middle: Search Bar */}
        <div className="header-middle">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search for products, brands and more..." 
              className="search-input"
              onChange={handleChange}
              onKeyDown={handleKeyDown}
              value={sercheditem}
              disabled={isLoading}
            />
            <button 
              className={`search-button ${isLoading ? 'loading' : ''}`} 
              onClick={FindItem}
              disabled={isLoading}
            >
              <span className="search-icon">
                {isLoading ? <span className="header-spinner"></span> : <SearchIcon />}
              </span>
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="header-right">
          {/* Wishlist */}
          <Link to={'Wishlist'} className='LinkStyle'> 
            <div className="action-item">
              <div className="icon-wrapper">
                <span className="action-icon"><FavoriteBorderIcon /></span>
                {props.Wishlist > 0 && (
                  <span className="Wishlist-badge">{props.Wishlist}</span>
                )}
              </div>
              <span className="action-label">Wishlist</span>
            </div>
          </Link>

          {/* Cart */}
          <Link to={'Cart'} className='LinkStyle'>
            <div className="action-item cart-btn">
              <span className="action-icon"><ShoppingCartIcon /></span>
              <span className="action-label">Cart</span>
              {props.cart > 0 && (
                <span className="cart-badge">{props.cart}</span>
              )}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}