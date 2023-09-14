import "./Navbar.scss"
import { BsFilterLeft } from 'react-icons/bs'

function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="collecton-containter">
                <div className="collection-btn">
                    <BsFilterLeft /> <span>ALL COLLECTIONS</span>
                </div>
                <div className="collection-list">
                    <div className="item">All</div>
                    <div className="item">New Arrivals</div>
                    <div className="item">Hot Sale</div>
                    <div className="item">Furniture</div>
                    <div className="item">Amrature</div>
                    <div className="item">Tabble</div>
                    <div className="item">Chair</div>
                    <div className="item">Sofa</div>
                    <div className="item">Mirrors</div>
                    <div className="item">Stools</div>
                    <div className="item">Benches</div>
                </div>
            </div>
            <div className="links-box">
                <a href="#">HOME</a>
                <a href="#">SHOP</a>
                <a href="#">BLOG</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT US</a>
            </div>
        </nav>
    )
}

export default Navbar