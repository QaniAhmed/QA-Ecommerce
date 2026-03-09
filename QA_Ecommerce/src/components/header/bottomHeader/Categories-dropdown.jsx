import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuIcon from '@mui/icons-material/Menu';

function Categories_dropdown() {
      const categories = ['smartphones','laptops','tablets','sunglasses','mens-watches'];
  return (

      <div className="categories-dropdown">
          <MenuIcon className="menu-icon" />
          <span className="dropdown-text">Browse Categories</span>
          <KeyboardArrowDownIcon className="arrow-icon" />
          
          <ul className="category-menu">
            {categories.map((category)=>( <li key={category} >{category}</li>))}
          </ul>
        </div>
  )
}

export default Categories_dropdown
