import { useOutletContext } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite';


function Purchage_Action(props) {
        const {UpdateCart, UpdateWishlist,IncreaseCartWithCount,DecreaseCartWithCount,totalQuantity} = useOutletContext()
        
        function handleIncrease(product) 
        {
            IncreaseCartWithCount(product);
        }       

        function handleDecrease(product)
        {
                DecreaseCartWithCount(product)
            

        }
    
return (
    <div className="purchase-actions">
                    <div className="qty-selector">
                        <button onClick={()=>handleDecrease(props.product)}>-</button>
                        <span>{totalQuantity}</span>
                        <button onClick={()=>handleIncrease(props.product)}>+</button>
                    </div>
                    <button className="btn-primary" onClick={()=>UpdateCart(props.product)}>Add to Shopping Bag</button>
                    <button className="btn-wishlist" onClick={()=>UpdateWishlist(props.product)}><FavoriteIcon className='HeartIcon'/></button>
                </div>
)
}

export default Purchage_Action
