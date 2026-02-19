import React, { useEffect, useState } from 'react';
import TopHeader from '../components/header/topHeader.jsx';
import BottomHeader from '../components/header/bottomHeader.jsx';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';


const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedImg, setSelectedImg] = useState(0); 

    function handleClick(index){
    setSelectedImg(index)
}

    useEffect(() => {
        const GetProductInfo = async function() {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const result = await response.json();
                setProduct(result);
            } catch (e) {
                console.log("issue in fetching the data" + e);
            }
        };
        GetProductInfo();
    }, [id]); 

    if (!product) return <div className="loader-container"><div className="loader"></div></div>;

    return (
        <>
        
        <TopHeader/>
        <BottomHeader/>
<div className="product-page">
    <div className="product-wrapper">
        {/* Top Section: Media and Primary Product Information */}
        <div className="main-section">
            
            {/* 1. Image Gallery: Container for main view and thumbnails */}
            <div className="gallery-container">
                <div className="main-display">
                    {/* Logic: Displays the product image. You can link this to your custom state logic */}
                    <img src={product.images[selectedImg]} alt={product.title} />
                </div>
                <div className="thumbnail-strip">
                    {product.images.map((img, index) => (
                        <div key={index}  className="thumb-box" onClick={()=>handleClick(index)}>
                            <img src={img} alt="thumbnail"  />
                        </div>
                    ))}
                </div>
            </div>

            {/* 2. Purchase Details: Pricing, description, and CTA buttons */}
            <div className="details-panel">
                <nav className="breadcrumb">Products / {product.category}</nav>
                <h1 className="title">{product.title}</h1>
                <div className="meta-info">
                    <span className="rating-pill">★ {product.rating}</span>
                    <span className="stock-status">In Stock ({product.availabilityStatus})</span>
                </div>

                <div className="pricing-box">
                    <div className="price-row">
                        <span className="final-price">${product.price}</span>
                        {/* Logic: Calculating original price before discount for visual "deal" effect */}
                        <span className="old-price">
                            ${(product.price / (1 - product.discountPercentage/100)).toFixed(2)}
                        </span>
                    </div>
                    <span className="save-tag">Save {product.discountPercentage}% today</span>
                </div>

                <p className="description-text">{product.description}</p>

                <div className="purchase-actions">
                    <div className="qty-selector">
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                    <button className="btn-primary">Add to Shopping Bag</button>
                    <button className="btn-wishlist"><FavoriteIcon/></button>
                </div>

                <div className="trust-badges">
                    <div className="badge">🚚 Free Shipping</div>
                    <div className="badge">🛡️ {product.warrantyInformation}</div>
                    <div className="badge">🔄 {product.returnPolicy}</div>
                </div>
            </div>
        </div>

        {/* Bottom Section: Technical Specifications and User Reviews */}
        <section className="more-info">
            <div className="specs-card">
                <h3>Technical Specifications</h3>
                <div className="spec-grid">
                    <div className="spec-item">
                        <span>Brand</span>
                        <strong>{product.brand || 'Generic'}</strong>
                    </div>
                    <div className="spec-item">
                        <span>Weight</span>
                        <strong>{product.weight}kg</strong>
                    </div>
                    <div className="spec-item">
                        <span>Dimensions</span>
                        <strong>
                            {product.dimensions.width}x{product.dimensions.height}cm
                        </strong>
                    </div>
                </div>
            </div>

            <div className="reviews-card">
                <h3 className='Reviews-title'>Customer Reviews</h3>
                <div className="reviews-list">
                    {product.reviews.map((rev, i) => (
                        <div key={i} className="review-item">
                            <div className="rev-user">
                                <strong>{rev.reviewerName}</strong>
                                {/* Logic: Formatting ISO date into local readable format */}
                                <span>{new Date(rev.date).toLocaleDateString()}</span>
                            </div>
                            {/* Logic: Generating star rating based on numerical value */}
                            <div className="stars">{"★".repeat(rev.rating)}</div>
                            <p>{rev.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
</div>
        </>
    );
};


export default ProductDetails;