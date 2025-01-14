import React from "react";
import "./Description.scss";
import team from "../../../images/teamAbout.png";
import building from "../../../images/building.png";
import { useTranslations } from "../../../translations/useTranslations";
const Description = () => {
  const t = useTranslations("about");
  return (
    <div className="description-wrap">
      <div className="team">
        <div className="team-text">
          <h3>{t.teamTitle}</h3>
          <p>{t.teamText}</p>
          <h4>{t.teamAfter}</h4>
        </div>
        <img src={team} alt="company team" className="team-img" />
      </div>
      <div className="building">
        <img src={building} alt="company building" className="building-img" />
        <div className="building-text">
          <h3>{t.buildingTitle}</h3>
          <p>{t.buildingText}</p>
          <h4>{t.buildingAfter}</h4>
        </div>
      </div>
    </div>
  );
};

export default Description;
