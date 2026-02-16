import React from 'react'
import Swipper from '../components/Home/Swipper.jsx'
import Products from '../components/Products/Products.jsx'
function Home(props) {
  return (
    <div>
      <Swipper/>
      <Products UpdateCart={props.UpdateCart}/>
    </div>
  )
}

export default Home
