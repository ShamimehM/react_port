import React from 'react';
import '../styles/About.css';


const About = () => (
  <section id="about" className="about">
    <h2>About Me</h2>
    <div className="about-layout">
      <div className="about-photo-wrap">
        <img src="/api/media/media/2.jpg" alt="Profile" className="about-photo" />
      </div>
      <div className="about-text">
        <p>
          I’m Shamim, a researcher and AI developer based in Norway. My work centers on building trustworthy, human-centered AI—
          with experience across machine learning, deep learning, and data-driven experimentation.
        </p>
        <p>
          I’ve completed an MSc in Applied AI at OsloMet, where I explored EEG and eye‑tracking for biometric authentication, for my thesis. I also developed NeRF‑based 3D
          reconstruction pipelines, worked on optimization problems and contributed to applied projects from health-tech to education. I enjoy turning complex ideas into rigorous, practical systems.
        </p>
        <p>
        Over the years, I’ve worn many hats—from co-owning a small business to content creation, social media management, and assisting in computer labs. 
        Each role taught me the value of teamwork and the impact of small, well-optimized details. Whether it’s refining code, perfecting a DIY project, or crafting 
        the right message for an audience, I believe in getting things just right.
        </p>
        <p>
          Multilingual and collaborative, I value clarity, analysis, and iteration. I’m excited to keep building AI that is reliable, explainable, and useful. I believe in the power of AI to transform industries and improve lives.
        </p>
      </div>
    </div>
  </section>
);


export default About;
