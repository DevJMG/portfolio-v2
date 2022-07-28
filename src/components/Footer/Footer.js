import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({
  footer_link1,
  footer_icon1,
  footer_link2,
  footer_icon2
}) => {
  return (
    <div className='footer'>
        <div className="footer--wrapper container">
            <p className='website--rights'>© JN<p>ML</p> 2022</p>
            <span className='social--media'>
              <a href={footer_link1} target='_blank' rel='noreferrer'>{footer_icon1}</a>
              <a href={footer_link2} target='_blank' rel="noreferrer">{footer_icon2}</a>
            </span>
        </div>
    </div>
  );
};

export default Footer;