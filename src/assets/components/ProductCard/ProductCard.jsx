import './ProductCard.scss'
import { LuStar } from 'react-icons/lu'
import { FiEye } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import { BsCartPlus } from 'react-icons/bs'
import imgSource from "../../../../public/general_images/trends/1.png"

// eslint-disable-next-line react/prop-types
function ProductCard({ rate }) {
  let coloredStars = Array.from(Array(rate).keys())
  let greyStars = Array.from(Array(5 - rate).keys())

  return (
    <div className="product-card">
      <div className="img-wrapper">
        <img src={imgSource} alt="img" />
        <div className="icon-wrapper"><AiOutlineHeart className='action-icon heart-icon' /></div>
        <div className="icon-wrapper"><FiEye className='action-icon eye-icon' /></div>
        <div className="icon-wrapper"><BsCartPlus className='action-icon cart-icon' /></div>
      </div>
      <div className="detail-box">
        <span className="categoryName">
          CHAIR
        </span>
        <b className="product-name">Minimal LCD chair</b>
      </div>
      <div className="end-row">
        <div className="price-part">
          <span className='current-price'>$150</span>
          <span className="old-price">$180</span>
        </div>
        <div className="rate-box">
          {
            coloredStars.map((star, i) => (
              <LuStar key={i} className='colored-star' />
            ))
          }
          {
            greyStars.map((star, i) => (
              <LuStar key={i} className='grey-star' />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default ProductCard