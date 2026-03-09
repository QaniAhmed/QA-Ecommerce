import React from 'react'

function ProductInfo(props) {
  return (
    <div>
         <nav className="breadcrumb">Products / {props.product.category}</nav>
                <h1 className="title">{props.product.title}</h1>
                <div className="meta-info">
                    <span className="rating-pill">★ {props.product.rating}</span>
                    {/* <span className="stock-status">In Stock ({props.categoryproduct.availabilityStatus})</span> */}
                </div>

                <div className="pricing-box">
                    <div className="price-row">
                        <span className="final-price">${props.product.price}</span>
                        {/* Logic: Calculating original price before discount for visual "deal" effect */}
                        <span className="old-price">
                            ${(props.product.price / (1 - props.product.discountPercentage/100)).toFixed(2)}
                        </span>
                    </div>
                    <span className="save-tag">Save {props.product.discountPercentage}% today</span>
                </div>

                <p className="description-text">{props.product.description}</p>
      
    </div>
  )
}

export default ProductInfo
