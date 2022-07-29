import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { HiX, HiMenu } from 'react-icons/hi';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const closeMobileMenu = () => setNav(true);

  const [navBar, setNavBar] = useState(false);
  const changeNavBackground = () => {
    if (window.scrollY >= 64) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  }
  window.addEventListener('scroll', changeNavBackground);

  return (
    <>
      <nav className={`nav ${navBar ? 'active' : ''}`}>
        <div className='navbar--container container'>
          <Link to='hero--section' className='nav--logo' onClick={closeMobileMenu} spy={true} smooth={true} offset={-64} duration={500}>
            JN<span className='icon--sep'>ML</span>
          </Link>
          <div className='mobile--icon' onClick={handleNav}>
            {nav ? <HiMenu /> : <HiX />}
          </div>
          <ul className={`nav--menu ${!nav ? 'l--0' : 'l--100'}`}>
            <li className='nav--item'>
              <Link to='profile--section' className='nav--link' onClick={closeMobileMenu} spy={true} smooth={true} offset={-64} duration={500}>
                About
              </Link>
            </li>
            <li className='nav--item'>
              <Link to='project--section' className='nav--link' onClick={closeMobileMenu} spy={true} smooth={true} offset={-64} duration={500}>
                Project
              </Link>
            </li>
            <li className='nav--item'>
              <Link to='contact--section' className='nav--link' onClick={closeMobileMenu} spy={true} smooth={true} offset={-64} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Link to='hero--section' spy={true} smooth={true} offset={-64} duration={500} onClick={closeMobileMenu}>
        <span className={`scroll--up ${navBar ? 'block' : 'hidden'}`}>
          <AiOutlineArrowUp size={30} />
        </span>
      </Link>
    </>
  );
};

export default Navbar;