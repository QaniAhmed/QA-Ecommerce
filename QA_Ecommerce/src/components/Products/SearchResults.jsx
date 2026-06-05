import { Link, useOutletContext } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './SearchResults.css';

const SearchResults = () => {
    const location = useLocation();
  const { UpdateWishlist, WishlistItems = [] } = useOutletContext();
    const products = location.state?.products || [];
  return (
    <div className="search-results-container">
      <div className="results-header">
        <h2 className="results-count">Found ({products.length}) items matching your search</h2>
      </div>

      {products.length === 0 ? (
        <div className="no-results">
          <p>We couldn't find anything matching your request.</p>
          <Link to="/" className="back-home-btn">Continue Shopping</Link>
        </div>
      ) : (
        <div className="products-grid">
          {products.map((product) => {
            const isFavorite = WishlistItems.some((i) => i.id === product.id);
            
            const originalPrice = product.price / (1 - product.discountPercentage / 100);

            return (
              <div key={product.id} className="product-search-card">
                
                <button 
                  className={`favorite-toggle-btn ${isFavorite ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault(); 
                    UpdateWishlist(product);
                  }}
                  title={isFavorite ? "Remove from wishlist" : "Add to wishlist"}
                >
                  <svg viewBox="0 0 24 24" fill={isFavorite ? "currentColor" : "none"} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>

                <Link to={`/product/${product.id}`} className="product-card-link">
                  
                  <div className="product-img-holder">
                    <img src={product.thumbnail} alt={product.title} loading="lazy" />
                    {product.discountPercentage > 0 && (
                      <span className="discount-tag">-{Math.round(product.discountPercentage)}%</span>
                    )}
                  </div>

                  <div className="product-card-body">
                    <span className="product-brand">{product.brand || 'Generic'}</span>
                    <h3 className="product-title-text">{product.title}</h3>
                    
                    <div className="product-meta-row">
                      <div className="product-rating-badge">
                        <span className="star-icon">★</span>
                        <span>{product.rating.toFixed(1)}</span>
                      </div>
                      {product.stock <= 10 && (
                        <span className="low-stock-alert">Only {product.stock} left</span>
                      )}
                    </div>

                    <div className="product-price-block">
                      <span className="current-price">${product.price.toFixed(2)}</span>
                      {product.discountPercentage > 0 && (
                        <span className="slashed-price">${originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>

                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchResults;