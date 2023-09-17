import ProductCard from '../ProductCard/ProductCard'
import trendsList from "./TrendProducts.json"
import './TrensSection.scss'

function TrensSection() {
    return (
        <section className='trends-section'>
            <h3 className='trends-title'>TRENDING</h3>
            <div className="trend-items-row">
                <span className='trend-item focus'>Top Products</span>
                <span className='trend-item'>New Arrivals</span>
                <span className='trend-item'>Best Sellers</span>
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