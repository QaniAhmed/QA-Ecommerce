import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Product_actions(props) {
        const [Clicked,setClicked]= useState(false);
    
     function handleWishlist(phone){
    console.log(phone)
    setClicked(true)
  }
  return (
    <div className="product-actions" >
                    <button className="icon-btn" onClick={()=>handleWishlist(props.phone)} style={{background:Clicked?"#ff3e6c":"",color: Clicked ? "white" : ""}} ><FavoriteBorderIcon fontSize="small" style={{background:Clicked?"#ff3e6c":"",color: Clicked ? "white" : ""}}/></button>
                    <button className="icon-btn"><ShoppingCartIcon fontSize="small" /></button>
                  </div>
  )
}

export default Product_actions
