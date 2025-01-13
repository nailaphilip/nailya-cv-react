import React from 'react';
import { useTranslation } from 'react-i18next';
import './Education.css';

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="education-section">
      <h3 className="education-title">{t('education')}</h3>
      <ul className="education-list">
        <li className="education-item">{t('educationDegree1')}</li>
        <li className="education-item">{t('educationDegree2')}</li>
      </ul>
    </section>
  );
};

export default Education;
