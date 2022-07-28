import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { HiX, HiMenu } from 'react-icons/hi';
// import { ImSun } from 'react-icons/im';
// import { BsFillMoonStarsFill } from 'react-icons/bs';
import { Button } from '../SubComponents/Button/Button';

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
            {nav ? <HiMenu /> : <HiX /> }
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
            {/* <li className='nav--item--btn'>
              <LinkR to='/' className='nav--btn--link' spy={true} smooth={true} offset={-64} duration={500}>
              <Button
                  buttonSize='btn--md'
                  buttonColor='btn--primary'
                  text='DOWNLOAD CV'
                  type='submit'
                  icon={<ImSun size={20} />}
                >
                </Button>
              </LinkR>
            </li> */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;