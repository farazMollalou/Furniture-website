import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai"
import { BiDollar } from 'react-icons/bi'
import ComponentStyle from "./ProductPageComponent.module.scss"

function ProductPageComponent() {

    const rate = 4  // this line is for test!

    let coloredStars = Array.from(Array(rate).keys())
    let greyStars = Array.from(Array(5 - rate).keys())

    return (
        <section className={ComponentStyle.ProductDetailSection}>
            <div className={ComponentStyle.imgContainer}>
                <span className={ComponentStyle.discountBadge}>40%</span>
                <img src="./../../../public/general_images/trends/3.png" alt="image" />
            </div>
            <div className={ComponentStyle.productDetailContainer}>
                <h4 className={ComponentStyle.productCategory}>Chair</h4>
                <h3 className={ComponentStyle.ProductTitle}>Minimal iconic chair</h3>
                <div className={ComponentStyle.detailRow}>
                    <span className={ComponentStyle.price}><BiDollar />74</span>
                    <div className={ComponentStyle.starsBox}>
                        {
                            coloredStars.map((star, i) => (
                                <AiTwotoneStar key={i} className={ComponentStyle.coloredStar} />
                            ))
                        }
                        {
                            greyStars.map((star, i) => (
                                <AiOutlineStar key={i} className={ComponentStyle.greyStar} />
                            ))
                        }
                    </div>
                    <span className={ComponentStyle.review}>29 reviews</span>
                </div>
                <div className={ComponentStyle.description}>
                    Your choice of seating can make a difference. For any programmer, it’s essential to find something that is both comfortable and ergonomically supportive.
                </div>
                <div className={ComponentStyle.btnBox}>
                    <button className={ComponentStyle.addBtn}>Add to Cart</button>
                </div>
            </div>
        </section>
    )
}

export default ProductPageComponent