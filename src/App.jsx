import './App.css'
import BottomHeader from './components/header/bottomHeader.jsx'
import TopHeader from './components/header/topHeader.jsx'
import {  Outlet } from 'react-router-dom'
import { useCart } from './hooks/useCart.js'

function App() {
  const{ 
    CartItems, 
    WishlistItems, 
    UpdateCart, 
    UpdateWishlist, 
    IncreaseCartWithCount, 
    DecreaseCartWithCount, 
    totalQuantity
  } = useCart();


  
  return (
    <>
    <TopHeader cart={totalQuantity} Wishlist={WishlistItems.length} />  
    <BottomHeader />
    <Outlet context={{ 
        CartItems, 
        UpdateCart, 
        UpdateWishlist, 
        IncreaseCartWithCount, 
        DecreaseCartWithCount, 
        totalQuantity 
      }} />  
    </> 
  )
}
export default App
