import { useState } from 'react'
import './App.css'
import BottomHeader from './components/header/bottomHeader.jsx'
import TopHeader from './components/header/topHeader.jsx'
import Home from './pages/Home.jsx'



function App() {
  const [Cart,setCart] = useState(0)
  const [Wishlist,setWishlist] = useState(0)
  function UpdateCart(){
    setCart(Cart+1)
  }
  function UpdateLike(){
    setCart(Wishlist+1)
  }

  return (
    <>
    <TopHeader cart={Cart} Like={Wishlist}/>
    <BottomHeader />
    <Home UpdateCart= {UpdateCart} />
    </> 
  )
}

export default App
