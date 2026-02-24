import { useEffect, useState } from 'react'
import './App.css'
import BottomHeader from './components/header/bottomHeader.jsx'
import TopHeader from './components/header/topHeader.jsx'
import Home from './pages/Home.jsx'
import {  Outlet } from 'react-router-dom'

function App() {
  // const [CartItems,setCartItems]=useState([])
  // 1. Initial State from Storage
  const [CartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("myCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [WishlistItems,setWishlistItems]= useState([])

  useEffect(()=>{
    localStorage.setItem("myCart", JSON.stringify(CartItems))
  },[CartItems])
  
  function UpdateCart(item){

    setCartItems((prev)=>{
      const isExist = prev.some((i)=>i.id==item.id)
      if(isExist){
        console.log("delete it")
        return prev.filter((i)=>i.id!=item.id)
      }
      else {
        console.log("added")
        console.log([...prev,{...item,quantity: 1}])
        return [...prev,{...item,quantity: 1}]
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

  function IncreaseCartWithCount(item){
    setCartItems((prev)=>{
      const isExist = prev.find((i)=>i.id===item.id);
      if(isExist)
      {
        return prev.map((i)=>( i.id===item.id ? {...i,quantity:i.quantity+1}:i)
         
        )
      }
      else {
      return [...prev, { ...item, quantity: 1 }];
    }
    })
  }
  
  const totalQuantity = CartItems.reduce((acc, item) => {
    return acc + item.quantity;
}, 0);
  
   function DecreaseCartWithCount(item) {
  setCartItems((prev) => {
    const isExist = prev.find((i) => i.id === item.id);

    if (!isExist) return prev; //if item not found, do nothing

    if (isExist.quantity > 1) {
      // Subtract 1 if more than one exists
      return prev.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
      );
    } else {
      // Remove item completely if current quantity is 1
      return prev.filter((i) => i.id !== item.id);
    }
  });
}
  return (
    <>
    <TopHeader cart={totalQuantity} Wishlist={WishlistItems.length} />
    <BottomHeader />
    <Outlet context={{ UpdateCart, UpdateWishlist ,IncreaseCartWithCount,DecreaseCartWithCount,totalQuantity,CartItems}} />  
    </> 
  )
}
export default App
