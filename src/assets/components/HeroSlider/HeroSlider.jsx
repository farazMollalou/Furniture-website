import { useState } from 'react';
import sliderProducts from "./sliderProductsDetail.json"
import './HeroSlider.scss'

function HeroSlider() {

    const [selectedProductID, setSelectedProductID] = useState(0)

    return (
        <div className='slider-section'>
            <div className="slider-box">
                <div className="main-box">
                    <div className="text-box">
                        <p className="top-text">
                            TOP COLLECTIONS 2023
                        </p>
                        <p className='bold-text'>
                            We Serve Your Dream Furniture!
                        </p>
                        <p className="off-text">
                            Get 50% off all products
                        </p>
                        <button className='buy-btn'>SHOP NOW</button>
                    </div>
                    <img
                        src={`./../../../../public/general_images/slider-imgs/${sliderProducts.products[selectedProductID].imgFileName}`}
                        alt="sofa"
                    />
                </div>
                <div className="sidebar">
                    {
                        sliderProducts.products.map(product => (
                            <div className={`item ${(selectedProductID === product.id) && "selected"}`} key={product.id} onClick={() => setSelectedProductID(product.id)}>
                                <img src={`./../../../../public/general_images/slider-imgs/${product.imgFileName}`} alt="sofa" />
                                <span className="price">${product.price}</span>
                                <b className='product-title'>{product.title}</b>
                            </div>
                        ))
                    }
                </div>
                <div className="circles-box">
                    <span className={`circle ${selectedProductID==0 && "focus"}`} onClick={() => setSelectedProductID(0)}></span>
                    <span className={`circle ${selectedProductID==1 && "focus"}`} onClick={() => setSelectedProductID(1)}></span>
                    <span className={`circle ${selectedProductID==2 && "focus"}`} onClick={() => setSelectedProductID(2)}></span>
                </div>
            </div>
        </div>
    )
}

export default HeroSlider