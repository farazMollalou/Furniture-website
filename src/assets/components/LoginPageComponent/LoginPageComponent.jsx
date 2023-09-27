import "./LoginPageSection.css"

function LoginPageComponent() {

    const squaresArray = Array.from(Array(260).keys())

    return (
        <>
            <section className="login-signup-page-container">

                {
                    squaresArray.map((sq, i) => (
                        <span key={i} className="bg-square"></span>
                    ))
                }

                <div className="login">

                    <img src="./../../../../public/general_images/logo.png" alt="" />
                    <div className="content">

                        <h2>Login</h2>

                        <div className="form">

                            <div className="inputBox">

                                <input type="email" required /> <i>Email</i>

                            </div>

                            <div className="inputBox">

                                <input type="password" required /> <i>Password</i>

                            </div>

                            <div className="links"> <a href="#">Forgot Password</a> <a href="#">Signup</a>

                            </div>

                            <div className="inputBox">

                                <input type="submit" value="Login" />

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}

export default LoginPageComponent