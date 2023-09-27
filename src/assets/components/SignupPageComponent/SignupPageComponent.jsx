import { Link } from 'react-router-dom';
import './SignupPageComponent.css';

function SignupPageComponent() {
    const squaresArray = Array.from(Array(260).keys())

    return (
        <>
            <section className="signup-page-container">

                {
                    squaresArray.map((sq, i) => (
                        <span key={i} className="bg-square"></span>
                    ))
                }
                <div className="sign-up">

                    <img src="./../../../../public/general_images/logo.png" alt="" />
                    <div className="content">

                        <h2 className="form-title">signup</h2>

                        <div className="form">

                            <div className="inputBox">

                                <input type="email" required /> <i>Email</i>

                            </div>

                            <div className="inputBox">

                                <input type="password" required /> <i>Password</i>

                            </div>

                            <div className="inputBox">

                                <input type="password" required /> <i>Phone</i>

                            </div>

                            <div className="links"><Link to={"/login"} className='login-link'>Login</Link>

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

export default SignupPageComponent