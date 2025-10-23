// Portfolio.jsx
import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certfications';
import Contact from './components/Contact';
 
const Portfolio = () => (
  <div>
    <Hero />
    <About />
    <Education />
    <Experience />
    <Skills />
    <Projects />
    <Certifications />
    <Contact />
  </div>
);

export default Portfolio;
