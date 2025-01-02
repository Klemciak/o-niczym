import React from "react";
import Description from "./description/Description.jsx";
import Coatings from "./coatings/Coatings.jsx";
import Persons from "./persons/Persons.jsx";
const About = () => {
  return (
    <div className="about-wrap">
      <Description />
      <Coatings />
      <Persons />
    </div>
  );
};

export default About;
