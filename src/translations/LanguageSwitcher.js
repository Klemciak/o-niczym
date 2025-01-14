import React from "react";
import { useLanguage } from "./LanguageContext";
import "./LanguageSwitcher.scss";
const LanguageSwitcher = () => {
  const { isPolish, toggleLanguage } = useLanguage();

  return (
    <button className="switcher" onClick={toggleLanguage}>
      <span className={`btn-language ${isPolish ? "active" : ""}`}>PL</span>/
      <span className={`btn-language ${!isPolish ? "active" : ""}`}>EN</span>
    </button>
  );
};

export default LanguageSwitcher;
