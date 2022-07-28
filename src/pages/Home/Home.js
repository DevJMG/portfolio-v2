import React from 'react';
import './Home.css';
import { hero, profile, tools, passion, project, contact, footer } from './Data';
import { Hero, Profile, Tools, Passion, Project, Contact, Footer } from '../../components';

const Home = () => {
  return (
    <>
      <Hero {...hero} />
      <Profile {...profile} />
      <Tools {...tools} />
      <Passion {...passion} />
      <Project {...project} />
      <Contact {...contact} />
      <Footer {...footer} />
    </>
  );
};

export default Home;