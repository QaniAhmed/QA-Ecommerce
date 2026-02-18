import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Product_actions(props) {
    const [ClickedWishlist,setClickedWishlist]= useState(false);
    const [ClickedCart,setClickedCart]=useState(false);

    function handleWishlist(phone)
    {
          props.UpdateWishlist(phone); 
          setClickedWishlist(!ClickedWishlist)
    }
    
    function handleCart(phone)
    {
      props.UpdateCart(phone)
      setClickedCart(!ClickedCart)

    }


  return (
            <div className="product-actions" >
                <button className="icon-btn" onClick={()=>handleWishlist(props.phone)} 
                        style={{background:ClickedWishlist?"#ff3e6c":"",color: ClickedWishlist ? "white" : ""}} >
                        <FavoriteBorderIcon fontSize="small" style={{background:ClickedWishlist?"#ff3e6c":"",color: ClickedWishlist ? "white" : ""}}/>
                </button>
                <button className="icon-btn" onClick={()=>handleCart(props.phone)} style={{background:ClickedCart?"#285503":"",color: ClickedCart ? "white" : ""}}><ShoppingCartIcon fontSize="small" style={{background:ClickedCart?"#285503":"",color: ClickedCart ? "white" : ""}}/></button>
            </div>
  )
}

export default Product_actions
