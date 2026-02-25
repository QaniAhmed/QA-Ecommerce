import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Product_actions(props) {
    const [ClickedWishlist,setClickedWishlist]= useState(false);
    const [ClickedCart,setClickedCart]=useState(false);

    function handleWishlist(e,item)
    {
      e.preventDefault();  // Stops the Link from navigating
        e.stopPropagation(); // Stops the click from bubbling up to the Link
          props.UpdateWishlist(item); 
          setClickedWishlist(!ClickedWishlist)
    }
    
    function handleCart(e,item)
    {
      e.preventDefault();  // Stops the Link from navigating
        e.stopPropagation(); // Stops the click from bubbling up to the Link
      props.UpdateCart(item)
      setClickedCart(!ClickedCart)

    }


  return (
            <div className="product-actions" >
                <button className="icon-btn" onClick={(e)=>handleWishlist(e,props.phone)} 
                         >
                        <FavoriteBorderIcon fontSize="small" />
                </button>
                <button className="icon-btn" onClick={(e)=>handleCart(e,props.phone)}><ShoppingCartIcon fontSize="small" style={{background:ClickedCart?"#285503":"",color: ClickedCart ? "white" : ""}}/></button>
            </div>
  )
}

export default Product_actions
