import React from 'react';
import '../styles/Contact.css';
import { Link } from 'react-router-dom';
import { resolveMediaPath } from '../utils/paths';
// add icons for linkedin and github 
// darkmood icon for the page, the colors don't work
// linkin post links 

const Contact = () => (
  <section id="contact" className="contact" data-aos="fade-up">
    <div className="contact-grid">
      <div className="contact-title">
        <h2>Contact</h2>
      </div>

      <div className="contact-left">
        <p><strong>Name:</strong> Shamimeh Mohajeri Nav</p>
        <p><strong>Email:</strong> <a className="contact-email" href="mailto:shamimehmohajeri@gmail.com">shamimehmohajeri@gmail.com</a></p>
        <p><strong>Location:</strong> Norway</p>
      </div>

      <div className="contact-right">
        <div className="contact-icons">
          <div className="icon-item">
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/Shamimeh-MN"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
              aria-label="LinkedIn"
            >
              {/* LinkedIn icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M4.983 3.5C4.983 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.483 1.12 2.483 2.5zM.3 8.25h4.4V23.5H.3V8.25zM8.1 8.25h4.215v2.081h.06c.587-1.112 2.022-2.285 4.162-2.285 4.454 0 5.275 2.933 5.275 6.748V23.5h-4.4v-6.63c0-1.58-.028-3.612-2.2-3.612-2.2 0-2.535 1.72-2.535 3.5V23.5H8.1V8.25z"/>
              </svg>
            </a>
            <span className="icon-label">LinkedIn</span>
          </div>

          <div className="icon-item">
            <a
              className="icon-link"
              href="https://github.com/ShamimehM"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub"
            >
              {/* GitHub icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.1c-3.22.7-3.9-1.39-3.9-1.39-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.11-.76.41-1.27.75-1.56-2.57-.29-5.28-1.29-5.28-5.75 0-1.27.46-2.31 1.21-3.13-.12-.3-.52-1.5.12-3.13 0 0 .98-.31 3.2 1.19a11 11 0 0 1 5.82 0c2.22-1.5 3.2-1.19 3.2-1.19.64 1.63.24 2.83.12 3.13.75.82 1.21 1.86 1.21 3.13 0 4.47-2.71 5.46-5.29 5.74.42.36.8 1.07.8 2.16v3.2c0 .31.2.68.8.56A11.5 11.5 0 0 0 12 .5Z"/>
              </svg>
            </a>
            <span className="icon-label">GitHub</span>
          </div>

          <div className="icon-item">
            <a
              className="icon-link"
              href={resolveMediaPath('/api/media/documents/CV-Shamimeh.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              download
              title="Download CV (PDF)"
              aria-label="Download CV (PDF)"
            >
              {/* File/Download icon */}
              <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true">
                <path fill="currentColor" d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6Zm1 7H8V4h6v5Zm-1 7h-2v-4h-2l3-3 3 3h-2v4Z"/>
              </svg>
            </a>
            <span className="icon-label">CV</span>
          </div>
        </div>
      </div>
    </div>

    <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Link to="/contact" className="cta-button">Contact Me</Link>
      <Link to="/communication-preferences" className="cta-button" aria-label="Read my communication preferences">Communication Preferences</Link>
    </div>

    <div className="github-widget">
      <h3>My GitHub Activity</h3>
      <a href="https://github.com/ShamimehM" target="_blank" rel="noreferrer">
        <img src="https://ghchart.rshah.org/ShamimehM" alt="GitHub Contributions" />
      </a>
    </div>

  </section>
);

export default Contact;
