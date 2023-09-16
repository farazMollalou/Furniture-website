import ProductCard from '../ProductCard/ProductCard'
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
                <ProductCard rate={4}/>
                <ProductCard rate={3}/>
                <ProductCard rate={4}/>
                <ProductCard rate={5}/>
                <ProductCard rate={4}/>
                <ProductCard rate={2}/>
                <ProductCard rate={1}/>
            </div>
        </section>
    )
}

export default TrensSection