import React from 'react';
import '../styles/Experince.css';

const Experience = () => (
  <section id="experience" className="experience" data-aos="fade-up">
    <h2>Experience</h2>
    <ul>
      <li>
        <strong>AI Developer Intern</strong>, SOMEBODYMAKEIT AS, Oslo — Aug 2025 – Present
      </li>
      <li>
        <strong>Research Assistant</strong>, Oslo Metropolitan University — Mar 2024 – Jul 2025
        <div style={{ marginTop: "0.3em", marginBottom: "0.1em", marginLeft: "1.3em", lineHeight: "1.4" }}>
          <span style={{ display: "block" }}>
            - Collected and managed data for eye-gaze research; calibrated sensors and ensured data quality.
          </span>
          <span style={{ display: "block" }}>
            - Increased participant enrolment by 176% and improved follow-up/retention rates.
          </span>
        </div>
      </li>
      <li>
        <strong>Teacher Assistant</strong>, Oslo Metropolitan University — Aug 2024 – Dec 2024
        <div style={{ marginTop: "0.3em", marginBottom: "0.1em", marginLeft: "1.3em", lineHeight: "1.4" }}>
          <span style={{ display: "block" }}>
            - Taught lab sessions for Evolutionary Artificial Intelligence and Robotics.
          </span>
        </div>
      </li>
      <li>
        <strong>Co-owner & Marketing Manager</strong>, Gavazne Abi, Iran — Jan 2020 – Jul 2023
        <div style={{ marginTop: "0.3em", marginBottom: "0.1em", marginLeft: "1.3em", lineHeight: "1.4" }}>
          <span style={{ display: "block" }}>
            - Doubled sales via targeted digital marketing and content strategy.
          </span>
        </div>
      </li>
      <li>
        <strong>Freelance Content Writer & Translator</strong>, Isfahan — Apr 2020 – Nov 2020
        <div style={{ marginTop: "0.3em", marginBottom: "0.1em", marginLeft: "1.3em", lineHeight: "1.4" }}>
          <span style={{ display: "block" }}>
            - Produced and translated online content; contributed to blogs, articles, and product descriptions.
          </span>
        </div>
      </li>
      <li>
        <strong>Lab Assistant</strong>, University of Isfahan — Sep 2019 – Jul 2020
        <div style={{ marginTop: "0.3em", marginBottom: "0.1em", marginLeft: "1.3em", lineHeight: "1.4" }}>
          <span style={{ display: "block" }}>
            - Maintained lab computers; installed/troubleshot software for faculty needs.
          </span>
        </div>
      </li>
    </ul>
  </section>
);

export default Experience;
