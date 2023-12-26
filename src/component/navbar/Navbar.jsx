import React, { useRef } from 'react'
import logo from '../../assets/images/image 1.png'
import { NavLink } from 'react-router-dom'
export default function Navbar() {

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle(
      "responsive_nav"
    );
  };

  return (

    <header>
      <NavLink to='/'><img src={logo} alt="" /></NavLink>
      <nav ref={navRef}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/certificates">Our Services</NavLink>
        <NavLink to="/newsPaper">Colleges</NavLink>
        <NavLink to="/donate">Study Abroad</NavLink>
        <NavLink to="/donate">Notice Board</NavLink>
        <NavLink to="/donate">Blog</NavLink>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}>
          <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path fill="#ffffff" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" /></svg>
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={showNavbar}>
        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
      </button>
    </header>
  )
}
