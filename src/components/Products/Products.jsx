import './Products.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import Product_actions from './Product-actions.jsx';


const Products = (props) => {
  return (
    <section className="products-section">
      <div className="section-header">
        <h2>{props.categoryName}</h2>
        <div className="header-line"></div>
      </div>

      <div className="products-grid">
        {props.Products?.map((product) => (
          <div className="product-card" key={product.id}>
            <div className="product-image-container">
              {product.discountPercentage > 10 && (
                <span className="discount-badge">-{Math.round(product.discountPercentage)}%</span>
              )}
              <img src={product.thumbnail} alt={product.title} className="product-image" />
              
              <Product_actions phone={product} UpdateWishlist={props.UpdateWishlist} UpdateCart={props.UpdateCart}/>


            </div>

            {/* Bottom Part: Info */}
            <div className="product-info">
              <span className="category-label">Smartphone</span>
              <h3 className="product-title">{product.title}</h3>
              
              <div className="rating">
                <StarIcon className="star-icon" />
                <span>{product.rating}</span>
              </div>

              <div className="product-price-row">
                <div className="price-container">
                  <span className="current-price">${product.price}</span>
                  <span className="old-price">${Math.round(product.price * 1.2)}</span>
                </div>
                <button className="add-cart-btn" onClick={()=>props.UpdateCart(product)}>Add</button>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;