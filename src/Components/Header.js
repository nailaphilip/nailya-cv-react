import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header className="text-center">
      <img
        src="your-photo-url.jpg" // Replace with your actual photo URL
        alt="Nailya Philippova"
        className="w-32 h-32 rounded-full mx-auto mb-4"
      />
      <h1 className="text-4xl font-bold">{t("name")}</h1>
      <h2 className="text-xl">{t("title")}</h2>
      <p>{t("email")}</p>
      <p>{t("linkedin")}</p>
      <p>
      <a
  href="https://github.com/your-username"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-500 hover:text-blue-700 hover:underline"
>
  GitHub: github.com/your-username
</a>

      </p>
    </header>
  );
};

export default Header;
