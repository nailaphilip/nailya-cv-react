import React from 'react';
import { useTranslation } from 'react-i18next';
import './Projects.css';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section className="projects-section">
      <h3 className="projects-title">{t('projects')}</h3>
      <ul className="projects-list">
        <li className="projects-item">
          <strong className="projects-name">
            <a
              href="https://haiku-app-five.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {t('project1')}
            </a>
          </strong>
          <div className="project-stack">Stack: Next.js, MongoDB, Node.js, Tailwind CSS, Cloudinary</div>
        </li>
        <li className="projects-item">
          <strong className="projects-name">
            <a
              href="https://event-manager-app-1-k956.onrender.com"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {t('project2')}
            </a>
          </strong>
          <div className="project-stack">Stack: React.js, CSS, JSON Server, Express.js, Multer</div>
        </li>
      </ul>
    </section>
  );
};

export default Projects;
