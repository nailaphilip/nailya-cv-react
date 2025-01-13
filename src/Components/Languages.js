import React from "react";
import "./Languages.css"; // Add a separate CSS file for languages

const Languages = () => {
  const languages = [
    { name: "English", level: 5 }, // Advanced
    { name: "Finnish", level: 3 }, // Intermediate
    { name: "Russian", level: 5 }, // Advanced
    { name: "Tatar", level: 5 },   // Native
  ];

  return (
    <section className="languages-section">
      <h3 className="languages-title">Languages</h3>
      <ul className="languages-list">
        {languages.map((language, index) => (
          <li key={index} className="languages-item">
            <span className="language-name">{language.name}</span>
            <span className="language-dots">
              {Array(5)
                .fill(null)
                .map((_, dotIndex) => (
                  <span
                    key={dotIndex}
                    className={`dot ${dotIndex < language.level ? "filled" : ""}`}
                  ></span>
                ))}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Languages;
