import React , {useState, useEffect}from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { resolveMediaPath } from '../utils/paths';


const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn" aria-label="Toggle theme">
          {darkMode ? '🌞' : '🌙'}
        </button>
        <div className="navbar-brand rochester-regular">Shamim M. Nav</div>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><Link to="/forest">Forest</Link></li>
          <li><Link to="/contact" className="cta-button nav-cv">Contact</Link></li>
          <li><a href={resolveMediaPath('/api/media/documents/CV-Shamimeh.pdf')} download>CV</a></li>
        </ul>

      </div>
    </nav>
  );
};

export default Navbar;
