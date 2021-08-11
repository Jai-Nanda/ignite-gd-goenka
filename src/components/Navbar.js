import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from '../static/logo.PNG'
const Navbar = () => {
    const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav>
                <div className="logo"><Link to="/"><img src={Logo} alt="logo" className="logo" onClick={closeMobileMenu} /></Link></div>
                 <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div> 
                <ul className={click ? 'nav-menu active' : 'nav-links'}>
                <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>
                <li><Link to="/cities" onClick={closeMobileMenu}>Cities</Link></li>
                <li><Link to="/monuments" onClick={closeMobileMenu}>Monuments</Link></li>
                <li><Link to="/blog" onClick={closeMobileMenu}>Blog</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
