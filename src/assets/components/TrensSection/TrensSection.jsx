import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import trendsList from "./TrendProducts.json"
import './TrensSection.scss'

function TrensSection() {
    const [focusItem, setFocusItem] = useState("Top Products")

    const filterItems = ["Top Products", "New Arrivals", "Best Sellers"]

    return (
        <section className='trends-section'>
            <h3 className='trends-title'>TRENDING</h3>
            <div className="trend-items-row">
                {
                    filterItems.map((item, i) => (
                        <span
                            key={i}
                            className={`trend-item ${(focusItem == filterItems[i]) && "focus"}`}
                            onClick={() => setFocusItem(item)}
                        >
                            {item}
                        </span>
                    ))
                }
            </div>
            <div className="trend-items-wrapper">
                {
                    trendsList.trends.map(product => (
                        <ProductCard
                            key={product.id}
                            title={product.title}
                            category={product.category}
                            rate={product.rate}
                            img={product.imgFileName}
                            old_price={product.old_price}
                            current_price={product.current_price}
                            status={product.status}
                        />
                    ))
                }
            </div>
        </section>
    )
}

export default TrensSection