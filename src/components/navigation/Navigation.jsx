import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
import { useTranslations } from "../../translations/useTranslations";
import LanguageSwitcher from "../../translations/LanguageSwitcher";
import Socialmedia from "../../pages/home/socialmedia/Socialmedia";
const Navigation = () => {
  const t = useTranslations("components");
  const [hamburger, setHamburger] = useState(false);
  const toggleHamburger = () => {
    setHamburger(!hamburger);
  };
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
    setHamburger(!hamburger);
  };
  return (
    <>
      <button
        className={`hamburger ${hamburger ? "active" : ""}`}
        onClick={toggleHamburger}
      >
        ☰
      </button>
      <LanguageSwitcher />
      <nav className={`nav-wrap ${hamburger ? "active" : ""}`}>
        <button className="hamburger-close" onClick={toggleHamburger}>
          &#x2715;
        </button>
        <ul className="nav-list">
          <li className="nav-element">
            <NavLink to="/" onClick={handleScrollToTop}>
              {t.navHome}
            </NavLink>
          </li>
          <li className="nav-element">
            <NavLink to="/what" onClick={handleScrollToTop}>
              {t.navWhat}
            </NavLink>
          </li>
          <li className="nav-element">
            <NavLink to="/about" onClick={handleScrollToTop}>
              {t.navAbout}
            </NavLink>
          </li>
          <li className="nav-element">
            <NavLink to="/contact" onClick={handleScrollToTop}>
              {t.navContact}
            </NavLink>
          </li>
        </ul>
        <div className="nav-socialmedia">
          <h3>Odwiedź nas na naszych socialmediach:</h3>
          <Socialmedia />
        </div>
      </nav>
    </>
  );
};

export default Navigation;
