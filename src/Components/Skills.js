import React from "react";
import { useTranslation } from "react-i18next";
import "./Skills.css";

const Skills = () => {
  const { t } = useTranslation();

  const skills = [
    { name: "React", level: 5 },
    { name: "JavaScript", level: 5 },
    { name: "Next.js", level: 5 },
    { name: "CSS", level: 5 },
    { name: "Docker", level: 4 },
    { name: "MariaDB", level: 4 },
    { name: "Drupal", level: 4 },
    { name: "Tailwind", level: 4 },
    { name: "PHP", level: 3 },
    { name: "Python", level: 3 },
  ];

  return (
    <section className="skills-section-compact">
      <h3 className="skills-title">{t("skills")}</h3>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skills-item">
            <span className="skill-name">{skill.name}</span>
            <span className="skill-dots">
              {Array(5)
                .fill(null)
                .map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`dot ${dotIndex < skill.level ? "filled" : ""}`}
                  ></span>
                ))}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
