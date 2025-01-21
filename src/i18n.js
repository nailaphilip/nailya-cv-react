import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


const resources = {
    en: {
      translation: {
        title: "Web Developer & Linguist",
        education: "Education",
        educationDegree1: "Fullstack developer - Helsinki Business College 2024",
        educationDegree2: "Master's in Linguistics - Middlesex University 2010",
        projects: "Projects",
        project1: "Haiku App",
        project2: "Event Manager App",
        experience: "Experience",
        experienceRole1: "Translation Consultant | 2021 - present",
        experienceDescription1: 'Provide expert consultation on translation projects to ensure high-quality, user-friendly, and accessible content.',
        experienceRole2: "Postgraduate Researcher | University of Helsinki | 2015 - 2020",
        experienceDescription2: 'Designed and implemented qualitative and quantitative studies to analyse linguistic data.',
        skills: "Skills",
        skill1: "ReactJS & JavaScript",
        skill2: "Web Development (HTML, CSS)",
        skill3: "Translation and Linguistics",
        downloadCV: "Download CV as PDF",
      },
    },
    fi: {
      translation: {
        title: "Verkkokehittäjä & Kielitieteilijä",
        education: "Koulutus",
        educationDegree1: "Fullstack-kehittäjä - Helsinki Business College 2024",
        educationDegree2: "Maisterin tutkinto kielitieteessä - Middlesex University 2010",
        projects: "Projektit",
        project1: "Haiku App",
        project2: "Event Manager App",
        experience: "Työkokemus",
        experience1: "Käännöskonsultti | 2021 - nykyinen",
        experienceDescription1: "Asiantuntijaneuvonta käännösprojekteista korkealaatuisen, käyttäjäystävällisen ja saavutettavan sisällön varmistamiseksi.",
        experience2: "Jatkotutkija | Helsingin yliopisto | 2015-2020",
        experienceDescription2: "Suunniteltu ja toteutettu kvalitatiivisia ja kvantitatiivisia tutkimuksia kielellisen tiedon analysoimiseksi.",
        skills: "Taidot",
        skill1: "ReactJS & JavaScript",
        skill2: "Verkkokehitys (HTML, CSS)",
        skill3: "Käännös ja kielitiede",
        downloadCV: "Lataa CV PDF-muodossa",
      },
    },
  };

  i18n.use(initReactI18next).init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
  
  export default i18n;
  