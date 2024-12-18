import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";
const Navigation = () => {
  return (
    <nav className="nav-wrap">
      <ul className="nav-list">
        <li className="nav-element">
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Główna
          </NavLink>
        </li>
        <li className="nav-element">
          <NavLink
            to="/a-to-co"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            A tu co?
          </NavLink>
        </li>
        <li className="nav-element">
          <NavLink
            to="/o-nikim"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            O nikim
          </NavLink>
        </li>
        <li className="nav-element">
          <NavLink
            to="/kontakt"
            style={({ isActive }) => ({
              fontWeight: isActive ? "bold" : "normal",
            })}
          >
            Kontakt?
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
