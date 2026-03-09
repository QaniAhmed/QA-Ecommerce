import React from 'react'

function Reviews(props) {
  return (
    <div className="reviews-card">
                <h3 className='Reviews-title'>Customer Reviews</h3>
                <div className="reviews-list">
                    {props.product.reviews.map((rev, i) => (
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
  )
}

export default Reviews
