import React from 'react'

function Specifications(props) {
  return (
    <div className="specs-card">
                <h3>Technical Specifications</h3>
                <div className="spec-grid">
                    <div className="spec-item">
                        <span>Brand: </span>
                        <strong>{props.product.brand || 'Generic'}</strong>
                    </div>
                    <div className="spec-item">
                        <span>Weight: </span>
                        <strong>{props.product.weight}kg</strong>
                    </div>
                    <div className="spec-item">
                        <span>Dimensions: </span>
                        <strong>
                            {props.product.dimensions.width}x{props.product.dimensions.height}cm
                        </strong>
                    </div>
                </div>
    </div>
  )
}

export default Specifications
