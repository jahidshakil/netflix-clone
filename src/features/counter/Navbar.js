import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  }

  return (
    <div className={isScrolled ? "nav-black" : 'nav'}>
        <nav className='nav-contents'>
        <img
          onClick={()=> navigate("/")}
          className='nav-logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png' alt='' />
        
        <img
          onClick={()=>navigate("/profile")}
          className='nav-avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='' />
         
          </nav>
          
    </div>
  )
}

export default Navbar