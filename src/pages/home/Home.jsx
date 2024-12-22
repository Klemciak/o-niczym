import React from "react";
import "./Home.scss";
import Slider from "./slider/Slider";
import Jokes from "./jokes/Jokes";
import Extend from "./extend/Extend";
const Home = () => {
  return (
    <div className="wrap-home">
      <Slider />
      <Jokes />
      <Extend />
    </div>
  );
};

export default Home;
