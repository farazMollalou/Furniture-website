import { Link } from "react-router-dom"
import "./TopStrip.scss"

function TopStrip() {
  return (
    <>
      <div className="top-strip">
        <div className="left-text">Welcome to our online shop!</div>
        <div className="brand-box">
          <img src="../../../../public/general_images/logo.png" alt="logo" />
          <strong className='brand-name'>Soft Land</strong>
        </div>
        <div className="account-box">
          <Link className="login-btn" to={"/login"}>Login</Link> | <span className="sign-up">sign up</span>
        </div>
      </div>
    </>
  )
}

export default TopStrip