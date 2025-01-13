import React from "react";
import "./Slides.scss";
import { useTranslations } from "../../../../translations/useTranslations";
const Slide2 = () => {
  const t = useTranslations("home");
  return (
    <div className="slide-text second">
      <h2>{t.slide2Title}</h2>
      <p>{t.slide2Text}</p>
    </div>
  );
};

export default Slide2;
