import React from "react";
import "./Working.scss";
import hand from "../../../images/hand.png";
import { useTranslations } from "../../../translations/useTranslations";
const Working = () => {
  const t = useTranslations("what");
  return (
    <div className="working-wrap">
      <h2>
        {t.WorkingWork}
        <br />
        {t.WorkingIn}
        <br />
        {t.WorkingProgress}
      </h2>
      <img src={hand} alt="hand-stop" />
    </div>
  );
};

export default Working;
