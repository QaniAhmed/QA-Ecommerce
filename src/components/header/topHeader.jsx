import React from 'react';
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'

export default function TopHeader(props) {
 
  return (
    <header className="main-header">
      <div className="header-container">
        {/* Left: Logo/Icon */}
        <div className="header-left">
          <div className="logo-icon">
            <span className="icon-placeholder"><img src='./src/img/React Ecommerce Reda Tech/img/icon.png' alt="logo" height={'40px'}/> </span>
            <span className="logo-text">QA Shop</span>
          </div>
        </div>

        {/* Middle: Search Bar */}
        <div className="header-middle">
          <div className="search-container">
            <input 
              type="text" 
              placeholder="Search for products, brands and more..." 
              className="search-input"
            />
            <button className="search-button">
              <span className="search-icon">{<SearchIcon/>}</span>
            </button>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="header-right">
          <div className="action-item">
            <span className="action-icon">{<FavoriteBorderIcon/>}</span>
            <span className="action-label">Wishlist</span>
            <span className={props.Wishlist>0?"Wishlist-badge":""}>{props.Wishlist>0?props.Wishlist:""}</span>
            
          </div>
          <div className="action-item cart-btn">
            <span className="action-icon">{<ShoppingCartIcon/>}</span>
            <span className="action-label">Cart</span>
            <span className={props.cart>0?"cart-badge":""}> {props.cart>0?props.cart:""} </span>
          </div>
        </div>
      </div>
    </header>
  );
};

