import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';


function Purchage_Action(props) {
        const {UpdateCart, UpdateWishlist,IncreaseCartWithCount,DecreaseCartWithCount} = useOutletContext()
        const [Count,setCount] =useState(0)
        
        function handleIncrease(product){
            setCount(Count+1)
            IncreaseCartWithCount(product)

        }
        function handleDecrease(){
            setCount(Count-1)
            // DecreaseCartWithCount(product)
            
        }
    
return (
    <div className="purchase-actions">
                    <div className="qty-selector">
                        <button onClick={()=>handleDecrease(props.product)}>-</button>
                        <span>{Count}</span>
                        <button onClick={()=>handleIncrease(props.product)}>+</button>
                    </div>
                    <button className="btn-primary" onClick={()=>UpdateCart(props.product)}>Add to Shopping Bag</button>
                    <button className="btn-wishlist" onClick={()=>UpdateWishlist(props.product)}><FavoriteIcon className='HeartIcon'/></button>
                </div>
)
}

export default Purchage_Action
