import React, { useEffect, useState } from 'react';
import TopHeader from '../components/header/topHeader.jsx';
import BottomHeader from '../components/header/bottomHeader.jsx';
import './ProductDetails.css';
import { useParams } from 'react-router-dom';

//Product Detils page compnonet 
import Specifications from '../components/Product_details/Specifications.jsx';
import Reviews from '../components/Product_details/Reviews.jsx';
import Image_Gallery from '../components/Product_details/Image-Gallery.jsx';
import Purchage_Action from '../components/Product_details/Purchage_Action.jsx';
import ProductInfo from '../components/Product_details/ProductInfo.jsx';
import TrustSection from '../components/Product_details/TrustSection.jsx';

const ProductDetails = () => {

    const { id } = useParams();
    const [product, setProduct] = useState(null);


    useEffect(() => {
        const GetProductInfo = async function() {
            try 
            {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const result = await response.json();
                setProduct(result);
            } catch (e) {
                console.log("issue in fetching the data" + e);
            }
        };
        GetProductInfo();
    }, [id]); 

    if (!product) return <div className="loader-container"><div className="loader"></div></div>;

    return (
        <div className="product-page">
            <div className="product-wrapper">
                <div className="main-section">
                    <Image_Gallery product={product}/>

                    <div className="details-panel">
                        <ProductInfo product={product}/>
                        <Purchage_Action product={product}/>
                        <TrustSection product={product}/>
                    </div>
                    
                </div>

                <section className="more-info">
                    <Specifications product={product}/>
                    <Reviews product={product}/>
                </section>
            </div>
</div>
    );
};

export default ProductDetails;