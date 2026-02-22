import React, { useEffect, useState } from 'react'
import Swipper from '../components/Home/Swipper.jsx'
import Products from '../components/Products/Products.jsx'
import { useOutletContext } from 'react-router-dom';
function Home() {
      const [ProductsOfCategory,setProductsOfCategory]= useState([]);
      const Categories = ['smartphones','laptops','tablets','sunglasses','mens-watches']
      useEffect(()=>{
        async function GetAllProducts() {
          //list of Promices
          const requests = Categories.map(async (item)=>{
            const response = await fetch(`https://dummyjson.com/products/category/${item}`);
            const result = await response.json()
            return {'Category':item , 'Products':result.products}
          })
          try{
            const reusult = await Promise.all(requests);
            setProductsOfCategory(reusult)
          } 
          catch(e){
            console.log("error in fetching data"+e)
          }
        }
        GetAllProducts()
      },[])

    const {UpdateCart, UpdateWishlist} = useOutletContext()
      // console.log(UpdateCart)
      // console.log(UpdateWishlist)

      function InsertProducts()
      {
        // console.log(ProductsOfCategory)
        return Categories.map((item)=>{
          const Section= ProductsOfCategory.find((FetchedItem)=>FetchedItem.Category===item)
          return (<Products 
                    key={item}
                    categoryName={item} 
                    UpdateCart={UpdateCart} 
                    UpdateWishlist={UpdateWishlist} 
                    Products={Section?Section.Products:[]} 
                                                        />)
        })
      }

  return (
    <div>
      <Swipper/>
      
        {InsertProducts()}
    </div>
  )
}

export default Home
