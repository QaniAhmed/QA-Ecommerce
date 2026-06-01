import { useState } from 'react';
import './Wishlist.css';
import { useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Wishlist = () => {
 const { WishlistItems, UpdateWishlist, IncreaseCartWithCount,DecreaseCartWithCount } = useOutletContext();
 const [isAdded,setisAdded]= useState(false)
 console.log(WishlistItems)
  
function deleteItem(item){
    console.log(item)
    UpdateWishlist(item)
}

function AddToCart(item) {
    if (!isAdded) {
        IncreaseCartWithCount(item);
    } else {
        DecreaseCartWithCount(item);
    }
    setisAdded(prev => !prev);
    console.log(isAdded ? "Removed" : "Added"); 
}

  return (
    <div className="wishlist-page-container">
      <div className="wishlist-header">
        <h1 className="wishlist-title">My Wishlist</h1>
        <p className="wishlist-count">({WishlistItems.length} items saved)</p>
      </div>

      {WishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <p>Your wishlist is feeling a bit lonely.</p>
          <Link to={'/'}>
          <button className="explore-btn">Explore Shop</button>
          </Link>
        </div>
      ) : (
        <div className="wishlist-grid">
          {WishlistItems.map((item) => {
            return (
                     <div key={item.id} className="wishlist-item-card">
                 <Link to={`/product/${item.id}`} className='LinkDecoratoin'>

                <button className="delete-icon-btn" title="Remove from wishlist" onClick={()=>deleteItem(item)}>
                  &times;
                </button>

                <div className="wishlist-img-wrapper">
                  <img src={item.images[0]} alt={item.title} className="wishlist-item-image" />
                </div>
                 </Link>
               
                <div className="wishlist-item-info">
                  <h3 className="wishlist-item-title">{item.title}</h3>
                  <p className="wishlist-item-price">${item.price.toFixed(2)}</p>
                  
                  <div className="wishlist-card-actions">
                    <button className="add-to-cart-btn" onClick={()=>AddToCart(item)}>
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Wishlist;