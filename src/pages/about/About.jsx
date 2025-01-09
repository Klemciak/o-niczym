import React, { useEffect } from "react";
import Description from "./description/Description.jsx";
import Coatings from "./coatings/Coatings.jsx";
import Persons from "./persons/Persons.jsx";
import "aos/dist/aos.css";
import AOS from "aos";
const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 300,
      once: true,
    });
  }, []);
  return (
    <div className="about-wrap">
      <Description />
      <Coatings />
      <div data-aos="fade-up">
        <Persons />
      </div>
    </div>
  );
};

export default About;
