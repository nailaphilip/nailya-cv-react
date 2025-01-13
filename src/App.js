import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import html2pdf from "html2pdf.js";
import "./App.css";
import i18n from "./i18n";
import Education from "./Components/Education";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Languages from "./Components/Languages";

const App = () => {
  const { t, i18n } = useTranslation();
  const componentRef = useRef();

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === "en" ? "fi" : "en";
    i18n.changeLanguage(newLanguage);
  };

  const downloadPDF = () => {
    const element = document.getElementById("cv");
  
    // Add the 'print-mode' class
    element.classList.add("print-mode");
  
    // Generate the PDF
    const options = {
      margin: [0.5, 0.5], // Adjust margins in inches
      filename: "Nailya-cv.pdf",
      html2canvas: { scale: 2 }, // Higher scale for better quality
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
  
    html2pdf()
      .set(options)
      .from(element)
      .save()
      .finally(() => {
        // Remove the 'print-mode' class after PDF generation
        element.classList.remove("print-mode");
      });
  };
  

  return (
    <div className="cv-container">
      <header className="header">
        <div className="language-switcher">
          <button onClick={toggleLanguage}>English</button>
          <button onClick={toggleLanguage}>Suomi</button>
        </div>
      </header>

      <div className="cv-grid" id="cv">
        <div className="cv-left">
          <div className="profile-photo">
            <img src={`${process.env.PUBLIC_URL}/photoNailya.jpg`} alt="Nailya Philippova" className="photo" />
          </div>
          <h1>Nailya Philippova</h1>
          <h2>{t("title")}</h2>
          <Contact />
          <Skills />
          <Languages />
        </div>

        <div className="cv-right">
          <Education />
          <Projects />
          <Experience />
        </div>
      </div>

      <footer>
        <button onClick={downloadPDF}>{t("downloadCV")}</button>
      </footer>
    </div>
  );
};

export default App;
