import React from 'react';
import './Cart.css';
import { useOutletContext } from 'react-router-dom';

const Cart = () => {
  // You will bring your CartItems from context here
  const { CartItems, IncreaseCartWithCount, DecreaseCartWithCount, RemoveFromCart } = useOutletContext();

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Your Shopping Bag</h1>
      
      <div className="cart-content">
        {/* --- Left Side: Items List --- */}
        <div className="cart-items-section">
          {/* Replace this block with your CartItems.map() */}
          { console.log(CartItems)}{ CartItems.map((i)=>{
             return <div className="cart-item-card">
            <div className="item-details">
              <img src="/assets/img/product-sample.png" alt="product" className="item-image" />
              <div className="item-info">
                <h3>{i.title}</h3>
                <p className="item-price">{i.price}</p>
                <button className="remove-btn">Remove</button>
              </div>
            </div>
            
            <div className="item-actions">
              <div className="quantity-controls">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <p className="item-total-price">{i.price}</p>
            </div>
          </div>


          })}
         
          {/* End of map */}
        </div>

        {/* --- Right Side: Summary --- */}
        <div className="cart-summary-section">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>$198.00</span>
          </div>
          <div className="summary-row">
            <span>Estimated Shipping</span>
            <span>$10.00</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>$208.00</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;