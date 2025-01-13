import React from "react";
import "./Extend.scss";
import { useTranslations } from "../../../translations/useTranslations";
const Extend = () => {
  const t = useTranslations("home");
  return (
    <div className="extend-wrap">
      <h2>{t.extendBefore}</h2>
      <div className="extend-img">
        <div className="extend1">
          <div className="cover"></div>
        </div>
        <div className="extend2">
          <div className="cover"></div>
        </div>
        <div className="extend3">
          <div className="cover"></div>
        </div>
        <div className="extend4">
          <div className="cover"></div>
        </div>
      </div>
      <h2>{t.extendAfter}</h2>
    </div>
  );
};

export default Extend;
