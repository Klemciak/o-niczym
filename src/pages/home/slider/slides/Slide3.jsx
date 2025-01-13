import React from "react";
import "./Slides.scss";
import { useTranslations } from "../../../../translations/useTranslations";
const Slide3 = () => {
  const t = useTranslations("home");
  return (
    <div className="slide-text third">
      <h2>{t.slide3Title}</h2>
      <p>{t.slide3Text}</p>
    </div>
  );
};

export default Slide3;
