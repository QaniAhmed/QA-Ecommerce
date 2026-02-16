import { useState } from 'react'
import './App.css'
import BottomHeader from './components/header/bottomHeader.jsx'
import TopHeader from './components/header/topHeader.jsx'
import Home from './pages/Home.jsx'



function App() {
  const [Cart,setCart] = useState(0)
  const [Wishlist,setWishlist] = useState(0)
  const [WishlistItems,setWishlistItems]= useState([])
  function UpdateCart(){
    setCart(Cart+1)
  }
  const count = WishlistItems.length

  function UpdateWishlist(item)
  {
        setWishlistItems((prev) => {
        const isExist = prev.some((i) => i.id === item.id);

        if (isExist) 
          {
          console.log("delete")
          return prev.filter((i) => i.id !== item.id);
        } 
        else 
          {
          console.log("added ")
          return [...prev, item];
          }
      });
  }

  return (
    <>
    <TopHeader cart={Cart} Wishlist={count}/>
    <BottomHeader />
    <Home UpdateCart= {UpdateCart} UpdateWishlist={UpdateWishlist}/>
    </> 
  )
}

export default App
