/* eslint-disable react/prop-types */
import "./Footer.scss"
import { FaPinterestP, FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram, AiFillYoutube } from 'react-icons/ai'
import { RiThreadsLine } from 'react-icons/ri'

function Footer() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="footer-wave">
                <path fill="#EEE2DE" fillOpacity="1" d="M0,224L0,288L51.4,288L51.4,256L102.9,256L102.9,160L154.3,160L154.3,128L205.7,128L205.7,32L257.1,32L257.1,96L308.6,96L308.6,256L360,256L360,256L411.4,256L411.4,128L462.9,128L462.9,256L514.3,256L514.3,192L565.7,192L565.7,128L617.1,128L617.1,192L668.6,192L668.6,128L720,128L720,224L771.4,224L771.4,224L822.9,224L822.9,256L874.3,256L874.3,0L925.7,0L925.7,64L977.1,64L977.1,160L1028.6,160L1028.6,96L1080,96L1080,96L1131.4,96L1131.4,288L1182.9,288L1182.9,224L1234.3,224L1234.3,224L1285.7,224L1285.7,0L1337.1,0L1337.1,32L1388.6,32L1388.6,192L1440,192L1440,320L1388.6,320L1388.6,320L1337.1,320L1337.1,320L1285.7,320L1285.7,320L1234.3,320L1234.3,320L1182.9,320L1182.9,320L1131.4,320L1131.4,320L1080,320L1080,320L1028.6,320L1028.6,320L977.1,320L977.1,320L925.7,320L925.7,320L874.3,320L874.3,320L822.9,320L822.9,320L771.4,320L771.4,320L720,320L720,320L668.6,320L668.6,320L617.1,320L617.1,320L565.7,320L565.7,320L514.3,320L514.3,320L462.9,320L462.9,320L411.4,320L411.4,320L360,320L360,320L308.6,320L308.6,320L257.1,320L257.1,320L205.7,320L205.7,320L154.3,320L154.3,320L102.9,320L102.9,320L51.4,320L51.4,320L0,320L0,320Z"></path>
            </svg>

            <footer className="footer">
                <div className="footer-main-box">
                    <div className="about-us-column">
                        <div className="brand-box">
                            <img src="../../../../public/general_images/logo.png" alt="logo" />
                            <strong className='brand-name'>Soft Land</strong>
                        </div>
                        <div className="about-col-text">
                            Funking is the a popular Ecommerce site. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor!
                        </div>
                        <div className="social-media-icons-wrapper">
                            <AiFillYoutube className="youtube" />
                            <RiThreadsLine className="threads" />
                            <FaTelegramPlane className="telegram" />
                            <AiFillInstagram className="insta" />
                            <FaPinterestP className="pinterest" />
                        </div>
                    </div>
                    <FooterColumn
                        title={"Help"}
                        items={[
                            { name: "Privacy Policy", href: "#" },
                            { name: "Shipping & Delivery", href: "#" },
                            { name: "Refund Policy", href: "#" },
                            { name: "Track Your Order", href: "#" }
                        ]}
                    />
                    <FooterColumn
                        title={"Store"}
                        items={[
                            { name: "Furniture", href: "#" },
                            { name: "Table", href: "#" },
                            { name: "Sofa", href: "#" },
                            { name: "Other", href: "#" }
                        ]}
                    />
                    <FooterColumn
                        title={"Supports"}
                        items={[
                            { name: "Feedback", href: "#" },
                            { name: "Contact us", href: "#" },
                            { name: "Download app", href: "#" },
                            { name: "Terms conditions", href: "#" }
                        ]}
                    />
                </div>
                <div className="copy-right-wrapper">
                    <p className="copy-right-text">
                        © 2021 Funking - All rights reserved.
                    </p>
                    <div className="copy-right-links">
                        <a href="#">Privacy</a>
                        <a href="#">Security</a>
                        <a href="#">Terms</a>
                    </div>
                </div>
            </footer >
        </>
    )
}

const FooterColumn = ({ title, items }) => {
    return (
        <div className={`footer-column ${title}-column`}>
            <h5 className="footer-column-title">{title}</h5>
            {
                items.map((item, i) => (
                    <a href={item.href} key={i} className="footer-column-link">{item.name}</a>
                ))
            }
        </div>
    )
}

export default Footer