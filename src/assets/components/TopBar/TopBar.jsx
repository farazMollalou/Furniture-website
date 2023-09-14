import './TopBar.scss'
import { ImSearch } from 'react-icons/im'
import { PiHandbagLight } from 'react-icons/pi'
import { FiBell } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'

function TopBar() {
    return (
        <>
            <div className="top-bar">
                <div className="brand-box">
                    <img src="../../../../public/general_images/logo.png" alt="logo" />
                    <strong className='brand-name'>Soft Land</strong>
                </div>
                <div className="search-box">
                    <input type="text" placeholder='Search here' />
                    <select className="search-filter-select">
                        <option value="">Sofa</option>
                        <option value="">Lamp</option>
                        <option value="">TV</option>
                        <option value="">Kitchen</option>
                    </select>
                    <span className="search-btn"><ImSearch /></span>
                </div>
                <div className="user-icons-box">
                    <span className='user-icon'><span className='badge'>3</span><PiHandbagLight /></span>
                    <span className='user-icon'><FiBell /></span>
                    <span className='user-icon'><BiUser /></span>
                </div>
            </div>
        </>
    )
}

export default TopBar