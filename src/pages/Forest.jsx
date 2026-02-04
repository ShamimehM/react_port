import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Forest.css';
import { supabase } from '../utils/supabaseClient';

export default function Forest() {
  const navigate = useNavigate();

  const [crochetProjects, setCrochetProjects] = useState([]);
  const [loadingProjects, setLoadingProjects] = useState(true);
  const [projectsError, setProjectsError] = useState(null);

  useEffect(() => {
    const fetchCrochetProjects = async () => {
      try {
        if (!supabase) {
          setProjectsError(
            'Crochet projects are temporarily unavailable. (Supabase is not configured yet.)'
          );
          setLoadingProjects(false);
          return;
        }

        const { data, error } = await supabase
          .from('crochet_projects')
          .select('id, title, description, image_url')
          .eq('is_public', true)
          .order('created_at', { ascending: false });

        if (error) {
          throw error;
        }

        setCrochetProjects(data || []);
      } catch (err) {
        setProjectsError(err.message || 'Could not load crochet projects.');
      } finally {
        setLoadingProjects(false);
      }
    };

    fetchCrochetProjects();
  }, []);

  return (
    <div className="forest-scroll">
      {/* First “hero” forest section */}
      <section className="forest-page forest-page--hero">
        <div className="forest-overlay">
          <div className="bird-container">
            <div className="bird"><img src="/1183753-200.png" alt="bird" /></div>
          </div>

          <div className="forest-content">
            <p> 👋 Hi, I'm Shamim.  </p>
            <h1>Welcome to my forest 🍃</h1>
            <p>
              This is the part of me you don’t see on my CV — where my roots grow wild.
            </p>

            <div className="forest-fun">
              <p>✨ Work in progress 🌱</p>
              <ul>
                <li>weight training in gym </li>
                <li>reading books</li>
                <li>learning new things</li> 
              </ul>
            </div>

            <p style={{ marginTop: '2rem', fontStyle: 'italic' }}>
              Scroll down to walk deeper into the forest and see my crochet projects.
            </p>

            <button className="back-btn" onClick={() => navigate('/')}>← Back to Portfolio</button>
          </div>

          <div className="forest-bottom">
            <span style={{ marginRight: 'auto' }}>
              <img src="/Mushroom1.png" alt="Mushroom" />
            </span>
            <span style={{ marginLeft: 'auto' }}>
              <img src="/Mushroom3.png" alt="Mushroom" />
            </span>
          </div>
        </div>
      </section>

      {/* Second “zoomed” forest section with crochet projects */}
      <section className="forest-page forest-page--crochet">
        <div className="forest-overlay">
          <div className="forest-content">
            <section className="crochet-section" aria-label="Crochet projects">
              <h2 className="crochet-title">Crochet Projects</h2>
              <p className="crochet-subtitle">
                A little gallery of things I’m making by hand.
              </p>

              {projectsError && (
                <p style={{ color: '#ffb3b3', marginBottom: '1rem' }}>
                  {projectsError}
                </p>
              )}

              {loadingProjects ? (
                <p>Loading crochet projects…</p>
              ) : crochetProjects.length === 0 ? (
                <div className="crochet-placeholder" role="img" aria-label="Crochet project placeholder">
                  <div className="crochet-placeholder-inner">
                    <div className="crochet-placeholder-title">Add your crochet photos</div>
                    <div className="crochet-placeholder-note">
                      Add rows in the Supabase <code>crochet_projects</code> table with image URLs in <code>/public/crochet/</code>.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="crochet-grid">
                  {crochetProjects.map((p) => (
                    <figure className="crochet-card" key={p.id}>
                      {p.image_url ? (
                        <img src={p.image_url} alt={p.title} loading="lazy" />
                      ) : (
                        <div className="crochet-placeholder" role="img" aria-label="Crochet project placeholder">
                          <div className="crochet-placeholder-inner">
                            <div className="crochet-placeholder-title">{p.title}</div>
                            {p.description ? (
                              <div className="crochet-placeholder-note">{p.description}</div>
                            ) : null}
                          </div>
                        </div>
                      )}
                      <figcaption className="crochet-caption">
                        {p.title}
                        {p.description ? ` — ${p.description}` : ''}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}


