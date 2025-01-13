import React from 'react';
import { useTranslation } from 'react-i18next';
import './Experience.css';

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="experience-section">
      <h3 className="experience-title">{t('experience')}</h3>
      <ul className="experience-list">
        <li className="experience-item">
          <h4 className="experience-role">{t('experienceRole1')}</h4>
          <p className="experience-description">{t('experienceDescription1')}</p>
        </li>
        <li className="experience-item">
          <h4 className="experience-role">{t('experienceRole2')}</h4>
          <p className="experience-description">{t('experienceDescription2')}</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
