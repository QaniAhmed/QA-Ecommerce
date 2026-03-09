import React from 'react'

function TrustSection(props) {
  return (
      <div className="trust-badges">
                            <div className="badge">🚚 Free Shipping</div>
                            <div className="badge">🛡️ {props.product.warrantyInformation}</div>
                            <div className="badge">🔄 {props.product.returnPolicy}</div>
                        </div>
  )
}

export default TrustSection
