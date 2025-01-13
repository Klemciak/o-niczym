import React from "react";
import { useLanguage } from "./LanguageContext";

const LanguageSwitcher = () => {
  const { isPolish, toggleLanguage } = useLanguage();

  return (
    <button onClick={toggleLanguage}>
      <span className={`btn-language ${isPolish ? "active" : ""}`}>PL</span>/
      <span className={`btn-language ${!isPolish ? "active" : ""}`}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
