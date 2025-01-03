import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
const Navigation = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0 });
  };
  return (
    <nav className="nav-wrap">
      <ul className="nav-list">
        <li className="nav-element">
          <NavLink to="/" onClick={handleScrollToTop}>
            Główna
          </NavLink>
        </li>
        <li className="nav-element">
          <NavLink to="/what" onClick={handleScrollToTop}>
            A tu co?
          </NavLink>
        </li>
        <li className="nav-element">
          <NavLink to="/about" onClick={handleScrollToTop}>
            O nikim
          </NavLink>
        </li>
        <li className="nav-element">
          <NavLink to="/contact" onClick={handleScrollToTop}>
            Kontakt?
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
