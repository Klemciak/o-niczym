import React from "react";
import "./Title.scss";
import { useTranslations } from "../../translations/useTranslations";
const Title = () => {
  const t = useTranslations("components");
  return (
    <div className="title-wrap">
      <h2>
        <span>ʕっ•ᴥ•ʔっ</span> {t.title} <span>¯\_(ツ)_/¯</span>
      </h2>
    </div>
  );
};

export default Title;
