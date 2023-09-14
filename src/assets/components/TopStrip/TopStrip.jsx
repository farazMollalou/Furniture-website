import "./TopStrip.scss"

function TopStrip() {
  return (
    <>
      <div className="top-strip">
        <div className="left-text">Welcome to our online shop!</div>
        <div className="account-box">
          <span className="login-btn">Login</span> | <span className="sign-up">sign up</span>
        </div>
      </div>
    </>
  )
}

export default TopStrip