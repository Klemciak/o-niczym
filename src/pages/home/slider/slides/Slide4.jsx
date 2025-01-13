import React from "react";
import "./Slides.scss";
import { useTranslations } from "../../../../translations/useTranslations";
const Slide4 = () => {
  const t = useTranslations("home");
  return (
    <div className="slide-text fourth">
      <h2>{t.slide4Title}</h2>
      <p>{t.slide4Text}</p>
    </div>
  );
};

export default Slide4;
