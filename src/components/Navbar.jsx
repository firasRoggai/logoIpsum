import { useState } from 'react'

// assets
import logo from '../assets/img/icons/logo.svg'
import inboxIcon from '../assets/img/icons/inboxIcon.svg'
import menuIcon from '../assets/img/icons/menuIcon.png'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }
    const mobileMenu = () => {
        return (
            <div className='mobile-menu'>
                <div onClick={toggle} className="mobile-menu__exit">
                    X
                </div>
                <h1>Menu</h1>
            </div>

        )
    }
    const navbarList = [
        { name: "Home", link: "#" },
        { name: "About", link: "#" },
        { name: "Contact", link: "#" },
        { name: "Blog", link: "#" }
    ]
    return (
        <nav>
            <div className="logo-container">
                <img className='logo' src={logo} alt="" srcSet="" />
            </div>
            <div className="nav__items-container">
                <ul className='nav__items'>
                    {navbarList.map(item => {
                        return (
                            <li key={item.name} className='nav__item'>
                                <a href={item.link}>{item.name}</a>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="nav__shopping-icon">
                <a href="http://">
                    <img src={inboxIcon} alt="" srcSet="" />
                </a>
            </div>
            <div className="mobile-menu__open">
                <img src={menuIcon} onClick={toggle} />
            </div>
            {isOpen && mobileMenu()}
        </nav>
    );
}

export default Navbar;