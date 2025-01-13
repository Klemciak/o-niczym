import React from "react";
import "./Jokes.scss";
import archer from "../../../images/archer.jpg";
import landscape from "../../../images/landscape.jpg";
import neons from "../../../images/neons.jpg";
import monitors from "../../../images/monitors.jpg";
import team from "../../../images/team.jpg";
import { useTranslations } from "../../../translations/useTranslations";
const Jokes = () => {
  const t = useTranslations("home");
  return (
    <div className="jokes-wrap">
      <div className="joke">
        <img src={archer} alt="woman archer" />
        <h3>{t.joke1title}</h3>
        <p>{t.joke1text}</p>
      </div>
      <div className="joke">
        <img src={neons} alt="neons room" />
        <h3>{t.joke2title}</h3>
        <p>{t.joke2text}</p>
      </div>
      <div className="joke">
        <img src={landscape} alt="landscape" />
        <h3>{t.joke3title}</h3>
        <p>{t.joke3text}</p>
      </div>
      <div className="joke">
        <img src={monitors} alt="monitors room" />
        <h3>{t.joke4title}</h3>
        <p>{t.joke4text}</p>
      </div>
      <div className="joke">
        <img src={team} alt="company team" />
        <h3>{t.joke5title}</h3>
        <p>{t.joke5text}</p>
      </div>
    </div>
  );
};

export default Jokes;
