import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "./slider/Slider";
import Jokes from "./jokes/Jokes";
import Extend from "./extend/Extend";
import Bait from "./bait/Bait";
import Socialmedia from "./socialmedia/Socialmedia";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 300,
      once: true,
    });
  }, []);

  return (
    <div className="wrap-home">
      <Slider />
      <div data-aos="fade-up" data-aos-offset="100">
        <Jokes />
      </div>
      <div data-aos="fade-down">
        <Extend />
      </div>
      <div data-aos="fade-right">
        <Bait />
      </div>
      <div data-aos="fade-up">
        <Socialmedia />
      </div>
    </div>
  );
};

export default Home;
