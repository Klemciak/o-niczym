import React from "react";
import "./Coatings.scss";
import { useTranslations } from "../../../translations/useTranslations";
const Coatings = () => {
  const t = useTranslations("about");
  return (
    <div className="coatings-wrap">
      <p>{t.coatingsP1}</p>
      <p>{t.coatingsP2}</p>
      <p>{t.coatingsP3}</p>
      <p>{t.coatingsP4}</p>
    </div>
  );
};

export default Coatings;
