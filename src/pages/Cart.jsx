import './Cart.css';
import { useOutletContext } from 'react-router-dom';

const Cart = () => {
  const { CartItems, IncreaseCartWithCount, DecreaseCartWithCount, RemoveFromCart,RemoveItem } = useOutletContext();
const subtotal = CartItems.reduce((acc, next) => acc + (next.quantity * next.price), 0);
const shipping = 10;
const total = subtotal + shipping;
  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Your Shopping Bag</h1>
      
      <div className="cart-content">
        <div className="cart-items-section">
          { CartItems.map((i)=>{
             return <div className="cart-item-card">
            <div className="item-details">
              <img src={i.images[0]} alt="product" className="item-image" />
              <div className="item-info">
                <h3>{i.title}</h3>
                <p className="item-price">{i.price}</p>
                <button className="remove-btn" onClick={()=>RemoveItem(i)}>Remove</button>
              </div>
            </div>
            
            <div className="item-actions">
              <div className="quantity-controls">
                <button onClick={()=>DecreaseCartWithCount(i)}>-</button>
                <span>{i.quantity}</span>
                <button onClick={()=>IncreaseCartWithCount(i)}>+</button>
              </div>
              <p className="item-total-price">{i.price}</p>
            </div>
          </div>
          })}
         
        </div>

        <div className="cart-summary-section">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Estimated Shipping</span>
            <span>$10.00</span>
          </div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;