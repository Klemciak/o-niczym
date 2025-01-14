import React from "react";
import "./Footer.scss";
import { useTranslations } from "../../translations/useTranslations";
const Footer = () => {
  const t = useTranslations("components");
  return (
    <div className="footer-wrap">
      <h3>
        &#169; {t.footerCopyright} <br /> {t.footerInfo}
      </h3>
    </div>
  );
};

export default Footer;
