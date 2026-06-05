import React, { useState } from 'react'


function Image_Gallery(props) {
     const [selectedImg, setSelectedImg] = useState(0); 

    function handleClick(index){
    setSelectedImg(index)
}
  return (
    <div>
        <div className="gallery-container">
                <div className="main-display">
                    <img src={props.product.images[selectedImg]} alt={props.product.title} />
                </div>
                <div className="thumbnail-strip">
                    {props.product.images.map((img, index) => (
                        <div key={index}  className="thumb-box" onClick={()=>handleClick(index)}>
                            <img src={img} alt="thumbnail"  />
                        </div>
                    ))}
                </div>
            </div>
    </div>
  )
}

export default Image_Gallery
