import React from "react";
import "./Slides.scss";
import { useTranslations } from "../../../../translations/useTranslations";
const Slide1 = () => {
  const t = useTranslations("home");
  return (
    <div className="slide-text first">
      <h2>{t.slide1Title}</h2>
      <p>{t.slide1Text}</p>
    </div>
  );
};

export default Slide1;
