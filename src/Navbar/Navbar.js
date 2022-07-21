import React, { useState } from 'react'
import './Navbar.css'

import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className='Navbar'>
            <span className='nav-logo'>LautyDev</span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href='/home'>Home</a>
                <a href='/about'>Sobre mí</a>
                <a href='/contact'>Contacto</a>
            </div>
            <CartWidget/>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    )
}

export default Navbar