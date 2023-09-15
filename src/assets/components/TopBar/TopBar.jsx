import './TopBar.scss'
import { ImSearch } from 'react-icons/im'
import { PiHandbagLight } from 'react-icons/pi'
import { FiBell } from 'react-icons/fi'
import { BiUser } from 'react-icons/bi'
import { FiArrowDownCircle } from 'react-icons/fi'
import { useState } from 'react'

function TopBar() {

    const [selectedCollection, setSelectedCollection] = useState("Sofa")
    const [selectListOpen, setSelectListOpen] = useState(false)

    return (
        <>
            <div className="top-bar">
                <div className="brand-box">
                    <img src="../../../../public/general_images/logo.png" alt="logo" />
                    <strong className='brand-name'>Soft Land</strong>
                </div>
                <div className="search-box">
                    <input type="text" placeholder='Search here' />
                    <div className="search-filter-select-box">
                        <span
                            className="selected-collection"
                            onMouseEnter={() => setSelectListOpen(true)}
                            onMouseLeave={() => setSelectListOpen(false)}
                        >
                            {selectedCollection} {<FiArrowDownCircle />}
                        </span>
                        <ul
                            className={`search-filter-select-list ${selectListOpen && "opened"}`}
                            onMouseLeave={() => setSelectListOpen(false)}
                            onMouseEnter={() => setSelectListOpen(true)}
                        >
                            <li className='filter-item' onClick={() => {setSelectedCollection("Sofa"); setSelectListOpen(false)}}>Sofa</li>
                            <li className='filter-item' onClick={() => {setSelectedCollection("Lamp"); setSelectListOpen(false)}}>Lamp</li>
                            <li className='filter-item' onClick={() => {setSelectedCollection("TV"); setSelectListOpen(false)}}>TV</li>
                            <li className='filter-item' onClick={() => {setSelectedCollection("Kitchen"); setSelectListOpen(false)}}>Kitchen</li>
                        </ul>
                    </div>
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