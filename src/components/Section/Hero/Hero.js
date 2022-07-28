import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Button } from '../../SubComponents/Button/Button';

const Hero = ({
  hero_intro,
  hero_name,
  hero_description,
  hero_btn_path,
  hero_btn_size,
  hero_btn_color,
  hero_btn_text,
  hero_btn_type,
  hero_btn_icon,
  hero_cta_path,
  hero_cta_size,
  hero_cta_color,
  hero_cta_text,
  hero_cta_type,
  hero_cta_icon,
  hero_icon_gitHub,
  hero_icon_linkedIn
}) => {
  return (
    <>
      <section id='hero--section' className='hero'>
        <div className='hero--container container'>
          <div className='hero--row'>
            <div className='hero--social--icon'>
              <a href={hero_icon_gitHub} target='_blank' rel="noreferrer"><FaGithub size={28} /></a>
              <a href={hero_icon_linkedIn} target='_blank' rel="noreferrer"><FaLinkedin size={28} /></a>
            </div>
            <div className='hero--text--wrapper'>
              <p className='hero--top--line'>{hero_intro}</p>
              <h1 className='hero--heading'>{hero_name}</h1>
              <p className='hero--sub--title'>
                {hero_description}
              </p>
            </div>
            <div className='hero--btn'>
              <Link to={hero_btn_path} spy={true} smooth={true} offset={-64} duration={500}>
                <Button
                  buttonSize={hero_btn_size}
                  buttonColor={hero_btn_color}
                  text={hero_btn_text}
                  type={hero_btn_type}
                  icon={hero_btn_icon}
                >
                </Button>
              </Link>
            </div>
          </div>
          <div className='hero--call--to--action'>
            <Link to={hero_cta_path} spy={true} smooth={true} offset={-64} duration={500}>
              <Button
                buttonSize={hero_cta_size}
                buttonColor={hero_cta_color}
                text={hero_cta_text}
                type={hero_cta_type}
                icon={hero_cta_icon}
              >
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
