import React, { useEffect, useState } from 'react';
import './Products.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import Product_actions from './Product-actions.jsx';


const Products = (props) => {

    const [PhoneProducts,setPhoneProducts]= useState([]);
    // const [Clicked,setClicked]= useState(false)
  useEffect(()=>{
    async function GetData(){
        const response = await fetch('https://dummyjson.com/products/search?q=phone ')
        const result = await response.json()
        setPhoneProducts(result.products)
    }
    GetData()
  },[])

  

  return (
    <section className="products-section">
      <div className="section-header">
        <h2>Premium Smartphones</h2>
        <div className="header-line"></div>
      </div>

      <div className="products-grid">
        {PhoneProducts?.map((phone) => (
          <div className="product-card" key={phone.id}>
            {/* Top Part: Image & Badges */}
            <div className="product-image-container">
              {phone.discountPercentage > 10 && (
                <span className="discount-badge">-{Math.round(phone.discountPercentage)}%</span>
              )}
              <img src={phone.thumbnail} alt={phone.title} className="product-image" />
              
              <Product_actions phone={phone} UpdateWishlist={props.UpdateWishlist}/>


            </div>

            {/* Bottom Part: Info */}
            <div className="product-info">
              <span className="category-label">Smartphone</span>
              <h3 className="product-title">{phone.title}</h3>
              
              <div className="rating">
                <StarIcon className="star-icon" />
                <span>{phone.rating}</span>
              </div>

              <div className="product-price-row">
                <div className="price-container">
                  <span className="current-price">${phone.price}</span>
                  <span className="old-price">${Math.round(phone.price * 1.2)}</span>
                </div>
                <button className="add-cart-btn" onClick={props.UpdateCart}>Add</button>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;