import React, { useEffect, useState } from 'react';
import '../styles/Experince.css';

const Experience = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('/experience.json')
      .then((res) => res.json())
      .then((data) => setItems(Array.isArray(data) ? data : []))
      .catch(() => setItems([]));
  }, []);

  const formatMonth = (ym) => {
    if (!ym || ym === 'Present') return 'Present';
    const [year, month] = ym.split('-');
    const names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const idx = Math.max(0, Math.min(11, parseInt(month, 10) - 1));
    return `${names[idx]} ${year}`;
  };

  const formatPeriod = (start, end) => {
    const endStr = end === 'Present' ? 'Present' : formatMonth(end);
    return `${formatMonth(start)} – ${endStr}`;
  };

  return (
    <section id="experience" className="experience" data-aos="fade-up">
      <h2>Experience</h2>
      <ul>
        {items.map((item) => (
          <li key={`${item.company}-${item.roleTitle}-${item.start}`}>
            <strong>{item.roleTitle}</strong>, {item.company}, {item.location} — {formatPeriod(item.start, item.end)}
            {item.bullets && item.bullets.length > 0 && (
              <div style={{ marginTop: "0.3em", marginBottom: "0.1em", marginLeft: "1.3em", lineHeight: "1.4" }}>
                {item.bullets.map((b, idx) => (
                  <span style={{ display: "block" }} key={idx}>
                    - {b}
                  </span>
                ))}
              </div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
