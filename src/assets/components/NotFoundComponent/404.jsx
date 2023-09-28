import { Link } from "react-router-dom"
import notFoundStyle from "./404.module.css"

function NotFoundComponent() {
    return (
        <>
            <div className={notFoundStyle.errorPagewrapper}>
                <img src="./../../../../public/general_images/404.png" alt="page not found" className={notFoundStyle.errorImg}/>
                <Link to={"/"} className={notFoundStyle.return_btn}>Home Page</Link>
            </div>
        </>
    )
}

export default NotFoundComponent