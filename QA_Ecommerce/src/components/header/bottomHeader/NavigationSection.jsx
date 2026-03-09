import React from 'react'

function NavigationSection() {
  return (
    <div>
       <ul className="nav-links">
          <li><a href="/" className="active">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/accessories">Accessories</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default NavigationSection
