
import { Link, useOutletContext } from 'react-router-dom';
import './Accessories.css';
import { useEffect, useState } from 'react';

const Accessories = () => {
  const { UpdateWishlist, WishlistItems = [], IncreaseCartWithCount } = useOutletContext();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('mens-watches');

  const categories = [
    { id: 'sports-accessories', label: "sports-accessories" },
    { id: 'womens-watches', label: "Women's Watches" },
    { id: 'sunglasses', label: 'Sunglasses' },
    { id: 'motorcycle', label: 'motorcycle' }
  ];

  useEffect(() => {
    let isMounted = true;
    setLoading(true); 
    
    fetch(`https://dummyjson.com/products/category/${activeCategory}`)
      .then(res => res.json())
      .then(data => {
        if (isMounted) {
          setProducts(data.products || []);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error("Error fetching accessories:", err);
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [activeCategory]);

  if (loading) {
    return <div className="loader-container"><div className="loader"></div></div>;
  }

  return (
    <div className="accessories-container">
      <div className="accessories-header">
        <h1>Elevate Your Style</h1>
        <p>Discover the perfect finishing touches to your daily look.</p>
      </div>

      <div className="category-tabs">
        {categories.map(cat => (
          <button
            key={cat.id}
            className={`tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {products.length === 0 ? (
        <div className="no-results"><p>No items found in this category.</p></div>
      ) : (
        <div className="products-grid">
          {products.map(product => {
            const isFavorite = WishlistItems.some(i => i.id === product.id);
            const originalPrice = product.price / (1 - product.discountPercentage / 100);

            return (
              <div key={product.id} className="product-search-card">
                <button 
                  className={`favorite-toggle-btn ${isFavorite ? 'active' : ''}`}
                  onClick={() => UpdateWishlist(product)}
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
                    <span className="product-brand">{product.brand || 'Premium'}</span>
                    <h3 className="product-title-text">{product.title}</h3>
                    
                    <div className="product-price-block">
                      <span className="current-price">${product.price.toFixed(2)}</span>
                      {product.discountPercentage > 0 && (
                        <span className="slashed-price">${originalPrice.toFixed(2)}</span>
                      )}
                    </div>
                  </div>
                </Link>

                <div className="quick-add-container">
                  <button className="quick-add-btn" onClick={() => IncreaseCartWithCount(product)}>
                    Add to Bag
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Accessories;