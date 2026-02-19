import { useState } from 'react'
import './App.css'
import BottomHeader from './components/header/bottomHeader.jsx'
import TopHeader from './components/header/topHeader.jsx'
import Home from './pages/Home.jsx'




  

function App() {
  const [CartItems,setCartItems]=useState([])
  const [WishlistItems,setWishlistItems]= useState([])

  function UpdateCart(item){
    setCartItems((prev)=>{
      const isExist = prev.some((i)=>i.id==item.id)
      if(isExist){
        console.log("delete it")
        return prev.filter((i)=>i.id!=item.id)
      }
      else {
        console.log("added")
        return [...prev,item]
      }
    })
  }
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
    <TopHeader cart={CartItems.length} Wishlist={WishlistItems.length} />
    <BottomHeader />
    <Home UpdateCart= {UpdateCart} UpdateWishlist={UpdateWishlist}/>
    </> 
  )
}

export default App
