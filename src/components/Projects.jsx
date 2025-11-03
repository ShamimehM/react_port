import React, { useEffect, useState } from 'react';
import '../styles/Projects.css';
import { motion } from 'framer-motion';
import { resolveMediaPath } from '../utils/paths';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  const extractFirstUrl = (text) => {
    if (!text || typeof text !== 'string') return null;
    const match = text.match(/https?:\/\/[\w.-]+(?:\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?/i);
    return match ? match[0] : null;
  };

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error('Failed to load project data:', error));
  }, []);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = '';
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeProjectModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="project-grid">
        {projects.map((proj, idx) => (
          <motion.div
            className="project-card"
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            onClick={() => openProjectModal(proj)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter') openProjectModal(proj);
            }}
          >
            {proj.cover && (
              <div className="project-image">
                <img src={resolveMediaPath(proj.cover)} alt={`${proj.title} cover`} />
              </div>
            )}
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>

            {proj.techStack && (
              <div className="tech-tags">
                {proj.techStack.map((tech, i) => (
                  <span key={i} className="tag">{tech}</span>
                ))}
              </div>
            )}

            {/* Achievements moved to modal only */}

            {/* Removed in-card Visit Project button; links are in the modal only */}
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeProjectModal} aria-label="Close project details">
              ×
            </button>

            {selectedProject.cover && (
              <div className="modal-cover">
                <img src={resolveMediaPath(selectedProject.cover)} alt={`${selectedProject.title} cover`} />
              </div>
            )}

            <div className="modal-content">
              <h3>{selectedProject.title}</h3>
              <p className="modal-description">{selectedProject.description2 || selectedProject.description}</p>

              {selectedProject.achievements && (
                <ul className="achievement-list">
                  {selectedProject.achievements.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              )}

              {selectedProject.techStack && (
                <div className="tech-tags modal-tech">
                  {selectedProject.techStack.map((tech, i) => (
                    <span key={i} className="tag">{tech}</span>
                  ))}
                </div>
              )}

              <div className="modal-actions">
                {(() => {
                  const eventLink = selectedProject.eventLink || extractFirstUrl(selectedProject.readMore);
                  return eventLink ? (
                    <a
                      href={eventLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-btn"
                    >
                      Event
                    </a>
                  ) : null;
                })()}
                {selectedProject.link && (
                  <a
                    href={resolveMediaPath(selectedProject.link)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-btn outline"
                  >
                    Project
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
